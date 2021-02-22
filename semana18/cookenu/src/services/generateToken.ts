import * as jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { AuthenticationData } from '../types/authentication';

dotenv.config();

const expiresIn = "5min";

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
