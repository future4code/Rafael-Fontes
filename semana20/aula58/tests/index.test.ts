import { performPurchase, verifyAge } from '../src/index'
import { User, User_ex3, Casino, NACIONALITY, LOCATION } from '../src/types'

describe("Exercício 2", () => {
	test("Teste de usuário com saldo maior que valor de compra", () => {
		const user: User = {
			name: "Fulano",
			balance: 150
		}

		const balance = user.balance
		const value = 80
		const result = performPurchase(user, value)
		
		expect(result).toEqual({
			...user,
			balance: balance - value
		})
	})

	test("Teste de usuário com saldo igual ao valor de compra", () => {
		const user: User = {
			name: "Fulano",
			balance: 150
		}

		const value = 150
		const result = performPurchase(user, value)
		
		expect(result).toEqual({
			...user,
			balance: 0
		})
	})

	test("Teste de usuário com saldo menor que valor de compra", () => {
		const user: User = {
			name: "Fulano",
			balance: 150
		}

		const value = 180
		const result = performPurchase(user, value)
		
		expect(result).toEqual(undefined)
	})
})

describe("Exercício 4", () => {
	test("Teste de usuário brasileiro em casino no Brasil", () => {
		const brazilian: User_ex3 = {
		  name: "Fulano",
		  age: 18,
		  nacionality: NACIONALITY.BRAZILIAN,
		}
	
		const name = brazilian.name

		const casino: Casino = {
		  name: "Casino",
		  location: LOCATION.BRAZIL,
		}
	
		const result = verifyAge(casino, [brazilian])
		expect(result.brazilians.allowed).toEqual([name])
	})
})

describe("Exercício 5", () => {
	test("Teste (a)", () => {
		const brazilian: User_ex3 = {
		  name: "Fulano",
		  age: 18,
		  nacionality: NACIONALITY.BRAZILIAN,
		}
	
		const casino: Casino = {
		  name: "Casino",
		  location: LOCATION.BRAZIL,
		}
	
		const result = verifyAge(casino, [brazilian])
		expect(result.brazilians.allowed.length).toBeGreaterThan(0)
		expect(result.brazilians.allowed.length).toBeLessThan(2)
	})

	test("Teste (b)", () => {
		const american: User_ex3 = {
		  name: "Fulano",
		  age: 18,
		  nacionality: NACIONALITY.AMERICAN,
		}
	
		const casino: Casino = {
		  name: "Casino",
		  location: LOCATION.BRAZIL,
		}
	
		const result = verifyAge(casino, [american])
		expect(result.americans.unallowed.length).toBe(0)
	})

})