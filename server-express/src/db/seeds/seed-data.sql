INSERT INTO users (id, username, email, name, profile_information, profile_thumbnail_img)
VALUES
  (1, 'traveler1', 'traveller1@example.com', 'John Doe', 'I love traveling!', 'https://images.pexels.com/photos/3278215/pexels-photo-3278215.jpeg?auto=compress&cs=tinysrgb&h=650&w=940'),
  (2, 'traveler2', 'traveler2@example.com', 'Alice Johnson', 'Adventure seeker!', 'https://images.pexels.com/photos/3278215/pexels-photo-3278215.jpeg?auto=compress&cs=tinysrgb&h=650&w=940'),
  (3, 'traveler3', 'traveler3@example.com', 'Sarah Smith', 'Traveling is my passion!', 'https://images.pexels.com/photos/3278215/pexels-photo-3278215.jpeg?auto=compress&cs=tinysrgb&h=650&w=940'),
  (4, 'traveler4', 'traveler4@example.com', 'Michael Brown', 'Discovering new places.', 'https://images.pexels.com/photos/3278215/pexels-photo-3278215.jpeg?auto=compress&cs=tinysrgb&h=650&w=940'),
  (5, 'traveler5', 'traveler5@example.com', 'Emily Davis', 'Adventure awaits!', 'https://images.pexels.com/photos/3278215/pexels-photo-3278215.jpeg?auto=compress&cs=tinysrgb&h=650&w=940'),
  (6, 'traveler6', 'traveler6@example.com', 'David Wilson', 'Traveling the world.', 'https://images.pexels.com/photos/3278215/pexels-photo-3278215.jpeg?auto=compress&cs=tinysrgb&h=650&w=940'),
  (7, 'traveler7', 'traveler7@example.com', 'Laura Turner', 'Exploring the unknown.', 'https://images.pexels.com/photos/3278215/pexels-photo-3278215.jpeg?auto=compress&cs=tinysrgb&h=650&w=940'),
  (8, 'traveler8', 'traveler8@example.com', 'Chris Anderson', 'Wanderlust enthusiast.', 'https://images.pexels.com/photos/3278215/pexels-photo-3278215.jpeg?auto=compress&cs=tinysrgb&h=650&w=940');

INSERT INTO destinations (id, trip_id, city_name, thumbnail_img_url, description, cover_photo_url, google_map_link)
VALUES
  (1, 1, 'Paris', 'https://tinyurl.com/ye2ym57h', 'Explore the romantic streets of Paris.', 'https://tinyurl.com/2fb7f766', 'https://maps.app.goo.gl/via6CBNFybrTL3dr5'),
  (2, 2, 'New York City', 'https://tinyurl.com/yckkds9a', 'Experience the city that never sleeps.', 'https://tinyurl.com/3mt4rh38', 'https://maps.app.goo.gl/kwkCYkZU75DPWnM99'),
  (3, 3, 'Tokyo', 'https://tinyurl.com/4yraz3ej', 'Discover the vibrant culture of Tokyo.', 'https://tinyurl.com/4yraz3ej', 'https://maps.app.goo.gl/dJ6TUUzxW4Uc2jjR7'),
  (4, 4, 'Barcelona', 'https://tinyurl.com/bdf7js4z', 'Enjoy the beauty of Barcelona.', 'https://tinyurl.com/bdf7js4z', 'https://maps.app.goo.gl/zADMYcvGYywZiLSZ9'),
  (5, 5, 'Sydney', 'https://tinyurl.com/3xcpeaar', 'Explore the stunning Sydney Harbour.', 'https://tinyurl.com/3xcpeaar', 'https://maps.app.goo.gl/wqF6BXp1GJ5j3fdz7'),
  (6, 6, 'Rome', 'https://tinyurl.com/y37nmhjz', 'Walk through the history of Rome.', 'https://tinyurl.com/y37nmhjz', 'https://maps.google.com/rome'),
  (7, 7, 'London', 'https://tinyurl.com/apzdatcv', 'Experience British charm in London.', 'https://tinyurl.com/apzdatcv', 'https://maps.app.goo.gl/vYy42yvMKybyrZpz9'),
  (8, 8, 'San Francisco', 'https://tinyurl.com/tem82t2x', 'Explore the Bay Area.', 'https://tinyurl.com/tem82t2x', 'https://maps.app.goo.gl/ShV4Znyp2GrbCazY6');

INSERT INTO trips (id, destination_id, user_id, description, number_of_travelers, start_date, end_date)
VALUES
  (1, 1, 1, 'A trip to remember!', 2, '2023-10-01', '2023-10-10'),
  (2, 2, 2, 'Exploring the Big Apple', 3, '2023-11-15', '2023-11-22'),
  (3, 3, 3, 'Adventures in Tokyo', 1, '2024-01-05', '2024-01-15'),
  (4, 4, 4, 'Barcelona Dreaming', 2, '2024-03-20', '2024-03-30'),
  (5, 5, 5, 'Sydney Adventure', 4, '2024-05-10', '2024-05-20'),
  (6, 6, 6, 'Roaming in Rome', 2, '2024-07-01', '2024-07-10'),
  (7, 7, 7, 'London Calling', 2, '2024-09-15', '2024-09-25'),
  (8, 8, 8, 'San Francisco Vibes', 3, '2024-11-10', '2024-11-20');

INSERT INTO trip_destination (id, trip_id, destination_id)
VALUES
  (1, 1, 1),
  (2, 1, 2),
  (3, 2, 3),
  (4, 2, 4),
  (5, 3, 5),
  (6, 3, 6),
  (7, 4, 7),
  (8, 4, 8);

