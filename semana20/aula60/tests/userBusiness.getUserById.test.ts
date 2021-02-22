import { IdGenerator } from "../src/services/idGenerator";
import { HashGenerator } from "../src/services/hashGenerator";
import { TokenGenerator } from "../src/services/tokenGenerator";
import { UserBusiness } from "../src/business/UserBusiness";
import { stringToUserRole, User, UserRole } from "../src/model/User";

describe("Exercício 2", () => {

    const idGenerator = { generate: jest.fn() } as IdGenerator
    let hashGenerator = {hash: jest.fn(), compareHash: jest.fn()} as HashGenerator
    let userDatabase = { getUserById: jest.fn(()=> undefined) } as any
    const tokenGenerator = { generate: jest.fn(), verify: jest.fn() } as TokenGenerator

    const userBusiness: UserBusiness =
    new UserBusiness(idGenerator, hashGenerator, userDatabase, tokenGenerator)


    test("Teste (a)", async () => {
        expect.assertions(3)
        try {
            await userBusiness.getUserById("id")

        } catch (error) {
            expect(error.statusCode).toBe(404)
            expect(error.message).toEqual("User not found")
            expect(userDatabase.getUserById).toHaveBeenCalled()
        }
    })

    // test("Teste (b)", async () => {
        
    //     const getUserById = jest.fn(
    //         (id: string) =>
    //             new User(
    //             "id",
    //             "Fulano",
    //             "fulano@gmail.com",
    //             "hash",
    //             stringToUserRole("NORMAL")
    //             )
    //     )

    //     // userDatabase = { getUserById }
    //     const user = await userBusiness.getUserById("id")
        
    //     expect(getUserById).toHaveBeenCalledWith("id");
    //     expect(user).toEqual({
    //         id: "id",
    //         name: "Fulano",
    //         email: "fulano@gmail.com",
    //         password: "hash",
    //         role: UserRole.NORMAL,
    //     })
    // })
})