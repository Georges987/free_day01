FROM php:8.3
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer
RUN apt-get update && apt-get install -y libzip-dev libpq-dev
RUN docker-php-ext-install zip
RUN docker-php-ext-install pdo_pgsql pgsql
WORKDIR /app
COPY . /app
RUN composer update
RUN cp .env.example .env
RUN php artisan key:generate
RUN php artisan migrate --seed
EXPOSE 8000

CMD [ "php", "artisan", "serve", "--host=0.0.0.0", "--port=8000" ]
