import { Request, Response } from "express";
import { user } from "../business/entities/user";
import { businessDeleteProfile, businessGetAllUsers, businessLogin, businessSignup } from "../business/userBusiness";
import { getData } from "../data/getData";

export const signup = async (
    req: Request,
    res: Response
    ) => {
    try {
       const { name, email, password, role } = req.body
 
       const token = await businessSignup(
          name,
          email,
          password,
          role
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
 
       const token = await businessLogin(
          email,
          password
       )
 
       res
          .status(201)
          .send({
             message: "Usuário logado!",
             token
          })
 
    } catch (error) {
       res.status(400).send(error.message)
    }
}

export const getAllUsers = async (
    req: Request,
    res: Response
    ) => {
    try {
        const token = req.headers.authorization as string
        const authenticationData = getData(token)
        const id = authenticationData.id
        const users: user[] = await businessGetAllUsers(id)

        res
          .status(201)
          .send({users})
 
    } catch (error) {
       res.status(400).send(error.message)
    }
}

export const deleteProfile = async (
    req: Request,
    res: Response
    ) => {
    try {
        const id = req.params.id
        const token = req.headers.authorization as string
        const authenticationData = getData(token)
        await businessDeleteProfile(id, authenticationData.role)

        res
          .status(201)
          .send("Usuário apagado!")
 
    } catch (error) {
       res.status(400).send(error.message)
    }
}