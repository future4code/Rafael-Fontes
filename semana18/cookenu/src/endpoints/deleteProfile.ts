import { Request, Response } from "express";
import deleteUser from "../data/deleteUser";
import { getData } from "../data/getData";
import { ROLES } from "../types/authentication";

export const deleteProfile = async(req: Request,res: Response): Promise<any> =>{
    let errorCode = 400
    try {
        const token = req.headers.authorization as string
        const authenticationData = getData(token)
        const id = authenticationData.id
        const role: ROLES = authenticationData.role
        
        if (id===req.params.id) {
            res.statusCode = 422
            throw new Error("Não é permitido apagar o próprio usuário")
        }

        if (role!=="ADMIN") {
            res.statusCode = 422
            throw new Error("Somente ADMIN pode apagar outro usuário")
        }

        await deleteUser(
            req.params.id
        )

        res.status(200).send("Usuário apagado com sucesso")

    } catch (error) {
        res.status(errorCode).send(error.message || error.sqlMessage)
    }
}