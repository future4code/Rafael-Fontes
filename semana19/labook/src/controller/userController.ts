import { Request, Response } from "express";
import { businessLogin, businessSignup } from "../business/userBusiness";

export const signup = async (
    req: Request,
    res: Response
 ) => {
    try {

        const { name, email, password } = req.body
 
        const token = await businessSignup(
                name,
                email,
                password
        )

        res
            .status(201)
            .send({
                message: "Usuário criado!",
                token
            })
 
    } catch (error) {
        res.status(400).send(error.message)
    }
}

export const login = async (
    req: Request,
    res: Response
 ) => {
    try {

        const { email, password } = req.body
        
        const token = await businessLogin(email, password)
 
        res
            .status(200)
            .send({
                message: "Usuário logado!",
                token
            })
 
    } catch (error) {
        res.status(400).send(error.message)
    }
}