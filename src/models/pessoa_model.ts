interface Pessoa {
    id: number,
    nome: string,
    idade: number
}
type Pessoas = Pessoa[]

const pessoas: Pessoas = [
    {
        id: 1,
        nome: 'Victor',
        idade: 14
    },
    {
        id: 2,
        nome: 'Douglas',
        idade: 21
    }
]
 export const pegarArrayPessoa = async(id: number) => {
    const pessoa = pessoas.filter((pessoa) => {
        return pessoa.id == id
    })
    return pessoa
 }