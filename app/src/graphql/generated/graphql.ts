/* eslint-disable */
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = T | null | undefined;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** The `DateTime` scalar type represents a point in time. */
  DateTime: { input: string; output: string; }
  /** The `QueryArgument` scalar type represents a value to be using in Craft element queries. It can be an integer, a string, or a boolean value. */
  QueryArgument: { input: string | number; output: string | number; }
};

export type Address = AddressInterface & ElementInterface & {
  __typename: 'Address';
  /** Return a number of related elements for a field. */
  _count?: Maybe<Scalars['Int']['output']>;
  /** First line of the address */
  addressLine1?: Maybe<Scalars['String']['output']>;
  /** Second line of the address */
  addressLine2?: Maybe<Scalars['String']['output']>;
  /** Third line of the address */
  addressLine3?: Maybe<Scalars['String']['output']>;
  /** Administrative area. */
  administrativeArea?: Maybe<Scalars['String']['output']>;
  /** Whether the element is archived. */
  archived?: Maybe<Scalars['Boolean']['output']>;
  /** Two-letter country code */
  countryCode: Scalars['String']['output'];
  /** The date the element was created. */
  dateCreated?: Maybe<Scalars['DateTime']['output']>;
  /** The date the element was last updated. */
  dateUpdated?: Maybe<Scalars['DateTime']['output']>;
  /** Dependent locality */
  dependentLocality?: Maybe<Scalars['String']['output']>;
  /** Whether the element is enabled. */
  enabled?: Maybe<Scalars['Boolean']['output']>;
  /** The first name on the address. */
  firstName?: Maybe<Scalars['String']['output']>;
  /** The full name on the address. */
  fullName?: Maybe<Scalars['String']['output']>;
  /** The ID of the entity */
  id?: Maybe<Scalars['ID']['output']>;
  /** The language of the site element is associated with. */
  language?: Maybe<Scalars['String']['output']>;
  /** The last name on the address. */
  lastName?: Maybe<Scalars['String']['output']>;
  /** Latitude */
  latitude?: Maybe<Scalars['String']['output']>;
  /** Locality */
  locality?: Maybe<Scalars['String']['output']>;
  /** Longitude */
  longitude?: Maybe<Scalars['String']['output']>;
  /** Organization name */
  organization?: Maybe<Scalars['String']['output']>;
  /** Organization tax ID */
  organizationTaxId?: Maybe<Scalars['String']['output']>;
  /** Postal code */
  postalCode?: Maybe<Scalars['String']['output']>;
  /** The element’s search score, if the `search` parameter was used when querying for the element. */
  searchScore?: Maybe<Scalars['Int']['output']>;
  /** The handle of the site the element is associated with. */
  siteHandle?: Maybe<Scalars['String']['output']>;
  /** The ID of the site the element is associated with. */
  siteId?: Maybe<Scalars['Int']['output']>;
  /** The unique identifier for an element-site relation. */
  siteSettingsId?: Maybe<Scalars['ID']['output']>;
  /** The element’s slug. */
  slug?: Maybe<Scalars['String']['output']>;
  /** Sorting code */
  sortingCode?: Maybe<Scalars['String']['output']>;
  /** The element’s status. */
  status?: Maybe<Scalars['String']['output']>;
  /** The element’s title. */
  title?: Maybe<Scalars['String']['output']>;
  /** Whether the element has been soft-deleted. */
  trashed?: Maybe<Scalars['Boolean']['output']>;
  /** The UID of the entity */
  uid?: Maybe<Scalars['String']['output']>;
  /** The element’s URI. */
  uri?: Maybe<Scalars['String']['output']>;
};


export type Address_CountArgs = {
  field: Scalars['String']['input'];
};

/** This is the interface implemented by all addresses. */
export type AddressInterface = {
  /** Return a number of related elements for a field. */
  _count?: Maybe<Scalars['Int']['output']>;
  /** First line of the address */
  addressLine1?: Maybe<Scalars['String']['output']>;
  /** Second line of the address */
  addressLine2?: Maybe<Scalars['String']['output']>;
  /** Third line of the address */
  addressLine3?: Maybe<Scalars['String']['output']>;
  /** Administrative area. */
  administrativeArea?: Maybe<Scalars['String']['output']>;
  /** Whether the element is archived. */
  archived?: Maybe<Scalars['Boolean']['output']>;
  /** Two-letter country code */
  countryCode: Scalars['String']['output'];
  /** The date the element was created. */
  dateCreated?: Maybe<Scalars['DateTime']['output']>;
  /** The date the element was last updated. */
  dateUpdated?: Maybe<Scalars['DateTime']['output']>;
  /** Dependent locality */
  dependentLocality?: Maybe<Scalars['String']['output']>;
  /** Whether the element is enabled. */
  enabled?: Maybe<Scalars['Boolean']['output']>;
  /** The first name on the address. */
  firstName?: Maybe<Scalars['String']['output']>;
  /** The full name on the address. */
  fullName?: Maybe<Scalars['String']['output']>;
  /** The ID of the entity */
  id?: Maybe<Scalars['ID']['output']>;
  /** The language of the site element is associated with. */
  language?: Maybe<Scalars['String']['output']>;
  /** The last name on the address. */
  lastName?: Maybe<Scalars['String']['output']>;
  /** Latitude */
  latitude?: Maybe<Scalars['String']['output']>;
  /** Locality */
  locality?: Maybe<Scalars['String']['output']>;
  /** Longitude */
  longitude?: Maybe<Scalars['String']['output']>;
  /** Organization name */
  organization?: Maybe<Scalars['String']['output']>;
  /** Organization tax ID */
  organizationTaxId?: Maybe<Scalars['String']['output']>;
  /** Postal code */
  postalCode?: Maybe<Scalars['String']['output']>;
  /** The element’s search score, if the `search` parameter was used when querying for the element. */
  searchScore?: Maybe<Scalars['Int']['output']>;
  /** The handle of the site the element is associated with. */
  siteHandle?: Maybe<Scalars['String']['output']>;
  /** The ID of the site the element is associated with. */
  siteId?: Maybe<Scalars['Int']['output']>;
  /** The unique identifier for an element-site relation. */
  siteSettingsId?: Maybe<Scalars['ID']['output']>;
  /** The element’s slug. */
  slug?: Maybe<Scalars['String']['output']>;
  /** Sorting code */
  sortingCode?: Maybe<Scalars['String']['output']>;
  /** The element’s status. */
  status?: Maybe<Scalars['String']['output']>;
  /** The element’s title. */
  title?: Maybe<Scalars['String']['output']>;
  /** Whether the element has been soft-deleted. */
  trashed?: Maybe<Scalars['Boolean']['output']>;
  /** The UID of the entity */
  uid?: Maybe<Scalars['String']['output']>;
  /** The element’s URI. */
  uri?: Maybe<Scalars['String']['output']>;
};


/** This is the interface implemented by all addresses. */
export type AddressInterface_CountArgs = {
  field: Scalars['String']['input'];
};

/** This is the interface implemented by all assets. */
export type AssetInterface = {
  /** Return a number of related elements for a field. */
  _count?: Maybe<Scalars['Int']['output']>;
  /** Alternative text for the asset. */
  alt?: Maybe<Scalars['String']['output']>;
  /** Whether the element is archived. */
  archived?: Maybe<Scalars['Boolean']['output']>;
  /** The date the element was created. */
  dateCreated?: Maybe<Scalars['DateTime']['output']>;
  /** The date the asset file was last modified. */
  dateModified?: Maybe<Scalars['DateTime']['output']>;
  /** The date the element was last updated. */
  dateUpdated?: Maybe<Scalars['DateTime']['output']>;
  /** Whether the element is enabled. */
  enabled?: Maybe<Scalars['Boolean']['output']>;
  /** The file extension for the asset file. */
  extension: Scalars['String']['output'];
  /** The filename of the asset file. */
  filename: Scalars['String']['output'];
  /** The focal point represented as an array with `x` and `y` keys, or null if it’s not an image. */
  focalPoint?: Maybe<Array<Maybe<Scalars['Float']['output']>>>;
  /** The ID of the folder that the asset belongs to. */
  folderId: Scalars['Int']['output'];
  /** Returns the file’s format. */
  format?: Maybe<Scalars['String']['output']>;
  /** Whether a user-defined focal point is set on the asset. */
  hasFocalPoint: Scalars['Boolean']['output'];
  /** The height in pixels or null if it’s not an image. */
  height?: Maybe<Scalars['Int']['output']>;
  /** The ID of the entity */
  id?: Maybe<Scalars['ID']['output']>;
  /** An `<img>` tag based on this asset. */
  img?: Maybe<Scalars['String']['output']>;
  /** The file kind. */
  kind: Scalars['String']['output'];
  /** The language of the site element is associated with. */
  language?: Maybe<Scalars['String']['output']>;
  /** The file’s MIME type, if it can be determined. */
  mimeType?: Maybe<Scalars['String']['output']>;
  /** Returns the next element relative to this one, from a given set of criteria. */
  next?: Maybe<AssetInterface>;
  /** The asset’s path in the volume. */
  path: Scalars['String']['output'];
  /** Returns the previous element relative to this one, from a given set of criteria. */
  prev?: Maybe<AssetInterface>;
  /** The element’s search score, if the `search` parameter was used when querying for the element. */
  searchScore?: Maybe<Scalars['Int']['output']>;
  /** The handle of the site the element is associated with. */
  siteHandle?: Maybe<Scalars['String']['output']>;
  /** The ID of the site the element is associated with. */
  siteId?: Maybe<Scalars['Int']['output']>;
  /** The unique identifier for an element-site relation. */
  siteSettingsId?: Maybe<Scalars['ID']['output']>;
  /** The file size in bytes. */
  size?: Maybe<Scalars['String']['output']>;
  /** The element’s slug. */
  slug?: Maybe<Scalars['String']['output']>;
  /** Returns a `srcset` attribute value based on the given widths or x-descriptors. */
  srcset?: Maybe<Scalars['String']['output']>;
  /** The element’s status. */
  status?: Maybe<Scalars['String']['output']>;
  /** The element’s title. */
  title?: Maybe<Scalars['String']['output']>;
  /** Whether the element has been soft-deleted. */
  trashed?: Maybe<Scalars['Boolean']['output']>;
  /** The UID of the entity */
  uid?: Maybe<Scalars['String']['output']>;
  /** The element’s URI. */
  uri?: Maybe<Scalars['String']['output']>;
  /** The full URL of the asset. This field accepts the same fields as the `transform` directive. */
  url?: Maybe<Scalars['String']['output']>;
  /** The ID of the volume that the asset belongs to. */
  volumeId?: Maybe<Scalars['Int']['output']>;
  /** The width in pixels or null if it’s not an image. */
  width?: Maybe<Scalars['Int']['output']>;
};


/** This is the interface implemented by all assets. */
export type AssetInterface_CountArgs = {
  field: Scalars['String']['input'];
};


/** This is the interface implemented by all assets. */
export type AssetInterfaceFormatArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
  handle?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['Int']['input']>;
  immediately?: InputMaybe<Scalars['Boolean']['input']>;
  interlace?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<Scalars['String']['input']>;
  position?: InputMaybe<Scalars['String']['input']>;
  quality?: InputMaybe<Scalars['Int']['input']>;
  transform?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Int']['input']>;
};


/** This is the interface implemented by all assets. */
export type AssetInterfaceHeightArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
  handle?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['Int']['input']>;
  immediately?: InputMaybe<Scalars['Boolean']['input']>;
  interlace?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<Scalars['String']['input']>;
  position?: InputMaybe<Scalars['String']['input']>;
  quality?: InputMaybe<Scalars['Int']['input']>;
  transform?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Int']['input']>;
};


/** This is the interface implemented by all assets. */
export type AssetInterfaceNextArgs = {
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateModified?: InputMaybe<Scalars['String']['input']>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  filename?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  folderId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  hasAlt?: InputMaybe<Scalars['Boolean']['input']>;
  height?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  includeSubfolders?: InputMaybe<Scalars['Boolean']['input']>;
  kind?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  language?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  notRelatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetRelationCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryRelationCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryRelationCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagRelationCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserRelationCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  searchTermOptions?: InputMaybe<SearchTermOptions>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  size?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uploader?: InputMaybe<Scalars['QueryArgument']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  volume?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  volumeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  width?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withTransforms?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** This is the interface implemented by all assets. */
export type AssetInterfacePrevArgs = {
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateModified?: InputMaybe<Scalars['String']['input']>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  filename?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  folderId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  hasAlt?: InputMaybe<Scalars['Boolean']['input']>;
  height?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  includeSubfolders?: InputMaybe<Scalars['Boolean']['input']>;
  kind?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  language?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  notRelatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetRelationCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryRelationCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryRelationCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagRelationCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserRelationCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  searchTermOptions?: InputMaybe<SearchTermOptions>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  size?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uploader?: InputMaybe<Scalars['QueryArgument']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  volume?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  volumeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  width?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withTransforms?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** This is the interface implemented by all assets. */
export type AssetInterfaceSrcsetArgs = {
  sizes: Array<Scalars['String']['input']>;
};


/** This is the interface implemented by all assets. */
export type AssetInterfaceUrlArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
  handle?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['Int']['input']>;
  immediately?: InputMaybe<Scalars['Boolean']['input']>;
  interlace?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<Scalars['String']['input']>;
  position?: InputMaybe<Scalars['String']['input']>;
  quality?: InputMaybe<Scalars['Int']['input']>;
  transform?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Int']['input']>;
};


/** This is the interface implemented by all assets. */
export type AssetInterfaceWidthArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
  handle?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['Int']['input']>;
  immediately?: InputMaybe<Scalars['Boolean']['input']>;
  interlace?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<Scalars['String']['input']>;
  position?: InputMaybe<Scalars['String']['input']>;
  quality?: InputMaybe<Scalars['Int']['input']>;
  transform?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Int']['input']>;
};

