/*
  +================================================================+
  |                    SISTEMA DE COLABORADORES                    |
  +================================================================+

  Nesse nosso sistema teremos os seguintes modelos de Entidade/Objeto/Classe ("sinônimos"):

  Colaborador {
    id;
    nome;
    marcacoesPonto; (um array de marcações, ex: [ { dia: 22, horas: 9 }, { dia: 23, horas: 7 } ]);
    
    marcarPonto( dia, hora );
  };

  Marcacao {
      dia; (só um number mesmo, ex: 22 )
      horas; (também só um number, ex: 9)
  }
  
  Crie também uma classe de 'Validacoes' que terá métodos úteis de validação para usar em várias partes do sistema;
  Ex: Validacoes { 
      validaAlgo(valorParaValidar) {
          // imaginem uma lógica validando aqui
          return ehValido;
      }
  }

  Para utilizar essas validações, 

  Ex: const validador = new Validacoes(); // inicializando um validador (vai ser o mesmo global para o sistema, não precisa instanciar mais de 1)
  
  if(validador.validaAlgo('Valor qualquer')) {
      // só pra exemplificar como utilizar
  }

  Vamos criar um sistema da seguinte forma;
  Deve ser apresentado para o usuário um "menu" para ele escolher uma ação a ser realizada;

  As opções serão:

  1 - Cadastrar Colaborador;
  2 - Marcar Ponto;
  3 - Ver Lista de Colaboradores;
  4 - Ver Lista de Colaboradores Que Ainda Não Marcaram o Ponto;
  9 - Encerrar;
*/
console.log('+================================================================+\n|                    SISTEMA DE COLABORADORES                    |    \n+================================================================+')

//variáveis escopo global
let colaboradores = []
let marcacoes = []
let menuOption , contador=0, contadorMarcacao=0, qtdMarcacoes=0 

//classes
class Colaborador {
    id
    nome
    marcacoesPonto

    constructor(id, nome, marcacoesPonto){
        this.id = id
        this.nome = nome
        this.marcacoesPonto=marcacoesPonto
    }

    static marcarPonto(dia, horas) {
        dia = prompt('Informe o dia da marcacao')
        horas = prompt('Informe a hora da marcacao')       
        if (Validacoes.validaNumeros(horas)) {
            let marcacao = new Marcacao(dia, horas)    
            marcacoes.push(marcacao)
            console.table(marcacoes)
        } else {
            alert('ERRO:\nInforme um nome válido!')
        }
        
    }
}

class Marcacao {
    dia
    horas

    constructor(dia, horas){
        this.dia = dia
        this.horas = horas
    }
}  

class Validacoes { 
    
    static validaLetras(text) {
        text = text.toLowerCase()
        let notValid = [...text].some(x => x.toUpperCase() === x.toLowerCase())
        return notValid
    }

    static validaNumeros(number) {
        number = parseInt(number)
        let validNumber = !isNaN(number) 
        return validNumber
    }
}

//código
do {
    //funções
    const cadastrarColaborador = () => {
        let nomeColaborador = prompt('Informe nome do colaborador:')
        if (!Validacoes.validaLetras(nomeColaborador) && nomeColaborador!=='') {
            contador ++
            let colaborador = new Colaborador(contador, nomeColaborador, 0)
            colaboradores.push(colaborador)
            return colaboradores
        } else {
            alert('ERRO:\nInforme um nome válido!')
        }
    }

    const listarColaboradores = () => {
        console.table(colaboradores)
    }

    const adicionaMarcacao = () => {
        let idFunc = prompt("Informe índice do funcionário para salvar a marcação!") //próxima release aqui vou buscar pelo id
        let qtdAtual = colaboradores[idFunc].marcacoesPonto
        qtdAtual += 1
        colaboradores[idFunc].marcacoesPonto = qtdAtual
    }

    const verificaAusencia = () => {
        let colaboradoresAusentes = colaboradores.filter(x => {return x.marcacoesPonto === 0}) 
        console.table(colaboradoresAusentes)
    }

    //sistema
    menuOption = prompt('Informe a opção desejada: \n\n1- Cadastrar colaborador \n2- Marcar ponto \n3- Listar colaboradores \n4- Listar colaboradores sem marcação \n\n5- Encerrar')
    if (menuOption !== '5') {
        switch (menuOption){
            case '1':
                cadastrarColaborador()
                break
            case '2':
                Colaborador.marcarPonto()
                adicionaMarcacao()
                break
            case '3':
                listarColaboradores()
                break
            case '4':
                verificaAusencia()
                break
            default:
                alert('OPÇÃO INVÁLIDA!')
        }
    }
    
} while(menuOption !== '5')