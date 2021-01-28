import { Request, Response } from "express";
import { getData } from "../data/getData";
import getUserById from "../data/getUserById";

export const getProfile = async(req: Request,res: Response): Promise<any> =>{
    let errorCode = 400
    try {
        const token = req.headers.authorization as string

        const authenticationData = getData(token)

        const user = await getUserById(authenticationData.id)
        
        res.status(200).send({
            id: user.id,
            name: user.name,
            email: user.email,
          })

    } catch (error) {
        res.status(errorCode).send(error.message || error.sqlMessage)
    }
}