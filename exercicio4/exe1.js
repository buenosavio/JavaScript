///*Prática da Function Arrow*/
const isPositive = (number) => number > 0

const randomNumber = () => Math.round(Math.random()*10)

const setTimeout = () => console.log('mensagem')

setTimeout(
    () => console.log('teste')
    ,5000
)

const criarMensagemDeOla = () => 'olá, seja bem vindo'
