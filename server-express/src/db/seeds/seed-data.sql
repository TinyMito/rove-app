INSERT INTO users (first_name, last_name, username, email, password, profile_thumbnail_img)
VALUES
  ('John', 'Doe', 'traveler1', 'traveller1@example.com', '$2a$10$YUc4PmIB.X9AF9Ia9/4QbeBSXz6IqgLemmhm37WlvOsZe52TYTfCq', 'avatar00.png'),
  ('Alice', 'Johnson', 'traveler2', 'traveler2@example.com', '$2a$10$3aYt30VjUq7LtdF5DldoNOh.JeTsZzzP2zAixDGmhqD6zhv.A80K2', 'avatar01.png'),
  ('Sarah', 'Smith', 'traveler3', 'traveler3@example.com', '$2a$10$3aYt30VjUq7LtdF5DldoNOh.JeTsZzzP2zAixDGmhqD6zhv.A80K2', 'avatar03.png');

INSERT INTO destinations (google_destination_id, name)
VALUES
  ('ChIJD7fiBh9u5kcRYJSMaMOCCwQ', 'Paris, France'),
  ('ChIJu46S-ZZhLxMROG5lkwZ3D7k', 'Rome, Italy'),
  ('ChIJRcbZaklDXz4RYlEphFBu5r0', 'Dubai, United Arab Emirates'),
  ('ChIJ8cM8zdaoAWARPR27azYdlsA', 'Kyoto, Japan');

