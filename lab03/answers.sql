-- Exercise 1 (done for you):
SELECT * FROM users;



-- Exercise 2 (done for you):
SELECT id, first_name, last_name 
FROM users;



-- Exercise 3
SELECT
	id,
	first_name,
	last_name
FROM
	users
ORDER BY
	last_name
LIMIT 5



-- Exercise 4

SELECT
	id,
	user_id,
	image_url
FROM 
	posts
WHERE 
	user_id = 26


-- Exercise 5
SELECT
	id,
	user_id,
	image_url
FROM 
	posts
WHERE 
	user_id = 26 OR
	user_id = 12



-- Exercise 6
SELECT 
	COUNT(posts)
FROM 
	posts



-- Exercise 7

SELECT 
	user_id,
	COUNT(comments) as total_comments
FROM 
	comments
GROUP BY
	user_id
ORDER BY
	total_comments DESC






-- Exercise 8


SELECT
	posts.user_id,
	posts.image_url
FROM 
	posts,
	users
WHERE
	posts.user_id = users.id AND
	user_id = 26 OR
	user_id = 12


-- Exercise 9


SELECT
	posts.pub_date,
	following.following_id
FROM
	posts
JOIN 
	following on posts.user_id = following.user_id
WHERE
	following.user_id = 26
ORDER BY
	following.user_id


-- Exercise 10




-- Exercise 11

INSERT INTO bookmarks (user_id, post_id)
VALUES (26, 219);
INSERT INTO bookmarks (user_id, post_id)
VALUES (26, 220);
INSERT INTO bookmarks (user_id, post_id)
VALUES (26, 221);


-- Exercise 12

DELETE FROM bookmarks
WHERE 
    user_id = 26
    AND post_id = 219
    OR post_id = 220
    OR post_id = 221


-- Exercise 13
UPDATE users
SET
    email = cyoung2022@gmail.com
WHERE 
    user_id = 26


-- Exercise 14
