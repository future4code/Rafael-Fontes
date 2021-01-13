## Exercício 1

a) Retorna um array com dados e metadados. Neste caso selecionamos o primeiro objeto do primeiro item do array.

b)
```
const getActorByName = async (name: string): Promise<any> => {
   const result = await connection.raw(`
      SELECT * FROM Actor WHERE name = '${name}'
   `)
   
   return result[0][0]
}
```

c)
```
const countActorByGender = async (gender: string): Promise<any> => {
   const result = await connection.raw(`
      SELECT COUNT(*) as count FROM Actor WHERE gender = '${gender}'
   `)
   
   return result[0][0].count
}
```

---
## Exercício 2

a)
```
const updateSalaryById = async (
      id: string,
      salary: number
   ): Promise<any> => {
   await connection("Actor")
     .update({
       salary: salary,
     })
     .where("id", id);
}
```

b)
```
const deleteActorById = async (id: string) : Promise<any> => {
   await connection("Actor")
   .delete()
   .where("id",id)
}
```

c)
```
const averageSalary = async (gender: string) : Promise<any> => {
   const result = await connection("Actor")
   .avg("salary as average")
   .where({gender})

   return result[0].average
}
````
