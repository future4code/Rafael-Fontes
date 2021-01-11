export type transaction = {
    value: number,
    date: string,
    description: string
}

export type user = {
    name: string,
    cpf: number, //sem pontos e traços (11 dígitos)
    birthDate: string, //formato dd/mm/yyyy
    balance: number,
    statement: transaction[]
}

export let users: user[] = [
    {
        name: "Alice",
        cpf: 12345678901,
        birthDate: "01/01/1990",
        balance: 10,
        statement: []
    },
    {
        name: "Bob",
        cpf: 12345678902,
        birthDate: "02/10/1991",
        balance: 20,
        statement: []
    },
    {
        name: "Coragem",
        cpf: 12345678903,
        birthDate: "03/11/1980",
        balance: 30,
        statement: []
    },
    {
        name: "Dory",
        cpf: 12345678904,
        birthDate: "04/05/1970",
        balance: 40,
        statement: []
    },
    {
        name: "Elsa",
        cpf: 12345678905,
        birthDate: "05/02/2000",
        balance: 50,
        statement: []
    },
    {
        name: "Fred",
        cpf: 12345678906,
        birthDate: "06/04/1999",
        balance: 60,
        statement: []
    }
]