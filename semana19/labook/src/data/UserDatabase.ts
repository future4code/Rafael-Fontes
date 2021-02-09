import { User } from "../business/entities/user";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {

    insertUser = async (user: User) => {
        await BaseDatabase.connection('labook_users')
            .insert({
                id: user.id,
                name: user.name,
                email: user.email,
                password: user.password
            })
    }

    selectUserByEmail = async (email: string): Promise<User> => {
        const queryResult: any = await BaseDatabase.connection("labook_users")
            .select("*")
            .where({ email })

        return {
            id: queryResult[0].id,
            name: queryResult[0].name,
            email: queryResult[0].email,
            password: queryResult[0].password
        }
    }
}
