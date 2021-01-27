import { Request, Response } from "express";
import { getData } from "../data/getData";
import getUserById from "../data/getUserById";

export const getUserInfo = async(req: Request,res: Response): Promise<any> =>{
    let errorCode = 400
    try {
        const token = req.headers.authorization as string

	    const tokenData = getData(token)
	
	    const user = await getUserById(tokenData.id);
	
	    res.status(200).send({
	      id: user.id,
	      email: user.email
	    })

    } catch (error) {
        res.status(errorCode).send(error.message || error.sqlMessage)
    }
}