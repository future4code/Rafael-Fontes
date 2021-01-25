  
import { connection } from '../index'

export default async function getUserById(id: string):Promise<any> {
    const result = await connection.raw(`
        SELECT * FROM User_aula50
        WHERE id = "${id}";
    `)

    return result[0][0]
}