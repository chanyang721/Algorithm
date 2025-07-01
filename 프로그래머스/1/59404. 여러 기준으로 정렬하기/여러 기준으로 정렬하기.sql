-- 코드를 입력하세요
-- 이름 순으로 조회
-- 이름이 같은 동물 중에서는 보호를 나중에 시작한 동물을 먼저
SELECT animal_id, name, datetime 
FROM ANIMAL_INS 
ORDER BY name ASC, 
datetime DESC