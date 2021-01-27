## Exercício 1

a) Uma string contém números e letras, aumentando as possibilidades de ids únicas e também a segurança

b)
```
import { v4 } from "uuid"

export function generateId():string {

    return v4()

}
```

---

## Exercício 2
a) O código possui uma função que recebe as informações de id, e-mail e senha e cria um usuário na tabela User do banco de dados

b)
```
CREATE TABLE User_aula50 (
	id VARCHAR(255) PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
);
```

c)
```
export default async function createUser(
    id: string, 
    email: string, 
    password: string):Promise<void> {
    await connection.raw(`
        INSERT INTO User_aula50
        VALUES (${id}, ${email}, ${password});
    `)
}
```
---
## Exercício 3

a) Indica que o valor recebido será necessariamente uma string, eliminando a possibilidade de undefined

b)
```
const expiresIn = "1min";

export function generateToken(input: AuthenticationData): string {

    const token = jwt.sign(
      {
        id: input.id,
      },
      process.env.JWT_KEY as string,
      {
        expiresIn
      }
    );
    return token

}

type AuthenticationData = {
  id: string;
}
```
---
## Exercício 4

a)
```
export const PostUser = async(req: Request,res: Response): Promise<any> =>{
    try {
        if(!req.body.email || !req.body.password){
            res.statusCode = 422
            throw new Error("E-mail ou senha não fornecidos")
        }

        const id: string = generateId()

        await createUser(
            id,
            req.body.email,
            req.body.password
        )
        const token = generateToken({id})
        res.status(200).send({token})

    } catch (error) {
        res.send(error.message || error.sqlMessage)
    }
}
```

b)
```
    if(!req.body.email || req.body.email.indexOf("@") === -1){
        res.statusCode = 422
        throw new Error("E-mail inválido")
    }
```

c)
```
    if(!req.body.password || req.body.password.length < 6){
        res.statusCode = 422
        throw new Error("Senha inválida")
    }
```

---
## Exercício 5
a)
```
export default async function getUserByEmail(email: string):Promise<any> {
    const result = await connection.raw(`
        SELECT * FROM User_aula50
        WHERE email = "${email}";
    `)
    return result[0][0]
}
```

---
## Exercício 6
a)
```
export const getUserAndLogin = async(req: Request,res: Response): Promise<any> =>{
    try {
        const result = await getUserByEmail(
            req.body.email
        )

        if (req.body.password !== result.password) {
            res.statusCode = 422
            throw new Error("Senha incorreta")
        }

        const id: string = generateId()
        const token = generateToken({id})
        res.status(200).send({token})

    } catch (error) {
        res.send(error.message || error.sqlMessage)
    }
}
```

b)
```
    if (!req.body.email || req.body.email.indexOf("@") === -1) {
        res.statusCode = 422
        throw new Error("E-mail inválido")
    }
```
----
## Exercício 7
a) Indica que qualquer tipo de valor pode ser atribuído. Ocorre uma mensagem de tipo errado no objeto id.

b)
```
export function getData(token: string): AuthenticationData {
  const payload = jwt.verify(token, process.env.JWT_KEY as string) as any
  const result = {
    id: payload.id,
  }

  return result
}

type AuthenticationData = {
    id: string;
}
```

---
## Exercício 8
a)
```
export default async function getUserById(id: string):Promise<any> {
    const result = await connection.raw(`
        SELECT * FROM User_aula50
        WHERE id = "${id}";
    `)

    return result[0][0]
}
```
b)
```
export const getProfile = async(req: Request,res: Response): Promise<any> =>{
    try {
        const token = req.headers.authorization as string

        const authenticationData = getData(token)

        const user = await getUserById(authenticationData.id)
        
        res.status(200).send({
            id: user.id,
            email: user.email,
          })

    } catch (error) {
        res.send(error.message || error.sqlMessage)
    }
}
```