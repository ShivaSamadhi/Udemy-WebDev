INSERT INTO `restaurant-finder`.restaurants (name, type)
VALUES ('Web Dev Mealery', 'Jamaican');
INSERT INTO `restaurant-finder`.restaurants (name, type)
VALUES ('Uchiba', 'Sushi');
INSERT INTO `restaurant-finder`.restaurants (name, type)
VALUES ('Ten Ramen', 'Japanese');

Select * FROM restaurants;

UPDATE restaurants
SET
    name = 'Mamas Kitchen'
WHERE
    id = 1;

SELECT COUNT(*)
FROM restaurants
WHERE type = 'Jamaican'
