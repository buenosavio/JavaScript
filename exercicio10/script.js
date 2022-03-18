//#region Validação Email
const validarEmail = () => {
  let emailDigitado = document.getElementById('email-input-registration').value;
  let listaCaracteres = emailDigitado.split(''); // [...emailDigitado]

  let emailSplit = emailDigitado.split('@');
  
  let possuiArroba = emailSplit.length > 1;

  let dominioEmail = possuiArroba ? emailSplit[1] : '';
  let dominioEmailSplit = dominioEmail.split('.');

  let possuiPontosNoDominio = dominioEmailSplit.length > 1;

  let possuiCaracteresEntrePontos = dominioEmailSplit.every( d => d.length > 1 );

  let comecaComLetra = listaCaracteres.length ? listaCaracteres[0].toUpperCase() !== listaCaracteres[0].toLowerCase() : false;

  let ehValido = possuiArroba && possuiPontosNoDominio && possuiCaracteresEntrePontos && comecaComLetra;

  // para setar o texto de erro em vermelho
  let erroEmail = document.getElementById('email-registration-error');
  erroEmail.setAttribute('class', ehValido ? 'd-none' : 'text-danger');

  return ehValido;
}
//#endregion Validação Email

//#region Validação Senha
const validarSenha = () => {
  let senhaDigitada = document.getElementById('password-input-registration').value;
  let listaCaracteres = senhaDigitada.split('');

  let letras = listaCaracteres.filter( char => char.toLowerCase() !== char.toUpperCase() );

  let possuiLetraMaiuscula = letras.some( l => l.toUpperCase() === l ); // "A".toUppercase() === "A"
  let possuiLetraMinuscula = letras.some( l => l.toLowerCase() === l );

  let possuiCharEspecial = listaCaracteres.some( char => char.toLowerCase() === char.toUpperCase() && isNaN(parseInt(char)) );
  let possuiNumero = listaCaracteres.some( char => char.toLowerCase() === char.toUpperCase() && !isNaN(parseInt(char)) );

  let possuiOitoCaracteres = senhaDigitada.length >= 8;

  let naoPossuiEspacos = !senhaDigitada.includes(' ');

  let ehValido = possuiOitoCaracteres && possuiLetraMaiuscula && possuiLetraMinuscula && 
      possuiCharEspecial && possuiNumero && naoPossuiEspacos;

  // para setar o texto de erro em vermelho
  let erroSenha = document.getElementById('password-registration-error');
  erroSenha.setAttribute('class', ehValido ? 'd-none' : 'text-danger');

  return ehValido;
}
//#endregion Validação Senha

//#region Validação Data
const validarData = () => { 
  let inputData = document.getElementById('date-input-registration');
  let dataDigitada = inputData.value;

  adicionarMascaraData(inputData, dataDigitada);

  let dataConvertida = moment(dataDigitada, 'DDMMYYYY');

  let dezoitoAnosAtras = moment().diff(dataConvertida, 'years') >= 18;

  // comparações de data - date1.isBefore(date2)  /  date1.isAfter(date2)  /  date1.isSameOrBefore(date2)  /  date1.isSameOrAfter(date2)
  let dataAnteriorHoje = dataConvertida.isBefore(moment());

  let ehValido = dataConvertida.isValid() && dataAnteriorHoje && dezoitoAnosAtras && dataDigitada.length === 10; // 10/05/2001

  // para setar o texto de erro em vermelho
  let erroData = document.getElementById('date-registration-error');
  erroData.setAttribute('class', ehValido ? 'd-none' : 'text-danger');

  return ehValido;
}