export type AssetRelationCriteriaInput = {
  /** Narrows the query results based on the elements’ creation dates. */
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Narrows the query results based on the assets’ files’ last-modified dates. */
  dateModified?: InputMaybe<Scalars['String']['input']>;
  /** Narrows the query results based on the elements’ last-updated dates. */
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Narrows the query results based on the assets’ filenames. */
  filename?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Causes the query results to be returned in the order specified by the `id` argument. */
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  /** Narrows the query results based on the folders the assets belong to, per the folders’ IDs. */
  folderId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  /** Narrows the query results based on whether the assets have alternative text. */
  hasAlt?: InputMaybe<Scalars['Boolean']['input']>;
  /** Narrows the query results based on the assets’ image heights. */
  height?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Narrows the query results based on the elements’ IDs. */
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  /** Causes the query results to be returned in reverse order. */
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  /** Broadens the query results to include assets from any of the subfolders of the folder specified by `folderId`. */
  includeSubfolders?: InputMaybe<Scalars['Boolean']['input']>;
  /** Narrows the query results based on the assets’ file kinds. */
  kind?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Determines which site(s) the elements should be queried in, based on their language. */
  language?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Sets the limit for paginated results. */
  limit?: InputMaybe<Scalars['Int']['input']>;
  /** Narrows the query results to elements that do not relate to the provided element IDs. */
  notRelatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  /** Sets the offset for paginated results. */
  offset?: InputMaybe<Scalars['Int']['input']>;
  /** Sets the field the returned elements should be ordered by. */
  orderBy?: InputMaybe<Scalars['String']['input']>;
  /** Determines which site should be selected when querying multi-site elements. */
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  /** Narrows the query results based on a reference string. */
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Narrows the query results to elements that relate to the provided element IDs. This argument is ignored, if `relatedToAll` is also used. */
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  /** Narrows the query results to elements that relate to *all* of the provided element IDs. Using this argument will cause `relatedTo` argument to be ignored. **This argument is deprecated.** `relatedTo: ["and", ...ids]` should be used instead. */
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  /** Narrows the query results to elements that relate to an asset list defined with this argument. */
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetRelationCriteriaInput>>>;
  /** Narrows the query results to elements that relate to a category list defined with this argument. */
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryRelationCriteriaInput>>>;
  /** Narrows the query results to elements that relate to an entry list defined with this argument. */
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryRelationCriteriaInput>>>;
  /** Narrows the query results to elements that relate to a tag list defined with this argument. */
  relatedToTags?: InputMaybe<Array<InputMaybe<TagRelationCriteriaInput>>>;
  /** Narrows the query results to elements that relate to a use list defined with this argument. */
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserRelationCriteriaInput>>>;
  /** Narrows the relations based on the field they were created in. */
  relatedViaField?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Narrows the relations based on the site they were created in. */
  relatedViaSite?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Narrows the query results to only elements that match a search query. */
  search?: InputMaybe<Scalars['String']['input']>;
  /** Defines the default options that should be applied terms within the `search` argument. */
  searchTermOptions?: InputMaybe<SearchTermOptions>;
  /** Determines which site(s) the elements should be queried in. Defaults to the current (requested) site. */
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Determines which site(s) the elements should be queried in. Defaults to the current (requested) site. */
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  /** Narrows the query results based on the unique identifier for an element-site relation. */
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  /** Narrows the query results based on the assets’ file sizes (in bytes). */
  size?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Narrows the query results based on the elements’ slugs. */
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Narrows the query results based on the elements’ titles. */
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Narrows the query results based on the elements’ UIDs. */
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Determines whether only elements with unique IDs should be returned by the query. */
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  /** Narrows the query results based on the user the assets were uploaded by, per the user’s ID. */
  uploader?: InputMaybe<Scalars['QueryArgument']['input']>;
  /** Narrows the query results based on the elements’ URIs. */
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Narrows the query results based on the volumes the assets belong to, per the volumes’ handles. */
  volume?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Narrows the query results based on the volumes the assets belong to, per the volumes’ IDs. */
  volumeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  /** Narrows the query results based on the assets’ image widths. */
  width?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** A list of transform handles to preload. */
  withTransforms?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/** This is the interface implemented by all categories. */
export type CategoryInterface = {
  /** Return a number of related elements for a field. */
  _count?: Maybe<Scalars['Int']['output']>;
  /** The category’s ancestors, if the section is a structure. Accepts the same arguments as the `entries` query. */
  ancestors: Array<CategoryInterface>;
  /** Whether the element is archived. */
  archived?: Maybe<Scalars['Boolean']['output']>;
  /** The category’s children. */
  children: Array<CategoryInterface>;
  /** The date the element was created. */
  dateCreated?: Maybe<Scalars['DateTime']['output']>;
  /** The date the element was last updated. */
  dateUpdated?: Maybe<Scalars['DateTime']['output']>;
  /** The category’s descendants, if the section is a structure. Accepts the same arguments as the `entries` query. */
  descendants: Array<CategoryInterface>;
  /** Whether the element is enabled. */
  enabled?: Maybe<Scalars['Boolean']['output']>;
  /** The handle of the group that contains the category. */
  groupHandle: Scalars['String']['output'];
  /** The ID of the group that contains the category. */
  groupId: Scalars['Int']['output'];
  /** The ID of the entity */
  id?: Maybe<Scalars['ID']['output']>;
  /** The language of the site element is associated with. */
  language?: Maybe<Scalars['String']['output']>;
  /** The element’s level within its structure */
  level?: Maybe<Scalars['Int']['output']>;
  /** The element’s left position within its structure. */
  lft?: Maybe<Scalars['Int']['output']>;
  /** The same element in other locales. */
  localized: Array<CategoryInterface>;
  /** Returns the next element relative to this one, from a given set of criteria. */
  next?: Maybe<CategoryInterface>;
  /** The category’s parent. */
  parent?: Maybe<CategoryInterface>;
  /** Returns the previous element relative to this one, from a given set of criteria. */
  prev?: Maybe<CategoryInterface>;
  /** The element’s right position within its structure. */
  rgt?: Maybe<Scalars['Int']['output']>;
  /** The element’s structure’s root ID */
  root?: Maybe<Scalars['Int']['output']>;
  /** The element’s search score, if the `search` parameter was used when querying for the element. */
  searchScore?: Maybe<Scalars['Int']['output']>;
  /** The handle of the site the element is associated with. */
  siteHandle?: Maybe<Scalars['String']['output']>;
  /** The ID of the site the element is associated with. */
  siteId?: Maybe<Scalars['Int']['output']>;
  /** The unique identifier for an element-site relation. */
  siteSettingsId?: Maybe<Scalars['ID']['output']>;
  /** The element’s slug. */
  slug?: Maybe<Scalars['String']['output']>;
  /** The element’s status. */
  status?: Maybe<Scalars['String']['output']>;
  /** The element’s structure ID. */
  structureId?: Maybe<Scalars['Int']['output']>;
  /** The element’s title. */
  title?: Maybe<Scalars['String']['output']>;
  /** Whether the element has been soft-deleted. */
  trashed?: Maybe<Scalars['Boolean']['output']>;
  /** The UID of the entity */
  uid?: Maybe<Scalars['String']['output']>;
  /** The element’s URI. */
  uri?: Maybe<Scalars['String']['output']>;
  /** The element’s full URL */
  url?: Maybe<Scalars['String']['output']>;
};


/** This is the interface implemented by all categories. */
export type CategoryInterface_CountArgs = {
  field: Scalars['String']['input'];
};


/** This is the interface implemented by all categories. */
export type CategoryInterfaceAncestorsArgs = {
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  group?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  groupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  language?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  notRelatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetRelationCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryRelationCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryRelationCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagRelationCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserRelationCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  searchTermOptions?: InputMaybe<SearchTermOptions>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};


/** This is the interface implemented by all categories. */
export type CategoryInterfaceChildrenArgs = {
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  group?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  groupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  language?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  notRelatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetRelationCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryRelationCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryRelationCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagRelationCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserRelationCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  searchTermOptions?: InputMaybe<SearchTermOptions>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};


/** This is the interface implemented by all categories. */
export type CategoryInterfaceDescendantsArgs = {
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  group?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  groupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  language?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  notRelatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetRelationCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryRelationCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryRelationCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagRelationCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserRelationCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  searchTermOptions?: InputMaybe<SearchTermOptions>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};


/** This is the interface implemented by all categories. */
export type CategoryInterfaceLocalizedArgs = {
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  group?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  groupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  language?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  notRelatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetRelationCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryRelationCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryRelationCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagRelationCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserRelationCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  searchTermOptions?: InputMaybe<SearchTermOptions>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};


/** This is the interface implemented by all categories. */
export type CategoryInterfaceNextArgs = {
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  group?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  groupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  language?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  notRelatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetRelationCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryRelationCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryRelationCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagRelationCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserRelationCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  searchTermOptions?: InputMaybe<SearchTermOptions>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};


/** This is the interface implemented by all categories. */
export type CategoryInterfaceParentArgs = {
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  group?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  groupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  language?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  notRelatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetRelationCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryRelationCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryRelationCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagRelationCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserRelationCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  searchTermOptions?: InputMaybe<SearchTermOptions>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};


/** This is the interface implemented by all categories. */
export type CategoryInterfacePrevArgs = {
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  group?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  groupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  language?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  notRelatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetRelationCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryRelationCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryRelationCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagRelationCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserRelationCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  searchTermOptions?: InputMaybe<SearchTermOptions>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CategoryRelationCriteriaInput = {
  /** Narrows the query results to only elements that are up to a certain distance away from the element in its structure specified by `ancestorOf`. */
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  /** Narrows the query results to only elements that are ancestors of another element in its structure, provided by its ID. */
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  /** Narrows the query results based on the elements’ creation dates. */
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Narrows the query results based on the elements’ last-updated dates. */
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Narrows the query results to only elements that are up to a certain distance away from the element in its structure specified by `descendantOf`. */
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  /** Narrows the query results to only elements that are descendants of another element in its structure provided by its ID. */
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  /** Whether to only return categories that the user has permission to edit. */
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  /** Causes the query results to be returned in the order specified by the `id` argument. */
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  /** Narrows the query results based on the category groups the categories belong to per the group’s handles. */
  group?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Narrows the query results based on the category groups the categories belong to, per the groups’ IDs. */
  groupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  /** Narrows the query results based on whether the elements have any descendants in their structure. */
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  /** Narrows the query results based on the elements’ IDs. */
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  /** Causes the query results to be returned in reverse order. */
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  /** Determines which site(s) the elements should be queried in, based on their language. */
  language?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Narrows the query results based on whether the elements are “leaves” in their structure (element with no descendants). */
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  /** Narrows the query results based on the elements’ level within the structure. */
  level?: InputMaybe<Scalars['Int']['input']>;
  /** Sets the limit for paginated results. */
  limit?: InputMaybe<Scalars['Int']['input']>;
  /** Narrows the query results to only the entry that comes immediately after another element in its structure, provided by its ID. */
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  /** Narrows the query results to elements that do not relate to the provided element IDs. */
  notRelatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  /** Sets the offset for paginated results. */
  offset?: InputMaybe<Scalars['Int']['input']>;
  /** Sets the field the returned elements should be ordered by. */
  orderBy?: InputMaybe<Scalars['String']['input']>;
  /** Narrows the query results to only entries that are positioned after another element in its structure, provided by its ID. */
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  /** Narrows the query results to only entries that are positioned before another element in its structure, provided by its ID. */
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  /** Determines which site should be selected when querying multi-site elements. */
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  /** Narrows the query results to only the entry that comes immediately before another element in its structure, provided by its ID. */
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  /** Narrows the query results based on a reference string. */
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Narrows the query results to elements that relate to the provided element IDs. This argument is ignored, if `relatedToAll` is also used. */
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  /** Narrows the query results to elements that relate to *all* of the provided element IDs. Using this argument will cause `relatedTo` argument to be ignored. **This argument is deprecated.** `relatedTo: ["and", ...ids]` should be used instead. */
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  /** Narrows the query results to elements that relate to an asset list defined with this argument. */
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetRelationCriteriaInput>>>;
  /** Narrows the query results to elements that relate to a category list defined with this argument. */
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryRelationCriteriaInput>>>;
  /** Narrows the query results to elements that relate to an entry list defined with this argument. */
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryRelationCriteriaInput>>>;
  /** Narrows the query results to elements that relate to a tag list defined with this argument. */
  relatedToTags?: InputMaybe<Array<InputMaybe<TagRelationCriteriaInput>>>;
  /** Narrows the query results to elements that relate to a use list defined with this argument. */
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserRelationCriteriaInput>>>;
  /** Narrows the relations based on the field they were created in. */
  relatedViaField?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Narrows the relations based on the site they were created in. */
  relatedViaSite?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Narrows the query results to only elements that match a search query. */
  search?: InputMaybe<Scalars['String']['input']>;
  /** Defines the default options that should be applied terms within the `search` argument. */
  searchTermOptions?: InputMaybe<SearchTermOptions>;
  /** Determines which site(s) the elements should be queried in. Defaults to the current (requested) site. */
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Determines which site(s) the elements should be queried in. Defaults to the current (requested) site. */
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  /** Narrows the query results based on the unique identifier for an element-site relation. */
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  /** Narrows the query results based on the elements’ slugs. */
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Determines which structure data should be joined into the query. */
  structureId?: InputMaybe<Scalars['Int']['input']>;
  /** Narrows the query results based on the elements’ titles. */
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Narrows the query results based on the elements’ UIDs. */
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Determines whether only elements with unique IDs should be returned by the query. */
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  /** Narrows the query results based on the elements’ URIs. */
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Explicitly determines whether the query should join in the structure data. */
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CkeditorMarkup = {
  __typename: 'CkeditorMarkup';
  /** The parsed chunk value as HTML. */
  html?: Maybe<Scalars['String']['output']>;
  /** The parsed chunk value as Markdown. */
  markdown?: Maybe<Scalars['String']['output']>;
  /** The parsed chunk value as plain text.. */
  plainText?: Maybe<Scalars['String']['output']>;
  /** The raw chunk HTML value, with reference tags in-tact. */
  rawHtml?: Maybe<Scalars['String']['output']>;
};


export type CkeditorMarkupMarkdownArgs = {
  hard_break?: InputMaybe<Scalars['Boolean']['input']>;
  header_style?: InputMaybe<Scalars['String']['input']>;
  list_item_style?: InputMaybe<Scalars['String']['input']>;
  preserve_comments?: InputMaybe<Scalars['Boolean']['input']>;
  remove_nodes?: InputMaybe<Scalars['String']['input']>;
  strip_placeholder_links?: InputMaybe<Scalars['Boolean']['input']>;
  strip_tags?: InputMaybe<Scalars['Boolean']['input']>;
  suppress_errors?: InputMaybe<Scalars['Boolean']['input']>;
  table_caption_side?: InputMaybe<Scalars['String']['input']>;
  table_pipe_escape?: InputMaybe<Scalars['String']['input']>;
  use_autolinks?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Element = ElementInterface & {
  __typename: 'Element';
  /** Return a number of related elements for a field. */
  _count?: Maybe<Scalars['Int']['output']>;
  /** Whether the element is archived. */
  archived?: Maybe<Scalars['Boolean']['output']>;
  /** The date the element was created. */
  dateCreated?: Maybe<Scalars['DateTime']['output']>;
  /** The date the element was last updated. */
  dateUpdated?: Maybe<Scalars['DateTime']['output']>;
  /** Whether the element is enabled. */
  enabled?: Maybe<Scalars['Boolean']['output']>;
  /** The ID of the entity */
  id?: Maybe<Scalars['ID']['output']>;
  /** The language of the site element is associated with. */
  language?: Maybe<Scalars['String']['output']>;
  /** The element’s search score, if the `search` parameter was used when querying for the element. */
  searchScore?: Maybe<Scalars['Int']['output']>;
  /** The handle of the site the element is associated with. */
  siteHandle?: Maybe<Scalars['String']['output']>;
  /** The ID of the site the element is associated with. */
  siteId?: Maybe<Scalars['Int']['output']>;
  /** The unique identifier for an element-site relation. */
  siteSettingsId?: Maybe<Scalars['ID']['output']>;
  /** The element’s slug. */
  slug?: Maybe<Scalars['String']['output']>;
  /** The element’s status. */
  status?: Maybe<Scalars['String']['output']>;
  /** The element’s title. */
  title?: Maybe<Scalars['String']['output']>;
  /** Whether the element has been soft-deleted. */
  trashed?: Maybe<Scalars['Boolean']['output']>;
  /** The UID of the entity */
  uid?: Maybe<Scalars['String']['output']>;
  /** The element’s URI. */
  uri?: Maybe<Scalars['String']['output']>;
};


export type Element_CountArgs = {
  field: Scalars['String']['input'];
};

/** This is the interface implemented by all elements. */
export type ElementInterface = {
  /** Return a number of related elements for a field. */
  _count?: Maybe<Scalars['Int']['output']>;
  /** Whether the element is archived. */
  archived?: Maybe<Scalars['Boolean']['output']>;
  /** The date the element was created. */
  dateCreated?: Maybe<Scalars['DateTime']['output']>;
  /** The date the element was last updated. */
  dateUpdated?: Maybe<Scalars['DateTime']['output']>;
  /** Whether the element is enabled. */
  enabled?: Maybe<Scalars['Boolean']['output']>;
  /** The ID of the entity */
  id?: Maybe<Scalars['ID']['output']>;
  /** The language of the site element is associated with. */
  language?: Maybe<Scalars['String']['output']>;
  /** The element’s search score, if the `search` parameter was used when querying for the element. */
  searchScore?: Maybe<Scalars['Int']['output']>;
  /** The handle of the site the element is associated with. */
  siteHandle?: Maybe<Scalars['String']['output']>;
  /** The ID of the site the element is associated with. */
  siteId?: Maybe<Scalars['Int']['output']>;
  /** The unique identifier for an element-site relation. */
  siteSettingsId?: Maybe<Scalars['ID']['output']>;
  /** The element’s slug. */
  slug?: Maybe<Scalars['String']['output']>;
  /** The element’s status. */
  status?: Maybe<Scalars['String']['output']>;
  /** The element’s title. */
  title?: Maybe<Scalars['String']['output']>;
  /** Whether the element has been soft-deleted. */
  trashed?: Maybe<Scalars['Boolean']['output']>;
  /** The UID of the entity */
  uid?: Maybe<Scalars['String']['output']>;
  /** The element’s URI. */
  uri?: Maybe<Scalars['String']['output']>;
};


/** This is the interface implemented by all elements. */
export type ElementInterface_CountArgs = {
  field: Scalars['String']['input'];
};

/** This is the interface implemented by all entries. */
export type EntryInterface = {
  /** Return a number of related elements for a field. */
  _count?: Maybe<Scalars['Int']['output']>;
  /** The entry’s ancestors, if the section is a structure. Accepts the same arguments as the `entries` query. */
  ancestors: Array<EntryInterface>;
  /** Whether the element is archived. */
  archived?: Maybe<Scalars['Boolean']['output']>;
  /** Returns the entry’s canonical ID. */
  canonicalId?: Maybe<Scalars['Int']['output']>;
  /** Returns the entry’s canonical UUID. */
  canonicalUid?: Maybe<Scalars['String']['output']>;
  /** The entry’s children, if the section is a structure. Accepts the same arguments as the `entries` query. */
  children: Array<EntryInterface>;
  /** The date the element was created. */
  dateCreated?: Maybe<Scalars['DateTime']['output']>;
  /** The date the element was last updated. */
  dateUpdated?: Maybe<Scalars['DateTime']['output']>;
  /** The entry’s descendants, if the section is a structure. Accepts the same arguments as the `entries` query. */
  descendants: Array<EntryInterface>;
  /** The draft ID (from the `drafts` table). */
  draftId?: Maybe<Scalars['Int']['output']>;
  /** The name of the draft. */
  draftName?: Maybe<Scalars['String']['output']>;
  /** The notes for the draft. */
  draftNotes?: Maybe<Scalars['String']['output']>;
  /** Whether the element is enabled. */
  enabled?: Maybe<Scalars['Boolean']['output']>;
  /** Whether the element is enabled for the site. */
  enabledForSite?: Maybe<Scalars['Boolean']['output']>;
  /** The expiry date of the entry. */
  expiryDate?: Maybe<Scalars['DateTime']['output']>;
  /** The handle of the field that contains the entry. */
  fieldHandle?: Maybe<Scalars['String']['output']>;
  /** The ID of the field that contains the entry. */
  fieldId?: Maybe<Scalars['Int']['output']>;
  /** The ID of the entity */
  id?: Maybe<Scalars['ID']['output']>;
  /** Returns whether this is a draft. */
  isDraft?: Maybe<Scalars['Boolean']['output']>;
  /** Returns whether this is a revision. */
  isRevision?: Maybe<Scalars['Boolean']['output']>;
  /** Returns whether this is an unpublished draft. */
  isUnpublishedDraft?: Maybe<Scalars['Boolean']['output']>;
  /** The language of the site element is associated with. */
  language?: Maybe<Scalars['String']['output']>;
  /** The element’s level within its structure */
  level?: Maybe<Scalars['Int']['output']>;
  /** The element’s left position within its structure. */
  lft?: Maybe<Scalars['Int']['output']>;
  /** The same element in other locales. */
  localized: Array<EntryInterface>;
  /** Returns the next element relative to this one, from a given set of criteria. */
  next?: Maybe<EntryInterface>;
  /** The ID of the entry’s owner element. */
  ownerId?: Maybe<Scalars['Int']['output']>;
  /** The entry’s parent, if the section is a structure. */
  parent?: Maybe<EntryInterface>;
  /** The entry’s post date. */
  postDate?: Maybe<Scalars['DateTime']['output']>;
  /** Returns the previous element relative to this one, from a given set of criteria. */
  prev?: Maybe<EntryInterface>;
  /** The revision ID (from the `revisions` table). */
  revisionId?: Maybe<Scalars['Int']['output']>;
  /** The revision notes (from the `revisions` table). */
  revisionNotes?: Maybe<Scalars['String']['output']>;
  /** The element’s right position within its structure. */
  rgt?: Maybe<Scalars['Int']['output']>;
  /** The element’s structure’s root ID */
  root?: Maybe<Scalars['Int']['output']>;
  /** The element’s search score, if the `search` parameter was used when querying for the element. */
  searchScore?: Maybe<Scalars['Int']['output']>;
  /** The handle of the section that contains the entry. */
  sectionHandle?: Maybe<Scalars['String']['output']>;
  /** The ID of the section that contains the entry. */
  sectionId?: Maybe<Scalars['Int']['output']>;
  /** The handle of the site the element is associated with. */
  siteHandle?: Maybe<Scalars['String']['output']>;
  /** The ID of the site the element is associated with. */
  siteId?: Maybe<Scalars['Int']['output']>;
  /** The unique identifier for an element-site relation. */
  siteSettingsId?: Maybe<Scalars['ID']['output']>;
  /** The element’s slug. */
  slug?: Maybe<Scalars['String']['output']>;
  /** The entry’s position within the field that contains it. */
  sortOrder?: Maybe<Scalars['Int']['output']>;
  /**
   * Returns the entry’s canonical ID.
   * @deprecated this field has been deprecated since Craft 3.7.7. Use `canonicalId` instead.
   */
  sourceId?: Maybe<Scalars['Int']['output']>;
  /**
   * Returns the entry’s canonical UUID.
   * @deprecated this field has been deprecated since Craft 3.7.7. Use `canonicalUid` instead.
   */
  sourceUid?: Maybe<Scalars['String']['output']>;
  /** The element’s status. */
  status?: Maybe<Scalars['String']['output']>;
  /** The element’s structure ID. */
  structureId?: Maybe<Scalars['Int']['output']>;
  /** The element’s title. */
  title?: Maybe<Scalars['String']['output']>;
  /** Whether the element has been soft-deleted. */
  trashed?: Maybe<Scalars['Boolean']['output']>;
  /** The handle of the entry type that contains the entry. */
  typeHandle: Scalars['String']['output'];
  /** The ID of the entry type that contains the entry. */
  typeId: Scalars['Int']['output'];
  /** The UID of the entity */
  uid?: Maybe<Scalars['String']['output']>;
  /** The element’s URI. */
  uri?: Maybe<Scalars['String']['output']>;
  /** The element’s full URL */
  url?: Maybe<Scalars['String']['output']>;
};


/** This is the interface implemented by all entries. */
export type EntryInterface_CountArgs = {
  field: Scalars['String']['input'];
};


/** This is the interface implemented by all entries. */
export type EntryInterfaceAncestorsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before?: InputMaybe<Scalars['String']['input']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  field?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fieldId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  language?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  notRelatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  ownerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  primaryOwnerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetRelationCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryRelationCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryRelationCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagRelationCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserRelationCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  searchTermOptions?: InputMaybe<SearchTermOptions>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};


/** This is the interface implemented by all entries. */
export type EntryInterfaceChildrenArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before?: InputMaybe<Scalars['String']['input']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  field?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fieldId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  language?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  notRelatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  ownerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  primaryOwnerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetRelationCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryRelationCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryRelationCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagRelationCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserRelationCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  searchTermOptions?: InputMaybe<SearchTermOptions>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};


/** This is the interface implemented by all entries. */
export type EntryInterfaceDescendantsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before?: InputMaybe<Scalars['String']['input']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  field?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fieldId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  language?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  notRelatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  ownerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  primaryOwnerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetRelationCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryRelationCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryRelationCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagRelationCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserRelationCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  searchTermOptions?: InputMaybe<SearchTermOptions>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};


/** This is the interface implemented by all entries. */
export type EntryInterfaceLocalizedArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorName?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorPhoto?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorPosition?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before?: InputMaybe<Scalars['String']['input']>;
  bio?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  blogCategory?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  body?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  caption?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  featuredImage?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  field?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fieldId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  image?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  isFeatured?: InputMaybe<Scalars['Boolean']['input']>;
  items?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  language?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  metaDescription?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  metaTitle?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  notRelatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  ownerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  perex?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  photo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  position?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  primaryOwnerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetRelationCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryRelationCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryRelationCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagRelationCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserRelationCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  searchTermOptions?: InputMaybe<SearchTermOptions>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  text?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  videoUrl?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};


/** This is the interface implemented by all entries. */
export type EntryInterfaceNextArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorName?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorPhoto?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorPosition?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before?: InputMaybe<Scalars['String']['input']>;
  bio?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  blogCategory?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  body?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  caption?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  featuredImage?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  field?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fieldId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  image?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  isFeatured?: InputMaybe<Scalars['Boolean']['input']>;
  items?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  language?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  metaDescription?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  metaTitle?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  notRelatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  ownerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  perex?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  photo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  position?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  primaryOwnerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetRelationCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryRelationCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryRelationCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagRelationCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserRelationCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  searchTermOptions?: InputMaybe<SearchTermOptions>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  text?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  videoUrl?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};


/** This is the interface implemented by all entries. */
export type EntryInterfaceParentArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before?: InputMaybe<Scalars['String']['input']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  field?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fieldId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  language?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  notRelatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  ownerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  primaryOwnerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetRelationCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryRelationCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryRelationCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagRelationCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserRelationCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  searchTermOptions?: InputMaybe<SearchTermOptions>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};


/** This is the interface implemented by all entries. */
export type EntryInterfacePrevArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorName?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorPhoto?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorPosition?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before?: InputMaybe<Scalars['String']['input']>;
  bio?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  blogCategory?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  body?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  caption?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  featuredImage?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  field?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fieldId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  image?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  isFeatured?: InputMaybe<Scalars['Boolean']['input']>;
  items?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  language?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  metaDescription?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  metaTitle?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  notRelatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  ownerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  perex?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  photo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  position?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  primaryOwnerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetRelationCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryRelationCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryRelationCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagRelationCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserRelationCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  searchTermOptions?: InputMaybe<SearchTermOptions>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  text?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  videoUrl?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};

export type EntryRelationCriteriaInput = {
  /** Narrows the query results to only entries that were posted on or after a certain date. */
  after?: InputMaybe<Scalars['String']['input']>;
  /** Narrows the query results to only elements that are up to a certain distance away from the element in its structure specified by `ancestorOf`. */
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  /** Narrows the query results to only elements that are ancestors of another element in its structure, provided by its ID. */
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  /** Narrows the query results based on the user group the entries’ authors belong to. */
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Narrows the query results based on the user group the entries’ authors belong to, per the groups’ IDs. */
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  /** Narrows the query results based on the entries’ authors. */
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorName?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorPhoto?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorPosition?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  /** Narrows the query results to only entries that were posted before a certain date. */
  before?: InputMaybe<Scalars['String']['input']>;
  bio?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  blogCategory?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  body?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  caption?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  /** Narrows the query results based on the elements’ creation dates. */
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Narrows the query results based on the elements’ last-updated dates. */
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Narrows the query results to only elements that are up to a certain distance away from the element in its structure specified by `descendantOf`. */
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  /** Narrows the query results to only elements that are descendants of another element in its structure provided by its ID. */
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  /** Whether to only return entries that the user has permission to edit. */
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  /** Narrows the query results based on the entries’ expiry dates. */
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  featuredImage?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  /** Narrows the query results based on the field the entries are contained by. */
  field?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Narrows the query results based on the field the entries are contained by, per the fields’ IDs. */
  fieldId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  /** Causes the query results to be returned in the order specified by the `id` argument. */
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  /** Narrows the query results based on whether the elements have any descendants in their structure. */
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  /** Narrows the query results based on the elements’ IDs. */
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  image?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  /** Causes the query results to be returned in reverse order. */
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  isFeatured?: InputMaybe<Scalars['Boolean']['input']>;
  items?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  /** Determines which site(s) the elements should be queried in, based on their language. */
  language?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Narrows the query results based on whether the elements are “leaves” in their structure (element with no descendants). */
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  /** Narrows the query results based on the elements’ level within the structure. */
  level?: InputMaybe<Scalars['Int']['input']>;
  /** Sets the limit for paginated results. */
  limit?: InputMaybe<Scalars['Int']['input']>;
  metaDescription?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  metaTitle?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  /** Narrows the query results to only the entry that comes immediately after another element in its structure, provided by its ID. */
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  /** Narrows the query results to elements that do not relate to the provided element IDs. */
  notRelatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  /** Sets the offset for paginated results. */
  offset?: InputMaybe<Scalars['Int']['input']>;
  /** Sets the field the returned elements should be ordered by. */
  orderBy?: InputMaybe<Scalars['String']['input']>;
  /** Narrows the query results based on the owner element of the entries, per the owners’ IDs. */
  ownerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  perex?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  photo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  position?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  /** Narrows the query results to only entries that are positioned after another element in its structure, provided by its ID. */
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  /** Narrows the query results to only entries that are positioned before another element in its structure, provided by its ID. */
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  /** Narrows the query results based on the entries’ post dates. */
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Determines which site should be selected when querying multi-site elements. */
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  /** Narrows the query results to only the entry that comes immediately before another element in its structure, provided by its ID. */
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  /** Narrows the query results based on the primary owner element of the entries, per the owners’ IDs. */
  primaryOwnerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  /** Narrows the query results based on a reference string. */
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Narrows the query results to elements that relate to the provided element IDs. This argument is ignored, if `relatedToAll` is also used. */
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  /** Narrows the query results to elements that relate to *all* of the provided element IDs. Using this argument will cause `relatedTo` argument to be ignored. **This argument is deprecated.** `relatedTo: ["and", ...ids]` should be used instead. */
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  /** Narrows the query results to elements that relate to an asset list defined with this argument. */
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetRelationCriteriaInput>>>;
  /** Narrows the query results to elements that relate to a category list defined with this argument. */
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryRelationCriteriaInput>>>;
  /** Narrows the query results to elements that relate to an entry list defined with this argument. */
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryRelationCriteriaInput>>>;
  /** Narrows the query results to elements that relate to a tag list defined with this argument. */
  relatedToTags?: InputMaybe<Array<InputMaybe<TagRelationCriteriaInput>>>;
  /** Narrows the query results to elements that relate to a use list defined with this argument. */
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserRelationCriteriaInput>>>;
  /** Narrows the relations based on the field they were created in. */
  relatedViaField?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Narrows the relations based on the site they were created in. */
  relatedViaSite?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Narrows the query results to only elements that match a search query. */
  search?: InputMaybe<Scalars['String']['input']>;
  /** Defines the default options that should be applied terms within the `search` argument. */
  searchTermOptions?: InputMaybe<SearchTermOptions>;
  /** Narrows the query results based on the section handles the entries belong to. */
  section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Narrows the query results based on the sections the entries belong to, per the sections’ IDs. */
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  /** Determines which site(s) the elements should be queried in. Defaults to the current (requested) site. */
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Determines which site(s) the elements should be queried in. Defaults to the current (requested) site. */
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  /** Narrows the query results based on the unique identifier for an element-site relation. */
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  /** Narrows the query results based on the elements’ slugs. */
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Determines which structure data should be joined into the query. */
  structureId?: InputMaybe<Scalars['Int']['input']>;
  text?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  /** Narrows the query results based on the elements’ titles. */
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Narrows the query results based on the entries’ entry type handles. */
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Narrows the query results based on the entries’ entry types, per the types’ IDs. */
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  /** Narrows the query results based on the elements’ UIDs. */
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Determines whether only elements with unique IDs should be returned by the query. */
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  /** Narrows the query results based on the elements’ URIs. */
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  videoUrl?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  /** Explicitly determines whether the query should join in the structure data. */
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};

