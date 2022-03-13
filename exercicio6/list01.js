/*
  +============================================================+
  |                    CADASTRO DE PRODUTOS                    |
  +============================================================+
  Obs: Utilizem Arrow Functions;
  Imaginando que teremos o seguinte produto:  
  {
    id: 0           (number, deve ser sempre único, ou seja, não podem existir dois produtos com o mesmo id)
    descricao: "",  (string)
    preco: 0        (number)
  }

  Teremos também uma lista de produtos que será uma variável de escopo global no sistema (let, não utilizem var);
  Criem um sistema onde seja possível:

  1) Cadastrar um produto;
    - cuidado para não ter o mesmo id (identificador);

  2) Excluir um produto pelo código;

  3) Encontrar um produto pelo código;

  4a) Imprimir no console em tabela a lista de produtos cadastrados;

  4b) Imprimir no console em tabela a lista de descrições dos produtos cadastrados;

  4c) Selecionar uma descrição desejada e:
    Imprimir no console em tabela somente a descrição e preço dos produtos que possuem aquela descrição escolhida; 

  5) Verificar o total de patrimônio da loja (preço total de todos os produtos);
  
  6) Verificar se todos os produtos cadastrados possuem um preço válido; 

  7) opcao para sair do sistema 

*/
// debugger
let menuOption, counter=0, descricaoProduto, valorProduto
let produtos =  []

do {
  menuOption = prompt("> Informe opção desejada:\n 1- Adicionar produto \n 2- Excluir produto \n 3- Buscar produto \n 4- Listar produtos \n 5- Listar descrição \n 6- Busca por descrição \n 7- Verificar patrimônio em estoque \n 9- Sair")
  
  const insereProduto = () => {
    produtos.push({id:counter, descricao:descricaoProduto, preco:valorProduto})
    alert('SUCESSO: Produto adicionado!') 
  }
  const excluiProduto = (idExcluirProduto) => {
    produtos = produtos.filter(x => {return x.id !== parseInt(idExcluirProduto)})
    alert('SUCESSO: Produto excluído!')
  }
  const somaValores = () => {
    let somaValorProdutos = produtos.reduce((valorAnterior, valorAtual) => valorAnterior + valorAtual.preco, 0.0)
    console.log(somaValorProdutos.toFixed(2))
  }
  const ERRO_NAO_ENCONTRADO = () => {alert('ERRO: Produto não encontrado!')}
  const ERRO_SEM_PRODUTOS = () => {alert('ERRO: Sem produtos cadastrados!')}
  const ERRO_VALOR_INVALIDO = () => {alert('ERRO: Valor inválido \nProduto não adicionado!')}

  if (menuOption !== '9') {
    switch (menuOption){
      case '1':
        counter++
        descricaoProduto = prompt("DESCRIÇÃO")
        valorProduto = parseFloat(prompt("PREÇO"))
        !isNaN(valorProduto) ? insereProduto() : ERRO_VALOR_INVALIDO       
        break
      case '2':
        let idExcluirProduto = prompt("Informe o código:")
        let produtoExiste = produtos.find(x => {return x.id === parseInt(idExcluirProduto)})
        produtoExiste ? excluiProduto(idExcluirProduto) : ERRO_NAO_ENCONTRADO()  
        break
      case '3':
        let idProduto = prompt("Informe o código do produto desejado:")
        let encontrou = produtos.find(x => {return x.id === parseInt(idProduto)})
        encontrou ? console.table(encontrou) : ERRO_NAO_ENCONTRADO()  
        break
      case '4':
        produtos.length !==0 ? console.table(produtos) : ERRO_SEM_PRODUTOS()
        break
      case '5':
        produtos.length !==0 ? console.table(produtos.map(x => {return x.descricao})) : ERRO_SEM_PRODUTOS()
        break
      case '6':
        let descProduto = prompt("Informe a descrição do produto desejado:")
        let finderProduct = produtos.filter(x => {return x.descricao === descProduto}) 
        let xyz =[]
        finderProduct.forEach(x => {xyz.push({descricao:x.descricao, preco:x.preco})})
        xyz.length !==0 ? console.table(xyz) : ERRO_NAO_ENCONTRADO()
      break
      case '7':  
        produtos.length !==0? somaValores() : ERRO_SEM_PRODUTOS()
      break
      default:
        alert("OPÇÃO INVÁLIDA. DIGITE NOVAMENTE")
    }
  }
  
} while (menuOption !== '9');


