  
import { connection } from '../index'

export default async function getUserByEmail(email: string):Promise<any> {
    const result = await connection.raw(`
        SELECT * FROM User_aula50
        WHERE email = "${email}";
    `)
    console.log(result[0].length)
    console.log(result[0])
    return result[0]
}