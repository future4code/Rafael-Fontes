import { Request, Response } from "express";
import { getData } from "../data/getData";
import getUserById from "../data/getUserById";

export const getProfile = async(req: Request,res: Response): Promise<any> =>{
    try {
        const token = req.headers.authorization as string

        const authenticationData = getData(token)

        const user = await getUserById(authenticationData.id)
        
        res.status(200).send({
            id: user.id,
            email: user.email,
          })

    } catch (error) {
        res.send(error.message || error.sqlMessage)
    }
}