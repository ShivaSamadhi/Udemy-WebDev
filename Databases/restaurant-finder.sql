INSERT INTO `restaurant-finder`.restaurants (name, type)
VALUES ('Web Dev Mealery', 'Jamaican');
INSERT INTO `restaurant-finder`.restaurants (name, type)
VALUES ('Uchiba', 'Sushi');
INSERT INTO `restaurant-finder`.restaurants (name, type)
VALUES ('Ten Ramen', 'Japanese');

Select *
FROM restaurants;

SELECT COUNT(*)
FROM restaurants
WHERE type = 'Jamaican';

UPDATE restaurants
SET
    name = 'Mamas Kitchen'
WHERE
    id = 1;

DELETE FROM restaurants
WHERE id = 3;

create table addresses
(
    id            int auto_increment,
    street        varchar(255) not null,
    street_number int          not null,
    city          varchar(255) not null,
    postal_code   int          not null,
    country       varchar(255) not null,
    constraint addresses_pk
        primary key (id)
);

