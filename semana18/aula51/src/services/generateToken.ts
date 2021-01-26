import * as jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const expiresIn = "1min";

export function generateToken(input: AuthenticationData): string {

    const token = jwt.sign(
      {
        id: input.id,
        role: input.role
      },
      process.env.JWT_KEY as string,
      {
        expiresIn
      }
    )
     
    return token
}

enum ROLES {
  NORMAL="NORMAL",
  ADMIN="ADMIN"
}

type AuthenticationData = {
  id: string,
  role: ROLES
}