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
            throw new Error("CPF não preenchido. Preencha e tente novamente.")
        }

        if(!req.body.birthDate){
            errorCode = 422;
            throw new Error("Data de nascimento não preenchida. Preencha e tente novamente.")
        }

        function calcAge(day:number, month:number, year:number) {
            const now = new Date();
            let age = now.getFullYear() - year;
            const mdif = now.getMonth() - month + 1;
            if (mdif < 0) {
                --age;
            }
            else if (mdif === 0) {
                var ddif = now.getDate() - day;
                if (ddif < 0) --age;
            }
            return age;
        }

        const dateNumbers = ((req.body.birthDate).split('/'))
        if(calcAge(dateNumbers[0],dateNumbers[1],dateNumbers[2])<18){
            errorCode = 422;
            throw new Error("A conta só pode ser aberta por pessoas maiores de 18 anos.")
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
  
