import { connection } from '../index'

export default async function selectAllUsersLimited(limit: string):Promise<any> {
    const result = await connection.raw(`
       SELECT id, name, email, type
       FROM aula48_exercicio
       LIMIT ${limit};
    `)
 
    return result[0]
 }