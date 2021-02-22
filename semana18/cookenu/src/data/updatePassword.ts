import { connection } from "../index"

export default async function updatePassword(email: string, password: string):Promise<any> {

    await connection.raw(`
        UPDATE Cookenu_user
        SET password = "${password}"
        WHERE email = "${email}";
    `)
}