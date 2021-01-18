import { Request, Response } from "express";
import selectAllUsersLimited from '../data/selectAllUsersLimited'

export const getAllUsersLimited = async(req: Request,res: Response): Promise<any> =>{
    try {
       const limit = req.params.limit as string
       const users = await selectAllUsersLimited(limit)
 
       if(!users.length){
          res.statusCode = 404
          throw new Error("No recipes found")
       }
 
       res.status(200).send(users)
       
    } catch (error) {
       console.log(error)
       res.send(error.message || error.sqlMessage)
    }
 }