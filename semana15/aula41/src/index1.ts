let minhaString: string = "Texto"
// minhaString = 3 // Não é possível atribuir número para uma variável tipo string

let meuNumero: number | string
meuNumero = 3
meuNumero = "três"

enum coresArcoIris {
    VERMELHO = "Vermelho",
    LARANJA = "Laranja",
    AMARELO = "Amarelo",
    VERDE = "Verde",
    AZUL = "Azul",
    ANIL = "Anil",
    VIOLETA = "Violeta"
}
type pessoa = { nome: string, idade: number, corFavorita: coresArcoIris }
const fulano: pessoa = {
    nome: "Fulano",
    idade: 20,
    corFavorita: coresArcoIris.AMARELO
}
const sicrano: pessoa = {
    nome: "Sicrano",
    idade: 33,
    corFavorita: coresArcoIris.ANIL
}
const beltrano: pessoa = {
    nome: "Beltrano",
    idade: 22,
    corFavorita: coresArcoIris.LARANJA
}


