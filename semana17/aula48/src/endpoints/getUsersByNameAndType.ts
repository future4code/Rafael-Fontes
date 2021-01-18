import { Request, Response } from "express";
import selectUsersByNameAndType from '../data/selectUsersByNameAndType'

export const getUsersByNameAndType = async(req: Request,res: Response): Promise<any> =>{
    try {
       const userName = req.query.name as string
       const type = req.params.type as string
       const users = await selectUsersByNameAndType(userName, type)
       
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