/*1)Um funcionário de uma empresa recebe aumento salarial anualmente. Sabe-se que:
    Esse funcionário foi contratado em 2016, com salário inicial de R$1000,00;
    A cada ano o funcionário recebe um aumento de 1,5% sobre seu salário inicial;

    A partir de 2018, os aumentos salariais sempre passaram a ser o dobro do percentual do ano anterior
    Faça um programa que determine imprima o salário desse funcionário com o passar dos anos até o ano atual;*/

let currentSalary = 1000.00
let initialTax = 15.00
years = [2016, 2017, 2018, 2019, 2020, 2021, 2022]

for (year of years) {
    if (year <= 2018) {
        currentSalary += (initialTax / 1000) * currentSalary
        console.log(`Aumento padrão no ano de ${year}. Salário atualizado para ${currentSalary.toFixed(2)}`)
    } else {
        initialTax += initialTax
        currentSalary += (initialTax / 1000) * currentSalary
        console.log(`Aumento composto no ano de ${year}. Salário atualizado para ${currentSalary.toFixed(2)}`)
    }
}

/*2) Faça um programa que calcule a soma dos primeiros 50 números pares;*/

let sum = 0, contador=0

for (let i=1; i<=100; i++) {
    i%2===0 ? sum+=i : null
}
console.log(`Soma dos pares: ${sum} `)

/*3) Faça um programa onde o usuário possa escolher qual a tabuada que se deseja ver.
Exiba (console) a tabuada desse número de 1 a 10;*/

let tabuadaNumber = prompt("Informe o número desejado: ")
if (!isNaN(tabuadaNumber)) {
    for (let i=1; i<=10; i++) {
        console.log(`${i}x${tabuadaNumber} é igual a ${i*tabuadaNumber}`)
    }
} else {
    console.log("ERRO - 12Digite um número válido!")       
}


/*4) Faça um algoritmo que apresente o quadrado de cada um dos números pares entre 1 e 100;*/
for (let i=2; i<=100; i+=2) {
    console.log(`${i} elevado ao quadrado é igual a ${i*i}`)
}


/*5) Faça um algoritmo que imprima no console os valores como se fosse um relógio durante 1 minuto;
	Exemplo do console:
	00 // note que é 00 e não apenas 0
	01 // note que é 01 e não apenas 1
	02 // note que é 02 e não apenas 2
	03 // note que é 03 e não apenas 3
	...
	58
	59
	60 (aqui é para parar de imprimir)*/
let i = 1

function displaySeconds(i) {
    console.log( i<10 ? `0${i}` : i)
    if (i>=60) {
        clearInterval(clockOn)
    }
}

let clockOn = setInterval(
                          function(){
                            displaySeconds(i++)
                          }, 
                          1000);
    

/*6) Pergunte ao usuário se ele quer:
	Inserir número / Finalizar
	Ao selecionar inserir número solicite para o usuário um valor numérico válido
	Ao selecionar finalizar mostre um alerta para o usuário com o resultado da soma de todos os números informados
	Utilize o laço DO...WHILE;*/

let value=0, soma=0, userOption=null

do {
    userOption = prompt(" 1- Inserir número \n 2- Finalizar")
    if (userOption === '1') {
        value = prompt("Digite o valor: ") 
        soma += parseInt(value)
    } else if (userOption === '2' && soma !== 0) {
        alert(`A soma é de ${soma}`)
    } else if (userOption !== '1' && userOption !== '2'){
        alert("Digite 1 ou 2")
    }
        
} while (userOption !== '2')