export type LinkData = {
  __typename: 'LinkData';
  ariaLabel?: Maybe<Scalars['String']['output']>;
  class?: Maybe<Scalars['String']['output']>;
  defaultLabel?: Maybe<Scalars['String']['output']>;
  download?: Maybe<Scalars['Boolean']['output']>;
  element?: Maybe<ElementInterface>;
  elementId?: Maybe<Scalars['Int']['output']>;
  elementSiteId?: Maybe<Scalars['Int']['output']>;
  elementTitle?: Maybe<Scalars['String']['output']>;
  elementType?: Maybe<Scalars['String']['output']>;
  entry?: Maybe<EntryInterface>;
  filename?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  label?: Maybe<Scalars['String']['output']>;
  link?: Maybe<Scalars['String']['output']>;
  rel?: Maybe<Scalars['String']['output']>;
  target?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
  urlSuffix?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

export type Mutation = {
  __typename: 'Mutation';
  ping?: Maybe<Scalars['String']['output']>;
};

export type Query = {
  __typename: 'Query';
  /** Entries within the “Article Content” Matice field. */
  articleContentFieldEntries?: Maybe<Array<Maybe<ArticleContentFieldEntryUnion>>>;
  /** This query is used to query for a single asset. */
  asset?: Maybe<AssetInterface>;
  /** This query is used to return the number of assets. */
  assetCount: Scalars['Int']['output'];
  /** This query is used to query for assets. */
  assets?: Maybe<Array<Maybe<AssetInterface>>>;
  /** Entries within the “Blog” section. */
  blogEntries?: Maybe<Array<Maybe<BlogSectionEntryUnion>>>;
  /** This query is used to query for categories. */
  categories?: Maybe<Array<Maybe<CategoryInterface>>>;
  /** This query is used to query for a single category. */
  category?: Maybe<CategoryInterface>;
  /** This query is used to return the number of categories. */
  categoryCount: Scalars['Int']['output'];
  /** This query is used to query for entries. */
  entries?: Maybe<Array<Maybe<EntryInterface>>>;
  /** This query is used to query for a single entry. */
  entry?: Maybe<EntryInterface>;
  /** This query is used to return the number of entries. */
  entryCount: Scalars['Int']['output'];
  ping?: Maybe<Scalars['String']['output']>;
};


export type QueryArticleContentFieldEntriesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorName?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorPhoto?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorPosition?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before?: InputMaybe<Scalars['String']['input']>;
  bio?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  body?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  caption?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  image?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  items?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  language?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  notRelatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  ownerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  photo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  position?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  primaryOwnerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetRelationCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryRelationCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryRelationCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagRelationCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserRelationCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  searchTermOptions?: InputMaybe<SearchTermOptions>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  text?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  videoUrl?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryAssetArgs = {
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateModified?: InputMaybe<Scalars['String']['input']>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  filename?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  folderId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  hasAlt?: InputMaybe<Scalars['Boolean']['input']>;
  height?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  includeSubfolders?: InputMaybe<Scalars['Boolean']['input']>;
  kind?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  language?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  notRelatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetRelationCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryRelationCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryRelationCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagRelationCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserRelationCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  searchTermOptions?: InputMaybe<SearchTermOptions>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  size?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uploader?: InputMaybe<Scalars['QueryArgument']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  volume?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  volumeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  width?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withTransforms?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryAssetCountArgs = {
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateModified?: InputMaybe<Scalars['String']['input']>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  filename?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  folderId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  hasAlt?: InputMaybe<Scalars['Boolean']['input']>;
  height?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  includeSubfolders?: InputMaybe<Scalars['Boolean']['input']>;
  kind?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  language?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  notRelatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetRelationCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryRelationCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryRelationCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagRelationCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserRelationCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  searchTermOptions?: InputMaybe<SearchTermOptions>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  size?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uploader?: InputMaybe<Scalars['QueryArgument']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  volume?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  volumeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  width?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withTransforms?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryAssetsArgs = {
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateModified?: InputMaybe<Scalars['String']['input']>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  filename?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  folderId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  hasAlt?: InputMaybe<Scalars['Boolean']['input']>;
  height?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  includeSubfolders?: InputMaybe<Scalars['Boolean']['input']>;
  kind?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  language?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  notRelatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetRelationCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryRelationCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryRelationCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagRelationCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserRelationCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  searchTermOptions?: InputMaybe<SearchTermOptions>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  size?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uploader?: InputMaybe<Scalars['QueryArgument']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  volume?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  volumeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  width?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withTransforms?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryBlogEntriesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before?: InputMaybe<Scalars['String']['input']>;
  blogCategory?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  featuredImage?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  isFeatured?: InputMaybe<Scalars['Boolean']['input']>;
  language?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  metaDescription?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  metaTitle?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  notRelatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  perex?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  primaryOwnerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetRelationCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryRelationCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryRelationCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagRelationCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserRelationCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  searchTermOptions?: InputMaybe<SearchTermOptions>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryCategoriesArgs = {
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  group?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  groupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  language?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  notRelatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetRelationCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryRelationCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryRelationCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagRelationCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserRelationCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  searchTermOptions?: InputMaybe<SearchTermOptions>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryCategoryArgs = {
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  group?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  groupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  language?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  notRelatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetRelationCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryRelationCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryRelationCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagRelationCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserRelationCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  searchTermOptions?: InputMaybe<SearchTermOptions>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryCategoryCountArgs = {
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  group?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  groupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  language?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  notRelatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetRelationCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryRelationCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryRelationCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagRelationCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserRelationCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  searchTermOptions?: InputMaybe<SearchTermOptions>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryEntriesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorName?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorPhoto?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorPosition?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before?: InputMaybe<Scalars['String']['input']>;
  bio?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  blogCategory?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  body?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  caption?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  featuredImage?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  field?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fieldId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  image?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  isFeatured?: InputMaybe<Scalars['Boolean']['input']>;
  items?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  language?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  metaDescription?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  metaTitle?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  notRelatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  ownerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  perex?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  photo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  position?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  primaryOwnerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetRelationCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryRelationCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryRelationCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagRelationCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserRelationCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  searchTermOptions?: InputMaybe<SearchTermOptions>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  text?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  videoUrl?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryEntryArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorName?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorPhoto?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorPosition?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before?: InputMaybe<Scalars['String']['input']>;
  bio?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  blogCategory?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  body?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  caption?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  featuredImage?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  field?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fieldId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  image?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  isFeatured?: InputMaybe<Scalars['Boolean']['input']>;
  items?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  language?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  metaDescription?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  metaTitle?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  notRelatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  ownerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  perex?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  photo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  position?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  primaryOwnerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetRelationCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryRelationCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryRelationCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagRelationCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserRelationCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  searchTermOptions?: InputMaybe<SearchTermOptions>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  text?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  videoUrl?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryEntryCountArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorName?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorPhoto?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorPosition?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before?: InputMaybe<Scalars['String']['input']>;
  bio?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  blogCategory?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  body?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  caption?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  featuredImage?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  field?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fieldId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  image?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  isFeatured?: InputMaybe<Scalars['Boolean']['input']>;
  items?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  language?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  metaDescription?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  metaTitle?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  notRelatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  ownerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  perex?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  photo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  position?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  primaryOwnerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetRelationCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryRelationCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryRelationCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagRelationCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserRelationCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  searchTermOptions?: InputMaybe<SearchTermOptions>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  text?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  videoUrl?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};

export type SearchTermOptions = {
  exact?: InputMaybe<Scalars['Boolean']['input']>;
  exclude?: InputMaybe<Scalars['Boolean']['input']>;
  subLeft?: InputMaybe<Scalars['Boolean']['input']>;
  subRight?: InputMaybe<Scalars['Boolean']['input']>;
};

export type TagRelationCriteriaInput = {
  /** Narrows the query results based on the elements’ creation dates. */
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Narrows the query results based on the elements’ last-updated dates. */
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Causes the query results to be returned in the order specified by the `id` argument. */
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  /** Narrows the query results based on the tag groups the tags belong to per the group’s handles. */
  group?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Narrows the query results based on the tag groups the tags belong to, per the groups’ IDs. */
  groupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  /** Narrows the query results based on the elements’ IDs. */
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  /** Causes the query results to be returned in reverse order. */
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  /** Determines which site(s) the elements should be queried in, based on their language. */
  language?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Sets the limit for paginated results. */
  limit?: InputMaybe<Scalars['Int']['input']>;
  /** Narrows the query results to elements that do not relate to the provided element IDs. */
  notRelatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  /** Sets the offset for paginated results. */
  offset?: InputMaybe<Scalars['Int']['input']>;
  /** Sets the field the returned elements should be ordered by. */
  orderBy?: InputMaybe<Scalars['String']['input']>;
  /** Determines which site should be selected when querying multi-site elements. */
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  /** Narrows the query results based on a reference string. */
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Narrows the query results to elements that relate to the provided element IDs. This argument is ignored, if `relatedToAll` is also used. */
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  /** Narrows the query results to elements that relate to *all* of the provided element IDs. Using this argument will cause `relatedTo` argument to be ignored. **This argument is deprecated.** `relatedTo: ["and", ...ids]` should be used instead. */
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  /** Narrows the query results to elements that relate to an asset list defined with this argument. */
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetRelationCriteriaInput>>>;
  /** Narrows the query results to elements that relate to a category list defined with this argument. */
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryRelationCriteriaInput>>>;
  /** Narrows the query results to elements that relate to an entry list defined with this argument. */
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryRelationCriteriaInput>>>;
  /** Narrows the query results to elements that relate to a tag list defined with this argument. */
  relatedToTags?: InputMaybe<Array<InputMaybe<TagRelationCriteriaInput>>>;
  /** Narrows the query results to elements that relate to a use list defined with this argument. */
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserRelationCriteriaInput>>>;
  /** Narrows the relations based on the field they were created in. */
  relatedViaField?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Narrows the relations based on the site they were created in. */
  relatedViaSite?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Narrows the query results to only elements that match a search query. */
  search?: InputMaybe<Scalars['String']['input']>;
  /** Defines the default options that should be applied terms within the `search` argument. */
  searchTermOptions?: InputMaybe<SearchTermOptions>;
  /** Determines which site(s) the elements should be queried in. Defaults to the current (requested) site. */
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Determines which site(s) the elements should be queried in. Defaults to the current (requested) site. */
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  /** Narrows the query results based on the unique identifier for an element-site relation. */
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  /** Narrows the query results based on the elements’ slugs. */
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Narrows the query results based on the elements’ titles. */
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Narrows the query results based on the elements’ UIDs. */
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Determines whether only elements with unique IDs should be returned by the query. */
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  /** Narrows the query results based on the elements’ URIs. */
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type User = ElementInterface & UserInterface & {
  __typename: 'User';
  /** Return a number of related elements for a field. */
  _count?: Maybe<Scalars['Int']['output']>;
  /** The user’s addresses. */
  addresses?: Maybe<Array<Maybe<AddressInterface>>>;
  /** The handle of the site the user is affiliated with. */
  affiliatedSiteHandle?: Maybe<Scalars['String']['output']>;
  /** The ID of the site the user is affiliated with. */
  affiliatedSiteId?: Maybe<Scalars['Int']['output']>;
  /** Whether the element is archived. */
  archived?: Maybe<Scalars['Boolean']['output']>;
  /** The date the element was created. */
  dateCreated?: Maybe<Scalars['DateTime']['output']>;
  /** The date the element was last updated. */
  dateUpdated?: Maybe<Scalars['DateTime']['output']>;
  /** The user’s email. */
  email?: Maybe<Scalars['String']['output']>;
  /** Whether the element is enabled. */
  enabled?: Maybe<Scalars['Boolean']['output']>;
  /** The user’s first name. */
  firstName?: Maybe<Scalars['String']['output']>;
  /** The user’s first name or username. */
  friendlyName?: Maybe<Scalars['String']['output']>;
  /** The user’s full name. */
  fullName?: Maybe<Scalars['String']['output']>;
  /** The ID of the entity */
  id?: Maybe<Scalars['ID']['output']>;
  /** The language of the site element is associated with. */
  language?: Maybe<Scalars['String']['output']>;
  /** The user’s last name. */
  lastName?: Maybe<Scalars['String']['output']>;
  /** The user’s full name or username. */
  name: Scalars['String']['output'];
  /** The user’s photo. */
  photo?: Maybe<AssetInterface>;
  /** The user’s preferences. */
  preferences: Scalars['String']['output'];
  /** The user’s preferred language. */
  preferredLanguage?: Maybe<Scalars['String']['output']>;
  /** The element’s search score, if the `search` parameter was used when querying for the element. */
  searchScore?: Maybe<Scalars['Int']['output']>;
  /** The handle of the site the element is associated with. */
  siteHandle?: Maybe<Scalars['String']['output']>;
  /** The ID of the site the element is associated with. */
  siteId?: Maybe<Scalars['Int']['output']>;
  /** The unique identifier for an element-site relation. */
  siteSettingsId?: Maybe<Scalars['ID']['output']>;
  /** The element’s slug. */
  slug?: Maybe<Scalars['String']['output']>;
  /** The element’s status. */
  status?: Maybe<Scalars['String']['output']>;
  /** The element’s title. */
  title?: Maybe<Scalars['String']['output']>;
  /** Whether the element has been soft-deleted. */
  trashed?: Maybe<Scalars['Boolean']['output']>;
  /** The UID of the entity */
  uid?: Maybe<Scalars['String']['output']>;
  /** The element’s URI. */
  uri?: Maybe<Scalars['String']['output']>;
  /** The username. */
  username?: Maybe<Scalars['String']['output']>;
};


export type User_CountArgs = {
  field: Scalars['String']['input'];
};


export type UserAddressesArgs = {
  administrativeArea?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  countryCode?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  language?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  notRelatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  ownerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetRelationCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryRelationCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryRelationCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagRelationCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserRelationCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  searchTermOptions?: InputMaybe<SearchTermOptions>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/** This is the interface implemented by all users. */
export type UserInterface = {
  /** Return a number of related elements for a field. */
  _count?: Maybe<Scalars['Int']['output']>;
  /** The user’s addresses. */
  addresses?: Maybe<Array<Maybe<AddressInterface>>>;
  /** The handle of the site the user is affiliated with. */
  affiliatedSiteHandle?: Maybe<Scalars['String']['output']>;
  /** The ID of the site the user is affiliated with. */
  affiliatedSiteId?: Maybe<Scalars['Int']['output']>;
  /** Whether the element is archived. */
  archived?: Maybe<Scalars['Boolean']['output']>;
  /** The date the element was created. */
  dateCreated?: Maybe<Scalars['DateTime']['output']>;
  /** The date the element was last updated. */
  dateUpdated?: Maybe<Scalars['DateTime']['output']>;
  /** The user’s email. */
  email?: Maybe<Scalars['String']['output']>;
  /** Whether the element is enabled. */
  enabled?: Maybe<Scalars['Boolean']['output']>;
  /** The user’s first name. */
  firstName?: Maybe<Scalars['String']['output']>;
  /** The user’s first name or username. */
  friendlyName?: Maybe<Scalars['String']['output']>;
  /** The user’s full name. */
  fullName?: Maybe<Scalars['String']['output']>;
  /** The ID of the entity */
  id?: Maybe<Scalars['ID']['output']>;
  /** The language of the site element is associated with. */
  language?: Maybe<Scalars['String']['output']>;
  /** The user’s last name. */
  lastName?: Maybe<Scalars['String']['output']>;
  /** The user’s full name or username. */
  name: Scalars['String']['output'];
  /** The user’s photo. */
  photo?: Maybe<AssetInterface>;
  /** The user’s preferences. */
  preferences: Scalars['String']['output'];
  /** The user’s preferred language. */
  preferredLanguage?: Maybe<Scalars['String']['output']>;
  /** The element’s search score, if the `search` parameter was used when querying for the element. */
  searchScore?: Maybe<Scalars['Int']['output']>;
  /** The handle of the site the element is associated with. */
  siteHandle?: Maybe<Scalars['String']['output']>;
  /** The ID of the site the element is associated with. */
  siteId?: Maybe<Scalars['Int']['output']>;
  /** The unique identifier for an element-site relation. */
  siteSettingsId?: Maybe<Scalars['ID']['output']>;
  /** The element’s slug. */
  slug?: Maybe<Scalars['String']['output']>;
  /** The element’s status. */
  status?: Maybe<Scalars['String']['output']>;
  /** The element’s title. */
  title?: Maybe<Scalars['String']['output']>;
  /** Whether the element has been soft-deleted. */
  trashed?: Maybe<Scalars['Boolean']['output']>;
  /** The UID of the entity */
  uid?: Maybe<Scalars['String']['output']>;
  /** The element’s URI. */
  uri?: Maybe<Scalars['String']['output']>;
  /** The username. */
  username?: Maybe<Scalars['String']['output']>;
};


/** This is the interface implemented by all users. */
export type UserInterface_CountArgs = {
  field: Scalars['String']['input'];
};


/** This is the interface implemented by all users. */
export type UserInterfaceAddressesArgs = {
  administrativeArea?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  countryCode?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  language?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  notRelatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  ownerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetRelationCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryRelationCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryRelationCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagRelationCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserRelationCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  searchTermOptions?: InputMaybe<SearchTermOptions>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type UserRelationCriteriaInput = {
  /** Determines which site(s) the users should be affiliated with. */
  affiliatedSite?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Determines which site(s) the users should be affiliated with. */
  affiliatedSiteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  /** Narrows the query results based on whether the users have uploaded any assets. */
  assetUploaders?: InputMaybe<Scalars['Boolean']['input']>;
  /** Narrows the query results based on whether the users are listed as the author of any entries. */
  authors?: InputMaybe<Scalars['Boolean']['input']>;
  /** Narrows the query results based on the elements’ creation dates. */
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Narrows the query results based on the elements’ last-updated dates. */
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Narrows the query results based on the users’ email addresses. */
  email?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Narrows the query results based on the users’ first names. */
  firstName?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Causes the query results to be returned in the order specified by the `id` argument. */
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  /** Narrows the query results based on the users’ full names. */
  fullName?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Narrows the query results based on the user group the users belong to. */
  group?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  /** Narrows the query results based on the user group the users belong to, per the groups’ IDs. */
  groupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  /** Narrows the query results to only users that have (or don’t have) a user photo. */
  hasPhoto?: InputMaybe<Scalars['Boolean']['input']>;
  /** Narrows the query results based on the elements’ IDs. */
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  /** Causes the query results to be returned in reverse order. */
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  /** Determines which site(s) the elements should be queried in, based on their language. */
  language?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Narrows the query results based on the users’ last names. */
  lastName?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Sets the limit for paginated results. */
  limit?: InputMaybe<Scalars['Int']['input']>;
  /** Narrows the query results to elements that do not relate to the provided element IDs. */
  notRelatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  /** Sets the offset for paginated results. */
  offset?: InputMaybe<Scalars['Int']['input']>;
  /** Sets the field the returned elements should be ordered by. */
  orderBy?: InputMaybe<Scalars['String']['input']>;
  /** Determines which site should be selected when querying multi-site elements. */
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  /** Narrows the query results based on a reference string. */
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Narrows the query results to elements that relate to the provided element IDs. This argument is ignored, if `relatedToAll` is also used. */
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  /** Narrows the query results to elements that relate to *all* of the provided element IDs. Using this argument will cause `relatedTo` argument to be ignored. **This argument is deprecated.** `relatedTo: ["and", ...ids]` should be used instead. */
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  /** Narrows the query results to elements that relate to an asset list defined with this argument. */
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetRelationCriteriaInput>>>;
  /** Narrows the query results to elements that relate to a category list defined with this argument. */
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryRelationCriteriaInput>>>;
  /** Narrows the query results to elements that relate to an entry list defined with this argument. */
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryRelationCriteriaInput>>>;
  /** Narrows the query results to elements that relate to a tag list defined with this argument. */
  relatedToTags?: InputMaybe<Array<InputMaybe<TagRelationCriteriaInput>>>;
  /** Narrows the query results to elements that relate to a use list defined with this argument. */
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserRelationCriteriaInput>>>;
  /** Narrows the relations based on the field they were created in. */
  relatedViaField?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Narrows the relations based on the site they were created in. */
  relatedViaSite?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Narrows the query results to only elements that match a search query. */
  search?: InputMaybe<Scalars['String']['input']>;
  /** Defines the default options that should be applied terms within the `search` argument. */
  searchTermOptions?: InputMaybe<SearchTermOptions>;
  /** Determines which site(s) the elements should be queried in. Defaults to the current (requested) site. */
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Determines which site(s) the elements should be queried in. Defaults to the current (requested) site. */
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  /** Narrows the query results based on the unique identifier for an element-site relation. */
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  /** Narrows the query results based on the elements’ slugs. */
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Narrows the query results based on the elements’ titles. */
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Narrows the query results based on the elements’ UIDs. */
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Determines whether only elements with unique IDs should be returned by the query. */
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  /** Narrows the query results based on the elements’ URIs. */
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Narrows the query results based on the users’ usernames. */
  username?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ArticleContentFieldEntryUnion = AuthorCard_Entry | BulletList_Entry | Checklist_Entry | Heading_Entry | ImageWithCaption_Entry | NumberedList_Entry | Quote_Entry | TextBlock_Entry | YoutubeEmbed_Entry;

export type ArticleContent_MatrixField = AuthorCard_Entry | BulletList_Entry | Checklist_Entry | Heading_Entry | ImageWithCaption_Entry | NumberedList_Entry | Quote_Entry | TextBlock_Entry | YoutubeEmbed_Entry;

export type AuthorCard_Entry = ElementInterface & EntryInterface & {
  __typename: 'authorCard_Entry';
  /** Return a number of related elements for a field. */
  _count?: Maybe<Scalars['Int']['output']>;
  /** The entry’s ancestors, if the section is a structure. Accepts the same arguments as the `entries` query. */
  ancestors: Array<EntryInterface>;
  /** Whether the element is archived. */
  archived?: Maybe<Scalars['Boolean']['output']>;
  bio?: Maybe<Scalars['String']['output']>;
  /** Returns the entry’s canonical ID. */
  canonicalId?: Maybe<Scalars['Int']['output']>;
  /** Returns the entry’s canonical UUID. */
  canonicalUid?: Maybe<Scalars['String']['output']>;
  /** The entry’s children, if the section is a structure. Accepts the same arguments as the `entries` query. */
  children: Array<EntryInterface>;
  /** The date the element was created. */
  dateCreated?: Maybe<Scalars['DateTime']['output']>;
  /** The date the element was last updated. */
  dateUpdated?: Maybe<Scalars['DateTime']['output']>;
  /** The entry’s descendants, if the section is a structure. Accepts the same arguments as the `entries` query. */
  descendants: Array<EntryInterface>;
  /** The draft ID (from the `drafts` table). */
  draftId?: Maybe<Scalars['Int']['output']>;
  /** The name of the draft. */
  draftName?: Maybe<Scalars['String']['output']>;
  /** The notes for the draft. */
  draftNotes?: Maybe<Scalars['String']['output']>;
  /** Whether the element is enabled. */
  enabled?: Maybe<Scalars['Boolean']['output']>;
  /** Whether the element is enabled for the site. */
  enabledForSite?: Maybe<Scalars['Boolean']['output']>;
  /** The expiry date of the entry. */
  expiryDate?: Maybe<Scalars['DateTime']['output']>;
  /** The handle of the field that contains the entry. */
  fieldHandle?: Maybe<Scalars['String']['output']>;
  /** The ID of the field that contains the entry. */
  fieldId?: Maybe<Scalars['Int']['output']>;
  /** The ID of the entity */
  id?: Maybe<Scalars['ID']['output']>;
  /** Returns whether this is a draft. */
  isDraft?: Maybe<Scalars['Boolean']['output']>;
  /** Returns whether this is a revision. */
  isRevision?: Maybe<Scalars['Boolean']['output']>;
  /** Returns whether this is an unpublished draft. */
  isUnpublishedDraft?: Maybe<Scalars['Boolean']['output']>;
  /** The language of the site element is associated with. */
  language?: Maybe<Scalars['String']['output']>;
  /** The element’s level within its structure */
  level?: Maybe<Scalars['Int']['output']>;
  /** The element’s left position within its structure. */
  lft?: Maybe<Scalars['Int']['output']>;
  /** The same element in other locales. */
  localized: Array<EntryInterface>;
  /** Returns the next element relative to this one, from a given set of criteria. */
  next?: Maybe<EntryInterface>;
  /** The ID of the entry’s owner element. */
  ownerId?: Maybe<Scalars['Int']['output']>;
  /** The entry’s parent, if the section is a structure. */
  parent?: Maybe<EntryInterface>;
  photo: Array<Maybe<AssetInterface>>;
  position?: Maybe<Scalars['String']['output']>;
  /** The entry’s post date. */
  postDate?: Maybe<Scalars['DateTime']['output']>;
  /** Returns the previous element relative to this one, from a given set of criteria. */
  prev?: Maybe<EntryInterface>;
  /** The revision ID (from the `revisions` table). */
  revisionId?: Maybe<Scalars['Int']['output']>;
  /** The revision notes (from the `revisions` table). */
  revisionNotes?: Maybe<Scalars['String']['output']>;
  /** The element’s right position within its structure. */
  rgt?: Maybe<Scalars['Int']['output']>;
  /** The element’s structure’s root ID */
  root?: Maybe<Scalars['Int']['output']>;
  /** The element’s search score, if the `search` parameter was used when querying for the element. */
  searchScore?: Maybe<Scalars['Int']['output']>;
  /** The handle of the section that contains the entry. */
  sectionHandle?: Maybe<Scalars['String']['output']>;
  /** The ID of the section that contains the entry. */
  sectionId?: Maybe<Scalars['Int']['output']>;
  /** The handle of the site the element is associated with. */
  siteHandle?: Maybe<Scalars['String']['output']>;
  /** The ID of the site the element is associated with. */
  siteId?: Maybe<Scalars['Int']['output']>;
  /** The unique identifier for an element-site relation. */
  siteSettingsId?: Maybe<Scalars['ID']['output']>;
  /** The element’s slug. */
  slug?: Maybe<Scalars['String']['output']>;
  /** The entry’s position within the field that contains it. */
  sortOrder?: Maybe<Scalars['Int']['output']>;
  /**
   * Returns the entry’s canonical ID.
   * @deprecated this field has been deprecated since Craft 3.7.7. Use `canonicalId` instead.
   */
  sourceId?: Maybe<Scalars['Int']['output']>;
  /**
   * Returns the entry’s canonical UUID.
   * @deprecated this field has been deprecated since Craft 3.7.7. Use `canonicalUid` instead.
   */
  sourceUid?: Maybe<Scalars['String']['output']>;
  /** The element’s status. */
  status?: Maybe<Scalars['String']['output']>;
  /** The element’s structure ID. */
  structureId?: Maybe<Scalars['Int']['output']>;
  /** The element’s title. */
  title?: Maybe<Scalars['String']['output']>;
  /** Whether the element has been soft-deleted. */
  trashed?: Maybe<Scalars['Boolean']['output']>;
  /** The handle of the entry type that contains the entry. */
  typeHandle: Scalars['String']['output'];
  /** The ID of the entry type that contains the entry. */
  typeId: Scalars['Int']['output'];
  /** The UID of the entity */
  uid?: Maybe<Scalars['String']['output']>;
  /** The element’s URI. */
  uri?: Maybe<Scalars['String']['output']>;
  /** The element’s full URL */
  url?: Maybe<Scalars['String']['output']>;
};


export type AuthorCard_Entry_CountArgs = {
  field: Scalars['String']['input'];
};


export type AuthorCard_EntryAncestorsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before?: InputMaybe<Scalars['String']['input']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  field?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fieldId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  language?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  notRelatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  ownerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  primaryOwnerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetRelationCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryRelationCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryRelationCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagRelationCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserRelationCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  searchTermOptions?: InputMaybe<SearchTermOptions>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};


export type AuthorCard_EntryChildrenArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before?: InputMaybe<Scalars['String']['input']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  field?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fieldId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  language?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  notRelatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  ownerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  primaryOwnerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetRelationCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryRelationCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryRelationCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagRelationCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserRelationCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  searchTermOptions?: InputMaybe<SearchTermOptions>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};


export type AuthorCard_EntryDescendantsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before?: InputMaybe<Scalars['String']['input']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  field?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fieldId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  language?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  notRelatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  ownerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  primaryOwnerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetRelationCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryRelationCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryRelationCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagRelationCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserRelationCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  searchTermOptions?: InputMaybe<SearchTermOptions>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};


export type AuthorCard_EntryLocalizedArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorName?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorPhoto?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorPosition?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before?: InputMaybe<Scalars['String']['input']>;
  bio?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  blogCategory?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  body?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  caption?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  featuredImage?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  field?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fieldId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  image?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  isFeatured?: InputMaybe<Scalars['Boolean']['input']>;
  items?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  language?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  metaDescription?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  metaTitle?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  notRelatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  ownerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  perex?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  photo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  position?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  primaryOwnerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetRelationCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryRelationCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryRelationCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagRelationCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserRelationCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  searchTermOptions?: InputMaybe<SearchTermOptions>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  text?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  videoUrl?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};


export type AuthorCard_EntryNextArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorName?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorPhoto?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorPosition?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before?: InputMaybe<Scalars['String']['input']>;
  bio?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  blogCategory?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  body?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  caption?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  featuredImage?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  field?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fieldId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  image?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  isFeatured?: InputMaybe<Scalars['Boolean']['input']>;
  items?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  language?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  metaDescription?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  metaTitle?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  notRelatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  ownerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  perex?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  photo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  position?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  primaryOwnerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetRelationCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryRelationCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryRelationCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagRelationCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserRelationCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  searchTermOptions?: InputMaybe<SearchTermOptions>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  text?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  videoUrl?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};


export type AuthorCard_EntryParentArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before?: InputMaybe<Scalars['String']['input']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  field?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fieldId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  language?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  notRelatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  ownerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  primaryOwnerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetRelationCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryRelationCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryRelationCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagRelationCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserRelationCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  searchTermOptions?: InputMaybe<SearchTermOptions>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};


export type AuthorCard_EntryPhotoArgs = {
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateModified?: InputMaybe<Scalars['String']['input']>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  filename?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  folderId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  hasAlt?: InputMaybe<Scalars['Boolean']['input']>;
  height?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  includeSubfolders?: InputMaybe<Scalars['Boolean']['input']>;
  kind?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  language?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  notRelatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetRelationCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryRelationCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryRelationCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagRelationCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserRelationCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  searchTermOptions?: InputMaybe<SearchTermOptions>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  size?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uploader?: InputMaybe<Scalars['QueryArgument']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  volume?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  volumeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  width?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withTransforms?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type AuthorCard_EntryPrevArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorName?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorPhoto?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorPosition?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before?: InputMaybe<Scalars['String']['input']>;
  bio?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  blogCategory?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  body?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  caption?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  featuredImage?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  field?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fieldId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  image?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  isFeatured?: InputMaybe<Scalars['Boolean']['input']>;
  items?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  language?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  metaDescription?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  metaTitle?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  notRelatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  ownerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  perex?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  photo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  position?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  primaryOwnerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetRelationCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryRelationCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryRelationCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagRelationCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserRelationCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  searchTermOptions?: InputMaybe<SearchTermOptions>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  text?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  videoUrl?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};

export type AuthorImages_Asset = AssetInterface & ElementInterface & {
  __typename: 'authorImages_Asset';
  /** Return a number of related elements for a field. */
  _count?: Maybe<Scalars['Int']['output']>;
  /** Alternative text for the asset. */
  alt?: Maybe<Scalars['String']['output']>;
  /** Whether the element is archived. */
  archived?: Maybe<Scalars['Boolean']['output']>;
  /** The date the element was created. */
  dateCreated?: Maybe<Scalars['DateTime']['output']>;
  /** The date the asset file was last modified. */
  dateModified?: Maybe<Scalars['DateTime']['output']>;
  /** The date the element was last updated. */
  dateUpdated?: Maybe<Scalars['DateTime']['output']>;
  /** Whether the element is enabled. */
  enabled?: Maybe<Scalars['Boolean']['output']>;
  /** The file extension for the asset file. */
  extension: Scalars['String']['output'];
  /** The filename of the asset file. */
  filename: Scalars['String']['output'];
  /** The focal point represented as an array with `x` and `y` keys, or null if it’s not an image. */
  focalPoint?: Maybe<Array<Maybe<Scalars['Float']['output']>>>;
  /** The ID of the folder that the asset belongs to. */
  folderId: Scalars['Int']['output'];
  /** Returns the file’s format. */
  format?: Maybe<Scalars['String']['output']>;
  /** Whether a user-defined focal point is set on the asset. */
  hasFocalPoint: Scalars['Boolean']['output'];
  /** The height in pixels or null if it’s not an image. */
  height?: Maybe<Scalars['Int']['output']>;
  /** The ID of the entity */
  id?: Maybe<Scalars['ID']['output']>;
  /** An `<img>` tag based on this asset. */
  img?: Maybe<Scalars['String']['output']>;
  /** The file kind. */
  kind: Scalars['String']['output'];
  /** The language of the site element is associated with. */
  language?: Maybe<Scalars['String']['output']>;
  /** The file’s MIME type, if it can be determined. */
  mimeType?: Maybe<Scalars['String']['output']>;
  /** Returns the next element relative to this one, from a given set of criteria. */
  next?: Maybe<AssetInterface>;
  /** The asset’s path in the volume. */
  path: Scalars['String']['output'];
  /** Returns the previous element relative to this one, from a given set of criteria. */
  prev?: Maybe<AssetInterface>;
  /** The element’s search score, if the `search` parameter was used when querying for the element. */
  searchScore?: Maybe<Scalars['Int']['output']>;
  /** The handle of the site the element is associated with. */
  siteHandle?: Maybe<Scalars['String']['output']>;
  /** The ID of the site the element is associated with. */
  siteId?: Maybe<Scalars['Int']['output']>;
  /** The unique identifier for an element-site relation. */
  siteSettingsId?: Maybe<Scalars['ID']['output']>;
  /** The file size in bytes. */
  size?: Maybe<Scalars['String']['output']>;
  /** The element’s slug. */
  slug?: Maybe<Scalars['String']['output']>;
  /** Returns a `srcset` attribute value based on the given widths or x-descriptors. */
  srcset?: Maybe<Scalars['String']['output']>;
  /** The element’s status. */
  status?: Maybe<Scalars['String']['output']>;
  /** The element’s title. */
  title?: Maybe<Scalars['String']['output']>;
  /** Whether the element has been soft-deleted. */
  trashed?: Maybe<Scalars['Boolean']['output']>;
  /** The UID of the entity */
  uid?: Maybe<Scalars['String']['output']>;
  /** The element’s URI. */
  uri?: Maybe<Scalars['String']['output']>;
  /** The full URL of the asset. This field accepts the same fields as the `transform` directive. */
  url?: Maybe<Scalars['String']['output']>;
  /** The ID of the volume that the asset belongs to. */
  volumeId?: Maybe<Scalars['Int']['output']>;
  /** The width in pixels or null if it’s not an image. */
  width?: Maybe<Scalars['Int']['output']>;
};


export type AuthorImages_Asset_CountArgs = {
  field: Scalars['String']['input'];
};


export type AuthorImages_AssetFormatArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
  handle?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['Int']['input']>;
  immediately?: InputMaybe<Scalars['Boolean']['input']>;
  interlace?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<Scalars['String']['input']>;
  position?: InputMaybe<Scalars['String']['input']>;
  quality?: InputMaybe<Scalars['Int']['input']>;
  transform?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Int']['input']>;
};


export type AuthorImages_AssetHeightArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
  handle?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['Int']['input']>;
  immediately?: InputMaybe<Scalars['Boolean']['input']>;
  interlace?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<Scalars['String']['input']>;
  position?: InputMaybe<Scalars['String']['input']>;
  quality?: InputMaybe<Scalars['Int']['input']>;
  transform?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Int']['input']>;
};


export type AuthorImages_AssetNextArgs = {
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateModified?: InputMaybe<Scalars['String']['input']>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  filename?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  folderId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  hasAlt?: InputMaybe<Scalars['Boolean']['input']>;
  height?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  includeSubfolders?: InputMaybe<Scalars['Boolean']['input']>;
  kind?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  language?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  notRelatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetRelationCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryRelationCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryRelationCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagRelationCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserRelationCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  searchTermOptions?: InputMaybe<SearchTermOptions>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  size?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uploader?: InputMaybe<Scalars['QueryArgument']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  volume?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  volumeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  width?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withTransforms?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type AuthorImages_AssetPrevArgs = {
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateModified?: InputMaybe<Scalars['String']['input']>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  filename?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  folderId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  hasAlt?: InputMaybe<Scalars['Boolean']['input']>;
  height?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  includeSubfolders?: InputMaybe<Scalars['Boolean']['input']>;
  kind?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  language?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  notRelatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetRelationCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryRelationCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryRelationCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagRelationCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserRelationCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  searchTermOptions?: InputMaybe<SearchTermOptions>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  size?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uploader?: InputMaybe<Scalars['QueryArgument']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  volume?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  volumeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  width?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withTransforms?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type AuthorImages_AssetSrcsetArgs = {
  sizes: Array<Scalars['String']['input']>;
};


export type AuthorImages_AssetUrlArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
  handle?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['Int']['input']>;
  immediately?: InputMaybe<Scalars['Boolean']['input']>;
  interlace?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<Scalars['String']['input']>;
  position?: InputMaybe<Scalars['String']['input']>;
  quality?: InputMaybe<Scalars['Int']['input']>;
  transform?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Int']['input']>;
};


export type AuthorImages_AssetWidthArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
  handle?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['Int']['input']>;
  immediately?: InputMaybe<Scalars['Boolean']['input']>;
  interlace?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<Scalars['String']['input']>;
  position?: InputMaybe<Scalars['String']['input']>;
  quality?: InputMaybe<Scalars['Int']['input']>;
  transform?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Int']['input']>;
};

export type BlogArticle_Entry = ElementInterface & EntryInterface & {
  __typename: 'blogArticle_Entry';
  /** Return a number of related elements for a field. */
  _count?: Maybe<Scalars['Int']['output']>;
  /** The entry’s ancestors, if the section is a structure. Accepts the same arguments as the `entries` query. */
  ancestors: Array<EntryInterface>;
  /** Whether the element is archived. */
  archived?: Maybe<Scalars['Boolean']['output']>;
  articleContent: Array<Maybe<ArticleContent_MatrixField>>;
  blogCategory: Array<Maybe<CategoryInterface>>;
  /** Returns the entry’s canonical ID. */
  canonicalId?: Maybe<Scalars['Int']['output']>;
  /** Returns the entry’s canonical UUID. */
  canonicalUid?: Maybe<Scalars['String']['output']>;
  /** The entry’s children, if the section is a structure. Accepts the same arguments as the `entries` query. */
  children: Array<EntryInterface>;
  /** The date the element was created. */
  dateCreated?: Maybe<Scalars['DateTime']['output']>;
  /** The date the element was last updated. */
  dateUpdated?: Maybe<Scalars['DateTime']['output']>;
  /** The entry’s descendants, if the section is a structure. Accepts the same arguments as the `entries` query. */
  descendants: Array<EntryInterface>;
  /** The draft ID (from the `drafts` table). */
  draftId?: Maybe<Scalars['Int']['output']>;
  /** The name of the draft. */
  draftName?: Maybe<Scalars['String']['output']>;
  /** The notes for the draft. */
  draftNotes?: Maybe<Scalars['String']['output']>;
  /** Whether the element is enabled. */
  enabled?: Maybe<Scalars['Boolean']['output']>;
  /** Whether the element is enabled for the site. */
  enabledForSite?: Maybe<Scalars['Boolean']['output']>;
  /** The expiry date of the entry. */
  expiryDate?: Maybe<Scalars['DateTime']['output']>;
  featuredImage: Array<Maybe<AssetInterface>>;
  /** The handle of the field that contains the entry. */
  fieldHandle?: Maybe<Scalars['String']['output']>;
  /** The ID of the field that contains the entry. */
  fieldId?: Maybe<Scalars['Int']['output']>;
  /** The ID of the entity */
  id?: Maybe<Scalars['ID']['output']>;
  /** Returns whether this is a draft. */
  isDraft?: Maybe<Scalars['Boolean']['output']>;
  isFeatured?: Maybe<Scalars['Boolean']['output']>;
  /** Returns whether this is a revision. */
  isRevision?: Maybe<Scalars['Boolean']['output']>;
  /** Returns whether this is an unpublished draft. */
  isUnpublishedDraft?: Maybe<Scalars['Boolean']['output']>;
  /** The language of the site element is associated with. */
  language?: Maybe<Scalars['String']['output']>;
  /** The element’s level within its structure */
  level?: Maybe<Scalars['Int']['output']>;
  /** The element’s left position within its structure. */
  lft?: Maybe<Scalars['Int']['output']>;
  /** The same element in other locales. */
  localized: Array<EntryInterface>;
  metaDescription?: Maybe<Scalars['String']['output']>;
  metaTitle?: Maybe<Scalars['String']['output']>;
  /** Returns the next element relative to this one, from a given set of criteria. */
  next?: Maybe<EntryInterface>;
  /** The ID of the entry’s owner element. */
  ownerId?: Maybe<Scalars['Int']['output']>;
  /** The entry’s parent, if the section is a structure. */
  parent?: Maybe<EntryInterface>;
  perex?: Maybe<Scalars['String']['output']>;
  /** The entry’s post date. */
  postDate?: Maybe<Scalars['DateTime']['output']>;
  /** Returns the previous element relative to this one, from a given set of criteria. */
  prev?: Maybe<EntryInterface>;
  /** The revision ID (from the `revisions` table). */
  revisionId?: Maybe<Scalars['Int']['output']>;
  /** The revision notes (from the `revisions` table). */
  revisionNotes?: Maybe<Scalars['String']['output']>;
  /** The element’s right position within its structure. */
  rgt?: Maybe<Scalars['Int']['output']>;
  /** The element’s structure’s root ID */
  root?: Maybe<Scalars['Int']['output']>;
  /** The element’s search score, if the `search` parameter was used when querying for the element. */
  searchScore?: Maybe<Scalars['Int']['output']>;
  /** The handle of the section that contains the entry. */
  sectionHandle?: Maybe<Scalars['String']['output']>;
  /** The ID of the section that contains the entry. */
  sectionId?: Maybe<Scalars['Int']['output']>;
  /** The handle of the site the element is associated with. */
  siteHandle?: Maybe<Scalars['String']['output']>;
  /** The ID of the site the element is associated with. */
  siteId?: Maybe<Scalars['Int']['output']>;
  /** The unique identifier for an element-site relation. */
  siteSettingsId?: Maybe<Scalars['ID']['output']>;
  /** The element’s slug. */
  slug?: Maybe<Scalars['String']['output']>;
  /** The entry’s position within the field that contains it. */
  sortOrder?: Maybe<Scalars['Int']['output']>;
  /**
   * Returns the entry’s canonical ID.
   * @deprecated this field has been deprecated since Craft 3.7.7. Use `canonicalId` instead.
   */
  sourceId?: Maybe<Scalars['Int']['output']>;
  /**
   * Returns the entry’s canonical UUID.
   * @deprecated this field has been deprecated since Craft 3.7.7. Use `canonicalUid` instead.
   */
  sourceUid?: Maybe<Scalars['String']['output']>;
  /** The element’s status. */
  status?: Maybe<Scalars['String']['output']>;
  /** The element’s structure ID. */
  structureId?: Maybe<Scalars['Int']['output']>;
  /** The element’s title. */
  title?: Maybe<Scalars['String']['output']>;
  /** Whether the element has been soft-deleted. */
  trashed?: Maybe<Scalars['Boolean']['output']>;
  /** The handle of the entry type that contains the entry. */
  typeHandle: Scalars['String']['output'];
  /** The ID of the entry type that contains the entry. */
  typeId: Scalars['Int']['output'];
  /** The UID of the entity */
  uid?: Maybe<Scalars['String']['output']>;
  /** The element’s URI. */
  uri?: Maybe<Scalars['String']['output']>;
  /** The element’s full URL */
  url?: Maybe<Scalars['String']['output']>;
};


export type BlogArticle_Entry_CountArgs = {
  field: Scalars['String']['input'];
};


export type BlogArticle_EntryAncestorsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before?: InputMaybe<Scalars['String']['input']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  field?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fieldId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  language?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  notRelatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  ownerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  primaryOwnerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetRelationCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryRelationCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryRelationCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagRelationCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserRelationCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  searchTermOptions?: InputMaybe<SearchTermOptions>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};


export type BlogArticle_EntryArticleContentArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorName?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorPhoto?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorPosition?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before?: InputMaybe<Scalars['String']['input']>;
  bio?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  body?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  caption?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  field?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fieldId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  image?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  items?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  language?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  notRelatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  ownerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  photo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  position?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  primaryOwnerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetRelationCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryRelationCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryRelationCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagRelationCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserRelationCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  searchTermOptions?: InputMaybe<SearchTermOptions>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  text?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  videoUrl?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};


