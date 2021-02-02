import { Request, Response } from "express";
import { signupInputDTO } from "../business/entities/user";
import { businessLogin, businessSignup } from "../business/userBusiness";

export const login = async (
   req: Request,
   res: Response
): Promise<void> => {
   try {
      const { email, password } = req.body

      const token = await businessLogin(email, password)

      res.send({
         message: "Usuário logado!",
         token
      })

   } catch (error) {
      res.status(400).send(error.message)
   }
}
export const signup = async (
   req: Request,
   res: Response
) => {
   try {
      const input: signupInputDTO = 
         {
            name: req.body.name,
            nickname: req.body.nickname,
            password: req.body.password,
            role: req.body.role,
            email: req.body.email
         }

      const token = await businessSignup(input);

      // const { name, nickname, email, password, role } = req.body

      // const token = await businessSignup(
      //    name,
      //    nickname,
      //    email,
      //    password,
      //    role
      // )

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