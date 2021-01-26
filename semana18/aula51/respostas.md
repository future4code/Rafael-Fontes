## Exercício 1

a) ```round``` é o valor ligado ao tempo de execução da função genSalt.

```salt``` é uma string gerada pela função genSalt e que será utilizada para gerar o ```hash```.
 
O valor recomendado para ```round``` é o maior possível para os equipamentos utilizados rodarem no tempo desejado. Aqui foi utilizado o valor 12 conforme recomendado em aula, por se tratar de uma valor equilibrado entre segurança e tempo de processamento.

b/c)
```
import * as bcrypt from "bcryptjs";
import dotenv from 'dotenv';

dotenv.config()

export const generateHash = async(s: string): Promise<string> => {
    const rounds = Number(process.env.BCRYPT_COST)
    const salt = await bcrypt.genSalt(rounds)
    const result = await bcrypt.hash(s, salt)
    return result
}

export const compareHash = async(s: string, hash: string): Promise<boolean> => {
    return bcrypt.compare(s, hash)
}
```

---
## Exercício 2

a) Primeiramente é necessário alterar o endpoint de cadastro para salvar a senha criptografada. Depois alterar o endpointe de login para fazer a comparação da senha fornecida pelo usuário e o hash gerado no cadastro através da função do exercício 1.

b)
```
export const postUser = async(req: Request,res: Response): Promise<any> =>{
    try {
        if(!req.body.email || req.body.email.indexOf("@") === -1){
            res.statusCode = 422
            throw new Error("E-mail inválido")
        }

        if(!req.body.password || req.body.password.length < 6){
            res.statusCode = 422
            throw new Error("Senha inválida")
        }

        const id: string = generateId()

        const hashPassword = await generateHash(req.body.password)

        await createUser(
            id,
            req.body.email,
            hashPassword
        )
        const token = generateToken({id})
        res.status(200).send({token})

    } catch (error) {
        res.send(error.message || error.sqlMessage)
    }
}
```

c)
```
export const getUserAndLogin = async(req: Request,res: Response): Promise<any> =>{
    try {
        if (!req.body.email || req.body.email.indexOf("@") === -1) {
            res.statusCode = 422
            throw new Error("E-mail inválido")
        }
        
        const result = await getUserByEmail(
            req.body.email
        )

        if (result.length===0) {
            res.statusCode = 422
            throw new Error("E-mail inexistente ou incorreto")
        }

        const compareResult = await compareHash(
            req.body.password,
            result[0].password
        )
      
        if (!compareResult) {
            throw new Error("Senha incorreta");
        }
      
        const id: string = result[0].id
        const token = generateToken({id})
        res.status(200).send({token})

    } catch (error) {
        res.send(error.message || error.sqlMessage)
    }
}
```

d) Não é necessário pois este endpoint apenas utiliza o token gerado no endpoint de login e após as mudanças ele continua sendo gerado da mesma maneira.

---
## Exercício 3
a)
```
ALTER TABLE User_aula50
ADD role ENUM("NORMAL","ADMIN") DEFAULT "NORMAL";
```
b) 
```
export function generateToken(input: AuthenticationData): string {

    const token = jwt.sign(
      {
        id: input.id,
        role: input.role,
      },
      process.env.JWT_KEY as string,
      {
        expiresIn
      }
    );
    return token

}

enum ROLES {
  NORMAL="NORMAL",
  ADMIN="ADMIN"
}

type AuthenticationData = {
  id: string,
  role: ROLES
}
```
```
export function getData(token: string): AuthenticationData {
  const payload = jwt.verify(token, process.env.JWT_KEY as string) as any
  const result = {
    id: payload.id,
    role: payload.role
  }

  return result
}

enum ROLES {
  NORMAL="NORMAL",
  ADMIN="ADMIN"
}

type AuthenticationData = {
  id: string,
  role: ROLES
}
```

c)
```
export const postUser = async(req: Request,res: Response): Promise<any> =>{
    try {
        if(!req.body.email || req.body.email.indexOf("@") === -1){
            res.statusCode = 422
            throw new Error("E-mail inválido")
        }

        if(!req.body.password || req.body.password.length < 6){
            res.statusCode = 422
            throw new Error("Senha inválida")
        }

        const id: string = generateId()

        const hashPassword = await generateHash(req.body.password)

        await createUser(
            id,
            req.body.email,
            hashPassword
        )
        const token = generateToken({
            id,
            role: req.body.role
        })
        res.status(200).send({token})

    } catch (error) {
        res.send(error.message || error.sqlMessage)
    }
}
```

d)
```
export const getUserAndLogin = async(req: Request,res: Response): Promise<any> =>{
    try {
        if (!req.body.email || req.body.email.indexOf("@") === -1) {
            res.statusCode = 422
            throw new Error("E-mail inválido")
        }
        
        const result = await getUserByEmail(
            req.body.email
        )

        if (result.length===0) {
            res.statusCode = 422
            throw new Error("E-mail inexistente ou incorreto")
        }

        const compareResult = await compareHash(
            req.body.password,
            result[0].password
        )
      
        if (!compareResult) {
            throw new Error("Senha incorreta");
        }
      
        const id: string = result[0].id
        const token = generateToken({
            id,
            role: result[0].role
        })
        res.status(200).send({token})

    } catch (error) {
        res.send(error.message || error.sqlMessage)
    }
}
```

---
## Exercício 4

a)
```
export const getProfile = async(req: Request,res: Response): Promise<any> =>{
    let errorCode = 400
    try {
        const token = req.headers.authorization as string

        const authenticationData = getData(token)

        if (authenticationData.role !== "NORMAL") {
            errorCode = 401
            throw new Error("Apenas usuários do tipo NORMAL podem usar esta funcionalidade");
        }

        const user = await getUserById(authenticationData.id)
        
        res.status(200).send({
            id: user.id,
            email: user.email,
          })

    } catch (error) {
        res.status(errorCode).send(error.message || error.sqlMessage)
    }
}
```
---
## Exercício 5

a)