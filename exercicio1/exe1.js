/* 1) Crie um programa que, a partir de um texto que o usuário digitar (prompt), verifique:
    - Se o texto for igual à 'SIM' informe um alerta para o usuário informando o texto "Parabéns";
    - Se o texto for igual à 'Não' solicite novamente para o usuário informar algum texto e após isso mostre para ele o texto digitado em um alerta;
    - Se for digitado qualquer outra string solicite uma confirmação para o usuário com o texto: 'Você tem noções dos seus atos?'*/

let answer = prompt("Digite um texto: ")

if (answer=="Sim") {
    alert("Parabéns")
} else if (answer=="Não") {
    alert("Informe o texto novamente")
    alert(`texto informado: "${answer}"`)
} else {
    confirm("Você tem noções dos seus atos?")
}

/*2) Crie um programa que solicita para o usuário dois valores de texto, nome do cliente e nome do atendente;
Exiba um alerta para o usuário com a mensagem "Olá cliente eu me chamo atendente, emque posso ajudar?" (String interpolation)*/

let cliente = prompt("Informe nome do cliente")
let atendente = prompt("Informe nome do atendente")
alert(`Olá ${cliente} eu me chamo ${atendente}, em que posso ajudar?`)



/*3) Crie um programa que possui 3 variáveis do tipo Boolean (true / false);
   nomes das variáveis: isFriday, isTwoGreaterThanFour e isValueEmpty;
   Atribua à variável isFriday o resultado de uma pergunta feita para o usuário "Hoje é sexta-feira?";
   Atribua à variável isTwoGreaterThanFour o resultado da comparação de "2 maior que 4";
   Para a variável isValueEmpty você precisa solicitar uma informação para o usuário e armazenar na variável a verificação se essa 
   informação é: null, undefined ou um texto vazio ('')*/
   
let isFriday, isTwoGreaterThanFour, isValueEmpty = false

isFriday = confirm("Hoje é sexta-feira?")
alert(isFriday)
isTwoGreaterThanFour = 2 > 4
alert("dois é maior que quatro: " + isTwoGreaterThanFour)

let info = prompt("informe a informação")

isValueEmpty = (info === null || info === undefined || info === '' )

alert("é um valor vazio? " + isValueEmpty)


/* 4) Crie um programa que recebe dois números e uma operação desejada e mostre o resultado dessa operação 
      (operações válidas: '+', '-', '*', '/')
    adicione também uma validação para caso a operação escolhida não seja uma das operações válidas OU
    se um dos números digitados seja um valor inválido também;
    Caso a validação encontre um erro mostre um alerta informando o usuário;
    Obs: Lembrando também que não é possível dividir por zero (ou seja, tratem isso também);*/

let firstValue = prompt ("Informe o número ")
let secondValue = prompt ("Informe outro número ")

if (isNaN(firstValue) || isNaN(secondValue)) {
    alert("Informe valores válidos")    
} else {
    let operation = prompt ("Qual operação?")
        switch (operation.trim()) {
            case '+':
                alert(`Resultado: ${parseInt(firstValue) + parseInt(secondValue)}`)
                break
            case '-':
                alert(`Resultado: ${parseInt(firstValue) - parseInt(secondValue)}`)
                break
            case '/':
                if (secondValue==='0'){
                    alert('não é possível dividir por zero!')
                } 
                else{
                    alert(`Resultado: ${parseInt(firstValue) / parseInt(secondValue)}`)
                }
                break
            case '*':
                alert(`Resultado: ${parseInt(firstValue) * parseInt(secondValue)}`)
                break
            default:
                alert("Erro. Contate administrador.")
        }
    }

/*5) Crie um programa que recebe 3 notas (T1, T2 e P1) como números reais (float, ex: 5.2), realize a média dessas notas e 
     realize a seguinte verificação:
        (menor que 5 = alerta de reprovado, de 5 até 7 = alerta de recuperação e acima de 7 = alerta de parabenização)
        Obs: adicione as validações para ter certeza que os números inseridos estão certos;*/

let n1 = prompt("Informe primeira nota")
let n2 = prompt("Informe segunda nota")
let n3 = prompt("Informe terceira nota")
let mediaTotal;

if (isNaN(n1) || isNaN(n2) || isNaN(n3)) {
    alert("Informe valores válidos")    
} else {
    mediaTotal = ((parseFloat(n1) + parseFloat(n2) + parseFloat(n3)) / 3)
    if (mediaTotal < 5) {
        alert("Reprovado")
    } else if (mediaTotal >=5 && mediaTotal <=7){
        alert("Recuperação")
    } else {
        alert("Aprovado. Parabéns")
    }
}


/* 6) Crie um programa que solicite para o usuário que escolha uma das opções do menu:
    1 - Fazer checkin (exibe um alert de boas vindas);
    2 - Fazer checkout (mostra uma caixa de confirmação perguntando se tem certeza e se disser que sim exibe um alerta de despedida);
    3 - Estender hospedagem (pergunta pro usuário quantos dias gostaria de estender e se for um número válido exibe um alerta de sucesso
          informando que a hospedagem foi estendida em X dias)
    4 - Sair (exibe alerta de "Ok")
    Obs: caso não seja nenhuma dessas opções exiba um alerta de opção inválida*/

let opcao = prompt("Digite o que deseja \n\n 1- Checkin \n 2- Checkout \n 3- Estender \n 4- Sair\n")

switch (opcao) {
    case '1':
        alert("Seja bem vindo(a)")
        break
    case '2':
        let confirmacaoCheckout = confirm("Deseja prosseguir com o checkout?")
        if (confirmacaoCheckout) {
            alert("Que pena!")
        }
        break
    case '3':
        let quantidadeEstadia = prompt("Quantos dias gostaria de estender?")
        if (!isNaN(quantidadeEstadia)) {
            alert("Sua reserva foi atualizada com sucesso!")
        } else {
            alert("Informe quantidade válida")
        }
        break
    case '4':
        alert("Ok")
        break
    default:
        alert("Informe opção válida")
}
