import * as jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export function getData(token: string): AuthenticationData {
  const payload = jwt.verify(token, process.env.JWT_KEY as string) as any
  const result = {
    id: payload.id,
    role: payload.role
  }
  
  return result
}

enum ROLES {
  NORMAL="NORMAL",
  ADMIN="ADMIN"
}

type AuthenticationData = {
  id: string,
  role: ROLES
}