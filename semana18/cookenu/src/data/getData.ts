import * as jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { AuthenticationData } from '../types/authentication';

dotenv.config();

export function getData(token: string): AuthenticationData {
  const payload = jwt.verify(token, process.env.JWT_KEY as string) as any
  const result = {
    id: payload.id,
    role: payload.role
  }
  
  return result
}