export type BlogArticle_EntryBlogCategoryArgs = {
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  group?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  groupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  language?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  notRelatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetRelationCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryRelationCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryRelationCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagRelationCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserRelationCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  searchTermOptions?: InputMaybe<SearchTermOptions>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};


export type BlogArticle_EntryChildrenArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before?: InputMaybe<Scalars['String']['input']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  field?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fieldId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  language?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  notRelatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  ownerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  primaryOwnerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetRelationCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryRelationCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryRelationCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagRelationCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserRelationCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  searchTermOptions?: InputMaybe<SearchTermOptions>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};


export type BlogArticle_EntryDescendantsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before?: InputMaybe<Scalars['String']['input']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  field?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fieldId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  language?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  notRelatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  ownerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  primaryOwnerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetRelationCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryRelationCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryRelationCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagRelationCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserRelationCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  searchTermOptions?: InputMaybe<SearchTermOptions>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};


export type BlogArticle_EntryFeaturedImageArgs = {
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateModified?: InputMaybe<Scalars['String']['input']>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  filename?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  folderId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  hasAlt?: InputMaybe<Scalars['Boolean']['input']>;
  height?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  includeSubfolders?: InputMaybe<Scalars['Boolean']['input']>;
  kind?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  language?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  notRelatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetRelationCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryRelationCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryRelationCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagRelationCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserRelationCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  searchTermOptions?: InputMaybe<SearchTermOptions>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  size?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uploader?: InputMaybe<Scalars['QueryArgument']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  volume?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  volumeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  width?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withTransforms?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type BlogArticle_EntryLocalizedArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorName?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorPhoto?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorPosition?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before?: InputMaybe<Scalars['String']['input']>;
  bio?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  blogCategory?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  body?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  caption?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  featuredImage?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  field?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fieldId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  image?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  isFeatured?: InputMaybe<Scalars['Boolean']['input']>;
  items?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  language?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  metaDescription?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  metaTitle?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  notRelatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  ownerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  perex?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  photo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  position?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  primaryOwnerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetRelationCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryRelationCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryRelationCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagRelationCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserRelationCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  searchTermOptions?: InputMaybe<SearchTermOptions>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  text?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  videoUrl?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};


export type BlogArticle_EntryNextArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorName?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorPhoto?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorPosition?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before?: InputMaybe<Scalars['String']['input']>;
  bio?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  blogCategory?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  body?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  caption?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  featuredImage?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  field?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fieldId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  image?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  isFeatured?: InputMaybe<Scalars['Boolean']['input']>;
  items?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  language?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  metaDescription?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  metaTitle?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  notRelatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  ownerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  perex?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  photo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  position?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  primaryOwnerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetRelationCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryRelationCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryRelationCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagRelationCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserRelationCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  searchTermOptions?: InputMaybe<SearchTermOptions>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  text?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  videoUrl?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};


export type BlogArticle_EntryParentArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before?: InputMaybe<Scalars['String']['input']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  field?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fieldId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  language?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  notRelatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  ownerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  primaryOwnerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetRelationCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryRelationCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryRelationCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagRelationCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserRelationCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  searchTermOptions?: InputMaybe<SearchTermOptions>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};


export type BlogArticle_EntryPrevArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorName?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorPhoto?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorPosition?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before?: InputMaybe<Scalars['String']['input']>;
  bio?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  blogCategory?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  body?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  caption?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  featuredImage?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  field?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fieldId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  image?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  isFeatured?: InputMaybe<Scalars['Boolean']['input']>;
  items?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  language?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  metaDescription?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  metaTitle?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  notRelatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  ownerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  perex?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  photo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  position?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  primaryOwnerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetRelationCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryRelationCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryRelationCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagRelationCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserRelationCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  searchTermOptions?: InputMaybe<SearchTermOptions>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  text?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  videoUrl?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};

export type BlogCategories_Category = CategoryInterface & ElementInterface & {
  __typename: 'blogCategories_Category';
  /** Return a number of related elements for a field. */
  _count?: Maybe<Scalars['Int']['output']>;
  /** The category’s ancestors, if the section is a structure. Accepts the same arguments as the `entries` query. */
  ancestors: Array<CategoryInterface>;
  /** Whether the element is archived. */
  archived?: Maybe<Scalars['Boolean']['output']>;
  /** The category’s children. */
  children: Array<CategoryInterface>;
  /** The date the element was created. */
  dateCreated?: Maybe<Scalars['DateTime']['output']>;
  /** The date the element was last updated. */
  dateUpdated?: Maybe<Scalars['DateTime']['output']>;
  /** The category’s descendants, if the section is a structure. Accepts the same arguments as the `entries` query. */
  descendants: Array<CategoryInterface>;
  /** Whether the element is enabled. */
  enabled?: Maybe<Scalars['Boolean']['output']>;
  /** The handle of the group that contains the category. */
  groupHandle: Scalars['String']['output'];
  /** The ID of the group that contains the category. */
  groupId: Scalars['Int']['output'];
  /** The ID of the entity */
  id?: Maybe<Scalars['ID']['output']>;
  /** The language of the site element is associated with. */
  language?: Maybe<Scalars['String']['output']>;
  /** The element’s level within its structure */
  level?: Maybe<Scalars['Int']['output']>;
  /** The element’s left position within its structure. */
  lft?: Maybe<Scalars['Int']['output']>;
  /** The same element in other locales. */
  localized: Array<CategoryInterface>;
  /** Returns the next element relative to this one, from a given set of criteria. */
  next?: Maybe<CategoryInterface>;
  /** The category’s parent. */
  parent?: Maybe<CategoryInterface>;
  /** Returns the previous element relative to this one, from a given set of criteria. */
  prev?: Maybe<CategoryInterface>;
  /** The element’s right position within its structure. */
  rgt?: Maybe<Scalars['Int']['output']>;
  /** The element’s structure’s root ID */
  root?: Maybe<Scalars['Int']['output']>;
  /** The element’s search score, if the `search` parameter was used when querying for the element. */
  searchScore?: Maybe<Scalars['Int']['output']>;
  /** The handle of the site the element is associated with. */
  siteHandle?: Maybe<Scalars['String']['output']>;
  /** The ID of the site the element is associated with. */
  siteId?: Maybe<Scalars['Int']['output']>;
  /** The unique identifier for an element-site relation. */
  siteSettingsId?: Maybe<Scalars['ID']['output']>;
  /** The element’s slug. */
  slug?: Maybe<Scalars['String']['output']>;
  /** The element’s status. */
  status?: Maybe<Scalars['String']['output']>;
  /** The element’s structure ID. */
  structureId?: Maybe<Scalars['Int']['output']>;
  /** The element’s title. */
  title?: Maybe<Scalars['String']['output']>;
  /** Whether the element has been soft-deleted. */
  trashed?: Maybe<Scalars['Boolean']['output']>;
  /** The UID of the entity */
  uid?: Maybe<Scalars['String']['output']>;
  /** The element’s URI. */
  uri?: Maybe<Scalars['String']['output']>;
  /** The element’s full URL */
  url?: Maybe<Scalars['String']['output']>;
};


