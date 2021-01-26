import { Request, Response } from "express";
import createUser from "../data/createUser";
import { generateId } from "../services/generateId";
import { generateToken } from "../services/generateToken";
import { generateHash } from "../services/hashManager";

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
            hashPassword,
            req.body.role
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