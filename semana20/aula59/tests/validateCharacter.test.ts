import { validateCharacter } from "../src/validateCharacter";

describe("Exercício 2", () => {
    test("Teste (a)", () => {
        const result = validateCharacter({
          name: "",
          life: 1500,
          defense: 300,
          strength: 100
        })
    
        expect(result).toBe(false)
    })

    test("Teste (b)", () => {
        const result = validateCharacter({
          name: "Fulano",
          life: 0,
          defense: 300,
          strength: 100
        })
    
        expect(result).toBe(false)
    })

    test("Teste (c)", () => {
        const result = validateCharacter({
          name: "Fulano",
          life: 1500,
          defense: 0,
          strength: 100
        })
    
        expect(result).toBe(false)
    })

    test("Teste (d)", () => {
        const result = validateCharacter({
          name: "Fulano",
          life: 1500,
          defense: 300,
          strength: 0
        })
    
        expect(result).toBe(false)
    })

    test("Teste (e)", () => {
        const result = validateCharacter({
          name: "Fulano",
          life: -100,
          defense: 300,
          strength: 100
        })
    
        expect(result).toBe(false)
    })

    test("Teste (f)", () => {
        const result = validateCharacter({
          name: "Fulano",
          life: 1500,
          defense: 300,
          strength: 100
        })
    
        expect(result).toBe(true)
    })

})