export type BlogCategories_Category_CountArgs = {
  field: Scalars['String']['input'];
};


export type BlogCategories_CategoryAncestorsArgs = {
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  group?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  groupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  language?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  notRelatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetRelationCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryRelationCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryRelationCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagRelationCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserRelationCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  searchTermOptions?: InputMaybe<SearchTermOptions>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};


export type BlogCategories_CategoryChildrenArgs = {
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  group?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  groupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  language?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  notRelatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetRelationCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryRelationCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryRelationCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagRelationCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserRelationCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  searchTermOptions?: InputMaybe<SearchTermOptions>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};


export type BlogCategories_CategoryDescendantsArgs = {
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  group?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  groupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  language?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  notRelatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetRelationCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryRelationCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryRelationCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagRelationCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserRelationCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  searchTermOptions?: InputMaybe<SearchTermOptions>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};


export type BlogCategories_CategoryLocalizedArgs = {
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  group?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  groupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  language?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  notRelatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetRelationCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryRelationCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryRelationCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagRelationCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserRelationCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  searchTermOptions?: InputMaybe<SearchTermOptions>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};


export type BlogCategories_CategoryNextArgs = {
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  group?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  groupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  language?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  notRelatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetRelationCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryRelationCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryRelationCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagRelationCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserRelationCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  searchTermOptions?: InputMaybe<SearchTermOptions>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};


export type BlogCategories_CategoryParentArgs = {
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  group?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  groupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  language?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  notRelatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetRelationCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryRelationCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryRelationCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagRelationCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserRelationCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  searchTermOptions?: InputMaybe<SearchTermOptions>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};


export type BlogCategories_CategoryPrevArgs = {
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  group?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  groupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  language?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  notRelatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetRelationCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryRelationCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryRelationCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagRelationCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserRelationCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  searchTermOptions?: InputMaybe<SearchTermOptions>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};

export type BlogImages_Asset = AssetInterface & ElementInterface & {
  __typename: 'blogImages_Asset';
  /** Return a number of related elements for a field. */
  _count?: Maybe<Scalars['Int']['output']>;
  /** Alternative text for the asset. */
  alt?: Maybe<Scalars['String']['output']>;
  /** Whether the element is archived. */
  archived?: Maybe<Scalars['Boolean']['output']>;
  /** The date the element was created. */
  dateCreated?: Maybe<Scalars['DateTime']['output']>;
  /** The date the asset file was last modified. */
  dateModified?: Maybe<Scalars['DateTime']['output']>;
  /** The date the element was last updated. */
  dateUpdated?: Maybe<Scalars['DateTime']['output']>;
  /** Whether the element is enabled. */
  enabled?: Maybe<Scalars['Boolean']['output']>;
  /** The file extension for the asset file. */
  extension: Scalars['String']['output'];
  /** The filename of the asset file. */
  filename: Scalars['String']['output'];
  /** The focal point represented as an array with `x` and `y` keys, or null if it’s not an image. */
  focalPoint?: Maybe<Array<Maybe<Scalars['Float']['output']>>>;
  /** The ID of the folder that the asset belongs to. */
  folderId: Scalars['Int']['output'];
  /** Returns the file’s format. */
  format?: Maybe<Scalars['String']['output']>;
  /** Whether a user-defined focal point is set on the asset. */
  hasFocalPoint: Scalars['Boolean']['output'];
  /** The height in pixels or null if it’s not an image. */
  height?: Maybe<Scalars['Int']['output']>;
  /** The ID of the entity */
  id?: Maybe<Scalars['ID']['output']>;
  /** An `<img>` tag based on this asset. */
  img?: Maybe<Scalars['String']['output']>;
  /** The file kind. */
  kind: Scalars['String']['output'];
  /** The language of the site element is associated with. */
  language?: Maybe<Scalars['String']['output']>;
  /** The file’s MIME type, if it can be determined. */
  mimeType?: Maybe<Scalars['String']['output']>;
  /** Returns the next element relative to this one, from a given set of criteria. */
  next?: Maybe<AssetInterface>;
  /** The asset’s path in the volume. */
  path: Scalars['String']['output'];
  /** Returns the previous element relative to this one, from a given set of criteria. */
  prev?: Maybe<AssetInterface>;
  /** The element’s search score, if the `search` parameter was used when querying for the element. */
  searchScore?: Maybe<Scalars['Int']['output']>;
  /** The handle of the site the element is associated with. */
  siteHandle?: Maybe<Scalars['String']['output']>;
  /** The ID of the site the element is associated with. */
  siteId?: Maybe<Scalars['Int']['output']>;
  /** The unique identifier for an element-site relation. */
  siteSettingsId?: Maybe<Scalars['ID']['output']>;
  /** The file size in bytes. */
  size?: Maybe<Scalars['String']['output']>;
  /** The element’s slug. */
  slug?: Maybe<Scalars['String']['output']>;
  /** Returns a `srcset` attribute value based on the given widths or x-descriptors. */
  srcset?: Maybe<Scalars['String']['output']>;
  /** The element’s status. */
  status?: Maybe<Scalars['String']['output']>;
  /** The element’s title. */
  title?: Maybe<Scalars['String']['output']>;
  /** Whether the element has been soft-deleted. */
  trashed?: Maybe<Scalars['Boolean']['output']>;
  /** The UID of the entity */
  uid?: Maybe<Scalars['String']['output']>;
  /** The element’s URI. */
  uri?: Maybe<Scalars['String']['output']>;
  /** The full URL of the asset. This field accepts the same fields as the `transform` directive. */
  url?: Maybe<Scalars['String']['output']>;
  /** The ID of the volume that the asset belongs to. */
  volumeId?: Maybe<Scalars['Int']['output']>;
  /** The width in pixels or null if it’s not an image. */
  width?: Maybe<Scalars['Int']['output']>;
};


export type BlogImages_Asset_CountArgs = {
  field: Scalars['String']['input'];
};


export type BlogImages_AssetFormatArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
  handle?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['Int']['input']>;
  immediately?: InputMaybe<Scalars['Boolean']['input']>;
  interlace?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<Scalars['String']['input']>;
  position?: InputMaybe<Scalars['String']['input']>;
  quality?: InputMaybe<Scalars['Int']['input']>;
  transform?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Int']['input']>;
};


export type BlogImages_AssetHeightArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
  handle?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['Int']['input']>;
  immediately?: InputMaybe<Scalars['Boolean']['input']>;
  interlace?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<Scalars['String']['input']>;
  position?: InputMaybe<Scalars['String']['input']>;
  quality?: InputMaybe<Scalars['Int']['input']>;
  transform?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Int']['input']>;
};


export type BlogImages_AssetNextArgs = {
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateModified?: InputMaybe<Scalars['String']['input']>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  filename?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  folderId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  hasAlt?: InputMaybe<Scalars['Boolean']['input']>;
  height?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  includeSubfolders?: InputMaybe<Scalars['Boolean']['input']>;
  kind?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  language?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  notRelatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetRelationCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryRelationCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryRelationCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagRelationCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserRelationCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  searchTermOptions?: InputMaybe<SearchTermOptions>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  size?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uploader?: InputMaybe<Scalars['QueryArgument']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  volume?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  volumeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  width?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withTransforms?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type BlogImages_AssetPrevArgs = {
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateModified?: InputMaybe<Scalars['String']['input']>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  filename?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  folderId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  hasAlt?: InputMaybe<Scalars['Boolean']['input']>;
  height?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  includeSubfolders?: InputMaybe<Scalars['Boolean']['input']>;
  kind?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  language?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  notRelatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetRelationCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryRelationCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryRelationCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagRelationCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserRelationCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  searchTermOptions?: InputMaybe<SearchTermOptions>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  size?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uploader?: InputMaybe<Scalars['QueryArgument']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  volume?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  volumeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  width?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withTransforms?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type BlogImages_AssetSrcsetArgs = {
  sizes: Array<Scalars['String']['input']>;
};


export type BlogImages_AssetUrlArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
  handle?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['Int']['input']>;
  immediately?: InputMaybe<Scalars['Boolean']['input']>;
  interlace?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<Scalars['String']['input']>;
  position?: InputMaybe<Scalars['String']['input']>;
  quality?: InputMaybe<Scalars['Int']['input']>;
  transform?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Int']['input']>;
};


export type BlogImages_AssetWidthArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
  handle?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['Int']['input']>;
  immediately?: InputMaybe<Scalars['Boolean']['input']>;
  interlace?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<Scalars['String']['input']>;
  position?: InputMaybe<Scalars['String']['input']>;
  quality?: InputMaybe<Scalars['Int']['input']>;
  transform?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Int']['input']>;
};

export type BlogSectionEntryUnion = BlogArticle_Entry;

export type Body_CkeditorField = {
  __typename: 'body_CkeditorField';
  /** The content split into chunks of markup and nested entries. */
  chunks: Array<Maybe<Body_CkeditorField_Chunks>>;
  /** The parsed content as HTML. */
  html?: Maybe<Scalars['String']['output']>;
  /** The parsed content as Markdown. */
  markdown?: Maybe<Scalars['String']['output']>;
  /** The parsed content as plain text. */
  plainText?: Maybe<Scalars['String']['output']>;
  /** The raw HTML value, with reference tags and `<craft-entry>` nodes in-tact. */
  rawHtml?: Maybe<Scalars['String']['output']>;
};


export type Body_CkeditorFieldMarkdownArgs = {
  hard_break?: InputMaybe<Scalars['Boolean']['input']>;
  header_style?: InputMaybe<Scalars['String']['input']>;
  list_item_style?: InputMaybe<Scalars['String']['input']>;
  preserve_comments?: InputMaybe<Scalars['Boolean']['input']>;
  remove_nodes?: InputMaybe<Scalars['String']['input']>;
  strip_placeholder_links?: InputMaybe<Scalars['Boolean']['input']>;
  strip_tags?: InputMaybe<Scalars['Boolean']['input']>;
  suppress_errors?: InputMaybe<Scalars['Boolean']['input']>;
  table_caption_side?: InputMaybe<Scalars['String']['input']>;
  table_pipe_escape?: InputMaybe<Scalars['String']['input']>;
  use_autolinks?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Body_CkeditorField_Chunks = CkeditorMarkup;

export type BulletList_Entry = ElementInterface & EntryInterface & {
  __typename: 'bulletList_Entry';
  /** Return a number of related elements for a field. */
  _count?: Maybe<Scalars['Int']['output']>;
  /** The entry’s ancestors, if the section is a structure. Accepts the same arguments as the `entries` query. */
  ancestors: Array<EntryInterface>;
  /** Whether the element is archived. */
  archived?: Maybe<Scalars['Boolean']['output']>;
  /** Returns the entry’s canonical ID. */
  canonicalId?: Maybe<Scalars['Int']['output']>;
  /** Returns the entry’s canonical UUID. */
  canonicalUid?: Maybe<Scalars['String']['output']>;
  /** The entry’s children, if the section is a structure. Accepts the same arguments as the `entries` query. */
  children: Array<EntryInterface>;
  /** The date the element was created. */
  dateCreated?: Maybe<Scalars['DateTime']['output']>;
  /** The date the element was last updated. */
  dateUpdated?: Maybe<Scalars['DateTime']['output']>;
  /** The entry’s descendants, if the section is a structure. Accepts the same arguments as the `entries` query. */
  descendants: Array<EntryInterface>;
  /** The draft ID (from the `drafts` table). */
  draftId?: Maybe<Scalars['Int']['output']>;
  /** The name of the draft. */
  draftName?: Maybe<Scalars['String']['output']>;
  /** The notes for the draft. */
  draftNotes?: Maybe<Scalars['String']['output']>;
  /** Whether the element is enabled. */
  enabled?: Maybe<Scalars['Boolean']['output']>;
  /** Whether the element is enabled for the site. */
  enabledForSite?: Maybe<Scalars['Boolean']['output']>;
  /** The expiry date of the entry. */
  expiryDate?: Maybe<Scalars['DateTime']['output']>;
  /** The handle of the field that contains the entry. */
  fieldHandle?: Maybe<Scalars['String']['output']>;
  /** The ID of the field that contains the entry. */
  fieldId?: Maybe<Scalars['Int']['output']>;
  /** The ID of the entity */
  id?: Maybe<Scalars['ID']['output']>;
  /** Returns whether this is a draft. */
  isDraft?: Maybe<Scalars['Boolean']['output']>;
  /** Returns whether this is a revision. */
  isRevision?: Maybe<Scalars['Boolean']['output']>;
  /** Returns whether this is an unpublished draft. */
  isUnpublishedDraft?: Maybe<Scalars['Boolean']['output']>;
  items?: Maybe<Array<Maybe<Items_TableRow>>>;
  /** The language of the site element is associated with. */
  language?: Maybe<Scalars['String']['output']>;
  /** The element’s level within its structure */
  level?: Maybe<Scalars['Int']['output']>;
  /** The element’s left position within its structure. */
  lft?: Maybe<Scalars['Int']['output']>;
  /** The same element in other locales. */
  localized: Array<EntryInterface>;
  /** Returns the next element relative to this one, from a given set of criteria. */
  next?: Maybe<EntryInterface>;
  /** The ID of the entry’s owner element. */
  ownerId?: Maybe<Scalars['Int']['output']>;
  /** The entry’s parent, if the section is a structure. */
  parent?: Maybe<EntryInterface>;
  /** The entry’s post date. */
  postDate?: Maybe<Scalars['DateTime']['output']>;
  /** Returns the previous element relative to this one, from a given set of criteria. */
  prev?: Maybe<EntryInterface>;
  /** The revision ID (from the `revisions` table). */
  revisionId?: Maybe<Scalars['Int']['output']>;
  /** The revision notes (from the `revisions` table). */
  revisionNotes?: Maybe<Scalars['String']['output']>;
  /** The element’s right position within its structure. */
  rgt?: Maybe<Scalars['Int']['output']>;
  /** The element’s structure’s root ID */
  root?: Maybe<Scalars['Int']['output']>;
  /** The element’s search score, if the `search` parameter was used when querying for the element. */
  searchScore?: Maybe<Scalars['Int']['output']>;
  /** The handle of the section that contains the entry. */
  sectionHandle?: Maybe<Scalars['String']['output']>;
  /** The ID of the section that contains the entry. */
  sectionId?: Maybe<Scalars['Int']['output']>;
  /** The handle of the site the element is associated with. */
  siteHandle?: Maybe<Scalars['String']['output']>;
  /** The ID of the site the element is associated with. */
  siteId?: Maybe<Scalars['Int']['output']>;
  /** The unique identifier for an element-site relation. */
  siteSettingsId?: Maybe<Scalars['ID']['output']>;
  /** The element’s slug. */
  slug?: Maybe<Scalars['String']['output']>;
  /** The entry’s position within the field that contains it. */
  sortOrder?: Maybe<Scalars['Int']['output']>;
  /**
   * Returns the entry’s canonical ID.
   * @deprecated this field has been deprecated since Craft 3.7.7. Use `canonicalId` instead.
   */
  sourceId?: Maybe<Scalars['Int']['output']>;
  /**
   * Returns the entry’s canonical UUID.
   * @deprecated this field has been deprecated since Craft 3.7.7. Use `canonicalUid` instead.
   */
  sourceUid?: Maybe<Scalars['String']['output']>;
  /** The element’s status. */
  status?: Maybe<Scalars['String']['output']>;
  /** The element’s structure ID. */
  structureId?: Maybe<Scalars['Int']['output']>;
  /** The element’s title. */
  title?: Maybe<Scalars['String']['output']>;
  /** Whether the element has been soft-deleted. */
  trashed?: Maybe<Scalars['Boolean']['output']>;
  /** The handle of the entry type that contains the entry. */
  typeHandle: Scalars['String']['output'];
  /** The ID of the entry type that contains the entry. */
  typeId: Scalars['Int']['output'];
  /** The UID of the entity */
  uid?: Maybe<Scalars['String']['output']>;
  /** The element’s URI. */
  uri?: Maybe<Scalars['String']['output']>;
  /** The element’s full URL */
  url?: Maybe<Scalars['String']['output']>;
};


export type BulletList_Entry_CountArgs = {
  field: Scalars['String']['input'];
};


export type BulletList_EntryAncestorsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before?: InputMaybe<Scalars['String']['input']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  field?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fieldId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  language?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  notRelatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  ownerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  primaryOwnerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetRelationCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryRelationCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryRelationCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagRelationCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserRelationCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  searchTermOptions?: InputMaybe<SearchTermOptions>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};


export type BulletList_EntryChildrenArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before?: InputMaybe<Scalars['String']['input']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  field?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fieldId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  language?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  notRelatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  ownerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  primaryOwnerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetRelationCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryRelationCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryRelationCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagRelationCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserRelationCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  searchTermOptions?: InputMaybe<SearchTermOptions>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};


export type BulletList_EntryDescendantsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before?: InputMaybe<Scalars['String']['input']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  field?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fieldId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  language?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  notRelatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  ownerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  primaryOwnerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetRelationCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryRelationCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryRelationCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagRelationCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserRelationCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  searchTermOptions?: InputMaybe<SearchTermOptions>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};


export type BulletList_EntryLocalizedArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorName?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorPhoto?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorPosition?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before?: InputMaybe<Scalars['String']['input']>;
  bio?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  blogCategory?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  body?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  caption?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  featuredImage?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  field?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fieldId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  image?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  isFeatured?: InputMaybe<Scalars['Boolean']['input']>;
  items?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  language?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  metaDescription?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  metaTitle?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  notRelatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  ownerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  perex?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  photo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  position?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  primaryOwnerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetRelationCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryRelationCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryRelationCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagRelationCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserRelationCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  searchTermOptions?: InputMaybe<SearchTermOptions>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  text?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  videoUrl?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};


export type BulletList_EntryNextArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorName?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorPhoto?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorPosition?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before?: InputMaybe<Scalars['String']['input']>;
  bio?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  blogCategory?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  body?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  caption?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  featuredImage?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  field?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fieldId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  image?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  isFeatured?: InputMaybe<Scalars['Boolean']['input']>;
  items?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  language?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  metaDescription?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  metaTitle?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  notRelatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  ownerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  perex?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  photo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  position?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  primaryOwnerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetRelationCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryRelationCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryRelationCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagRelationCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserRelationCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  searchTermOptions?: InputMaybe<SearchTermOptions>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  text?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  videoUrl?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};


export type BulletList_EntryParentArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before?: InputMaybe<Scalars['String']['input']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  field?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fieldId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  language?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  notRelatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  ownerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  primaryOwnerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetRelationCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryRelationCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryRelationCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagRelationCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserRelationCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  searchTermOptions?: InputMaybe<SearchTermOptions>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};


export type BulletList_EntryPrevArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorName?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorPhoto?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorPosition?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before?: InputMaybe<Scalars['String']['input']>;
  bio?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  blogCategory?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  body?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  caption?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  featuredImage?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  field?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fieldId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  image?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  isFeatured?: InputMaybe<Scalars['Boolean']['input']>;
  items?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  language?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  metaDescription?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  metaTitle?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  notRelatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  ownerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  perex?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  photo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  position?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  primaryOwnerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetRelationCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryRelationCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryRelationCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagRelationCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserRelationCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  searchTermOptions?: InputMaybe<SearchTermOptions>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  text?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  videoUrl?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Checklist_Entry = ElementInterface & EntryInterface & {
  __typename: 'checklist_Entry';
  /** Return a number of related elements for a field. */
  _count?: Maybe<Scalars['Int']['output']>;
  /** The entry’s ancestors, if the section is a structure. Accepts the same arguments as the `entries` query. */
  ancestors: Array<EntryInterface>;
  /** Whether the element is archived. */
  archived?: Maybe<Scalars['Boolean']['output']>;
  /** Returns the entry’s canonical ID. */
  canonicalId?: Maybe<Scalars['Int']['output']>;
  /** Returns the entry’s canonical UUID. */
  canonicalUid?: Maybe<Scalars['String']['output']>;
  /** The entry’s children, if the section is a structure. Accepts the same arguments as the `entries` query. */
  children: Array<EntryInterface>;
  /** The date the element was created. */
  dateCreated?: Maybe<Scalars['DateTime']['output']>;
  /** The date the element was last updated. */
  dateUpdated?: Maybe<Scalars['DateTime']['output']>;
  /** The entry’s descendants, if the section is a structure. Accepts the same arguments as the `entries` query. */
  descendants: Array<EntryInterface>;
  /** The draft ID (from the `drafts` table). */
  draftId?: Maybe<Scalars['Int']['output']>;
  /** The name of the draft. */
  draftName?: Maybe<Scalars['String']['output']>;
  /** The notes for the draft. */
  draftNotes?: Maybe<Scalars['String']['output']>;
  /** Whether the element is enabled. */
  enabled?: Maybe<Scalars['Boolean']['output']>;
  /** Whether the element is enabled for the site. */
  enabledForSite?: Maybe<Scalars['Boolean']['output']>;
  /** The expiry date of the entry. */
  expiryDate?: Maybe<Scalars['DateTime']['output']>;
  /** The handle of the field that contains the entry. */
  fieldHandle?: Maybe<Scalars['String']['output']>;
  /** The ID of the field that contains the entry. */
  fieldId?: Maybe<Scalars['Int']['output']>;
  /** The ID of the entity */
  id?: Maybe<Scalars['ID']['output']>;
  /** Returns whether this is a draft. */
  isDraft?: Maybe<Scalars['Boolean']['output']>;
  /** Returns whether this is a revision. */
  isRevision?: Maybe<Scalars['Boolean']['output']>;
  /** Returns whether this is an unpublished draft. */
  isUnpublishedDraft?: Maybe<Scalars['Boolean']['output']>;
  items?: Maybe<Array<Maybe<Items_TableRow>>>;
  /** The language of the site element is associated with. */
  language?: Maybe<Scalars['String']['output']>;
  /** The element’s level within its structure */
  level?: Maybe<Scalars['Int']['output']>;
  /** The element’s left position within its structure. */
  lft?: Maybe<Scalars['Int']['output']>;
  /** The same element in other locales. */
  localized: Array<EntryInterface>;
  /** Returns the next element relative to this one, from a given set of criteria. */
  next?: Maybe<EntryInterface>;
  /** The ID of the entry’s owner element. */
  ownerId?: Maybe<Scalars['Int']['output']>;
  /** The entry’s parent, if the section is a structure. */
  parent?: Maybe<EntryInterface>;
  /** The entry’s post date. */
  postDate?: Maybe<Scalars['DateTime']['output']>;
  /** Returns the previous element relative to this one, from a given set of criteria. */
  prev?: Maybe<EntryInterface>;
  /** The revision ID (from the `revisions` table). */
  revisionId?: Maybe<Scalars['Int']['output']>;
  /** The revision notes (from the `revisions` table). */
  revisionNotes?: Maybe<Scalars['String']['output']>;
  /** The element’s right position within its structure. */
  rgt?: Maybe<Scalars['Int']['output']>;
  /** The element’s structure’s root ID */
  root?: Maybe<Scalars['Int']['output']>;
  /** The element’s search score, if the `search` parameter was used when querying for the element. */
  searchScore?: Maybe<Scalars['Int']['output']>;
  /** The handle of the section that contains the entry. */
  sectionHandle?: Maybe<Scalars['String']['output']>;
  /** The ID of the section that contains the entry. */
  sectionId?: Maybe<Scalars['Int']['output']>;
  /** The handle of the site the element is associated with. */
  siteHandle?: Maybe<Scalars['String']['output']>;
  /** The ID of the site the element is associated with. */
  siteId?: Maybe<Scalars['Int']['output']>;
  /** The unique identifier for an element-site relation. */
  siteSettingsId?: Maybe<Scalars['ID']['output']>;
  /** The element’s slug. */
  slug?: Maybe<Scalars['String']['output']>;
  /** The entry’s position within the field that contains it. */
  sortOrder?: Maybe<Scalars['Int']['output']>;
  /**
   * Returns the entry’s canonical ID.
   * @deprecated this field has been deprecated since Craft 3.7.7. Use `canonicalId` instead.
   */
  sourceId?: Maybe<Scalars['Int']['output']>;
  /**
   * Returns the entry’s canonical UUID.
   * @deprecated this field has been deprecated since Craft 3.7.7. Use `canonicalUid` instead.
   */
  sourceUid?: Maybe<Scalars['String']['output']>;
  /** The element’s status. */
  status?: Maybe<Scalars['String']['output']>;
  /** The element’s structure ID. */
  structureId?: Maybe<Scalars['Int']['output']>;
  /** The element’s title. */
  title?: Maybe<Scalars['String']['output']>;
  /** Whether the element has been soft-deleted. */
  trashed?: Maybe<Scalars['Boolean']['output']>;
  /** The handle of the entry type that contains the entry. */
  typeHandle: Scalars['String']['output'];
  /** The ID of the entry type that contains the entry. */
  typeId: Scalars['Int']['output'];
  /** The UID of the entity */
  uid?: Maybe<Scalars['String']['output']>;
  /** The element’s URI. */
  uri?: Maybe<Scalars['String']['output']>;
  /** The element’s full URL */
  url?: Maybe<Scalars['String']['output']>;
};