const adicionarMascaraData = (input, data) => {
  let listaCaracteres = [...data];
  
  let listaFiltrada = listaCaracteres.filter(c => !isNaN(parseInt(c)));
  if(listaFiltrada && listaFiltrada.length) {
      let dataDigitada = listaFiltrada.join('');

      const { length } = dataDigitada;

      switch(length) { 
          case 0: case 1: case 2:
              input.value = dataDigitada; 
              break;
          case 3: case 4:
              input.value = `${dataDigitada.substring(0, 2)}/${dataDigitada.substring(2, 4)}`;
              break;
          default:
              input.value = `${dataDigitada.substring(0, 2)}/${dataDigitada.substring(2, 4)}/${dataDigitada.substring(4, 8)}`;
      }
  }
}
//#endregion Validação Data

//#region validacao nome
const validarNome = () => {
  let nome = document.getElementById('nome-input').value
  nome = nome.replaceAll(' ','')
  const nomeIsValid = [...nome].every(char => char.toUpperCase() !== char.toLowerCase()) //retorna true se estiver tudo ok

  const nomeInvalido = document.getElementById('nome-erro')
  !nomeIsValid ? nomeInvalido.classList.remove('d-none') : nomeInvalido.classList.add('d-none')
  
  return nomeIsValid
}
//#endregion validacao nome
/*
    Seguindo com a implementação do nosso sistema de cadastro de colaboradores...

    Criem as classe-modelo de objeto

    class Colaborador {
        id; (setado automático pelo json-server)
        nome;
        dataNascimento;
        email;
        senha;}

    Necessitamos agora das seguintes funcionalidades:

    - Cadastrar um objeto colaborador (instanciar e salvar com o axios) com as informações dos inputs da tela de cadastro;
    	OBS: salvar o nome do cara no json-server no padrão Title-Case, ex: o cara digitou no input 'tiago silva schmidt' vou salvar no meu db.json => 'Tiago Silva Schmidt';
      - Ao cadastrar um colaborador com sucesso, limpar todos os inputs e "redirecionar" para a página de login;
      - Se houver algum erro colocar o erro no console.log (NÃO pode ser uma mensagem vermelha de erro, o erro tem que estar mapeado);

    - Funcionalidade de login:
    	- Busca todos colaboradores salvos no json-server;
    	- Busca aquele que tenha o email igual ao digitado;
    	- Verifica se a senha dele é igual a senha digitada no input senha;
    	- Se a validação estiver ok, vai para a tela 'home';
        	
    - Na tela home terá somente uma listagem dos colaboradores <li> pode ser só com o texto do nome de cada um;
*/

function primeiraLetraUpper(string){
  let splitado = string.split(" ");
  let maiusculo;
  let novoArray = [];
  for(element of splitado){
      maiusculo = element.charAt(0).toUpperCase()+element.substring(1);
      novoArray.push(maiusculo)
  }
  let finalizado = novoArray.join(" ").toString();
  return finalizado
}

class Colaborador {
  idSistema
  nome
  dataNascimento
  email 
  senha

  constructor(nome, dataNascimento, email, senha){
    this.nome = primeiraLetraUpper(nome)
    this.dataNascimento = dataNascimento
    this.email = email
    this.senha = senha
  }
}
//#region aula 08
const incluirCadastro = (event) => {
  contadorId++
  console.log(contadorId)
  const nomeColaborador = document.getElementById('nome-input').value
  const dataNascimento = document.getElementById('data-input').value
  const email = document.getElementById('email-input').value
  const senha = document.getElementById('senha-input').value
  
  let colaborador = new Colaborador(contadorId, nomeColaborador, dataNascimento, email, senha)

  const listaFuncionarios = document.getElementById('lista-colaboradores')
  const newLi = document.createElement('li')
  newLi.setAttribute('class',FUNCIONARIO_ITEM_CLASS)
  newLi.setAttribute('id',contadorId)
  listaFuncionarios.append(newLi)

  const newDiv1 = document.createElement('div')
  const newDiv2 = document.createElement('div')
  const newDiv3 = document.createElement('div')
  
  //colaborador
  const newp1 = document.createElement('p')
  newp1.textContent='Nome:'
  const newp2 = document.createElement('p')
  newp2.textContent=nomeColaborador
  newp2.setAttribute('id',`nome${contadorId}`)
  
  //nascimento
  const newp3 = document.createElement('p')
  newp3.textContent='Nascimento'
  const newp4 = document.createElement('p')
  newp4.textContent=dataNascimento
  newp4.setAttribute('id',`nasc${contadorId}`)
  
  //email
  const newp5 = document.createElement('p')
  newp5.textContent = 'Email'
  const newp6 = document.createElement('p')
  newp6.textContent=email
  newp6.setAttribute('id',`mail${contadorId}`)

  newLi.append(newDiv1,newDiv2,newDiv3)
  newDiv1.append(newp1, newp2)
  newDiv2.append(newp3, newp4)
  newDiv3.append(newp5, newp6)

  // console.log(colaborador)

  listaColaboradores.push({id: contadorId, nome: nomeColaborador, dataNascimento: dataNascimento, email: email, senha:senha})

  const titulo = document.getElementById('titulo-colab')
  contadorId > 0 ? titulo.textContent=TITULO_COM_FUNCIONARIOS : null
  console.log(listaColaboradores)
}

