## Exercício 1
a) Remove a coluna 'salary' da tabela 'Actor'

b) Muda o nome da coluna 'gender' para 'sex' e define como string limitada a 6 caracteres

c) Permite que a coluna 'gender' aceite até 255 caracteres

d)
    
    ALTER TABLE Actor CHANGE gender gender VARCHAR(100);
---
## Exercício 2
a)
```
UPDATE Actor
SET name = "Juliana T. Paes"
WHERE id = "003";
```
b)
```
UPDATE Actor
SET name = UPPER(name)
WHERE id = "003";

UPDATE Actor
SET name = "Juliana Paes"
WHERE id = "003";
```
c)
```
UPDATE Actor
SET 
	name = "Antonio Fagundes",
	salary = 1000000,
    birth_date = "1970-01-01",
    gender = "MALE"
WHERE id = "005";
```
d)
```
UPDATE Actor
SET 
	salary = 1000000
WHERE id = "011";
```
Retornou uma mensagem de sucesso, mas não alterou nada pois a busca não teve resultados

---
## Exercício 3
a)
```
SET SQL_SAFE_UPDATES = 0;
DELETE FROM Actor WHERE name = "Fernanda Montenegro";
```
b)
```
DELETE FROM Actor
WHERE
	gender = "male"
    AND
	salary > 1000000;
```
---

## Exercício 4
a)

    SELECT MAX(salary) FROM Actor;
b)
```
SELECT MIN(salary) FROM Actor
WHERE gender = "female";
```
c)
```
SELECT COUNT(*) FROM Actor
WHERE gender = "female";
```
d)
   
    SELECT SUM(salary) FROM Actor;
---
## Exercício 5
a)
```
SELECT COUNT(*), gender
FROM Actor
GROUP BY gender;
```
Faz a contagem de atores e atrizes

b)
```
SELECT id, name FROM Actor
ORDER BY name DESC;
```
c)
```
SELECT * FROM Actor
ORDER BY salary ASC;
```
d)
```
SELECT * FROM Actor
ORDER BY salary ASC
LIMIT 3;
```
e)
```
SELECT AVG(salary), gender
FROM Actor
GROUP BY gender;
```

---
## Exercício 6
a)

    ALTER TABLE Movie ADD playing_limit_date DATE;
b)

    ALTER TABLE Movie CHANGE rating rating FLOAT;
c)
```
UPDATE Movie
SET
	playing_limit_date = "2021-01-31"
WHERE id = "001";

UPDATE Movie
SET
	playing_limit_date = "2021-01-01"
WHERE id = "002";
```
d)
```
DELETE FROM Movie WHERE id = "003";

UPDATE Movie
SET
	synopsis = "blábláblá"
WHERE id = "003";
```
Ao tentar alterar o filme apagado uma mensagem de sucesso é recebida, mas nada é alterado pois não há resultado da busca pelo id.

---
## Exercício 7
a)
```
SELECT COUNT(*) FROM Movie
WHERE rating > 7.5;
```
b)

    SELECT AVG(rating) FROM Movie;
c)
```
SELECT COUNT(*) FROM Movie
WHERE playing_limit_date >= CURDATE();
```
d)

    SELECT COUNT(*) FROM Movie WHERE launch_date > CURDATE();
e)

    SELECT MAX(rating) FROM Movie;
f)

    SELECT MIN(rating) FROM Movie;

---
## Exercício 8
a)
```
SELECT * FROM Movie
ORDER BY title ASC;
```
b)
```
SELECT * FROM Movie
ORDER BY title DESC
LIMIT 5;
```
c)
```
SELECT * FROM Movie 
WHERE launch_date < CURDATE() 
ORDER BY launch_date DESC 
LIMIT 3;
```
d)
```
SELECT * FROM Movie 
ORDER BY rating DESC 
LIMIT 3;
```