INSERT INTO places (name, google_place_id, destination_id, photo_url)
VALUES 
  ('Palais de Justice de Paris', 'ChIJD7fiBh9u5kcRYJSMaMOCCwQ', 1, 'https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=ATJ83zhLnfeM25BrpOsfDDNLqq82-QmmAem5Hq-V-dbEgcZX-4ORSxcHZGTCk5d9gYMAfUv4NvhfbO0l-9koH_ZPQAUeT_KZy5XZzJWc_Yh8x5eEeL860J9brR7SdPZ9MjT7SPGgXvNvDyV7-M9KvbUi3sEr5hftYQ_bk4yf6EwWjOwBF7-K&key=AIzaSyDBIOWQTrQpzed2FuZsesa06-iprfIHFAI'), --Paris
  ('Hôtel de Sens', 'ChIJvzDrq_1x5kcRFc9gDmQac24', 1, 'https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=ATJ83ziPG7nmOk6Q2n8Dv3R1WzVwGW01sNsoXNwJedghullvfC_4Q-zOuCpky7k43FOKN_Z3Y6Ueskn9jvaQxbCVDx6R8gmBjKqZf-Bfe6eNwYM_VsnAQW4EkeZvYfgK4HobMxx2dOeaWmhmeHQU2pLjYpQGXfKO1Tp_0UFPio9VnjTsV4Vl&key=AIzaSyDBIOWQTrQpzed2FuZsesa06-iprfIHFAI'),
  ('Cathédrale Notre-Dame de Paris','ChIJATr1n-Fx5kcRjQb6q6cdQDY', 1, 'https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=ATJ83ziV-w3xuLyA4KAm08RFrIuo47yGo6XQiOOPj83ulzP8N5bNmsZrihUi7YLgteg57TQF45iWOLJ4geX0vsY7Qc4EYbEBnBEBzWnmlGWUk7mlyhPLgBWHaCMeVzGfzJib_wHCEVJqayUIuYi7zTmb2W4fLepDwlSxKroDoQEoR52e45WR&key=AIzaSyDBIOWQTrQpzed2FuZsesa06-iprfIHFAI'),
  ('Sainte-Chapelle', 'ChIJR3122B9u5kcRaCck3PlB9DM', 1, 'https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=ATJ83zgjAvncn3Djs9lNUbidJKYsPhmkWRhOBPw94YdSfd1WJxVeRHlzPe_t6xuFp86UfuBfdtzBo4gIOdqQumfZfU3KX_O-JsGPJqSNt43VcKUQf4KfYZE1f_OBLujGkduG7nIWXYne8JjLLvrt48sHIcvlOLHy3qydg6jYTVulbB7MOf1m&key=AIzaSyDBIOWQTrQpzed2FuZsesa06-iprfIHFAI'),
  ('The Centre Pompidou', 'ChIJoyC4CRxu5kcRRTPcWX5srLc', 1, 'https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=ATJ83zhOgkqoKiMv7ndbcgEk589A75-1TQqN8tlk0m0j4ynrq-QKnevjAsejJAXN-RqP8vFxbwc4UMtFIFuF4MBJ-Gl8ChPHcJmofcFdMd5M3ngX37aG94KaYmgD8xQe_Qcz5zaY_ZAWyao04oIZF9NfefDiEfsyJo-EZl5nptv_sug7rnYw&key=AIzaSyDBIOWQTrQpzed2FuZsesa06-iprfIHFAI'),
  ('Hôtel de Ville', 'ChIJi1uPs_1x5kcRbh8M8XJSNMA', 1,'https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=ATJ83zh270kAX5YfO5ZSoggDgA3uTGHz3RHLVvoV7zpWiiNzHNO3o_WUYVPmNM-ebVHvMZEfJHNPhLi3_N2hTE-o_wpcHNDDR2g9cWInat1HILtuYdyXdD-bXDghxiehTY-ZfGidk4QyhK9mFGd4GKEmWKAJWoAnT6KKUpO32nP6dtF8onve&key=AIzaSyDBIOWQTrQpzed2FuZsesa06-iprfIHFAI'),
  ('Fountain of the Bees', 'ChIJF_bCxathLxMRS4-5fHPJuAQ', 2,'https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=ATJ83zi-cyOWFstd3efiEX1CSDi-xrgwcG_xw9uXyhqRHB7B2fLRnuryaASM7o40oH03n9A4pRJN9dtumWtTD609ZU0KG6XodGxlHhQ1fTfTD8x_rh3pYzvqyduIztTXuyJgh-A0rNzVy0fU2ZQibMAAEwqPogXe90A0WnBIPesfiUHOmWyp&key=AIzaSyDBIOWQTrQpzed2FuZsesa06-iprfIHFAI'),--Rome
  ('Fontana del Mosè', 'ChIJi9yyY6hhLxMRVNyx8X7arwA', 2, 'https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=ATJ83zhpMMjjBPWrQWLOra4PoVCziqgBXHKn6EItu3Q4IuDKm9sOelui9bdtKfiCIAJQOPQvgah00Ea1hfng7th3AtcTXmOxihNk7KUtYvgVy89qYvRF-Ih4NKmg7np_51kMGMOTif2OWbuQRjG18vZcLeTf1xl2UL-j7geaBLQu4suG0DU&key=AIzaSyDBIOWQTrQpzed2FuZsesa06-iprfIHFAI'),
  ('Basilica Papale di Santa Maria Maggiore', 'ChIJ1zB926RhLxMRejWMj_tUs_c', 2, 'https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=ATJ83zgmfPwNjla9yPkM_zNlyAGkCd1pDv2_goq05B_4bTcxIdAzE-7hHMdOcZRk-vNG-6iHRuHCV3p2fg62GhlFJ7IZrB5GCHdVCNMn2Mj8WsL-n3DkBFvit-1wy5XpnNDsEJAFOepJgPCP4gZNGSHY1RVEEKyTgxSVxHiT9WVOYOlV09zj&key=AIzaSyDBIOWQTrQpzed2FuZsesa06-iprfIHFAI'),
  ('National Roman Museum - Palazzo Massimo', 'ChIJ18PTgaZhLxMRvINaLw9AZ2w', 2,'https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=ATJ83zh67UbbCnoFHOx_FG-GlmmbXZU48urVdBmHrJgL07R3xmJ2BU_-g2AeTh7gEKMEfSaAvKHbH-QndBM477-jkmSEeMXYDWBy6wEUji6bsLvs2u6BJDAU4HWeiSc-D5UC6j4FH0j_QUi6ENg9c-57zw75Jl84TRNHTa4FxVBN5WnaS5xh&key=AIzaSyDBIOWQTrQpzed2FuZsesa06-iprfIHFAI'),
  ('Burj Khalifa', 'JnijRDXz4R4rfO4QLlRf8', 3,'https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=ATJ83zh1Zf_XnxpDlFUl25du1nUndSIJl87Z2PsutkWWnK2_-sNDHxwIi926liPoQJ-tZ3GpHTy9JfhKBkHJRXA6y37K7WftHRqcb0akjp5q6WeBWUlXT2RWHBTXy2W-Oa61waoMWVt68SGsHI72iHzDvKbhrt4zDYnsTVo5YkdlaxtXf4cC&key=AIzaSyDBIOWQTrQpzed2FuZsesa06-iprfIHFAI'), --Dubai
  ('Kyoto International Manga Museum', 'ChIJh1qJf4YIAWARTAOFMHrSHvI', 4, 'https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=ATJ83zjKCoToJB2M3RSazXOtR6N6U6SVB3nIK4zhTdNTvRYJKroa5XzW7K06B_3s7WWG28JsI_irhWr0LXluLknYzhSZsrvGMENNcmSIHJrfLRxALTNEdP7USSHvQxVEddkaOu8Kbp94YV7lV0sAU8ACRP4n9GltIyqRKg5i_kwvcmOkM_R2&key=AIzaSyDBIOWQTrQpzed2FuZsesa06-iprfIHFAI'),
  ('Nishiki Market', 'ChIJT8uMzZwIAWARnGzsARCjnrY', 4, 'https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=ATJ83zgIfq-nnADUXBlfc_UO3PrmCiSZPdrvVkbYCQfAsSKpcziRaaORrP4LQFlNBR0ZtK-qfWnzgfGoK8isq7Xxcn7rxAARv5y_3u_iMiiO_yue_pQDJ_FujkGp-mDa2R1ryGRWZdKpQVRMNOhfqo0FXIG7fzcHtJkocseDeMlawHQizY0&key=AIzaSyDBIOWQTrQpzed2FuZsesa06-iprfIHFAI');

