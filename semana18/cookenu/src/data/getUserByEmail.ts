import { connection } from '../index'

export default async function getUserByEmail(email: string):Promise<any> {
    const result = await connection.raw(`
        SELECT * FROM Cookenu_user
        WHERE email = "${email}";
    `)
    return result[0]
}