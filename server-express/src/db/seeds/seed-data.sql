INSERT INTO users (id, first_name, last_name, username, email, profile_thumbnail_img)
VALUES
  (1, 'John', 'Doe', 'traveler1', 'traveller1@example.com', 'https://images.pexels.com/photos/3278215/pexels-photo-3278215.jpeg?auto=compress&cs=tinysrgb&h=650&w=940'),
  (2, 'Alice', 'Johnson', 'traveler2', 'traveler2@example.com', 'https://images.pexels.com/photos/3278215/pexels-photo-3278215.jpeg?auto=compress&cs=tinysrgb&h=650&w=940'),
  (3, 'Sarah', 'Smith', 'traveler3', 'traveler3@example.com', 'https://images.pexels.com/photos/3278215/pexels-photo-3278215.jpeg?auto=compress&cs=tinysrgb&h=650&w=940'),
  (4, 'Michael', 'Brown', 'traveler4', 'traveler4@example.com', 'https://images.pexels.com/photos/3278215/pexels-photo-3278215.jpeg?auto=compress&cs=tinysrgb&h=650&w=940'),
  (5, 'Emily', 'Davis', 'traveler5', 'traveler5@example.com', 'https://images.pexels.com/photos/3278215/pexels-photo-3278215.jpeg?auto=compress&cs=tinysrgb&h=650&w=940'),
  (6, 'David', 'Wilson', 'traveler6', 'traveler6@example.com', 'https://images.pexels.com/photos/3278215/pexels-photo-3278215.jpeg?auto=compress&cs=tinysrgb&h=650&w=940'),
  (7, 'Laura', 'Turner', 'traveler7', 'traveler7@example.com', 'https://images.pexels.com/photos/3278215/pexels-photo-3278215.jpeg?auto=compress&cs=tinysrgb&h=650&w=940'),
  (8, 'Chris', 'Anderson', 'traveler8', 'traveler8@example.com', 'https://images.pexels.com/photos/3278215/pexels-photo-3278215.jpeg?auto=compress&cs=tinysrgb&h=650&w=940'),
  (9, 'User9', 'LastName9', 'traveler9', 'traveler9@example.com', 'https://images.pexels.com/photos/3278215/pexels-photo-3278215.jpeg?auto=compress&cs=tinysrgb&h=650&w=940'),
  (10, 'User10', 'LastName10', 'traveler10', 'traveler10@example.com', 'https://images.pexels.com/photos/3278215/pexels-photo-3278215.jpeg?auto=compress&cs=tinysrgb&h=650&w=940');


INSERT INTO destinations (id, city_name, thumbnail_img_url, cover_photo_url)
VALUES
  (1, 'Paris', 'https://tinyurl.com/ye2ym57h', 'https://tinyurl.com/2fb7f766'),
  (2, 'New York City', 'https://tinyurl.com/yckkds9a', 'https://tinyurl.com/3mt4rh38'),
  (3, 'Tokyo', 'https://tinyurl.com/4yraz3ej', 'https://tinyurl.com/4yraz3ej'),
  (4, 'Barcelona', 'https://tinyurl.com/bdf7js4z', 'https://tinyurl.com/bdf7js4z'),
  (5, 'Sydney', 'https://tinyurl.com/3xcpeaar', 'https://tinyurl.com/3xcpeaar'),
  (6, 'Rome', 'https://tinyurl.com/y37nmhjz', 'https://tinyurl.com/y37nmhjz'),
  (7, 'London', 'https://tinyurl.com/apzdatcv', 'https://tinyurl.com/apzdatcv'),
  (8, 'San Francisco', 'https://tinyurl.com/tem82t2x', 'https://tinyurl.com/tem82t2x'),
  (9, 'Istanbul', 'https://tinyurl.com/yddp4kpx', 'https://tinyurl.com/yddp4kpx'),
  (10, 'Dubai', 'https://tinyurl.com/ye78akpk', 'https://tinyurl.com/ye78akpk');