INSERT INTO schedules (start_date, end_date, user_id, destination_id)
VALUES
  ('2023-10-01', '2023-10-03', 1, 1),
  ('2023-11-15', '2023-11-15', 2, 2),
  ('2024-01-15', '2024-01-15', 3, 3);

INSERT INTO trips (place_id, user_id, schedule_id, date, start_time, attraction_photo_url)
VALUES
-- trip 1
  (1, 1, 1, '2023-10-01', '08:00', 'https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=ATJ83zglT9IQTWJPN7cjJENTGQzbiUFp2RUC-cvukUfII1ymVCNvij2duUEe9H3BAanV2g6pq_n0hEAMEooIyLBEyz0ek6HiLk_aj3lwStmuAJlRkuLHcnaZsPyWIX1pKW2kIbENUnd2_-qOdsLMZuPjsKn3Nf6T1-AL8EqK7PR9zgqTfCXU&key=AIzaSyBhYeKLTXce8nNFmgRQ4VtYQLA-qOhVoSU'),
  (2, 1, 1, '2023-10-01', '09:00', 'https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=ATJ83ziio7_QtBCMQcocLNdVGr8SYIFz27X1nOcHCDygOf1-I7coKreYjx49ihlWU52chH4mS2yM6YvYeyq_uBjH2REcI8-3s4Sm0ZIS60cYv-bFGxGPRa67enJv8wNMhB6TldUs8tmhWUJ8fE70H5P9wS_x-soPdWNU-lqKCg-RmEU6zEjz&key=AIzaSyBhYeKLTXce8nNFmgRQ4VtYQLA-qOhVoSU'),
  (3, 1, 1, '2023-10-02', '10:00', 'https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=ATJ83zjCrFITW7bwYlizJfHgMTZDcXIZj2mpHsP-_VnzPf1oETTlq4kLoj7zAW0jXTlPYUL2q-8f60pbX4xNYyDUglXZU9chNVfX89DL-h0u8gMOKIUyyREssljZ0W9CH1hDdej1p8Eof6ZQ4U7ytx5OBd4Fqyi0L5qGXDMmMzGE4BBE-AE0&key=AIzaSyBhYeKLTXce8nNFmgRQ4VtYQLA-qOhVoSU'),
  (4, 1, 1, '2023-10-03', '07:00', 'https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=ATJ83zhWzQsVPa4MCohAtQSVS-BTHUM4boHl-EDrAevjB4VMkLXdfgHa70D9ET4foW8YGxbm4M0OB6PSOCAdsSWauwgIEB_Etx_rND8-lNBhZieCnGgcPQsUG6oygPRKMvTBcemmemORzjWsfXn11KXoHKerpe6pY3V4ssHIp3EnkhXtZzOt&key=AIzaSyBhYeKLTXce8nNFmgRQ4VtYQLA-qOhVoSU'),
  (5, 1, 1, '2023-10-03', '08:00', 'https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=ATJ83zjp_UQUvaVGMpE1NlBvc1Lsa2_kD7lKLYy-lr5_UDMQNU7rIF-vr71yBNuhEq-MBfyS9MFCnZUqAgQP-POVUNE3g7TlJ3g1MVQNwhs3PxVtvMzBIDJEujpI7JVOB71K4yRsor4ZZ1LwvmeG4ILoSupSjhJgevoF1IwoCZS_2Ud8cRl2&key=AIzaSyBhYeKLTXce8nNFmgRQ4VtYQLA-qOhVoSU'),
  (6, 1, 1, '2023-10-03', '10:00', 'https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=ATJ83zjaP5aJcI8tgsr6seVE_2UQ4DL-EEL64xe1mpLIjeLzhPYUiyYY_c7QQgyfrldmXWgClAB-hL1-7Fs-YnU_d0hfUG_9b3_h4nR86QdrOUBb2kiGHaTTc4qLWLCylYQWR0R8SVqh_3QbvxEWolnf8hkxG86Dz7W4lo7uW5RrSaIPQUsY&key=AIzaSyBhYeKLTXce8nNFmgRQ4VtYQLA-qOhVoSU'),

