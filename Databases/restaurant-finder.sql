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

create table types
(
    id   int auto_increment not null,
    type varchar(255) not null,
    constraint types_pk
        primary key (id)
);

drop table restaurants;

create table restaurants
(
    id         int auto_increment,
    name       varchar(255) not null,
    address_id int          not null,
    type_id    int          not null,
    constraint restaurants_pk
        primary key (id)
);

create table reviews
(
    id            int auto_increment,
    reviewer_name varchar(100)                       not null,
    rating        int                                not null,
    text          text                               null,
    date          datetime default current_timestamp not null,
    restaurant_id int                                not null,
    constraint reviews_pk
        primary key (id)
);




