import { Request, Response } from "express";
import selectUsersByFilters from '../data/selectUsersByFilters'

export const getUsersByFilters = async(req: Request,res: Response): Promise<any> =>{
    try {
       const userName = req.query.name as string
       const type = req.query.type as string
       const orderBy = req.query.orderBy as string
       const limit = req.query.limit as string
       const offset = req.query.offset as string
       const users = await selectUsersByFilters(userName, type, orderBy, limit, offset)
       
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