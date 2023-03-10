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

INSERT INTO types (type)
VALUES ('Jamaican');
INSERT INTO types (type)
VALUES ('Sushi');
INSERT INTO types (type)
VALUES ('Italian');
INSERT INTO types (type)
VALUES ('Bakery');
INSERT INTO types (type)
VALUES ('Chinese');


INSERT INTO addresses (street, street_number, city, postal_code, country)
VALUES(
       'W Commerce St', '411', 'Dallas', 75208, 'United States'
      );

Select * FROM addresses;

SELECT * From types;

Select * FROM restaurants;

INSERT INTO restaurants (name, address_id, type_id)
VALUES ('My Kitchen', 1, 1);

INSERT INTO reviews(reviewer_name, rating, text, restaurant_id)
VALUES ('Ramaj Johnson', 5, 'The food is amazing. The head chef knows what he is doing.', 1);

SELECT restaurants.id,
       restaurants.name,
       addresses.*,
       types.type,
       reviews.*
FROM restaurants
    INNER JOIN addresses On restaurants.address_id = addresses.id
    INNER JOIN types on restaurants.type_id = types.id
    INNER JOIN reviews On restaurants.id = reviews.restaurant_id;

SELECT reviews.*,
       r.name As restaurant_name,
       t.type As restaurant_type
FROM reviews
         INNER JOIN restaurants r on reviews.restaurant_id = r.id
         INNER Join addresses a on r.address_id = a.id
         INNER JOIN types t on r.type_id = t.id
WHERE rating > 3;

