import { Request, Response } from "express";
import getUserByEmail from "../data/getUserByEmail";
import { generateToken } from "../services/generateToken";
import { compareHash } from "../services/hashManager";

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