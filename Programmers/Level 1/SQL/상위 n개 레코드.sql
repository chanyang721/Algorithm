-- 코드를 입력하세요
-- ANIMAL_INS 테이블 ANIMAL_ID, ANIMAL_TYPE, DATETIME, INTAKE_CONDITION, NAME, SEX_UPON_INTAKE
-- 동물 보호소에 가장 먼저 들어온 동물의 이름을 조회하는 SQL 문을 작성
SELECT name FROM ANIMAL_INS
ORDER BY DATETIME ASC
LIMIT 1