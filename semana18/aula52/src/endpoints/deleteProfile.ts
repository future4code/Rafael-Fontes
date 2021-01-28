import { Request, Response } from "express";
import deleteUser from "../data/deleteUser";
import { getData } from "../data/getData";
import getUserById from "../data/getUserById";

export const deleteProfile = async(req: Request,res: Response): Promise<any> =>{
    let errorCode = 400
    try {
        const token = req.headers.authorization as string

        const authenticationData = getData(token)

        if (authenticationData.role !== "ADMIN") {
            errorCode = 401
            throw new Error("Apenas usuários do tipo ADMIN podem usar esta funcionalidade");
        }

        const id = req.params.id;
        const user = await getUserById(id)

        if(!user) {
            errorCode = 421
            throw new Error("Perfil não encontrado");
        }

        await deleteUser(id);
        
        res.status(200).send("Perfil apagado com sucesso")

    } catch (error) {
        res.status(errorCode).send(error.message || error.sqlMessage)
    }
}