  
import { connection } from '../index'

export default async function createUser(
    id: string, 
    email: string, 
    password: string,
    role: ROLES,
    place: string,
    number: number,
    neighbourhood: string,
    state: string,
    city: string,
    additional?: string):Promise<void> {

    await connection.raw(`
        INSERT INTO User_aula50
        VALUES ("${id}", "${email}", "${password}", "${role}");
    `)
    await connection.raw(`
        INSERT INTO AddressInfo_aula52
        VALUES ("${place}", ${number}, "${additional}", "${neighbourhood}", "${state}", "${city}", "${id}");
    `)
}

enum ROLES {
    NORMAL="NORMAL",
    ADMIN="ADMIN"
}