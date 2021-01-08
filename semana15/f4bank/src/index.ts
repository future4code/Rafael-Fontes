import express, {Request, Response} from 'express';
import cors from 'cors';
import { AddressInfo } from "net";
import { user, users, transaction } from './users'

const app = express();

app.use(express.json());
app.use(cors());

app.get('/users', (req:Request, res:Response) => {
    const result = users
    res
        .status(200)
        .send(result)
})

app.post('/user', (req:Request, res:Response) => {
    let errorCode: number = 400;

    try {

        if(!req.body.name){
            errorCode = 422;
            throw new Error("Nome não preenchido. Preencha e tente novamente.")
        }

        if(!req.body.cpf){
            errorCode = 422;
            throw new Error("CPF inválido. Preencha novamente.")
        }

        if(!req.body.birthDate){
            errorCode = 422;
            throw new Error("Data de nascimento inválida. Preencha novamente.")
        }

        const reqBody: user = {
            name: req.body.name,
            cpf: req.body.cpf,
            birthDate: req.body.birthDate,
            balance: 0,
            statement: []
        }

        users.push(reqBody);

        res.status(200).send({message: "Usuário inserido com sucesso!"});

    } catch (error) {
        res.status(errorCode).send({message: error.message});
    }
})

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
  });
  
