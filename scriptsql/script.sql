CREATE DATABASE weatherdb;

\l

\c weatherdb;

CREATE TABLE coord (
    id SERIAL PRIMARY KEY
    lon Numeric,
    lat Numeric
);

CREATE TABLE city (
    id SERIAL PRIMARY KEY,
    name Varchar(75) NOT NULL,
    coord_id SERIAL NOt NULL, 
    country Varchar(65) NOT NULL,
    population Decimal,
    timezone Numeric,
    FOREIGN KEY (coord_id) REFERENCES coord (id)
);

CREATE TABLE temp (
    id SERIAL PRIMARY KEY,
    day Decimal NOT NULL,
    min Decimal NOt NULL, 
    max Decimal NOT NULL,
    night Decimal NOT NULL,
    eve Decimal NOT NULL,
    morn Decimal NOT NULL
);

CREATE TABLE feels_like (
    id SERIAL PRIMARY KEY,
    day Decimal NOT NULL,
    night Decimal NOT NULL,
    eve Decimal NOT NULL,
    morn Decimal NOT NULL
);

CREATE TABLE list (
    id SERIAL PRIMARY KEY,
    dt Numeric NOT NULL,
    sunrise Bigint NOT NULL,
    sunset Bigint NOT NULL,
    temp_id SERIAL, 
    feels_like_id SERIAL,
    pressure Decimal,
    humidity Integer,
    speed Decimal,
    deg Decimal,
    clouds Integer,
    pop Decimal, 
    FOREIGN KEY (temp_id) REFERENCES temp (id),
    FOREIGN KEY (feels_like_id) REFERENCES feels_like (id)
);

CREATE TABLE weather (
    id SERIAL PRIMARY KEY,
    main Varchar(90) NOT NULL,
    description Text NOT NULL,
    icon Varchar(45) NOT NULL,
    list_id SERIAL,
    FOREIGN KEY (list_id) REFERENCES list (id)
);

CREATE TABLE city_list (
    city_id SERIAL,
    list_id SERIAL,
    FOREIGN KEY (city_id) REFERENCES city (id),
    FOREIGN KEY (list_id) REFERENCES list (id)
);

INSERT INTO coord (lon, lat)
    VALUES (-0.1258, 51.5085);

select * from coord;

INSERT INTO weather (main, description, icon, list)
    VALUES ('Clear', 'sky is clear', '01d', 1), ('Clear', 'sky is clear', '01d', 1);

INSERT INTO feels_like (day, night, eve, morn)
    VALUES (278.87, 282.73, 281.92, 278.05);

INSERT INTO temp (day, min, max, night, eve, morn)
    VALUES (293.79, 288.85, 294.47, 288.85, 290.44, 293.79);

INSERT INTO list (dt, sunrise, sunset, temp, feels_like, pressure, humidity, speed, deg, clouds, pop)
    VALUES (1568977200, 1568958164, 1569002733, 1, 1, 1025.04, 42, 4.66, 102, 0, 0.24);

SELECT * FROM city;
SELECT * FROM list;
SELECT c.name, coord.lon, coord.lat, c.country, c.population,  c.timezone FROM city c INNER JOIN coord coord ON (c.coord = coord.id) ;


SELECT w.main, w.description, w.icon, l.* FROM weather w, list l WHERE w.list = l.id and w.id = 1;
