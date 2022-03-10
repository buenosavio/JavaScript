/* 1) Crie uma função que recebe como parâmetro uma lista com os valores [1, 'Olá', undefined, 99999, 'Texto qualquer']
    e essa função imprima no console o valor de cada elemento da lista;*/

function listValues(list) {
    for (item of list) {
        console.log(item)    
    }
}    

listValues([1, 'Olá', undefined, 99999, 'Texto qualquer'])


/*2) Crie uma função que receba uma string e retorne esta string sem nenhum espaço em branco no início e no fim 
   e todos caracteres em maiúsculo;
   // ex: minhaFuncao('      Oi, essa é uma   string   qualquer   ') => deve retornar a string: 'OI, ESSA É UMA STRING   QUALQUER'*/
let textFormated, frase='';

function deleteSpace(text) {
    textFormated = text.trim().toUpperCase()
    return textFormated
}
deleteSpace('      Oi, essa é uma   string   qualquer   ')

/*2)Crie uma função que, baseada no retorno da função da questão anterior, remova também os espaços entre as palavras 
	(porém mantenha ao menos um para continuar com as palavras separadas)
	// ex: minhaFuncao('Oi,    essa    é    uma   string    qualquer') => deve retornar a string: 'Oi, essa é uma string qualquer'*/

function deleteAllSpace(textFormated) {
    let words = textFormated.split(' ');
    for (wordSingle of words) {
        let isLastElement = words.indexOf(wordSingle) === words.length -1;
        wordSingle !== '' 
                        ? isLastElement===false 
                            ? frase += wordSingle + ' ' 
                            : frase += wordSingle
                        : null
    }
}

deleteAllSpace(textFormated)


/*3) Crie uma função de soma que recebe como parâmetro 2 números (imprime no console a soma deles) e uma callback function que seja 
   chamada caso algum dos números informados seja inválido.
   Esta função de Callback exibe somente a msg no console 'Algum número digitado foi inválido';*/

let notValid="Algum número digitado é inválido!"

function messageInvalidValue(notValid) {
    console.log(notValid)
}

function calculator(numberOne, numberTwo) {
    isNaN(numberOne)||isNaN(numberTwo) ? messageInvalidValue(notValid) : console.log(parseFloat(numberOne) + parseFloat(numberTwo))
}
calculator(1.5,15)


/*4) Crie uma função de busca, que recebe 2 parâmetros (um array e um elemento) e retorna uma mensagem dizendo se aquele elemento
   existe no array e também qual a posição dele (índice)
   // Ex: minhaFuncao( ['a', 'cachorro', 255], 'cachorro' ) => retorna 'O elemento existe no array e a posição dele é: 1'
   // Ex: minhaFuncao( ['a', 'cachorro', 255], 'abacate' ) => retorna 'O elemento não existe no array'*/

function finder(array, element) {
    let positionElement = array.indexOf(element)
    positionElement !== -1 ? console.log(`elemento existe no array e a posição dele é: ${positionElement}`) : console.log("elemento não existe no array")
}

finder( ['a', 'cachorro', 255], 'cachorro' )

  