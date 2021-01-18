import { connection } from '../index'

export default async function selectUsersByName(userName: string):Promise<any> {
   
   const result = await connection.raw(`
       SELECT id, name, email, type
       FROM aula48_exercicio
       WHERE name LIKE "%${userName}%";
    `)
 
    return result[0]
 }