export type Checklist_Entry_CountArgs = {
  field: Scalars['String']['input'];
};


export type Checklist_EntryAncestorsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before?: InputMaybe<Scalars['String']['input']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  field?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fieldId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  language?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  notRelatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  ownerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  primaryOwnerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetRelationCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryRelationCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryRelationCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagRelationCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserRelationCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  searchTermOptions?: InputMaybe<SearchTermOptions>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};


export type Checklist_EntryChildrenArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before?: InputMaybe<Scalars['String']['input']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  field?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fieldId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  language?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  notRelatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  ownerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  primaryOwnerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetRelationCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryRelationCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryRelationCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagRelationCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserRelationCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  searchTermOptions?: InputMaybe<SearchTermOptions>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};


export type Checklist_EntryDescendantsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before?: InputMaybe<Scalars['String']['input']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  field?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fieldId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  language?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  notRelatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  ownerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  primaryOwnerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetRelationCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryRelationCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryRelationCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagRelationCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserRelationCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  searchTermOptions?: InputMaybe<SearchTermOptions>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};


export type Checklist_EntryLocalizedArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorName?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorPhoto?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorPosition?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before?: InputMaybe<Scalars['String']['input']>;
  bio?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  blogCategory?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  body?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  caption?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  featuredImage?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  field?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fieldId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  image?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  isFeatured?: InputMaybe<Scalars['Boolean']['input']>;
  items?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  language?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  metaDescription?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  metaTitle?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  notRelatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  ownerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  perex?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  photo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  position?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  primaryOwnerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetRelationCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryRelationCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryRelationCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagRelationCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserRelationCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  searchTermOptions?: InputMaybe<SearchTermOptions>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  text?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  videoUrl?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};


export type Checklist_EntryNextArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorName?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorPhoto?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorPosition?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before?: InputMaybe<Scalars['String']['input']>;
  bio?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  blogCategory?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  body?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  caption?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  featuredImage?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  field?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fieldId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  image?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  isFeatured?: InputMaybe<Scalars['Boolean']['input']>;
  items?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  language?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  metaDescription?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  metaTitle?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  notRelatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  ownerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  perex?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  photo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  position?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  primaryOwnerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetRelationCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryRelationCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryRelationCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagRelationCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserRelationCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  searchTermOptions?: InputMaybe<SearchTermOptions>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  text?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  videoUrl?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};


export type Checklist_EntryParentArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before?: InputMaybe<Scalars['String']['input']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  field?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fieldId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  language?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  notRelatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  ownerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  primaryOwnerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetRelationCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryRelationCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryRelationCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagRelationCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserRelationCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  searchTermOptions?: InputMaybe<SearchTermOptions>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};


export type Checklist_EntryPrevArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorName?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorPhoto?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorPosition?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before?: InputMaybe<Scalars['String']['input']>;
  bio?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  blogCategory?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  body?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  caption?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  featuredImage?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  field?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fieldId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  image?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  isFeatured?: InputMaybe<Scalars['Boolean']['input']>;
  items?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  language?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  metaDescription?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  metaTitle?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  notRelatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  ownerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  perex?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  photo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  position?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  primaryOwnerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetRelationCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryRelationCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryRelationCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagRelationCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserRelationCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  searchTermOptions?: InputMaybe<SearchTermOptions>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  text?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  videoUrl?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Heading_Entry = ElementInterface & EntryInterface & {
  __typename: 'heading_Entry';
  /** Return a number of related elements for a field. */
  _count?: Maybe<Scalars['Int']['output']>;
  /** The entry’s ancestors, if the section is a structure. Accepts the same arguments as the `entries` query. */
  ancestors: Array<EntryInterface>;
  /** Whether the element is archived. */
  archived?: Maybe<Scalars['Boolean']['output']>;
  /** Returns the entry’s canonical ID. */
  canonicalId?: Maybe<Scalars['Int']['output']>;
  /** Returns the entry’s canonical UUID. */
  canonicalUid?: Maybe<Scalars['String']['output']>;
  /** The entry’s children, if the section is a structure. Accepts the same arguments as the `entries` query. */
  children: Array<EntryInterface>;
  /** The date the element was created. */
  dateCreated?: Maybe<Scalars['DateTime']['output']>;
  /** The date the element was last updated. */
  dateUpdated?: Maybe<Scalars['DateTime']['output']>;
  /** The entry’s descendants, if the section is a structure. Accepts the same arguments as the `entries` query. */
  descendants: Array<EntryInterface>;
  /** The draft ID (from the `drafts` table). */
  draftId?: Maybe<Scalars['Int']['output']>;
  /** The name of the draft. */
  draftName?: Maybe<Scalars['String']['output']>;
  /** The notes for the draft. */
  draftNotes?: Maybe<Scalars['String']['output']>;
  /** Whether the element is enabled. */
  enabled?: Maybe<Scalars['Boolean']['output']>;
  /** Whether the element is enabled for the site. */
  enabledForSite?: Maybe<Scalars['Boolean']['output']>;
  /** The expiry date of the entry. */
  expiryDate?: Maybe<Scalars['DateTime']['output']>;
  /** The handle of the field that contains the entry. */
  fieldHandle?: Maybe<Scalars['String']['output']>;
  /** The ID of the field that contains the entry. */
  fieldId?: Maybe<Scalars['Int']['output']>;
  /** The ID of the entity */
  id?: Maybe<Scalars['ID']['output']>;
  /** Returns whether this is a draft. */
  isDraft?: Maybe<Scalars['Boolean']['output']>;
  /** Returns whether this is a revision. */
  isRevision?: Maybe<Scalars['Boolean']['output']>;
  /** Returns whether this is an unpublished draft. */
  isUnpublishedDraft?: Maybe<Scalars['Boolean']['output']>;
  /** The language of the site element is associated with. */
  language?: Maybe<Scalars['String']['output']>;
  /** The element’s level within its structure */
  level?: Maybe<Scalars['Int']['output']>;
  /** The element’s left position within its structure. */
  lft?: Maybe<Scalars['Int']['output']>;
  /** The same element in other locales. */
  localized: Array<EntryInterface>;
  /** Returns the next element relative to this one, from a given set of criteria. */
  next?: Maybe<EntryInterface>;
  /** The ID of the entry’s owner element. */
  ownerId?: Maybe<Scalars['Int']['output']>;
  /** The entry’s parent, if the section is a structure. */
  parent?: Maybe<EntryInterface>;
  /** The entry’s post date. */
  postDate?: Maybe<Scalars['DateTime']['output']>;
  /** Returns the previous element relative to this one, from a given set of criteria. */
  prev?: Maybe<EntryInterface>;
  /** The revision ID (from the `revisions` table). */
  revisionId?: Maybe<Scalars['Int']['output']>;
  /** The revision notes (from the `revisions` table). */
  revisionNotes?: Maybe<Scalars['String']['output']>;
  /** The element’s right position within its structure. */
  rgt?: Maybe<Scalars['Int']['output']>;
  /** The element’s structure’s root ID */
  root?: Maybe<Scalars['Int']['output']>;
  /** The element’s search score, if the `search` parameter was used when querying for the element. */
  searchScore?: Maybe<Scalars['Int']['output']>;
  /** The handle of the section that contains the entry. */
  sectionHandle?: Maybe<Scalars['String']['output']>;
  /** The ID of the section that contains the entry. */
  sectionId?: Maybe<Scalars['Int']['output']>;
  /** The handle of the site the element is associated with. */
  siteHandle?: Maybe<Scalars['String']['output']>;
  /** The ID of the site the element is associated with. */
  siteId?: Maybe<Scalars['Int']['output']>;
  /** The unique identifier for an element-site relation. */
  siteSettingsId?: Maybe<Scalars['ID']['output']>;
  /** The element’s slug. */
  slug?: Maybe<Scalars['String']['output']>;
  /** The entry’s position within the field that contains it. */
  sortOrder?: Maybe<Scalars['Int']['output']>;
  /**
   * Returns the entry’s canonical ID.
   * @deprecated this field has been deprecated since Craft 3.7.7. Use `canonicalId` instead.
   */
  sourceId?: Maybe<Scalars['Int']['output']>;
  /**
   * Returns the entry’s canonical UUID.
   * @deprecated this field has been deprecated since Craft 3.7.7. Use `canonicalUid` instead.
   */
  sourceUid?: Maybe<Scalars['String']['output']>;
  /** The element’s status. */
  status?: Maybe<Scalars['String']['output']>;
  /** The element’s structure ID. */
  structureId?: Maybe<Scalars['Int']['output']>;
  text?: Maybe<Scalars['String']['output']>;
  /** The element’s title. */
  title?: Maybe<Scalars['String']['output']>;
  /** Whether the element has been soft-deleted. */
  trashed?: Maybe<Scalars['Boolean']['output']>;
  /** The handle of the entry type that contains the entry. */
  typeHandle: Scalars['String']['output'];
  /** The ID of the entry type that contains the entry. */
  typeId: Scalars['Int']['output'];
  /** The UID of the entity */
  uid?: Maybe<Scalars['String']['output']>;
  /** The element’s URI. */
  uri?: Maybe<Scalars['String']['output']>;
  /** The element’s full URL */
  url?: Maybe<Scalars['String']['output']>;
};


export type Heading_Entry_CountArgs = {
  field: Scalars['String']['input'];
};


export type Heading_EntryAncestorsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before?: InputMaybe<Scalars['String']['input']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  field?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fieldId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  language?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  notRelatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  ownerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  primaryOwnerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetRelationCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryRelationCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryRelationCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagRelationCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserRelationCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  searchTermOptions?: InputMaybe<SearchTermOptions>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};


export type Heading_EntryChildrenArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before?: InputMaybe<Scalars['String']['input']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  field?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fieldId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  language?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  notRelatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  ownerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  primaryOwnerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetRelationCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryRelationCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryRelationCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagRelationCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserRelationCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  searchTermOptions?: InputMaybe<SearchTermOptions>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};


export type Heading_EntryDescendantsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before?: InputMaybe<Scalars['String']['input']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  field?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fieldId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  language?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  notRelatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  ownerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  primaryOwnerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetRelationCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryRelationCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryRelationCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagRelationCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserRelationCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  searchTermOptions?: InputMaybe<SearchTermOptions>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};


export type Heading_EntryLocalizedArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorName?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorPhoto?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorPosition?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before?: InputMaybe<Scalars['String']['input']>;
  bio?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  blogCategory?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  body?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  caption?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  featuredImage?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  field?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fieldId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  image?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  isFeatured?: InputMaybe<Scalars['Boolean']['input']>;
  items?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  language?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  metaDescription?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  metaTitle?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  notRelatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  ownerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  perex?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  photo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  position?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  primaryOwnerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetRelationCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryRelationCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryRelationCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagRelationCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserRelationCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  searchTermOptions?: InputMaybe<SearchTermOptions>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  text?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  videoUrl?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};


export type Heading_EntryNextArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorName?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorPhoto?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorPosition?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before?: InputMaybe<Scalars['String']['input']>;
  bio?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  blogCategory?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  body?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  caption?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  featuredImage?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  field?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fieldId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  image?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  isFeatured?: InputMaybe<Scalars['Boolean']['input']>;
  items?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  language?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  metaDescription?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  metaTitle?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  notRelatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  ownerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  perex?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  photo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  position?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  primaryOwnerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetRelationCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryRelationCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryRelationCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagRelationCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserRelationCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  searchTermOptions?: InputMaybe<SearchTermOptions>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  text?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  videoUrl?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};


export type Heading_EntryParentArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before?: InputMaybe<Scalars['String']['input']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  field?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fieldId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  language?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  notRelatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  ownerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  primaryOwnerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetRelationCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryRelationCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryRelationCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagRelationCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserRelationCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  searchTermOptions?: InputMaybe<SearchTermOptions>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};


export type Heading_EntryPrevArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorName?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorPhoto?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorPosition?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before?: InputMaybe<Scalars['String']['input']>;
  bio?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  blogCategory?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  body?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  caption?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  featuredImage?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  field?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fieldId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  image?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  isFeatured?: InputMaybe<Scalars['Boolean']['input']>;
  items?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  language?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  metaDescription?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  metaTitle?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  notRelatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  ownerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  perex?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  photo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  position?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  primaryOwnerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetRelationCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryRelationCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryRelationCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagRelationCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserRelationCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  searchTermOptions?: InputMaybe<SearchTermOptions>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  text?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  videoUrl?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ImageWithCaption_Entry = ElementInterface & EntryInterface & {
  __typename: 'imageWithCaption_Entry';
  /** Return a number of related elements for a field. */
  _count?: Maybe<Scalars['Int']['output']>;
  /** The entry’s ancestors, if the section is a structure. Accepts the same arguments as the `entries` query. */
  ancestors: Array<EntryInterface>;
  /** Whether the element is archived. */
  archived?: Maybe<Scalars['Boolean']['output']>;
  /** Returns the entry’s canonical ID. */
  canonicalId?: Maybe<Scalars['Int']['output']>;
  /** Returns the entry’s canonical UUID. */
  canonicalUid?: Maybe<Scalars['String']['output']>;
  caption?: Maybe<Scalars['String']['output']>;
  /** The entry’s children, if the section is a structure. Accepts the same arguments as the `entries` query. */
  children: Array<EntryInterface>;
  /** The date the element was created. */
  dateCreated?: Maybe<Scalars['DateTime']['output']>;
  /** The date the element was last updated. */
  dateUpdated?: Maybe<Scalars['DateTime']['output']>;
  /** The entry’s descendants, if the section is a structure. Accepts the same arguments as the `entries` query. */
  descendants: Array<EntryInterface>;
  /** The draft ID (from the `drafts` table). */
  draftId?: Maybe<Scalars['Int']['output']>;
  /** The name of the draft. */
  draftName?: Maybe<Scalars['String']['output']>;
  /** The notes for the draft. */
  draftNotes?: Maybe<Scalars['String']['output']>;
  /** Whether the element is enabled. */
  enabled?: Maybe<Scalars['Boolean']['output']>;
  /** Whether the element is enabled for the site. */
  enabledForSite?: Maybe<Scalars['Boolean']['output']>;
  /** The expiry date of the entry. */
  expiryDate?: Maybe<Scalars['DateTime']['output']>;
  /** The handle of the field that contains the entry. */
  fieldHandle?: Maybe<Scalars['String']['output']>;
  /** The ID of the field that contains the entry. */
  fieldId?: Maybe<Scalars['Int']['output']>;
  /** The ID of the entity */
  id?: Maybe<Scalars['ID']['output']>;
  image: Array<Maybe<AssetInterface>>;
  /** Returns whether this is a draft. */
  isDraft?: Maybe<Scalars['Boolean']['output']>;
  /** Returns whether this is a revision. */
  isRevision?: Maybe<Scalars['Boolean']['output']>;
  /** Returns whether this is an unpublished draft. */
  isUnpublishedDraft?: Maybe<Scalars['Boolean']['output']>;
  /** The language of the site element is associated with. */
  language?: Maybe<Scalars['String']['output']>;
  /** The element’s level within its structure */
  level?: Maybe<Scalars['Int']['output']>;
  /** The element’s left position within its structure. */
  lft?: Maybe<Scalars['Int']['output']>;
  /** The same element in other locales. */
  localized: Array<EntryInterface>;
  /** Returns the next element relative to this one, from a given set of criteria. */
  next?: Maybe<EntryInterface>;
  /** The ID of the entry’s owner element. */
  ownerId?: Maybe<Scalars['Int']['output']>;
  /** The entry’s parent, if the section is a structure. */
  parent?: Maybe<EntryInterface>;
  /** The entry’s post date. */
  postDate?: Maybe<Scalars['DateTime']['output']>;
  /** Returns the previous element relative to this one, from a given set of criteria. */
  prev?: Maybe<EntryInterface>;
  /** The revision ID (from the `revisions` table). */
  revisionId?: Maybe<Scalars['Int']['output']>;
  /** The revision notes (from the `revisions` table). */
  revisionNotes?: Maybe<Scalars['String']['output']>;
  /** The element’s right position within its structure. */
  rgt?: Maybe<Scalars['Int']['output']>;
  /** The element’s structure’s root ID */
  root?: Maybe<Scalars['Int']['output']>;
  /** The element’s search score, if the `search` parameter was used when querying for the element. */
  searchScore?: Maybe<Scalars['Int']['output']>;
  /** The handle of the section that contains the entry. */
  sectionHandle?: Maybe<Scalars['String']['output']>;
  /** The ID of the section that contains the entry. */
  sectionId?: Maybe<Scalars['Int']['output']>;
  /** The handle of the site the element is associated with. */
  siteHandle?: Maybe<Scalars['String']['output']>;
  /** The ID of the site the element is associated with. */
  siteId?: Maybe<Scalars['Int']['output']>;
  /** The unique identifier for an element-site relation. */
  siteSettingsId?: Maybe<Scalars['ID']['output']>;
  /** The element’s slug. */
  slug?: Maybe<Scalars['String']['output']>;
  /** The entry’s position within the field that contains it. */
  sortOrder?: Maybe<Scalars['Int']['output']>;
  /**
   * Returns the entry’s canonical ID.
   * @deprecated this field has been deprecated since Craft 3.7.7. Use `canonicalId` instead.
   */
  sourceId?: Maybe<Scalars['Int']['output']>;
  /**
   * Returns the entry’s canonical UUID.
   * @deprecated this field has been deprecated since Craft 3.7.7. Use `canonicalUid` instead.
   */
  sourceUid?: Maybe<Scalars['String']['output']>;
  /** The element’s status. */
  status?: Maybe<Scalars['String']['output']>;
  /** The element’s structure ID. */
  structureId?: Maybe<Scalars['Int']['output']>;
  /** The element’s title. */
  title?: Maybe<Scalars['String']['output']>;
  /** Whether the element has been soft-deleted. */
  trashed?: Maybe<Scalars['Boolean']['output']>;
  /** The handle of the entry type that contains the entry. */
  typeHandle: Scalars['String']['output'];
  /** The ID of the entry type that contains the entry. */
  typeId: Scalars['Int']['output'];
  /** The UID of the entity */
  uid?: Maybe<Scalars['String']['output']>;
  /** The element’s URI. */
  uri?: Maybe<Scalars['String']['output']>;
  /** The element’s full URL */
  url?: Maybe<Scalars['String']['output']>;
};


export type ImageWithCaption_Entry_CountArgs = {
  field: Scalars['String']['input'];
};


export type ImageWithCaption_EntryAncestorsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before?: InputMaybe<Scalars['String']['input']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  field?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fieldId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  language?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  notRelatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  ownerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  primaryOwnerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetRelationCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryRelationCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryRelationCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagRelationCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserRelationCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  searchTermOptions?: InputMaybe<SearchTermOptions>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};


export type ImageWithCaption_EntryChildrenArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before?: InputMaybe<Scalars['String']['input']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  field?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fieldId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  language?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  notRelatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  ownerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  primaryOwnerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetRelationCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryRelationCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryRelationCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagRelationCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserRelationCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  searchTermOptions?: InputMaybe<SearchTermOptions>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};


export type ImageWithCaption_EntryDescendantsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before?: InputMaybe<Scalars['String']['input']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  field?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fieldId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  language?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  notRelatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  ownerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  primaryOwnerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetRelationCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryRelationCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryRelationCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagRelationCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserRelationCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  searchTermOptions?: InputMaybe<SearchTermOptions>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};


export type ImageWithCaption_EntryImageArgs = {
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateModified?: InputMaybe<Scalars['String']['input']>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  filename?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  folderId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  hasAlt?: InputMaybe<Scalars['Boolean']['input']>;
  height?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  includeSubfolders?: InputMaybe<Scalars['Boolean']['input']>;
  kind?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  language?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  notRelatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetRelationCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryRelationCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryRelationCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagRelationCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserRelationCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  searchTermOptions?: InputMaybe<SearchTermOptions>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  size?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uploader?: InputMaybe<Scalars['QueryArgument']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  volume?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  volumeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  width?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withTransforms?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ImageWithCaption_EntryLocalizedArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorName?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorPhoto?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorPosition?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before?: InputMaybe<Scalars['String']['input']>;
  bio?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  blogCategory?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  body?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  caption?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  featuredImage?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  field?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fieldId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  image?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  isFeatured?: InputMaybe<Scalars['Boolean']['input']>;
  items?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  language?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  metaDescription?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  metaTitle?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  notRelatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  ownerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  perex?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  photo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  position?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  primaryOwnerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetRelationCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryRelationCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryRelationCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagRelationCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserRelationCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  searchTermOptions?: InputMaybe<SearchTermOptions>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  text?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  videoUrl?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};


export type ImageWithCaption_EntryNextArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorName?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorPhoto?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorPosition?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before?: InputMaybe<Scalars['String']['input']>;
  bio?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  blogCategory?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  body?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  caption?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  featuredImage?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  field?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fieldId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  image?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  isFeatured?: InputMaybe<Scalars['Boolean']['input']>;
  items?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  language?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  metaDescription?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  metaTitle?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  notRelatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  ownerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  perex?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  photo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  position?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  primaryOwnerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetRelationCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryRelationCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryRelationCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagRelationCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserRelationCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  searchTermOptions?: InputMaybe<SearchTermOptions>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  text?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  videoUrl?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};


export type ImageWithCaption_EntryParentArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before?: InputMaybe<Scalars['String']['input']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  field?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fieldId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  language?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  notRelatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  ownerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  primaryOwnerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetRelationCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryRelationCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryRelationCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagRelationCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserRelationCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  searchTermOptions?: InputMaybe<SearchTermOptions>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};


export type ImageWithCaption_EntryPrevArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorName?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorPhoto?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorPosition?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before?: InputMaybe<Scalars['String']['input']>;
  bio?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  blogCategory?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  body?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  caption?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  featuredImage?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  field?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fieldId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  image?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  isFeatured?: InputMaybe<Scalars['Boolean']['input']>;
  items?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  language?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  metaDescription?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  metaTitle?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  notRelatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  ownerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  perex?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  photo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  position?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  primaryOwnerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetRelationCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryRelationCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryRelationCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagRelationCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserRelationCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  searchTermOptions?: InputMaybe<SearchTermOptions>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  text?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  videoUrl?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Items_TableRow = {
  __typename: 'items_TableRow';
  col1?: Maybe<Scalars['String']['output']>;
  text?: Maybe<Scalars['String']['output']>;
};

