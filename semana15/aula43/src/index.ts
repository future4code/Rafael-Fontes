//importando express com Request e Response e cors
import express, {Request, Response} from 'express';
import cors from 'cors';

//extra: importando configuração de rede do node
import { AddressInfo } from "net";
//iniciando a aplicação web com express
const app = express();

//ativando os módulos de Bodyparser e cors
app.use(express.json());
app.use(cors());

type user = {
    id: number,
    name: string,
    email: string,
    type: UserType,
    age: number
}

enum UserType {
    ADMIN = "ADMIN",
    NORMAL = "NORMAL"
}

let users: user[] = [
    {
        id: 1,
        name: "Alice",
        email: "alice@email.com",
        type: UserType.ADMIN,
        age: 12
    },
    {
        id: 2,
        name: "Bob",
        email: "bob@email.com",
        type: UserType.NORMAL,
        age: 36
    },
    {
        id: 3,
        name: "Coragem",
        email: "coragem@email.com",
        type: UserType.NORMAL,
        age: 21
    },
    {
        id: 4,
        name: "Dory",
        email: "dory@email.com",
        type: UserType.NORMAL,
        age: 17
    },
    {
        id: 5,
        name: "Elsa",
        email: "elsa@email.com",
        type: UserType.ADMIN,
        age: 17
    },
    {
        id: 6,
        name: "Fred",
        email: "fred@email.com",
        type: UserType.ADMIN,
        age: 60
    }
]

app.get('/users', (req: Request, res: Response)=>{ 
   
    const result = users

    res
        .status(200)
        .send(result)
})
//1a Método GET
//1b /users

app.get('/users/searchByType', (req: Request, res: Response) => {
    let errorCode: number = 400;

    try {
        if (!req.query.type) {
            errorCode = 400;
            throw new Error("Tipo não definido. Preencha algum tipo.")
        }

        const result = users.filter(
            user => user.type === req.query.type
        )

        if (result.length === 0) {
            errorCode = 404;
            throw new Error("Usuários não encontrados")
        }

        res
            .status(200)
            .send(result)

    } catch (error) {
        res.status(errorCode).send({message: error.message});
    }
})
//2a Através de Query. Poderia ser através de Params pois é apenas um tipo, mas o Query possibilita ampliar a busca a mais tipos se necessário
//2b Criando ums lista enum de tipos válidos e atribuindo esta lista no type user

app.get('/users/searchByName', (req: Request, res: Response) => {
    let errorCode: number = 400;

    try {
        if (!req.query.name) {
            errorCode = 400;
            throw new Error("Nome não definido. Preencha algum nome.")
        }

        const result = users.filter(
            user => user.name.toLowerCase().includes(req.query.name as string)
        )

        if (result.length === 0) {
            errorCode = 404;
            throw new Error("Usuários não encontrados")
        }

        res
            .status(200)
            .send(result)

    } catch (error) {
        res.status(errorCode).send({message: error.message});
    }
})
//3a Query

app.post("/user", (req: Request, res: Response)=>{

    let errorCode: number = 400;

    try {

        if(!req.body.age || !req.body.email || !req.body.type || !req.body.name){
            errorCode = 422;
            throw new Error("Algum campo está inválido. Preencha corretamente.");
        }

        const reqBody: user = {
            id: users.length+1,
            name: req.body.name,
            email: req.body.email,
            type: req.body.type,
            age: req.body.age,
        }

        users.push(reqBody);
    
        res.status(200).send({message: "Usuário inserido com sucesso!"});
        
    } catch (error) {
        res.status(errorCode).send({message: error.message});
    }

})
//4a O resultado foi o mesmo do método Post
//4b O metódo do Post aparentemente faz mais sentido por se tratar de um novo objeto



const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
  });
  
