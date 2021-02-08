import { performPurchase } from '../src/index'
import { User } from '../src/types'

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