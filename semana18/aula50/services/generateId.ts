//1a Uma string contém números e letras, aumentando as possibilidades de ids únicas e também a segurança

//1b
import { v4 } from "uuid"

export function generateId():string {

    return v4()

}

