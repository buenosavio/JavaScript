// 1) Crie uma função que recebe como parâmetros um caracter e um array de 
// 	caracteres e que remova todas as ocorrências daquele caracter no array; 
//    // ex. funcaoRemoveCaracterDoArray('a', [ 'c', 'a', 'texto', 'a' ] )
//    => deve retornar o array: [ 'c', 'texto' ] (pois removeu todos 'a');
function removeDot(value) {
    return value !== '';
  }
  
function removeCharArray(char, array){
    arrayFormated = array.toString().replaceAll(char, '').split(',').filter(removeDot)
    console.log(arrayFormated)
}

removeCharArray('a',  [ 'c', 'a', 'texto', 'a' ]  )

// 2) Crie uma função que receba como parâmetro um array de números e retorne
//  	um array ordenado (NÃO pode usar a função array.sort());
//    // ex. funcaoOrdenaArray( [4, 5, 7, 3, 0, 5, 2, 2] ) ===> retorna o array [ 0, 2, 2, 3, 4, 5, 5, 7 ] 


// 3) Crie uma função que recebe como parâmetro 2 arrays (quaisquer que sejam)
// 	e retorne uma concatenação destes 2 arrays;

function concatArray(firstArray, secondArray) {
    arrayConcated = firstArray.concat(secondArray)
    console.log(arrayConcated)
}

concatArray([1,2,3,4,5], ['abc','savio', 'dbc'])

// 4a) Tendo uma lista vazia [], crie uma função que recebe um elemento qualquer como parâmetro e que adiciona esse elemento à lista;

let littleArray=[]

function addElement(element){
    littleArray.push(element)    
    console.log(littleArray)
}
for (i=0;i<6;i++) {
    addElement('teste'+i)
}

// 4b) Crie duas funções, uma para remover o último elemento da lista e outra para remover o primeiro elemento da lista;

function removeLastElement(){
    littleArray.pop()    
    console.log(littleArray)
}
removeLastElement()

function removeFirstElement(){
    littleArray.shift()    
    console.log(littleArray)
}
removeFirstElement()

// 4c) Crie uma função para remover um elemento específico da lista;
// 	 // ex: Imagine que temos a lista [ 'a', 4, 'Tiago', 187 ]
// 	 // e chamamos a função  removeElemento('Tiago')
// 	 // deve remover o elemento 'Tiago' da lista, fazendo com que fique [ 'a', 4, 187 ]
// 	 Obs: caso o elemento passado não exista na lista mostrar uma mensagem para o usuário informando.

function removeElement(element) {
    let position = littleArray.indexOf(element)
    position !== -1 ? littleArray.splice(position, 1) : console.log("elemento nao existe")
}

removeElement('teste3')


// 5) Crie uma função que gera um número aleátorio entre 0 e 100;

function getRandomNumber(){
    let number = Math.round(Math.random()*100)
    console.log(number)
}
getRandomNumber()


// 5b) Crie uma lista vazia [] e vá adicionando números aleatórios nesta lista até que a lista tenha 10 números inseridos nela;
//     OBS: só podem ser adicionados a esta lista os seguintes números:
//     - números ímpares que estão entre 14 e 50;
//     - números múltiplos de 12;
