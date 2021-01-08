export type transaction = {
    value: number,
    date: string,
    description: string
}

export type user = {
    name: string,
    cpf: number, //sem pontos e traços (11 dígitos)
    birthDate: number, //formato dd/mm/yyyy
    balance: number,
    statement: transaction[]
}

export let users: user[] = [
    {
        name: "Alice",
        cpf: 1,
        birthDate: 2,
        balance: 10,
        statement: []
    },
    {
        name: "Bob",
        cpf: 1,
        birthDate: 2,
        balance: 10,
        statement: []
    },
    {
        name: "Coragem",
        cpf: 1,
        birthDate: 2,
        balance: 10,
        statement: []
    },
    {
        name: "Dory",
        cpf: 1,
        birthDate: 2,
        balance: 10,
        statement: []
    },
    {
        name: "Elsa",
        cpf: 1,
        birthDate: 2,
        balance: 10,
        statement: []
    },
    {
        name: "Fred",
        cpf: 1,
        birthDate: 2,
        balance: 10,
        statement: []
    }
]