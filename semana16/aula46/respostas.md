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

---
## Exercício 3
a)
```
app.get('/actor/:id', async (req:Request , res:Response) => {
   try {
      const id = req.params.id;
      const actor = await getActorById(id);
      res.status(200).send(actor)
    } catch (err) {
      res.status(400).send({
        message: err.message,
      });
    }
})
```

b)
```
app.get('/actor', async (req:Request , res:Response) => {
   try {
      const gender = req.query.gender;
      const count = await countActorByGender(gender as string);
      res.status(200).send({
         quantity: count,
       })
    } catch (err) {
      res.status(400).send({
        message: err.message,
      });
    }
})
```

---
## Exercício 4

a)
```
app.post('/actor', async (req: Request, res: Response) => {
   try {
      await updateSalaryById(
         req.body.id,
         req.body.salary
       )
   
       res.status(200).send("Salário atualizado");
   } catch (err) {
      res.status(400).send({
         message: err.message,
       })
   }
})
```

b)
```
app.delete('/actor/:id', async (req:Request , res:Response) => {
   try {
      const id = req.params.id;
      await deleteActorById(id);
      res.status(200).send(`Id ${id} apagado com sucesso`)
    } catch (err) {
      res.status(400).send({
        message: err.message,
      });
    }
})
```