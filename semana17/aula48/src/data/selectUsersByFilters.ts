import { connection } from '../index'

export default async function selectUsersByFilters(userName: string, type:string, orderBy: string, limit: string, offset: string):Promise<any> {
   
   const result = await connection.raw(`
      SELECT id, name, email, type
      FROM aula48_exercicio
      WHERE name LIKE "%${userName}%"
      AND type = "${type}"
      ORDER BY ${orderBy}
      LIMIT ${limit}
      OFFSET ${offset};
    `)
 
    return result[0]
 }