// Object window
// alert('Mensagem aqui')
// confirm('Tem certeza que deseja confirmar?')
// prompt('Qual é o seu nome?')


const confirmation = confirm('Deseja escrever um número?')
console.log(confirmation)

if(confirmation) {
    let num = +prompt('Insira um número')
    console.log(`Você digitou o número ${num} que é o do tipo ${typeof num}`)
} else {
    alert('Ok! Até mais!')
}