export type NumberedList_Entry = ElementInterface & EntryInterface & {
  __typename: 'numberedList_Entry';
  /** Return a number of related elements for a field. */
  _count?: Maybe<Scalars['Int']['output']>;
  /** The entry’s ancestors, if the section is a structure. Accepts the same arguments as the `entries` query. */
  ancestors: Array<EntryInterface>;
  /** Whether the element is archived. */
  archived?: Maybe<Scalars['Boolean']['output']>;
  /** Returns the entry’s canonical ID. */
  canonicalId?: Maybe<Scalars['Int']['output']>;
  /** Returns the entry’s canonical UUID. */
  canonicalUid?: Maybe<Scalars['String']['output']>;
  /** The entry’s children, if the section is a structure. Accepts the same arguments as the `entries` query. */
  children: Array<EntryInterface>;
  /** The date the element was created. */
  dateCreated?: Maybe<Scalars['DateTime']['output']>;
  /** The date the element was last updated. */
  dateUpdated?: Maybe<Scalars['DateTime']['output']>;
  /** The entry’s descendants, if the section is a structure. Accepts the same arguments as the `entries` query. */
  descendants: Array<EntryInterface>;
  /** The draft ID (from the `drafts` table). */
  draftId?: Maybe<Scalars['Int']['output']>;
  /** The name of the draft. */
  draftName?: Maybe<Scalars['String']['output']>;
  /** The notes for the draft. */
  draftNotes?: Maybe<Scalars['String']['output']>;
  /** Whether the element is enabled. */
  enabled?: Maybe<Scalars['Boolean']['output']>;
  /** Whether the element is enabled for the site. */
  enabledForSite?: Maybe<Scalars['Boolean']['output']>;
  /** The expiry date of the entry. */
  expiryDate?: Maybe<Scalars['DateTime']['output']>;
  /** The handle of the field that contains the entry. */
  fieldHandle?: Maybe<Scalars['String']['output']>;
  /** The ID of the field that contains the entry. */
  fieldId?: Maybe<Scalars['Int']['output']>;
  /** The ID of the entity */
  id?: Maybe<Scalars['ID']['output']>;
  /** Returns whether this is a draft. */
  isDraft?: Maybe<Scalars['Boolean']['output']>;
  /** Returns whether this is a revision. */
  isRevision?: Maybe<Scalars['Boolean']['output']>;
  /** Returns whether this is an unpublished draft. */
  isUnpublishedDraft?: Maybe<Scalars['Boolean']['output']>;
  items?: Maybe<Array<Maybe<Items_TableRow>>>;
  /** The language of the site element is associated with. */
  language?: Maybe<Scalars['String']['output']>;
  /** The element’s level within its structure */
  level?: Maybe<Scalars['Int']['output']>;
  /** The element’s left position within its structure. */
  lft?: Maybe<Scalars['Int']['output']>;
  /** The same element in other locales. */
  localized: Array<EntryInterface>;
  /** Returns the next element relative to this one, from a given set of criteria. */
  next?: Maybe<EntryInterface>;
  /** The ID of the entry’s owner element. */
  ownerId?: Maybe<Scalars['Int']['output']>;
  /** The entry’s parent, if the section is a structure. */
  parent?: Maybe<EntryInterface>;
  /** The entry’s post date. */
  postDate?: Maybe<Scalars['DateTime']['output']>;
  /** Returns the previous element relative to this one, from a given set of criteria. */
  prev?: Maybe<EntryInterface>;
  /** The revision ID (from the `revisions` table). */
  revisionId?: Maybe<Scalars['Int']['output']>;
  /** The revision notes (from the `revisions` table). */
  revisionNotes?: Maybe<Scalars['String']['output']>;
  /** The element’s right position within its structure. */
  rgt?: Maybe<Scalars['Int']['output']>;
  /** The element’s structure’s root ID */
  root?: Maybe<Scalars['Int']['output']>;
  /** The element’s search score, if the `search` parameter was used when querying for the element. */
  searchScore?: Maybe<Scalars['Int']['output']>;
  /** The handle of the section that contains the entry. */
  sectionHandle?: Maybe<Scalars['String']['output']>;
  /** The ID of the section that contains the entry. */
  sectionId?: Maybe<Scalars['Int']['output']>;
  /** The handle of the site the element is associated with. */
  siteHandle?: Maybe<Scalars['String']['output']>;
  /** The ID of the site the element is associated with. */
  siteId?: Maybe<Scalars['Int']['output']>;
  /** The unique identifier for an element-site relation. */
  siteSettingsId?: Maybe<Scalars['ID']['output']>;
  /** The element’s slug. */
  slug?: Maybe<Scalars['String']['output']>;
  /** The entry’s position within the field that contains it. */
  sortOrder?: Maybe<Scalars['Int']['output']>;
  /**
   * Returns the entry’s canonical ID.
   * @deprecated this field has been deprecated since Craft 3.7.7. Use `canonicalId` instead.
   */
  sourceId?: Maybe<Scalars['Int']['output']>;
  /**
   * Returns the entry’s canonical UUID.
   * @deprecated this field has been deprecated since Craft 3.7.7. Use `canonicalUid` instead.
   */
  sourceUid?: Maybe<Scalars['String']['output']>;
  /** The element’s status. */
  status?: Maybe<Scalars['String']['output']>;
  /** The element’s structure ID. */
  structureId?: Maybe<Scalars['Int']['output']>;
  /** The element’s title. */
  title?: Maybe<Scalars['String']['output']>;
  /** Whether the element has been soft-deleted. */
  trashed?: Maybe<Scalars['Boolean']['output']>;
  /** The handle of the entry type that contains the entry. */
  typeHandle: Scalars['String']['output'];
  /** The ID of the entry type that contains the entry. */
  typeId: Scalars['Int']['output'];
  /** The UID of the entity */
  uid?: Maybe<Scalars['String']['output']>;
  /** The element’s URI. */
  uri?: Maybe<Scalars['String']['output']>;
  /** The element’s full URL */
  url?: Maybe<Scalars['String']['output']>;
};


export type NumberedList_Entry_CountArgs = {
  field: Scalars['String']['input'];
};


export type NumberedList_EntryAncestorsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before?: InputMaybe<Scalars['String']['input']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  field?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fieldId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  language?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  notRelatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  ownerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  primaryOwnerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetRelationCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryRelationCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryRelationCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagRelationCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserRelationCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  searchTermOptions?: InputMaybe<SearchTermOptions>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};


export type NumberedList_EntryChildrenArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before?: InputMaybe<Scalars['String']['input']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  field?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fieldId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  language?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  notRelatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  ownerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  primaryOwnerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetRelationCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryRelationCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryRelationCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagRelationCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserRelationCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  searchTermOptions?: InputMaybe<SearchTermOptions>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};


export type NumberedList_EntryDescendantsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before?: InputMaybe<Scalars['String']['input']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  field?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fieldId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  language?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  notRelatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  ownerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  primaryOwnerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetRelationCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryRelationCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryRelationCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagRelationCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserRelationCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  searchTermOptions?: InputMaybe<SearchTermOptions>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};


export type NumberedList_EntryLocalizedArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorName?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorPhoto?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorPosition?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before?: InputMaybe<Scalars['String']['input']>;
  bio?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  blogCategory?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  body?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  caption?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  featuredImage?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  field?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fieldId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  image?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  isFeatured?: InputMaybe<Scalars['Boolean']['input']>;
  items?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  language?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  metaDescription?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  metaTitle?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  notRelatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  ownerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  perex?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  photo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  position?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  primaryOwnerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetRelationCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryRelationCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryRelationCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagRelationCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserRelationCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  searchTermOptions?: InputMaybe<SearchTermOptions>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  text?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  videoUrl?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};


export type NumberedList_EntryNextArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorName?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorPhoto?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorPosition?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before?: InputMaybe<Scalars['String']['input']>;
  bio?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  blogCategory?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  body?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  caption?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  featuredImage?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  field?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fieldId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  image?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  isFeatured?: InputMaybe<Scalars['Boolean']['input']>;
  items?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  language?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  metaDescription?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  metaTitle?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  notRelatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  ownerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  perex?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  photo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  position?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  primaryOwnerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetRelationCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryRelationCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryRelationCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagRelationCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserRelationCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  searchTermOptions?: InputMaybe<SearchTermOptions>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  text?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  videoUrl?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};


export type NumberedList_EntryParentArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before?: InputMaybe<Scalars['String']['input']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  field?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fieldId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  language?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  notRelatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  ownerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  primaryOwnerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetRelationCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryRelationCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryRelationCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagRelationCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserRelationCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  searchTermOptions?: InputMaybe<SearchTermOptions>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};


export type NumberedList_EntryPrevArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorName?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorPhoto?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorPosition?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before?: InputMaybe<Scalars['String']['input']>;
  bio?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  blogCategory?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  body?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  caption?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  featuredImage?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  field?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fieldId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  image?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  isFeatured?: InputMaybe<Scalars['Boolean']['input']>;
  items?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  language?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  metaDescription?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  metaTitle?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  notRelatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  ownerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  perex?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  photo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  position?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  primaryOwnerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetRelationCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryRelationCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryRelationCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagRelationCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserRelationCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  searchTermOptions?: InputMaybe<SearchTermOptions>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  text?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  videoUrl?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Quote_Entry = ElementInterface & EntryInterface & {
  __typename: 'quote_Entry';
  /** Return a number of related elements for a field. */
  _count?: Maybe<Scalars['Int']['output']>;
  /** The entry’s ancestors, if the section is a structure. Accepts the same arguments as the `entries` query. */
  ancestors: Array<EntryInterface>;
  /** Whether the element is archived. */
  archived?: Maybe<Scalars['Boolean']['output']>;
  authorName?: Maybe<Scalars['String']['output']>;
  authorPhoto: Array<Maybe<AssetInterface>>;
  authorPosition?: Maybe<Scalars['String']['output']>;
  /** Returns the entry’s canonical ID. */
  canonicalId?: Maybe<Scalars['Int']['output']>;
  /** Returns the entry’s canonical UUID. */
  canonicalUid?: Maybe<Scalars['String']['output']>;
  /** The entry’s children, if the section is a structure. Accepts the same arguments as the `entries` query. */
  children: Array<EntryInterface>;
  /** The date the element was created. */
  dateCreated?: Maybe<Scalars['DateTime']['output']>;
  /** The date the element was last updated. */
  dateUpdated?: Maybe<Scalars['DateTime']['output']>;
  /** The entry’s descendants, if the section is a structure. Accepts the same arguments as the `entries` query. */
  descendants: Array<EntryInterface>;
  /** The draft ID (from the `drafts` table). */
  draftId?: Maybe<Scalars['Int']['output']>;
  /** The name of the draft. */
  draftName?: Maybe<Scalars['String']['output']>;
  /** The notes for the draft. */
  draftNotes?: Maybe<Scalars['String']['output']>;
  /** Whether the element is enabled. */
  enabled?: Maybe<Scalars['Boolean']['output']>;
  /** Whether the element is enabled for the site. */
  enabledForSite?: Maybe<Scalars['Boolean']['output']>;
  /** The expiry date of the entry. */
  expiryDate?: Maybe<Scalars['DateTime']['output']>;
  /** The handle of the field that contains the entry. */
  fieldHandle?: Maybe<Scalars['String']['output']>;
  /** The ID of the field that contains the entry. */
  fieldId?: Maybe<Scalars['Int']['output']>;
  /** The ID of the entity */
  id?: Maybe<Scalars['ID']['output']>;
  /** Returns whether this is a draft. */
  isDraft?: Maybe<Scalars['Boolean']['output']>;
  /** Returns whether this is a revision. */
  isRevision?: Maybe<Scalars['Boolean']['output']>;
  /** Returns whether this is an unpublished draft. */
  isUnpublishedDraft?: Maybe<Scalars['Boolean']['output']>;
  /** The language of the site element is associated with. */
  language?: Maybe<Scalars['String']['output']>;
  /** The element’s level within its structure */
  level?: Maybe<Scalars['Int']['output']>;
  /** The element’s left position within its structure. */
  lft?: Maybe<Scalars['Int']['output']>;
  /** The same element in other locales. */
  localized: Array<EntryInterface>;
  /** Returns the next element relative to this one, from a given set of criteria. */
  next?: Maybe<EntryInterface>;
  /** The ID of the entry’s owner element. */
  ownerId?: Maybe<Scalars['Int']['output']>;
  /** The entry’s parent, if the section is a structure. */
  parent?: Maybe<EntryInterface>;
  /** The entry’s post date. */
  postDate?: Maybe<Scalars['DateTime']['output']>;
  /** Returns the previous element relative to this one, from a given set of criteria. */
  prev?: Maybe<EntryInterface>;
  /** The revision ID (from the `revisions` table). */
  revisionId?: Maybe<Scalars['Int']['output']>;
  /** The revision notes (from the `revisions` table). */
  revisionNotes?: Maybe<Scalars['String']['output']>;
  /** The element’s right position within its structure. */
  rgt?: Maybe<Scalars['Int']['output']>;
  /** The element’s structure’s root ID */
  root?: Maybe<Scalars['Int']['output']>;
  /** The element’s search score, if the `search` parameter was used when querying for the element. */
  searchScore?: Maybe<Scalars['Int']['output']>;
  /** The handle of the section that contains the entry. */
  sectionHandle?: Maybe<Scalars['String']['output']>;
  /** The ID of the section that contains the entry. */
  sectionId?: Maybe<Scalars['Int']['output']>;
  /** The handle of the site the element is associated with. */
  siteHandle?: Maybe<Scalars['String']['output']>;
  /** The ID of the site the element is associated with. */
  siteId?: Maybe<Scalars['Int']['output']>;
  /** The unique identifier for an element-site relation. */
  siteSettingsId?: Maybe<Scalars['ID']['output']>;
  /** The element’s slug. */
  slug?: Maybe<Scalars['String']['output']>;
  /** The entry’s position within the field that contains it. */
  sortOrder?: Maybe<Scalars['Int']['output']>;
  /**
   * Returns the entry’s canonical ID.
   * @deprecated this field has been deprecated since Craft 3.7.7. Use `canonicalId` instead.
   */
  sourceId?: Maybe<Scalars['Int']['output']>;
  /**
   * Returns the entry’s canonical UUID.
   * @deprecated this field has been deprecated since Craft 3.7.7. Use `canonicalUid` instead.
   */
  sourceUid?: Maybe<Scalars['String']['output']>;
  /** The element’s status. */
  status?: Maybe<Scalars['String']['output']>;
  /** The element’s structure ID. */
  structureId?: Maybe<Scalars['Int']['output']>;
  text?: Maybe<Scalars['String']['output']>;
  /** The element’s title. */
  title?: Maybe<Scalars['String']['output']>;
  /** Whether the element has been soft-deleted. */
  trashed?: Maybe<Scalars['Boolean']['output']>;
  /** The handle of the entry type that contains the entry. */
  typeHandle: Scalars['String']['output'];
  /** The ID of the entry type that contains the entry. */
  typeId: Scalars['Int']['output'];
  /** The UID of the entity */
  uid?: Maybe<Scalars['String']['output']>;
  /** The element’s URI. */
  uri?: Maybe<Scalars['String']['output']>;
  /** The element’s full URL */
  url?: Maybe<Scalars['String']['output']>;
};


export type Quote_Entry_CountArgs = {
  field: Scalars['String']['input'];
};


export type Quote_EntryAncestorsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before?: InputMaybe<Scalars['String']['input']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  field?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fieldId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  language?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  notRelatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  ownerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  primaryOwnerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetRelationCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryRelationCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryRelationCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagRelationCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserRelationCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  searchTermOptions?: InputMaybe<SearchTermOptions>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};


export type Quote_EntryAuthorPhotoArgs = {
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateModified?: InputMaybe<Scalars['String']['input']>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  filename?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  folderId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  hasAlt?: InputMaybe<Scalars['Boolean']['input']>;
  height?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  includeSubfolders?: InputMaybe<Scalars['Boolean']['input']>;
  kind?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  language?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  notRelatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetRelationCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryRelationCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryRelationCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagRelationCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserRelationCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  searchTermOptions?: InputMaybe<SearchTermOptions>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  size?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uploader?: InputMaybe<Scalars['QueryArgument']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  volume?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  volumeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  width?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withTransforms?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Quote_EntryChildrenArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before?: InputMaybe<Scalars['String']['input']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  field?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fieldId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  language?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  notRelatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  ownerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  primaryOwnerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetRelationCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryRelationCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryRelationCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagRelationCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserRelationCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  searchTermOptions?: InputMaybe<SearchTermOptions>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};


export type Quote_EntryDescendantsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before?: InputMaybe<Scalars['String']['input']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  field?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fieldId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  language?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  notRelatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  ownerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  primaryOwnerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetRelationCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryRelationCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryRelationCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagRelationCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserRelationCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  searchTermOptions?: InputMaybe<SearchTermOptions>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};


export type Quote_EntryLocalizedArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorName?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorPhoto?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorPosition?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before?: InputMaybe<Scalars['String']['input']>;
  bio?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  blogCategory?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  body?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  caption?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  featuredImage?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  field?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fieldId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  image?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  isFeatured?: InputMaybe<Scalars['Boolean']['input']>;
  items?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  language?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  metaDescription?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  metaTitle?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  notRelatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  ownerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  perex?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  photo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  position?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  primaryOwnerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetRelationCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryRelationCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryRelationCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagRelationCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserRelationCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  searchTermOptions?: InputMaybe<SearchTermOptions>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  text?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  videoUrl?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};


export type Quote_EntryNextArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorName?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorPhoto?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorPosition?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before?: InputMaybe<Scalars['String']['input']>;
  bio?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  blogCategory?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  body?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  caption?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  featuredImage?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  field?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fieldId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  image?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  isFeatured?: InputMaybe<Scalars['Boolean']['input']>;
  items?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  language?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  metaDescription?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  metaTitle?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  notRelatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  ownerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  perex?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  photo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  position?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  primaryOwnerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetRelationCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryRelationCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryRelationCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagRelationCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserRelationCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  searchTermOptions?: InputMaybe<SearchTermOptions>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  text?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  videoUrl?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};


export type Quote_EntryParentArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before?: InputMaybe<Scalars['String']['input']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  field?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fieldId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  language?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  notRelatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  ownerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  primaryOwnerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetRelationCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryRelationCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryRelationCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagRelationCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserRelationCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  searchTermOptions?: InputMaybe<SearchTermOptions>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};


export type Quote_EntryPrevArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorName?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorPhoto?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorPosition?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before?: InputMaybe<Scalars['String']['input']>;
  bio?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  blogCategory?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  body?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  caption?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  featuredImage?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  field?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fieldId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  image?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  isFeatured?: InputMaybe<Scalars['Boolean']['input']>;
  items?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  language?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  metaDescription?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  metaTitle?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  notRelatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  ownerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  perex?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  photo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  position?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  primaryOwnerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetRelationCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryRelationCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryRelationCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagRelationCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserRelationCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  searchTermOptions?: InputMaybe<SearchTermOptions>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  text?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  videoUrl?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};

export type TextBlock_Entry = ElementInterface & EntryInterface & {
  __typename: 'textBlock_Entry';
  /** Return a number of related elements for a field. */
  _count?: Maybe<Scalars['Int']['output']>;
  /** The entry’s ancestors, if the section is a structure. Accepts the same arguments as the `entries` query. */
  ancestors: Array<EntryInterface>;
  /** Whether the element is archived. */
  archived?: Maybe<Scalars['Boolean']['output']>;
  body?: Maybe<Body_CkeditorField>;
  /** Returns the entry’s canonical ID. */
  canonicalId?: Maybe<Scalars['Int']['output']>;
  /** Returns the entry’s canonical UUID. */
  canonicalUid?: Maybe<Scalars['String']['output']>;
  /** The entry’s children, if the section is a structure. Accepts the same arguments as the `entries` query. */
  children: Array<EntryInterface>;
  /** The date the element was created. */
  dateCreated?: Maybe<Scalars['DateTime']['output']>;
  /** The date the element was last updated. */
  dateUpdated?: Maybe<Scalars['DateTime']['output']>;
  /** The entry’s descendants, if the section is a structure. Accepts the same arguments as the `entries` query. */
  descendants: Array<EntryInterface>;
  /** The draft ID (from the `drafts` table). */
  draftId?: Maybe<Scalars['Int']['output']>;
  /** The name of the draft. */
  draftName?: Maybe<Scalars['String']['output']>;
  /** The notes for the draft. */
  draftNotes?: Maybe<Scalars['String']['output']>;
  /** Whether the element is enabled. */
  enabled?: Maybe<Scalars['Boolean']['output']>;
  /** Whether the element is enabled for the site. */
  enabledForSite?: Maybe<Scalars['Boolean']['output']>;
  /** The expiry date of the entry. */
  expiryDate?: Maybe<Scalars['DateTime']['output']>;
  /** The handle of the field that contains the entry. */
  fieldHandle?: Maybe<Scalars['String']['output']>;
  /** The ID of the field that contains the entry. */
  fieldId?: Maybe<Scalars['Int']['output']>;
  /** The ID of the entity */
  id?: Maybe<Scalars['ID']['output']>;
  /** Returns whether this is a draft. */
  isDraft?: Maybe<Scalars['Boolean']['output']>;
  /** Returns whether this is a revision. */
  isRevision?: Maybe<Scalars['Boolean']['output']>;
  /** Returns whether this is an unpublished draft. */
  isUnpublishedDraft?: Maybe<Scalars['Boolean']['output']>;
  /** The language of the site element is associated with. */
  language?: Maybe<Scalars['String']['output']>;
  /** The element’s level within its structure */
  level?: Maybe<Scalars['Int']['output']>;
  /** The element’s left position within its structure. */
  lft?: Maybe<Scalars['Int']['output']>;
  /** The same element in other locales. */
  localized: Array<EntryInterface>;
  /** Returns the next element relative to this one, from a given set of criteria. */
  next?: Maybe<EntryInterface>;
  /** The ID of the entry’s owner element. */
  ownerId?: Maybe<Scalars['Int']['output']>;
  /** The entry’s parent, if the section is a structure. */
  parent?: Maybe<EntryInterface>;
  /** The entry’s post date. */
  postDate?: Maybe<Scalars['DateTime']['output']>;
  /** Returns the previous element relative to this one, from a given set of criteria. */
  prev?: Maybe<EntryInterface>;
  /** The revision ID (from the `revisions` table). */
  revisionId?: Maybe<Scalars['Int']['output']>;
  /** The revision notes (from the `revisions` table). */
  revisionNotes?: Maybe<Scalars['String']['output']>;
  /** The element’s right position within its structure. */
  rgt?: Maybe<Scalars['Int']['output']>;
  /** The element’s structure’s root ID */
  root?: Maybe<Scalars['Int']['output']>;
  /** The element’s search score, if the `search` parameter was used when querying for the element. */
  searchScore?: Maybe<Scalars['Int']['output']>;
  /** The handle of the section that contains the entry. */
  sectionHandle?: Maybe<Scalars['String']['output']>;
  /** The ID of the section that contains the entry. */
  sectionId?: Maybe<Scalars['Int']['output']>;
  /** The handle of the site the element is associated with. */
  siteHandle?: Maybe<Scalars['String']['output']>;
  /** The ID of the site the element is associated with. */
  siteId?: Maybe<Scalars['Int']['output']>;
  /** The unique identifier for an element-site relation. */
  siteSettingsId?: Maybe<Scalars['ID']['output']>;
  /** The element’s slug. */
  slug?: Maybe<Scalars['String']['output']>;
  /** The entry’s position within the field that contains it. */
  sortOrder?: Maybe<Scalars['Int']['output']>;
  /**
   * Returns the entry’s canonical ID.
   * @deprecated this field has been deprecated since Craft 3.7.7. Use `canonicalId` instead.
   */
  sourceId?: Maybe<Scalars['Int']['output']>;
  /**
   * Returns the entry’s canonical UUID.
   * @deprecated this field has been deprecated since Craft 3.7.7. Use `canonicalUid` instead.
   */
  sourceUid?: Maybe<Scalars['String']['output']>;
  /** The element’s status. */
  status?: Maybe<Scalars['String']['output']>;
  /** The element’s structure ID. */
  structureId?: Maybe<Scalars['Int']['output']>;
  /** The element’s title. */
  title?: Maybe<Scalars['String']['output']>;
  /** Whether the element has been soft-deleted. */
  trashed?: Maybe<Scalars['Boolean']['output']>;
  /** The handle of the entry type that contains the entry. */
  typeHandle: Scalars['String']['output'];
  /** The ID of the entry type that contains the entry. */
  typeId: Scalars['Int']['output'];
  /** The UID of the entity */
  uid?: Maybe<Scalars['String']['output']>;
  /** The element’s URI. */
  uri?: Maybe<Scalars['String']['output']>;
  /** The element’s full URL */
  url?: Maybe<Scalars['String']['output']>;
};


export type TextBlock_Entry_CountArgs = {
  field: Scalars['String']['input'];
};


export type TextBlock_EntryAncestorsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before?: InputMaybe<Scalars['String']['input']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  field?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fieldId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  language?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  notRelatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  ownerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  primaryOwnerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetRelationCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryRelationCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryRelationCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagRelationCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserRelationCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  searchTermOptions?: InputMaybe<SearchTermOptions>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};


export type TextBlock_EntryChildrenArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before?: InputMaybe<Scalars['String']['input']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  field?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fieldId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  language?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  notRelatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  ownerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  primaryOwnerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetRelationCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryRelationCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryRelationCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagRelationCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserRelationCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  searchTermOptions?: InputMaybe<SearchTermOptions>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};


export type TextBlock_EntryDescendantsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before?: InputMaybe<Scalars['String']['input']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  field?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fieldId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  language?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  notRelatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  ownerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  primaryOwnerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetRelationCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryRelationCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryRelationCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagRelationCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserRelationCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  searchTermOptions?: InputMaybe<SearchTermOptions>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};


export type TextBlock_EntryLocalizedArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorName?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorPhoto?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorPosition?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before?: InputMaybe<Scalars['String']['input']>;
  bio?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  blogCategory?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  body?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  caption?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  featuredImage?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  field?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fieldId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  image?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  isFeatured?: InputMaybe<Scalars['Boolean']['input']>;
  items?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  language?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  metaDescription?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  metaTitle?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  notRelatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  ownerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  perex?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  photo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  position?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  primaryOwnerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetRelationCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryRelationCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryRelationCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagRelationCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserRelationCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  searchTermOptions?: InputMaybe<SearchTermOptions>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  text?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  videoUrl?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};


export type TextBlock_EntryNextArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorName?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorPhoto?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorPosition?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before?: InputMaybe<Scalars['String']['input']>;
  bio?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  blogCategory?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  body?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  caption?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  featuredImage?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  field?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fieldId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  image?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  isFeatured?: InputMaybe<Scalars['Boolean']['input']>;
  items?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  language?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  metaDescription?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  metaTitle?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  notRelatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  ownerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  perex?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  photo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  position?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  primaryOwnerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetRelationCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryRelationCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryRelationCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagRelationCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserRelationCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  searchTermOptions?: InputMaybe<SearchTermOptions>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  text?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  videoUrl?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};


