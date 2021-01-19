import { Request, Response } from "express";
import selectAllUsersByNameOrType from '../data/selectAllUsersByNameOrType'

export const getAllUsersByNameOrType = async(req: Request,res: Response): Promise<any> =>{
    try {
       const orderBy = req.params.orderBy as string
       const users = await selectAllUsersByNameOrType(orderBy)
 
       if(!users.length){
          res.statusCode = 404
          throw new Error("Nenhum usuário encontrado")
       }
 
       res.status(200).send(users)
       
    } catch (error) {
       console.log(error)
       res.send(error.message || error.sqlMessage)
    }
 }