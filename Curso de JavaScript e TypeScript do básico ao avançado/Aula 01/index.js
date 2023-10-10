console.log('Hello World!')

console.log('-------------------------')
const numberTeste = 5
console.log(typeof numberTeste)

console.log('-------------------------')

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

console.log('-------------------------')

let contadorSoma = 1
contadorSoma++ // primeiro mostra o valor, depois o incremento => pré-incremento
++contadorSoma // primeiro incrementa, depois o valor => post-incremento
console.log(`contadorSoma = ${contadorSoma}`)

let contadorSub = 1
contadorSub-- // primeiro mostra o valor, depois o decremento => pré-decremento
--contadorSub // primeiro decrementa, depois o valor => post-decremento
console.log(`contadorSub = ${contadorSub}`)

// Operadores de atribuição
const passo = 2
let contador = 0
contador += passo // contador = contador + passo
console.log(`contador = ${contador}`)
contador += passo
console.log(`contador = ${contador}`)
contador += passo
console.log(`contador = ${contador}`)
contador += passo
console.log(`contador = ${contador}`)

console.log('-------------------------')

contador = 2
contador *= passo // contador = contador + passo
console.log(`contador = ${contador}`)
contador *= passo
console.log(`contador = ${contador}`)
contador *= passo
console.log(`contador = ${contador}`)
contador *= passo
console.log(`contador = ${contador}`)

console.log('-------------------------')

stringToNumber = +'5'
console.log(typeof stringToNumber)