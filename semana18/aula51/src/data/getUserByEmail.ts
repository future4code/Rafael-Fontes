import { connection } from '../index'

export default async function getUserByEmail(email: string):Promise<any> {
    const result = await connection.raw(`
        SELECT * FROM User_aula50
        WHERE email = "${email}";
    `)
    return result[0]
}