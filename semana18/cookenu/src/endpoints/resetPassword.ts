import { Request, Response } from "express";
import getUserByEmail from "../data/getUserByEmail";
import updatePassword from "../data/updatePassword";
import { writeEmail } from "../services/mailer";
import { generateHash } from "../services/hashManager";
import { generateId } from "../services/generateId";

export async function resetPassword(req: Request, res:Response){
    let errorCode: number = 400;
    try {
        const email = req.body.email;
        if(!email || !email.includes("@")){
            throw new Error("E-mail não preenchido ou inválido");
        }

        const user = await getUserByEmail(email)
        if(user.length===0){
            errorCode = 404;
            throw new Error("Usuário inexistente.")
        }

        const id: string = generateId()
        const password: string = id.slice(0,8)
        const hashPassword = await generateHash(password)

        await updatePassword(email, hashPassword)

        await writeEmail({
            from: "Admin <admin@email.com.br>",
            to: email,
            subject: "Nova Senha - Cookenu",
            text: "Aqui está sua nova senha",
            html: `<p>Olá, ${user[0].name}. Alteramos sua senha. Sua nova senha é ${password}.</p>`
        })

        res.status(200).send({message: "Senha atualizada e enviada para seu e-mail cadastrado. Por favor, verifique sua caixa de entrada"});

    } catch (error) {
        res.status(errorCode).send({message: error.message})
    }

}