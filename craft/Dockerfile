FROM php:8.3-fpm-alpine

RUN apk add --no-cache \
    icu-dev libpq-dev libzip-dev freetype-dev libjpeg-turbo-dev libpng-dev libwebp-dev \
    && docker-php-ext-configure gd --with-freetype --with-jpeg --with-webp \
    && docker-php-ext-install intl pdo_pgsql zip gd bcmath

COPY --from=composer:2 /usr/bin/composer /usr/bin/composer

WORKDIR /srv/app

COPY composer.json ./
RUN composer install --no-dev --optimize-autoloader --no-interaction --no-scripts

COPY . .
RUN chmod +x craft

RUN mkdir -p storage/logs storage/runtime web/cpresources \
    && chown -R www-data:www-data storage web/cpresources config/project

EXPOSE 9000

CMD ["php-fpm"]