-- trip 2, 
  (7, 2, 2, '2023-11-15', '09:00', 'https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=ATJ83zgFvK2J-IrSwx6UMAJIgP4inHAp5X0-QWYiD3U-xuooEZKBNs3GcCizj0zk2SBfMbLipXhK-Di9VQNJcxaYoL6xtAzJKW13LGfrmmD2svht4Z-XBjg0iPMKlCRX4FcOoPhsyzht-kX7LI7XGjaTsJjGnj9IrOJAEyHEtdZMMRlXKatS&key=AIzaSyBhYeKLTXce8nNFmgRQ4VtYQLA-qOhVoSU'),
  (8, 2, 2, '2023-11-15', '11:00', 'https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=ATJ83zjOLBRtwQ0VN1FyFNBbnH0WB_PnXI62rCtwsP13dpIrIiUQIJP8iIgX-Hzf7lyVAYQ5fwuHbLzPfSR4YiPlbv1BHYyE-7SUyWZhFrGSRMH3l8g10vZHbOq37Pvy-k54OY8LYjf3_XuSgaQdd1RI31G6XlfGI8Ias_8oZF4wk3tX6jU&key=AIzaSyBhYeKLTXce8nNFmgRQ4VtYQLA-qOhVoSU'),
  (9, 2, 2, '2023-11-15', '12:00', 'https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=ATJ83zgWceI8QPJoTSFFc4VpV4gQ0lVTFTMvpThWZ5U7P0EMetRJjTOmJcuEqDwWXsN6Wb5CjXZBfCf3slrgGQOtCN03m5h09WJUWkj80FHWGBuuv-mrtiAnMuWvFoFVyJXXNWHpBq5ve9uBS4qOCdK1umJ-W59CAI48oMzQKeL0huTTngeC&key=AIzaSyBhYeKLTXce8nNFmgRQ4VtYQLA-qOhVoSU'),