export type TextBlock_EntryParentArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before?: InputMaybe<Scalars['String']['input']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  field?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fieldId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  language?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  notRelatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  ownerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  primaryOwnerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetRelationCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryRelationCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryRelationCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagRelationCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserRelationCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  searchTermOptions?: InputMaybe<SearchTermOptions>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};


export type TextBlock_EntryPrevArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorName?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorPhoto?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorPosition?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before?: InputMaybe<Scalars['String']['input']>;
  bio?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  blogCategory?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  body?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  caption?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  featuredImage?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  field?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fieldId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  image?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  isFeatured?: InputMaybe<Scalars['Boolean']['input']>;
  items?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  language?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  metaDescription?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  metaTitle?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  notRelatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  ownerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  perex?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  photo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  position?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  primaryOwnerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetRelationCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryRelationCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryRelationCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagRelationCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserRelationCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  searchTermOptions?: InputMaybe<SearchTermOptions>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  text?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  videoUrl?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};

export type YoutubeEmbed_Entry = ElementInterface & EntryInterface & {
  __typename: 'youtubeEmbed_Entry';
  /** Return a number of related elements for a field. */
  _count?: Maybe<Scalars['Int']['output']>;
  /** The entry’s ancestors, if the section is a structure. Accepts the same arguments as the `entries` query. */
  ancestors: Array<EntryInterface>;
  /** Whether the element is archived. */
  archived?: Maybe<Scalars['Boolean']['output']>;
  /** Returns the entry’s canonical ID. */
  canonicalId?: Maybe<Scalars['Int']['output']>;
  /** Returns the entry’s canonical UUID. */
  canonicalUid?: Maybe<Scalars['String']['output']>;
  /** The entry’s children, if the section is a structure. Accepts the same arguments as the `entries` query. */
  children: Array<EntryInterface>;
  /** The date the element was created. */
  dateCreated?: Maybe<Scalars['DateTime']['output']>;
  /** The date the element was last updated. */
  dateUpdated?: Maybe<Scalars['DateTime']['output']>;
  /** The entry’s descendants, if the section is a structure. Accepts the same arguments as the `entries` query. */
  descendants: Array<EntryInterface>;
  /** The draft ID (from the `drafts` table). */
  draftId?: Maybe<Scalars['Int']['output']>;
  /** The name of the draft. */
  draftName?: Maybe<Scalars['String']['output']>;
  /** The notes for the draft. */
  draftNotes?: Maybe<Scalars['String']['output']>;
  /** Whether the element is enabled. */
  enabled?: Maybe<Scalars['Boolean']['output']>;
  /** Whether the element is enabled for the site. */
  enabledForSite?: Maybe<Scalars['Boolean']['output']>;
  /** The expiry date of the entry. */
  expiryDate?: Maybe<Scalars['DateTime']['output']>;
  /** The handle of the field that contains the entry. */
  fieldHandle?: Maybe<Scalars['String']['output']>;
  /** The ID of the field that contains the entry. */
  fieldId?: Maybe<Scalars['Int']['output']>;
  /** The ID of the entity */
  id?: Maybe<Scalars['ID']['output']>;
  /** Returns whether this is a draft. */
  isDraft?: Maybe<Scalars['Boolean']['output']>;
  /** Returns whether this is a revision. */
  isRevision?: Maybe<Scalars['Boolean']['output']>;
  /** Returns whether this is an unpublished draft. */
  isUnpublishedDraft?: Maybe<Scalars['Boolean']['output']>;
  /** The language of the site element is associated with. */
  language?: Maybe<Scalars['String']['output']>;
  /** The element’s level within its structure */
  level?: Maybe<Scalars['Int']['output']>;
  /** The element’s left position within its structure. */
  lft?: Maybe<Scalars['Int']['output']>;
  /** The same element in other locales. */
  localized: Array<EntryInterface>;
  /** Returns the next element relative to this one, from a given set of criteria. */
  next?: Maybe<EntryInterface>;
  /** The ID of the entry’s owner element. */
  ownerId?: Maybe<Scalars['Int']['output']>;
  /** The entry’s parent, if the section is a structure. */
  parent?: Maybe<EntryInterface>;
  /** The entry’s post date. */
  postDate?: Maybe<Scalars['DateTime']['output']>;
  /** Returns the previous element relative to this one, from a given set of criteria. */
  prev?: Maybe<EntryInterface>;
  /** The revision ID (from the `revisions` table). */
  revisionId?: Maybe<Scalars['Int']['output']>;
  /** The revision notes (from the `revisions` table). */
  revisionNotes?: Maybe<Scalars['String']['output']>;
  /** The element’s right position within its structure. */
  rgt?: Maybe<Scalars['Int']['output']>;
  /** The element’s structure’s root ID */
  root?: Maybe<Scalars['Int']['output']>;
  /** The element’s search score, if the `search` parameter was used when querying for the element. */
  searchScore?: Maybe<Scalars['Int']['output']>;
  /** The handle of the section that contains the entry. */
  sectionHandle?: Maybe<Scalars['String']['output']>;
  /** The ID of the section that contains the entry. */
  sectionId?: Maybe<Scalars['Int']['output']>;
  /** The handle of the site the element is associated with. */
  siteHandle?: Maybe<Scalars['String']['output']>;
  /** The ID of the site the element is associated with. */
  siteId?: Maybe<Scalars['Int']['output']>;
  /** The unique identifier for an element-site relation. */
  siteSettingsId?: Maybe<Scalars['ID']['output']>;
  /** The element’s slug. */
  slug?: Maybe<Scalars['String']['output']>;
  /** The entry’s position within the field that contains it. */
  sortOrder?: Maybe<Scalars['Int']['output']>;
  /**
   * Returns the entry’s canonical ID.
   * @deprecated this field has been deprecated since Craft 3.7.7. Use `canonicalId` instead.
   */
  sourceId?: Maybe<Scalars['Int']['output']>;
  /**
   * Returns the entry’s canonical UUID.
   * @deprecated this field has been deprecated since Craft 3.7.7. Use `canonicalUid` instead.
   */
  sourceUid?: Maybe<Scalars['String']['output']>;
  /** The element’s status. */
  status?: Maybe<Scalars['String']['output']>;
  /** The element’s structure ID. */
  structureId?: Maybe<Scalars['Int']['output']>;
  /** The element’s title. */
  title?: Maybe<Scalars['String']['output']>;
  /** Whether the element has been soft-deleted. */
  trashed?: Maybe<Scalars['Boolean']['output']>;
  /** The handle of the entry type that contains the entry. */
  typeHandle: Scalars['String']['output'];
  /** The ID of the entry type that contains the entry. */
  typeId: Scalars['Int']['output'];
  /** The UID of the entity */
  uid?: Maybe<Scalars['String']['output']>;
  /** The element’s URI. */
  uri?: Maybe<Scalars['String']['output']>;
  /** The element’s full URL */
  url?: Maybe<Scalars['String']['output']>;
  videoUrl?: Maybe<LinkData>;
};


export type YoutubeEmbed_Entry_CountArgs = {
  field: Scalars['String']['input'];
};


export type YoutubeEmbed_EntryAncestorsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before?: InputMaybe<Scalars['String']['input']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  field?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fieldId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  language?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  notRelatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  ownerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  primaryOwnerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetRelationCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryRelationCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryRelationCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagRelationCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserRelationCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  searchTermOptions?: InputMaybe<SearchTermOptions>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};


export type YoutubeEmbed_EntryChildrenArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before?: InputMaybe<Scalars['String']['input']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  field?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fieldId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  language?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  notRelatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  ownerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  primaryOwnerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetRelationCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryRelationCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryRelationCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagRelationCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserRelationCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  searchTermOptions?: InputMaybe<SearchTermOptions>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};


export type YoutubeEmbed_EntryDescendantsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before?: InputMaybe<Scalars['String']['input']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  field?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fieldId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  language?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  notRelatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  ownerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  primaryOwnerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetRelationCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryRelationCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryRelationCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagRelationCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserRelationCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  searchTermOptions?: InputMaybe<SearchTermOptions>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};


export type YoutubeEmbed_EntryLocalizedArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorName?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorPhoto?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorPosition?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before?: InputMaybe<Scalars['String']['input']>;
  bio?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  blogCategory?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  body?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  caption?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  featuredImage?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  field?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fieldId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  image?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  isFeatured?: InputMaybe<Scalars['Boolean']['input']>;
  items?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  language?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  metaDescription?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  metaTitle?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  notRelatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  ownerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  perex?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  photo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  position?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  primaryOwnerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetRelationCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryRelationCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryRelationCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagRelationCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserRelationCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  searchTermOptions?: InputMaybe<SearchTermOptions>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  text?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  videoUrl?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};


export type YoutubeEmbed_EntryNextArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorName?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorPhoto?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorPosition?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before?: InputMaybe<Scalars['String']['input']>;
  bio?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  blogCategory?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  body?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  caption?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  featuredImage?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  field?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fieldId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  image?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  isFeatured?: InputMaybe<Scalars['Boolean']['input']>;
  items?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  language?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  metaDescription?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  metaTitle?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  notRelatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  ownerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  perex?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  photo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  position?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  primaryOwnerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetRelationCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryRelationCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryRelationCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagRelationCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserRelationCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  searchTermOptions?: InputMaybe<SearchTermOptions>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  text?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  videoUrl?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};


export type YoutubeEmbed_EntryParentArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before?: InputMaybe<Scalars['String']['input']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  field?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fieldId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  language?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  notRelatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  ownerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  primaryOwnerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetRelationCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryRelationCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryRelationCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagRelationCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserRelationCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  searchTermOptions?: InputMaybe<SearchTermOptions>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};


export type YoutubeEmbed_EntryPrevArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorName?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorPhoto?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorPosition?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before?: InputMaybe<Scalars['String']['input']>;
  bio?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  blogCategory?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  body?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  caption?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  featuredImage?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  field?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fieldId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  image?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  isFeatured?: InputMaybe<Scalars['Boolean']['input']>;
  items?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  language?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  metaDescription?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  metaTitle?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  notRelatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  ownerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  perex?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  photo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  position?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  primaryOwnerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetRelationCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryRelationCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryRelationCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagRelationCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserRelationCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  searchTermOptions?: InputMaybe<SearchTermOptions>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  text?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  videoUrl?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};

export type BlogListingEntryFragment = { __typename: 'blogArticle_Entry', id?: string | null, slug?: string | null, title?: string | null, postDate?: string | null, perex?: string | null, isFeatured?: boolean | null, featuredImage: Array<
    | { __typename: 'authorImages_Asset', url?: string | null, width?: number | null, height?: number | null }
    | { __typename: 'blogImages_Asset', url?: string | null, width?: number | null, height?: number | null }
   | null>, blogCategory: Array<{ __typename: 'blogCategories_Category', id?: string | null, slug?: string | null, title?: string | null } | null> };

export type BlogArticleDetailQueryVariables = Exact<{
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>>;
}>;


export type BlogArticleDetailQuery = { __typename: 'Query', entry?:
    | { __typename: 'authorCard_Entry' }
    | { __typename: 'blogArticle_Entry', metaTitle?: string | null, metaDescription?: string | null, id?: string | null, slug?: string | null, title?: string | null, postDate?: string | null, perex?: string | null, isFeatured?: boolean | null, articleContent: Array<
        | { __typename: 'authorCard_Entry', title?: string | null, position?: string | null, bio?: string | null, photo: Array<
            | { __typename: 'authorImages_Asset', url?: string | null }
            | { __typename: 'blogImages_Asset', url?: string | null }
           | null> }
        | { __typename: 'bulletList_Entry', items?: Array<{ __typename: 'items_TableRow', text?: string | null } | null> | null }
        | { __typename: 'checklist_Entry', items?: Array<{ __typename: 'items_TableRow', text?: string | null } | null> | null }
        | { __typename: 'heading_Entry', text?: string | null }
        | { __typename: 'imageWithCaption_Entry', caption?: string | null, image: Array<
            | { __typename: 'authorImages_Asset', url?: string | null, width?: number | null, height?: number | null }
            | { __typename: 'blogImages_Asset', url?: string | null, width?: number | null, height?: number | null }
           | null> }
        | { __typename: 'numberedList_Entry', items?: Array<{ __typename: 'items_TableRow', text?: string | null } | null> | null }
        | { __typename: 'quote_Entry', text?: string | null, authorName?: string | null, authorPosition?: string | null, authorPhoto: Array<
            | { __typename: 'authorImages_Asset', url?: string | null }
            | { __typename: 'blogImages_Asset', url?: string | null }
           | null> }
        | { __typename: 'textBlock_Entry', body?: { __typename: 'body_CkeditorField', html?: string | null } | null }
        | { __typename: 'youtubeEmbed_Entry', videoUrl?: { __typename: 'LinkData', url?: string | null } | null }
       | null>, featuredImage: Array<
        | { __typename: 'authorImages_Asset', url?: string | null, width?: number | null, height?: number | null }
        | { __typename: 'blogImages_Asset', url?: string | null, width?: number | null, height?: number | null }
       | null>, blogCategory: Array<{ __typename: 'blogCategories_Category', id?: string | null, slug?: string | null, title?: string | null } | null> }
    | { __typename: 'bulletList_Entry' }
    | { __typename: 'checklist_Entry' }
    | { __typename: 'heading_Entry' }
    | { __typename: 'imageWithCaption_Entry' }
    | { __typename: 'numberedList_Entry' }
    | { __typename: 'quote_Entry' }
    | { __typename: 'textBlock_Entry' }
    | { __typename: 'youtubeEmbed_Entry' }
   | null };

export type BlogArticleDetailNoContentQueryVariables = Exact<{
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>>;
}>;


export type BlogArticleDetailNoContentQuery = { __typename: 'Query', entry?:
    | { __typename: 'authorCard_Entry' }
    | { __typename: 'blogArticle_Entry', id?: string | null, slug?: string | null, title?: string | null, postDate?: string | null, perex?: string | null, isFeatured?: boolean | null, featuredImage: Array<
        | { __typename: 'authorImages_Asset', url?: string | null, width?: number | null, height?: number | null }
        | { __typename: 'blogImages_Asset', url?: string | null, width?: number | null, height?: number | null }
       | null>, blogCategory: Array<{ __typename: 'blogCategories_Category', id?: string | null, slug?: string | null, title?: string | null } | null> }
    | { __typename: 'bulletList_Entry' }
    | { __typename: 'checklist_Entry' }
    | { __typename: 'heading_Entry' }
    | { __typename: 'imageWithCaption_Entry' }
    | { __typename: 'numberedList_Entry' }
    | { __typename: 'quote_Entry' }
    | { __typename: 'textBlock_Entry' }
    | { __typename: 'youtubeEmbed_Entry' }
   | null };

export type BlogRelatedArticlesQueryVariables = Exact<{
  categorySlug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>>;
  excludeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>> | InputMaybe<Scalars['QueryArgument']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
}>;


export type BlogRelatedArticlesQuery = { __typename: 'Query', entries?: Array<
    | { __typename: 'authorCard_Entry' }
    | { __typename: 'blogArticle_Entry', id?: string | null, slug?: string | null, title?: string | null, postDate?: string | null, perex?: string | null, isFeatured?: boolean | null, featuredImage: Array<
        | { __typename: 'authorImages_Asset', url?: string | null, width?: number | null, height?: number | null }
        | { __typename: 'blogImages_Asset', url?: string | null, width?: number | null, height?: number | null }
       | null>, blogCategory: Array<{ __typename: 'blogCategories_Category', id?: string | null, slug?: string | null, title?: string | null } | null> }
    | { __typename: 'bulletList_Entry' }
    | { __typename: 'checklist_Entry' }
    | { __typename: 'heading_Entry' }
    | { __typename: 'imageWithCaption_Entry' }
    | { __typename: 'numberedList_Entry' }
    | { __typename: 'quote_Entry' }
    | { __typename: 'textBlock_Entry' }
    | { __typename: 'youtubeEmbed_Entry' }
   | null> | null };

export type BlogArticlesQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  categorySlug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>>;
}>;


export type BlogArticlesQuery = { __typename: 'Query', entryCount: number, blogEntries?: Array<
    | { __typename: 'authorCard_Entry' }
    | { __typename: 'blogArticle_Entry', id?: string | null, slug?: string | null, title?: string | null, postDate?: string | null, perex?: string | null, isFeatured?: boolean | null, featuredImage: Array<
        | { __typename: 'authorImages_Asset', url?: string | null, width?: number | null, height?: number | null }
        | { __typename: 'blogImages_Asset', url?: string | null, width?: number | null, height?: number | null }
       | null>, blogCategory: Array<{ __typename: 'blogCategories_Category', id?: string | null, slug?: string | null, title?: string | null } | null> }
    | { __typename: 'bulletList_Entry' }
    | { __typename: 'checklist_Entry' }
    | { __typename: 'heading_Entry' }
    | { __typename: 'imageWithCaption_Entry' }
    | { __typename: 'numberedList_Entry' }
    | { __typename: 'quote_Entry' }
    | { __typename: 'textBlock_Entry' }
    | { __typename: 'youtubeEmbed_Entry' }
   | null> | null };

export type BlogFeaturedQueryVariables = Exact<{ [key: string]: never; }>;


export type BlogFeaturedQuery = { __typename: 'Query', featuredEntry?: Array<
    | { __typename: 'authorCard_Entry' }
    | { __typename: 'blogArticle_Entry', id?: string | null, slug?: string | null, title?: string | null, postDate?: string | null, perex?: string | null, isFeatured?: boolean | null, featuredImage: Array<
        | { __typename: 'authorImages_Asset', url?: string | null, width?: number | null, height?: number | null }
        | { __typename: 'blogImages_Asset', url?: string | null, width?: number | null, height?: number | null }
       | null>, blogCategory: Array<{ __typename: 'blogCategories_Category', id?: string | null, slug?: string | null, title?: string | null } | null> }
    | { __typename: 'bulletList_Entry' }
    | { __typename: 'checklist_Entry' }
    | { __typename: 'heading_Entry' }
    | { __typename: 'imageWithCaption_Entry' }
    | { __typename: 'numberedList_Entry' }
    | { __typename: 'quote_Entry' }
    | { __typename: 'textBlock_Entry' }
    | { __typename: 'youtubeEmbed_Entry' }
   | null> | null };

export type BlogCategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type BlogCategoriesQuery = { __typename: 'Query', blogCategories?: Array<{ __typename: 'blogCategories_Category', id?: string | null, slug?: string | null, title?: string | null } | null> | null };

export const BlogListingEntryFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BlogListingEntry"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"blogArticle_Entry"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"postDate"}},{"kind":"Field","name":{"kind":"Name","value":"perex"}},{"kind":"Field","name":{"kind":"Name","value":"isFeatured"}},{"kind":"Field","name":{"kind":"Name","value":"featuredImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}},{"kind":"Field","name":{"kind":"Name","value":"blogCategory"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]} as unknown as DocumentNode<BlogListingEntryFragment, unknown>;
export const BlogArticleDetailDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"BlogArticleDetail"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"entry"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"section"},"value":{"kind":"StringValue","value":"blog","block":false}},{"kind":"Argument","name":{"kind":"Name","value":"slug"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"blogArticle_Entry"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"BlogListingEntry"}},{"kind":"Field","name":{"kind":"Name","value":"metaTitle"}},{"kind":"Field","name":{"kind":"Name","value":"metaDescription"}},{"kind":"Field","name":{"kind":"Name","value":"articleContent"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"heading_Entry"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"text"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"textBlock_Entry"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"body"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"html"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"checklist_Entry"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"text"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"bulletList_Entry"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"text"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"numberedList_Entry"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"text"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"quote_Entry"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"authorPhoto"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"authorName"}},{"kind":"Field","name":{"kind":"Name","value":"authorPosition"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"imageWithCaption_Entry"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}},{"kind":"Field","name":{"kind":"Name","value":"caption"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"youtubeEmbed_Entry"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"videoUrl"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"authorCard_Entry"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"photo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"position"}},{"kind":"Field","name":{"kind":"Name","value":"bio"}}]}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BlogListingEntry"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"blogArticle_Entry"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"postDate"}},{"kind":"Field","name":{"kind":"Name","value":"perex"}},{"kind":"Field","name":{"kind":"Name","value":"isFeatured"}},{"kind":"Field","name":{"kind":"Name","value":"featuredImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}},{"kind":"Field","name":{"kind":"Name","value":"blogCategory"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]} as unknown as DocumentNode<BlogArticleDetailQuery, BlogArticleDetailQueryVariables>;
export const BlogArticleDetailNoContentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"BlogArticleDetailNoContent"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"entry"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"section"},"value":{"kind":"StringValue","value":"blog","block":false}},{"kind":"Argument","name":{"kind":"Name","value":"slug"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"blogArticle_Entry"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"BlogListingEntry"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BlogListingEntry"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"blogArticle_Entry"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"postDate"}},{"kind":"Field","name":{"kind":"Name","value":"perex"}},{"kind":"Field","name":{"kind":"Name","value":"isFeatured"}},{"kind":"Field","name":{"kind":"Name","value":"featuredImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}},{"kind":"Field","name":{"kind":"Name","value":"blogCategory"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]} as unknown as DocumentNode<BlogArticleDetailNoContentQuery, BlogArticleDetailNoContentQueryVariables>;
export const BlogRelatedArticlesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"BlogRelatedArticles"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"categorySlug"}},"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"excludeId"}},"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"QueryArgument"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"entries"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"section"},"value":{"kind":"StringValue","value":"blog","block":false}},{"kind":"Argument","name":{"kind":"Name","value":"relatedToCategories"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"slug"},"value":{"kind":"Variable","name":{"kind":"Name","value":"categorySlug"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"excludeId"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"StringValue","value":"postDate DESC","block":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"blogArticle_Entry"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"BlogListingEntry"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BlogListingEntry"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"blogArticle_Entry"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"postDate"}},{"kind":"Field","name":{"kind":"Name","value":"perex"}},{"kind":"Field","name":{"kind":"Name","value":"isFeatured"}},{"kind":"Field","name":{"kind":"Name","value":"featuredImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}},{"kind":"Field","name":{"kind":"Name","value":"blogCategory"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]} as unknown as DocumentNode<BlogRelatedArticlesQuery, BlogRelatedArticlesQueryVariables>;
export const BlogArticlesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"BlogArticles"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"offset"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"categorySlug"}},"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","alias":{"kind":"Name","value":"blogEntries"},"name":{"kind":"Name","value":"entries"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"section"},"value":{"kind":"StringValue","value":"blog","block":false}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"offset"}}},{"kind":"Argument","name":{"kind":"Name","value":"relatedToCategories"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"slug"},"value":{"kind":"Variable","name":{"kind":"Name","value":"categorySlug"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"StringValue","value":"postDate DESC","block":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"blogArticle_Entry"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"BlogListingEntry"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"entryCount"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"section"},"value":{"kind":"StringValue","value":"blog","block":false}},{"kind":"Argument","name":{"kind":"Name","value":"relatedToCategories"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"slug"},"value":{"kind":"Variable","name":{"kind":"Name","value":"categorySlug"}}}]}}]}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BlogListingEntry"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"blogArticle_Entry"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"postDate"}},{"kind":"Field","name":{"kind":"Name","value":"perex"}},{"kind":"Field","name":{"kind":"Name","value":"isFeatured"}},{"kind":"Field","name":{"kind":"Name","value":"featuredImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}},{"kind":"Field","name":{"kind":"Name","value":"blogCategory"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]} as unknown as DocumentNode<BlogArticlesQuery, BlogArticlesQueryVariables>;
export const BlogFeaturedDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"BlogFeatured"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","alias":{"kind":"Name","value":"featuredEntry"},"name":{"kind":"Name","value":"entries"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"section"},"value":{"kind":"StringValue","value":"blog","block":false}},{"kind":"Argument","name":{"kind":"Name","value":"isFeatured"},"value":{"kind":"BooleanValue","value":true}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"1"}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"StringValue","value":"postDate DESC","block":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"blogArticle_Entry"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"BlogListingEntry"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BlogListingEntry"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"blogArticle_Entry"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"postDate"}},{"kind":"Field","name":{"kind":"Name","value":"perex"}},{"kind":"Field","name":{"kind":"Name","value":"isFeatured"}},{"kind":"Field","name":{"kind":"Name","value":"featuredImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}},{"kind":"Field","name":{"kind":"Name","value":"blogCategory"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]} as unknown as DocumentNode<BlogFeaturedQuery, BlogFeaturedQueryVariables>;
export const BlogCategoriesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"BlogCategories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","alias":{"kind":"Name","value":"blogCategories"},"name":{"kind":"Name","value":"categories"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"group"},"value":{"kind":"StringValue","value":"blogCategories","block":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]} as unknown as DocumentNode<BlogCategoriesQuery, BlogCategoriesQueryVariables>;