<?php

require dirname(__DIR__) . '/bootstrap.php';

$app = require CRAFT_VENDOR_PATH . '/craftcms/cms/bootstrap/console.php';

use craft\elements\Asset;
use craft\elements\Category;
use craft\elements\Entry;
use craft\helpers\DateTimeHelper;

echo "=== Importing CraftCMS Data ===\n\n";

// --- IMPORT ASSETS (blog images) ---
echo "--- Blog Images ---\n";
$blogVolume = Craft::$app->getVolumes()->getVolumeByHandle('blogImages');
if (!$blogVolume) { echo "ERROR: blogImages volume not found\n"; exit(1); }
$blogFolder = Craft::$app->getAssets()->getRootFolderByVolumeId($blogVolume->id);

$blogImagesJson = json_decode(file_get_contents('/srv/data/objekty.json'), true);
$blogAssetMap = []; // old_id => new_id

foreach ($blogImagesJson as $img) {
    $filePath = dirname(__DIR__) . '/web/assets/images/blog/' . $img['filename'];
    if (!file_exists($filePath)) { echo "SKIP {$img['filename']} (file not found)\n"; continue; }

    // Check if already exists
    $existing = Asset::find()->volumeId($blogVolume->id)->filename($img['filename'])->one();
    if ($existing) {
        $blogAssetMap[$img['id']] = $existing->id;
        echo "EXISTS {$img['filename']} (id={$existing->id})\n";
        continue;
    }

    $asset = new Asset();
    $asset->tempFilePath = $filePath;
    $asset->setFilename($img['filename']);
    $asset->newFolderId = $blogFolder->id;
    $asset->setVolumeId($blogVolume->id);
    $asset->title = $img['title'];
    $asset->avoidFilenameConflicts = true;
    $asset->setScenario(Asset::SCENARIO_CREATE);

    if (!Craft::$app->getElements()->saveElement($asset)) {
        echo "ERROR {$img['filename']}: " . implode(', ', $asset->getFirstErrors()) . "\n";
        continue;
    }

    $blogAssetMap[$img['id']] = $asset->id;
    echo "OK {$img['filename']} (id={$asset->id})\n";
}

// --- IMPORT ASSETS (author images) ---
echo "\n--- Author Images ---\n";
$authorVolume = Craft::$app->getVolumes()->getVolumeByHandle('authorImages');
if (!$authorVolume) { echo "ERROR: authorImages volume not found\n"; exit(1); }
$authorFolder = Craft::$app->getAssets()->getRootFolderByVolumeId($authorVolume->id);

$authorImagesJson = json_decode(file_get_contents('/srv/data/objekty (1).json'), true);
$authorAssetMap = []; // old_id => new_id

foreach ($authorImagesJson as $img) {
    $filePath = dirname(__DIR__) . '/web/assets/images/authors/' . $img['filename'];
    if (!file_exists($filePath)) { echo "SKIP {$img['filename']} (file not found)\n"; continue; }

    $existing = Asset::find()->volumeId($authorVolume->id)->filename($img['filename'])->one();
    if ($existing) {
        $authorAssetMap[$img['id']] = $existing->id;
        echo "EXISTS {$img['filename']} (id={$existing->id})\n";
        continue;
    }

    $asset = new Asset();
    $asset->tempFilePath = $filePath;
    $asset->setFilename($img['filename']);
    $asset->newFolderId = $authorFolder->id;
    $asset->setVolumeId($authorVolume->id);
    $asset->title = $img['title'];
    $asset->avoidFilenameConflicts = true;
    $asset->setScenario(Asset::SCENARIO_CREATE);

    if (!Craft::$app->getElements()->saveElement($asset)) {
        echo "ERROR {$img['filename']}: " . implode(', ', $asset->getFirstErrors()) . "\n";
        continue;
    }

    $authorAssetMap[$img['id']] = $asset->id;
    echo "OK {$img['filename']} (id={$asset->id})\n";
}

// --- IMPORT CATEGORIES ---
echo "\n--- Categories ---\n";
$categoryGroup = Craft::$app->getCategories()->getGroupByHandle('blogCategories');
if (!$categoryGroup) { echo "ERROR: blogCategories group not found\n"; exit(1); }

