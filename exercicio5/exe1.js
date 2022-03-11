/**exercicio aula*/

// 1) Crie uma função que inverta um número; (NÃO pode usar a função revert())
//    Exemplo: minhaFuncao(370914) // retorno esperado: 419073 (É o número 419073 e não a string '419073', o mesmo vale para o parâmetro passado);

function inverteNumero(numero){
    let array = numero.toString().split("");
    let newArray = [];

    for(element of array){
        newArray.unshift(element);
        console.log(newArray);
    }
    return newArray
}
// 2) Crie uma função que recebe um array de números e encontre o segundo menor e o segundo maior número do array
//    e imprima eles no console (imprime somente 1 número se ele for o segundo menor e o segundo maior também);
//    Exemplo: minhaFuncao( [1, 3, 5, 7, 9] ) // neste caso, imprime: 3 e imprime: 7
//    Exemplo: minhaFuncao( [1, 3, 5] ) // neste caso, imprime somente o: 3

function segundoMaiorMenor(array) {
    for (var i = 0; i < array.length; i++) {
        for (var j = 0; j < (array.length - i - 1); j++) {
            if (array[j] > array[j + 1]) {
                var tmp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = tmp;
            }
        }
    }
    
    console.log(array[1],array[array.length-2])
}

segundoMaiorMenor([5,8,1,3,7,6,9,13])

// 3) Crie uma função que recebe uma string e coloca todas as primeiras letras em maiúsculo;
//    Exemplo: minhaFuncao( 'hoje faremos o trabalho em dupla, que legal - sqn' )
//    // neste caso retorna: 'Hoje Faremos O Trabalho Em Dupla, Que Legal - Sqn';

function upperCase(string){
    let splitado = string.split(" ");
    let maiusculo;
    let novoArray = [];
    for(element of splitado){
        maiusculo = element.charAt(0).toUpperCase()+element.substring(1);
    
        novoArray.push(maiusculo)
    }
    
    let finalizado = novoArray.join(" ").toString();
    console.log(finalizado);
}

upperCase('hoje faremos o trabalho em dupla, que legal - sqn')


// 4) Crie uma função que receba uma string e imprime uma mensagem com a quantidade de vogais e a quantidade de consoantes na string 
//   da seguinte forma: 'A string [stringInformada] tem X vogas e X consoantes';

let consoantes = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'x', 'z']
let contadorVogal =0, contadorConsoante=0;
function vogaisConsoantesCount(string) {
    string = string.toLowerCase()
    for (char of string) {
        if (char.includes('a') || char.includes('e') || char.includes('i') || char.includes('o') || char.includes('u')){
            contadorVogal += 1
        } else if (consoantes.includes(char)){
            contadorConsoante +=1
        }
    }
    console.log('Vogal: ' + contadorVogal)
    console.log('Consoante: ' + contadorConsoante)
}

vogaisConsoantesCount('Oi, tenho 5 anos de idade!!! ;D')


// 5) Crie uma função que imprima no console todas as possíveis combinações de uma string;
//   ex: imprimirCombinacoes('tri')
//   => possiveis combinações da string "tri": 't', 'tr', 'ti', 'tri', 'tir','r', 'rt', 'ri', 'rit', 'rti','i', 'ir', 'it', 'irt', 'itr'

function combinacoesString(texto) {
    let combinacoes=[]
    for (let i = 0 ; i < texto.length; i++) {
        let letra = texto[i];
        combinacoes.push(letra);
        for (let j = 0 ; j < texto.length; j++) {
            let letra2 = texto[j];
            if(letra !== letra2){
                combinacoes.push(letra + letra2);
            }
            for (let k = 0 ; k < texto.length; k++) {
                let letra3 = texto[k];
                if(letra !== letra2 && letra !== letra3 && letra2 !== letra3){
                    combinacoes.push(letra + letra2 + letra3);
                }

            }

        }

    }
    
    for(print of combinacoes){
        console.log(print)
    }
}

combinacoesString('tri')