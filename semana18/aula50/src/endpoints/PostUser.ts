import { Request, Response } from "express";
import createUser from "../data/createUser";
import { generateId } from "../services/generateId";
import { generateToken } from "../services/generateToken";

export const PostUser = async(req: Request,res: Response): Promise<any> =>{
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

        await createUser(
            id,
            req.body.email,
            req.body.password
        )

        res.status(200).send(generateToken({id}))

    } catch (error) {
        res.send(error.message || error.sqlMessage)
    }
}