$categoriesJson = json_decode(file_get_contents('/srv/data/kategorie.json'), true);
$categoryMap = []; // old_id => new_id

foreach ($categoriesJson as $cat) {
    $existing = Category::find()->groupId($categoryGroup->id)->slug($cat['slug'])->one();
    if ($existing) {
        $categoryMap[$cat['id']] = $existing->id;
        echo "EXISTS {$cat['title']} (id={$existing->id})\n";
        continue;
    }

    $category = new Category();
    $category->groupId = $categoryGroup->id;
    $category->title = $cat['title'];
    $category->slug = $cat['slug'];

    if (!Craft::$app->getElements()->saveElement($category)) {
        echo "ERROR {$cat['title']}: " . implode(', ', $category->getFirstErrors()) . "\n";
        continue;
    }

    $categoryMap[$cat['id']] = $category->id;
    echo "OK {$cat['title']} (id={$category->id})\n";
}

// --- IMPORT BLOG ENTRIES ---
echo "\n--- Blog Entries ---\n";
$section = Craft::$app->getEntries()->getSectionByHandle('blog');
if (!$section) { echo "ERROR: blog section not found\n"; exit(1); }
$entryType = $section->getEntryTypes()[0] ?? null;
if (!$entryType) { echo "ERROR: no entry type found\n"; exit(1); }

$entriesJson = json_decode(file_get_contents('/srv/data/zaznamy.json'), true);

// Field UID to handle mapping from the export
$fieldMap = [
    '3079e581-962a-473d-95ef-9de8cbd53cd5' => 'blogCategory',
    '57baaeab-8b56-4b10-b950-6d1287e724ce' => 'isFeatured',
    '68614662-64e6-4caf-987e-2af95476a5d3' => 'perex',
    '8178ce9a-f677-4b2c-a8d5-a71d3013c4ba' => 'featuredImage',
    '625c28a8-56b3-4e83-b24a-552e39a75dae' => 'metaTitle',
    'e33e29d8-f29a-4a70-ae7b-dca0c4e19bb0' => 'metaDescription',
];

foreach ($entriesJson as $entryData) {
    $existing = Entry::find()->section('blog')->slug($entryData['slug'])->one();
    if ($existing) {
        echo "EXISTS {$entryData['title']} (id={$existing->id})\n";
        continue;
    }

    $entry = new Entry();
    $entry->sectionId = $section->id;
    $entry->setTypeId($entryType->id);
    $entry->title = $entryData['title'];
    $entry->slug = $entryData['slug'];
    $entry->postDate = DateTimeHelper::toDateTime($entryData['postDate']);
    $entry->enabled = true;

    // Parse content JSON
    $content = json_decode($entryData['content'] ?? '{}', true) ?: [];
    $fieldValues = [];

    foreach ($content as $uid => $value) {
        $handle = $fieldMap[$uid] ?? null;
        if (!$handle) continue;

        switch ($handle) {
            case 'blogCategory':
                // Map old category IDs to new ones
                $newCatIds = array_filter(array_map(fn($oldId) => $categoryMap[$oldId] ?? null, (array)$value));
                if ($newCatIds) $fieldValues['blogCategory'] = $newCatIds;
                break;
            case 'featuredImage':
                // Map old asset IDs to new ones
                $newAssetIds = array_filter(array_map(fn($oldId) => $blogAssetMap[$oldId] ?? null, (array)$value));
                if ($newAssetIds) $fieldValues['featuredImage'] = $newAssetIds;
                break;
            case 'isFeatured':
                $fieldValues['isFeatured'] = (bool)$value;
                break;
            default:
                $fieldValues[$handle] = $value;
        }
    }

    $entry->setFieldValues($fieldValues);

    if (!Craft::$app->getElements()->saveElement($entry)) {
        echo "ERROR {$entryData['title']}: " . implode(', ', $entry->getFirstErrors()) . "\n";
        continue;
    }

    echo "OK {$entryData['title']} (id={$entry->id})\n";
}

echo "\n=== Import Complete ===\n";
echo "Blog images: " . count($blogAssetMap) . "\n";
echo "Author images: " . count($authorAssetMap) . "\n";
echo "Categories: " . count($categoryMap) . "\n";
echo "Entries: " . count($entriesJson) . "\n";