-- trip 3, 
  (10, 3, 3, '2024-01-15', '11:00', 'https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=ATJ83zhx-hpQ3LAdo8UZh7FWZ8hcJGDNb-57YoNr4Rt4wG6Nl3CftpnYc_EIdUZ6EsZf-NL-Gsz6nbAJ24v9i-Bx1Vioaw6vkmkk7d2lhDiX47B0lbqQnHBQsCeQ8gqyQrfNe3BzULadXIrxouaNQmo0PXOOJGtlBV-COA9pADSku8NibkbX&key=AIzaSyBhYeKLTXce8nNFmgRQ4VtYQLA-qOhVoSU');

/* INSERT INTO mock_destinations (name, thumbnail_img_url, cover_photo_url)
VALUES
  ('Paris', 'https://tinyurl.com/ye2ym57h', 'https://tinyurl.com/2fb7f766'),
  ('New York City', 'https://tinyurl.com/yckkds9a', 'https://tinyurl.com/3mt4rh38'),
  ('Tokyo', 'https://tinyurl.com/4yraz3ej', 'https://tinyurl.com/4yraz3ej'),
  ('Barcelona', 'https://tinyurl.com/bdf7js4z', 'https://tinyurl.com/bdf7js4z'),
  ('Sydney', 'https://tinyurl.com/3xcpeaar', 'https://tinyurl.com/3xcpeaar'),
  ('Rome', 'https://tinyurl.com/y37nmhjz', 'https://tinyurl.com/y37nmhjz'),
  ('London', 'https://tinyurl.com/apzdatcv', 'https://tinyurl.com/apzdatcv'),
  ('San Francisco', 'https://tinyurl.com/tem82t2x', 'https://tinyurl.com/tem82t2x'),
  ('Istanbul', 'https://tinyurl.com/apzdatcv', 'https://tinyurl.com/apzdatcv'),
  ('Dubai', 'https://tinyurl.com/apzdatcv', 'https://tinyurl.com/apzdatcv'),
  ('Los Angeles', 'https://tinyurl.com/apzdatcv', 'https://tinyurl.com/apzdatcv'),
  ('Miami', 'https://tinyurl.com/apzdatcv', 'https://tinyurl.com/apzdatcv'),
  ('Berlin', 'https://tinyurl.com/apzdatcv', 'https://tinyurl.com/apzdatcv'),
  ('Mumbai', 'https://tinyurl.com/apzdatcv', 'https://tinyurl.com/apzdatcv'),
  ('Toronto', 'https://tinyurl.com/apzdatcv', 'https://tinyurl.com/apzdatcv'),
  ('Las Vegas', 'https://tinyurl.com/apzdatcv', 'https://tinyurl.com/apzdatcv'),
  ('Amsterdam', 'https://tinyurl.com/apzdatcv', 'https://tinyurl.com/apzdatcv'),
  ('Cape Town', 'https://tinyurl.com/apzdatcv', 'https://tinyurl.com/apzdatcv'),
  ('Singapore', 'https://tinyurl.com/apzdatcv', 'https://tinyurl.com/apzdatcv'),
  ('Rio de Janeiro', 'https://tinyurl.com/apzdatcv', 'https://tinyurl.com/apzdatcv');

INSERT INTO mockplaces (destination_id, name, description, rating, thumbnail_img_url, cover_photo_url, google_map_link)
VALUES
  (1, 'Eiffel Tower', 'Eiffel Tower and romantic walks along the Seine River.', 4, 'https://tinyurl.com/apzdatcv', 'https://tinyurl.com/apzdatcv', 'https://maps.app.goo.gl/4LQhxeR7LRJHvGtY6'),
  (2, 'Time Sqaure', 'Times Square, Central Park, and Broadway shows.', 4, 'https://tinyurl.com/apzdatcv', 'https://tinyurl.com/apzdatcv', 'https://maps.app.goo.gl/n2uvUam6mV5zq6p6A'),
  (3, 'Shinjuku', 'Shinjuku, Akihabara, and traditional tea ceremonies.', 5, 'https://shorturl.at/nT047', 'https://t.ly/Ee8ZY', 'https://maps.app.goo.gl/YbEDLhwKW1w8xfB89'),
  (4, 'Sagrada Familia', 'Sagrada Familia, Park Guell, and La Rambla.', 4, 'https://tinyurl.com/apzdatcv', 'https://tinyurl.com/apzdatcv', 'https://maps.app.goo.gl/2TfvjAUfjS3NHxLu5'),
  (5, 'Sydney Opera House', 'Sydney Opera House, Bondi Beach, and Taronga Zoo.', 5, 'https://tinyurl.com/apzdatcv', 'https://tinyurl.com/apzdatcv', 'https://maps.app.goo.gl/wqF6BXp1GJ5j3fdz7'),
  (6, 'Colosseum', 'Colosseum, Roman Forum, and Vatican City.', 5, 'https://tinyurl.com/apzdatcv', 'https://tinyurl.com/apzdatcv', 'https://maps.app.goo.gl/dJ6TUUzxW4Uc2jjR7'),
  (7, 'Big Ben', 'Big Ben, Buckingham Palace, and Tower Bridge.', 4, 'https://tinyurl.com/apzdatcv', 'https://tinyurl.com/apzdatcv', 'https://maps.app.goo.gl/Gyq4gGB8pWV9R1Gu7'),
  (8, 'Golden Gate Bridge', 'Golden Gate Bridge, Alcatraz Island, and Fishermans Wharf.', 4, 'https://tinyurl.com/apzdatcv', 'https://tinyurl.com/apzdatcv', 'https://maps.app.goo.gl/7W1RpQHmrxyiR5Vv7'),
  (9, 'Hagia Sophia', 'Hagia Sophia, Blue Mosque, and Grand Bazaar.', 5, 'https://tinyurl.com/apzdatcv', 'https://tinyurl.com/apzdatcv', 'https://maps.app.goo.gl/ubGqaQgnYDpPGWfF7'),
  (10, 'Burj Khalifa', 'Burj Khalifa, Palm Jumeirah, and Dubai Mall.', 5, 'https://tinyurl.com/apzdatcv', 'https://tinyurl.com/apzdatcv', 'https://maps.app.goo.gl/ekT8zv4fCCmL1wvE9'),
  (11, 'Hollywood Walk of Fame', 'Famous for the stars on the sidewalk and movie history.', 4, 'https://tinyurl.com/apzdatcv', 'https://tinyurl.com/apzdatcv', 'https://maps.app.goo.gl/4LQhxeR7LRJHvGtY6'),
  (12, 'South Beach', 'Beautiful beaches, nightlife, and art deco architecture.', 4, 'https://tinyurl.com/apzdatcv', 'https://tinyurl.com/apzdatcv', 'https://maps.app.goo.gl/n2uvUam6mV5zq6p6A'),
  (13, 'Brandenburg Gate', 'Iconic neoclassical monument and symbol of reunification.', 5, 'https://tinyurl.com/apzdatcv', 'https://tinyurl.com/apzdatcv', 'https://maps.app.goo.gl/YbEDLhwKW1w8xfB89'),
  (14, 'Gateway of India', 'Historic arch monument overlooking the Arabian Sea.', 4, 'https://tinyurl.com/apzdatcv', 'https://tinyurl.com/apzdatcv', 'https://maps.app.goo.gl/2TfvjAUfjS3NHxLu5'),
  (15, 'CN Tower', 'Landmark tower with a glass floor and stunning views.', 5, 'https://tinyurl.com/apzdatcv', 'https://tinyurl.com/apzdatcv', 'https://maps.app.goo.gl/wqF6BXp1GJ5j3fdz7'),
  (16, 'The Strip', 'Famous boulevard known for its resorts and casinos.', 5, 'https://tinyurl.com/apzdatcv', 'https://tinyurl.com/apzdatcv', 'https://maps.app.goo.gl/dJ6TUUzxW4Uc2jjR7'),
  (17, 'Rijksmuseum', 'National museum with Dutch Golden Age paintings.', 4, 'https://tinyurl.com/apzdatcv', 'https://tinyurl.com/apzdatcv', 'https://maps.app.goo.gl/Gyq4gGB8pWV9R1Gu7'),
  (18, 'Table Mountain', 'Iconic flat-topped mountain with hiking trails.', 4, 'https://tinyurl.com/apzdatcv', 'https://tinyurl.com/apzdatcv', 'https://maps.app.goo.gl/7W1RpQHmrxyiR5Vv7'),
  (19, 'Gardens by the Bay', 'Futuristic park with Supertree Grove and Flower Dome.', 5, 'https://tinyurl.com/apzdatcv', 'https://tinyurl.com/apzdatcv', 'https://maps.app.goo.gl/ubGqaQgnYDpPGWfF7'),
  (20, 'Christ the Redeemer', 'Iconic statue atop Corcovado mountain.', 5, 'https://tinyurl.com/apzdatcv', 'https://tinyurl.com/apzdatcv', 'https://maps.app.goo.gl/ekT8zv4fCCmL1wvE9');

INSERT INTO mock_schedules (start_date, end_date, user_id, destination_id)
VALUES
  ('2023-10-01', '2023-10-03', 1, 1),
  ('2023-11-15', '2023-11-15', 2, 7),
  ('2024-01-15', '2024-01-15', 3, 10),
  ('2023-10-01', '2023-10-03', 4, 2),
  ('2023-11-15', '2023-11-15', 5, 3),
  ('2023-11-20', '2023-11-21', 5, 4),
  ('2023-12-15', '2023-12-15', 5, 6),
  ('2023-11-16', '2023-11-16', 6, 8);


INSERT INTO trips (place_id, destination_id, user_id, schedule_id, date, start_time)
VALUES
-- trip 1
  (1, 1, 1, 1, '2023-10-01', '08:00'),
  (2, 1, 1, 1, '2023-10-01', '09:00'),
  (3, 1, 1, 1, '2023-10-02', '10:00'),
  (4, 1, 1, 1, '2023-10-03', '07:00'),
  (5, 1, 1, 1, '2023-10-03', '08:00'),
  (6, 1, 1, 1, '2023-10-03', '10:00'),

-- trip 2
  (7, 7, 2, 2, '2023-11-15', '09:00'),
  (8, 7, 2, 2, '2023-11-15', '11:00'),
  (9, 7, 2, 2, '2023-11-15', '12:00'),

-- trip 3
  (10, 10, 3, 3, '2024-01-15', '11:00'),

-- trip 4
  (11, 2, 4, 4, '2023-10-01', '08:00'),
  (12, 2, 4, 4, '2023-10-01', '09:00'),
  (13, 2, 4, 4, '2023-10-02', '10:00'),
  (14, 2, 4, 4, '2023-10-03', '07:00'),
  (15, 2, 4, 4, '2023-10-03', '08:00'),
  (16, 2, 4, 4, '2023-10-03', '10:00'),

-- trip 5
  (17, 3, 5, 5, '2023-11-15', '09:00'),
  (18, 4, 5, 5, '2023-11-15', '11:00'),
  (19, 6, 5, 5, '2023-11-15', '12:00'),

-- trip 6
  (20, 8, 6, 6, '2023-11-16', '11:00', '12:00');
  (20, 8, 6, 6, '2023-11-16', '11:00');*/

