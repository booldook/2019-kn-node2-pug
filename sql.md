# SQL-CRUD
## Create
~~~sql
-- INSERT INTO 테이블 (필드명1, 필드명2...) VALUES (값1, 값2...)
-- INSERT INTO 테이블 SET 필드명1='값1', 필드명2='값2'
INSERT INTO board (title, writer, wdate) VALUES ('제목입니다.', '관리자', '2020-01-05 14:35:00');
INSERT INTO board SET title='제목입니다.', writer='관리자', wdate='2020-01-05 14:35:00';
~~~ 

## Read
~~~sql
-- SELECT * FROM board;
-- SELECT * FROM board ORDER BY id ASC;
-- SELECT * FROM board ORDER BY id DESC;
SELECT * FROM board ORDER BY id DESC;
-- SELECT 필드명1, 필드명2 FROM board ORDER BY id DESC;
SELECT id, title.. FROM board ORDER BY id DESC;
~~~