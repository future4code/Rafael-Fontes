import { connection } from '../index'

export default async function selectUsersByNameAndType(userName: string, type:string):Promise<any> {
   
   const result = await connection.raw(`
       SELECT id, name, email, type
       FROM aula48_exercicio
       WHERE name LIKE "%${userName}%"
       AND type = "${type}";
    `)
 
    return result[0]
 }