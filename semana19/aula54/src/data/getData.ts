import * as jwt from "jsonwebtoken";
import dotenv from "dotenv";
import {authenticationData} from "../business/entities/user"

dotenv.config();

export function getData(token: string): authenticationData {
  const payload = jwt.verify(token, process.env.JWT_KEY as string) as any
  const result = {
    id: payload.id,
    role: payload.role
  }
  
  return result
}
