console.log('------<>--------')
let contador = 0, contadorIdElement=0

const buscaTextoDoInput = () => {
    var input = document.getElementById('find-text')
    var texto = input.value
    return texto
}

const criaElementos = () => {
    contador++
    //criado div filho da lista com os atributos
    const novaDiv = document.createElement ('div')
    novaDiv.setAttribute('id',`itemUnico${contador}`)
    novaDiv.setAttribute('class', 'itemUnico')
    const item = document.getElementById("item")
    item.appendChild(novaDiv)
    
    //criado elementos e parametros da div filho
    const novoInput = document.createElement('input')
    novoInput.setAttribute('type', 'checkbox')
    
    const novoParagrafo = document.createElement('p')
    novoParagrafo.textContent=buscaTextoDoInput()
    
    const novoBtn = document.createElement('button')
    novoBtn.setAttribute('id', `btn-remove${contador}`)
    novoBtn.setAttribute('class', `buttonRemove`)
    novoBtn.textContent='Remover'

    const itemUnico = document.getElementById(`itemUnico${contador}`)
    itemUnico.append(novoInput, novoParagrafo, novoBtn)

}

const removeElementos = () => {
    let x
    const itemPai = document.getElementById("item")
    const itemPaiXyz = document.getElementById("item")
    itemPai.addEventListener('click', (itemPai => {
                                        x = itemPai.target.id
                                        x = 'itemUnico' + x.substring(10,11)
                                        console.log(x)
                                        const itemRemover = document.getElementById(x)
                                        itemPaiXyz.removeChild(itemRemover)
                                        console.log('removido =>', itemRemover)    
                                                  }
                                      )
                             )      
}

const adicionaTarefas = () => {
    const btnAdd = document.getElementById('btn-add'); 
    btnAdd.addEventListener('click', criaElementos);
}


adicionaTarefas()
criaElementos()
criaElementos()
criaElementos()
criaElementos()
criaElementos()
removeElementos()