const listaColaboradoresConsole = (event) => {
  let x = listaColaboradores.length
  console.log(' ------- COLABORADORES CADASTRADOS --------------------')
  for (let i=1;i<=x;i++) {
  let nome = document.getElementById(`nome${i}`).textContent
  console.log('Nome: ', nome)
  }
}

//#endregion aula 08

const resetarCampos = (...campos) => {
  campos.forEach(c => c.value = '');
}

const irPara = (origem, destino) => {
  const elementoOrigigem = document.getElementById(origem)
  const elementoDestino = document.getElementById(destino)

  elementoOrigigem.classList.toggle('d-none')
  elementoOrigigem.classList.toggle('d-flex')
  elementoDestino.classList.toggle('d-none')
  elementoDestino.classList.toggle('d-flex')
}

const validarLogin = () => {
  const emailInput = document.getElementById('email-input-login').value
  const senhaInput = document.getElementById('password-input-login').value

  axios.get('http://localhost:3000/colaboradores').then(
    (resolv) => { 
       const loginOk = resolv.data.find(e => e.email ===emailInput && e.email === senhaInput)
       loginOk ? irPara('login', 'home') : alert('email ou senha inválidos')
      },
    (reject) => {
      console.log('errou')
    })

}

const listarUsuarios = () => {
  // aqui entra lógica de GET para os usuários
  let listUsuarios = document.getElementById('user-list')
  listUsuarios.innerHTML=''

  axios.get('http://localhost:3000/colaboradores').then(
    (resolv) => { 
      console.log(resolv.data)
      for(e of resolv.data) {
        let newLi = document.createElement('li')
        listUsuarios.append(newLi)      
        newLi.textContent = 'Nome: ' + e.nome        
      }
      },
    (reject) => {
      console.log('errou')
    })   
};


const validarCadastro = () => {
  let cadastroValido = validarData() && validarEmail() && validarSenha();
  console.log(`Cadastro ${cadastroValido ? 'válido!' : 'inválido'}`);

  if(cadastroValido) {
    cadastrarUsuario();
  }
}


const excluirColaborador = () => {
  
}

const cadastrarUsuario = () => {

  let nome = document.getElementById('nome-input')
  const dataNascimento = document.getElementById('date-input-registration')
  const email = document.getElementById('email-input-registration')
  const senha = document.getElementById('password-input-registration')

  let colaborador = new Colaborador(nome.value, dataNascimento.value, email.value, senha.value)
  console.log(colaborador)

  axios.post('http://localhost:3000/colaboradores', colaborador).then(
    (resolv) => {
      console.log('ok')
    },
    (reject) => {
      console.log('Errrou')
    }
  )

  nome.value = ''
  dataNascimento.value = ''
  email.value = ''
  senha.value = ''
};
