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

    DELETE FROM Actor WHERE name = "Fernanda Montenegro";
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