INSERT INTO places (id, destination_id, description, rating, thumbnail_img_url, cover_photo_url, google_map_link)
VALUES
  (1, 1, 'Eiffel Tower and romantic walks along the Seine River.', 4, 'https://tinyurl.com/2feanmk5', 'https://tinyurl.com/3p6s8yr3', 'https://maps.app.goo.gl/4LQhxeR7LRJHvGtY6'),
  (2, 2, 'Times Square, Central Park, and Broadway shows.', 4, 'https://tinyurl.com/yc3mt5m5', 'https://tinyurl.com/4cz8x5pe', 'https://maps.app.goo.gl/n2uvUam6mV5zq6p6A'),
  (3, 3, 'Shinjuku, Akihabara, and traditional tea ceremonies.', 5, 'https://tinyurl.com/ybsa6bev', 'https://tinyurl.com/48s3mbj6', 'https://maps.app.goo.gl/YbEDLhwKW1w8xfB89'),
  (4, 4, 'Sagrada Familia, Park Guell, and La Rambla.', 4, 'https://tinyurl.com/ycoj7bb2', 'https://tinyurl.com/9b5tdrxf', 'https://maps.app.goo.gl/2TfvjAUfjS3NHxLu5'),
  (5, 5, 'Sydney Opera House, Bondi Beach, and Taronga Zoo.', 5, 'https://tinyurl.com/5sb4e4vd', 'https://tinyurl.com/26wnzk82', 'https://maps.app.goo.gl/wqF6BXp1GJ5j3fdz7'),
  (6, 6, 'Colosseum, Roman Forum, and Vatican City.', 5, 'https://tinyurl.com/53t3jwsp', 'https://tinyurl.com/3zcz3znt', 'https://maps.app.goo.gl/dJ6TUUzxW4Uc2jjR7'),
  (7, 7, 'Big Ben, Buckingham Palace, and Tower Bridge.', 4, 'https://tinyurl.com/8n7vs55j', 'https://tinyurl.com/53cehvyx', 'https://maps.app.goo.gl/Gyq4gGB8pWV9R1Gu7'),
  (8, 8, 'Golden Gate Bridge, Alcatraz Island, and Fishermans Wharf.', 4, 'https://tinyurl.com/2hdd5wwr', 'https://tinyurl.com/ykxhwe6a', 'https://maps.app.goo.gl/7W1RpQHmrxyiR5Vv7'),
  (9, 9, 'Hagia Sophia, Blue Mosque, and Grand Bazaar.', 5, 'https://tinyurl.com/39t2a49d', 'https://tinyurl.com/2km3vb2n', 'https://maps.app.goo.gl/ubGqaQgnYDpPGWfF7'),
  (10, 10, 'Burj Khalifa, Palm Jumeirah, and Dubai Mall.', 5, 'https://tinyurl.com/4k83fbss', 'https://tinyurl.com/m3rmrkaj', 'https://maps.app.goo.gl/ekT8zv4fCCmL1wvE9');

INSERT INTO trips (id, place_id, destination_id, user_id, start_date, end_date, time)
VALUES
  (1, 1, 1, 1, '2023-10-01', '2023-10-10', NOW()),
  (2, 2, 2, 2, '2023-11-15', '2023-11-22', NOW()),
  (3, 3, 3, 3, '2024-01-05', '2024-01-15', NOW()),
  (4, 4, 4, 4, '2024-03-20', '2024-03-30', NOW()),
  (5, 5, 5, 5, '2024-05-10', '2024-05-20', NOW()),
  (6, 6, 6, 6, '2024-07-01', '2024-07-10', NOW()),
  (7, 7, 7, 7, '2024-09-15', '2024-09-25', NOW()),
  (8, 8, 8, 8, '2024-11-10', '2024-11-20', NOW());
