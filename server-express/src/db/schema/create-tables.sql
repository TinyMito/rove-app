DROP TABLE IF EXISTS trip_destination CASCADE;
DROP TABLE IF EXISTS trips CASCADE;
DROP TABLE IF EXISTS destinations CASCADE;
DROP TABLE IF EXISTS users CASCADE;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  name VARCHAR(255),
  profile_information TEXT,
  profile_thumbnail_img VARCHAR(255)
);

CREATE TABLE destinations (
  id SERIAL PRIMARY KEY,
  trip_id INT NOT NULL,
  city_name VARCHAR(255) NOT NULL,
  thumbnail_img_url VARCHAR(255),
  description TEXT,
  cover_photo_url VARCHAR(255),
  google_map_link VARCHAR(255)
);

CREATE TABLE trips (
  id SERIAL PRIMARY KEY,
  destination_id INT NOT NULL,
  user_id INT REFERENCES users(id),
  description TEXT,
  number_of_travelers INT,
  start_date DATE,
  end_date DATE
);

CREATE TABLE trip_destination (
  id SERIAL PRIMARY KEY,
  trip_id INT REFERENCES trips(id),
  destination_id INT REFERENCES destinations(id)
);
