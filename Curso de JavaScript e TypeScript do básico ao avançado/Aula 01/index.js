console.log('Hello World!')

const numberTeste = 5
console.log(typeof numberTeste)

// Luiz Otávio Miranda tem 30 anos e 84 kg, tem 1,80 de altura e seu imc é 25,9259.
// Luiz Otávio nasceu em 1993

const nome = 'Luiz Otávio'
const sobrenome = 'Miranda'
const idade = 30
const peso = 84
const altura = 1.80
const imc = peso / (altura * altura)

const dataAtual = new Date();
const nascimento = dataAtual.getFullYear() - 30

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg, tem ${altura} de altura e seu imc é ${imc} \n${nome} nasceu em ${nascimento}`)
