const FUNCIONARIO_ITEM_CLASS = ('w-100 mt-2 p-3 d-flex align-items-center justify-content-between')
const TITULO_COM_FUNCIONARIOS = ('Colaboradores')
const TITULO_SEM_FUNCIONARIOS = ('Nenhum colaborador cadastrado ainda')
let contadorId = 0
let listaColaboradores = []

const validarNome = () => {
    let nome = document.getElementById('nome-input').value
    nome = nome.replaceAll(' ','')
    const nomeIsValid = [...nome].every(char => char.toUpperCase() !== char.toLowerCase()) //retorna true se estiver tudo ok

    const nomeInvalido = document.getElementById('nome-erro')
    !nomeIsValid ? nomeInvalido.classList.remove('d-none') : nomeInvalido.classList.add('d-none')
    
    return nomeIsValid
}

const validarEmail = (event) => {
    /* 
        adicionar um eventListener para o evento "onkeyup" do input email-input que terá como ação esta função de validarEmail

        deve validar as seguintes regras:
        1 - obrigatório ter uma letra como primeiro caractér;
        2 - obrigatório possuir um '@';
        3 - obrigatório possuir pelo menos um '.' (ponto) depois do '@' e não podem estar juntos, ex: email@.ig // inválido pois o ponto está junto do arroba;
        4 - não pode terminar com '.' (ponto), ex: "email@pessoal.";
        5 - deve ter pelo menos duas letras depois de um '.' (ponto), ex: "email@pessoal.c" // inválido pois tem somente o 'c' depois do '.';
        6 - deve possuir o domínio 'dbccompany'
        obs: caso o email (value) que está no input for válido/inválido deverá alterar a span com id="email-erro" para fique com um display visível ou invisível (dependendo da situação)
    */

    const input = event ? event.target : document.getElementById('email-input');
    const { value: mail } = input;

    //validar primeira letra
    let firstLetra = mail.substring(0,1)
    firstLetra = firstLetra.toUpperCase() !== firstLetra.toLowerCase()    // retorna true se estiver ok

    //validar exato 1 arroba @
    let arrayMail = [...mail].filter(char=>{return char === '@'})  
    let temUmArroba = arrayMail.length===1                                // retorna true se estiver ok

    //validar ponto após o arroba.  
    let posicaoArroba = [...mail].indexOf('@')   
    let depoisArroba = [...mail].slice(posicaoArroba+1, mail.length)
    let temPontoAposArroba = depoisArroba.includes('.') //deve retornar true

    //um . nao pode estar seguido de @
    let posicaoPonto = [...depoisArroba].indexOf('.')
    posicaoPonto = posicaoPonto > 1 //deve retornar true

    // nao pode terminar com ponto.//pelo menos duas letras depois do ponto.
    let ultimoNotPonto = [...depoisArroba].lastIndexOf('.')+2 < depoisArroba.length //deve retornar true se ficar ok

    //deve possuir o dominio dbccompany
    let dominioOk = depoisArroba.join().replaceAll(',','').includes('dbccompany')

    const ehValido = firstLetra && temUmArroba && temPontoAposArroba && posicaoPonto && ultimoNotPonto && dominioOk;

    const emailInvalido = document.getElementById('email-erro')
    !ehValido ? emailInvalido.classList.remove('d-none') : emailInvalido.classList.add('d-none')

    return ehValido;
}


const validarSenha = (event) => {
    /* 
      adicionar um eventListener para o evento "onkeyup" do input senha-input que terá como ação esta função de validarSenha
      deve validar as seguintes regras:
      1 - obrigatório ter ao menos uma letra minúscula;
      2 - obrigatório ter ao menos uma letra maiúscula;
      3 - obrigatório ter ao menos um número;
      4 - obrigatório ter ao menos um carácter especial;
      5 - obrigatório ter ao menos 8 caractéres;
      6 - a senha não pode conter espaços em branco;

      obs: caso a senha (value) que está no input for válido/inválido deverá alterar a span com id="senha-erro" para fique com um display visível ou invisível (dependendo da situação)
    */
    const input = event ? event.target : document.getElementById('senha-input');
    const { value: senha } = input;

    input.value = input.value.replaceAll(' ', '');

    let caracteresSenha = [...senha];

    let possuiLetraMinuscula = caracteresSenha.some( c => c.toLowerCase() === c);
    let possuiLetraMaiuscula = caracteresSenha.some( c => c.toUpperCase() === c);

    let possuiEspecial = caracteresSenha.some( c => c.toUpperCase() === c.toLowerCase() && isNaN(c));
    let possuiNumero = caracteresSenha.some( c => c.toUpperCase() === c.toLowerCase() && !isNaN(c));

    let peloMenosOito = senha.length >= 8;

    const ehValido = possuiLetraMinuscula && possuiLetraMaiuscula && possuiEspecial && possuiNumero && peloMenosOito;

    const senhaInvalida = document.getElementById('senha-erro')
    !ehValido ? senhaInvalida.classList.remove('d-none') : senhaInvalida.classList.add('d-none')

    return ehValido;
}


const adicionarMascaraData = () => {
  // aqui vamos adicionar uma máscara ao input
    let inputDataBarra = document.getElementById('data-input').value
    inputDataBarra = inputDataBarra.replaceAll('/', '')
    const dia = inputDataBarra.substring(0,2)
    const mes = inputDataBarra.substring(2,4)
    const ano = inputDataBarra.substring(4)
    document.getElementById('data-input').value = `${dia}/${mes}/${ano}`
}


const validarData = (event) => {
    /* 
        adicionar um eventListener para o evento "onkeyup" do input data-input que terá como ação esta função de validarSenha
        deve validar as seguintes regras:
        1 - deve ser uma data válida;
        2 - não pode ser uma data futura;

        3 - deve ser uma data entre 18 e 26 anos; (idade > 18)
        obs: caso o email (value) que está no input for válido/inválido deverá alterar a span com id="data-erro" para fique com um display visível ou invisível (dependendo da situação)
    */

    // recebi e formatei a data
    const inputDate = event ? event.target : document.getElementById('data-input')
    const dataInput = moment(inputDate.value,"DD/MM/YYYY")
    const dataAtual = moment() 

    // // validei a data      
    const dataIsValid = dataInput.isValid() //retorna true se estiver ok

    // //verifiquei se é futura 
    const dataIsAnterior = dataInput.isAfter(dataAtual) //retorna false se estiver ok

    //verifiquei se está entre 18 e 26 anos
    const dataInicial = moment().subtract(26,'years')
    const dataFinal = moment().subtract(18,'years')
    const entreDezoitoAndVinteSeis = dataInput.isBetween(dataInicial, dataFinal) //retorna true se estiver ok

    const ehValido = dataIsValid && !dataIsAnterior && entreDezoitoAndVinteSeis;

    const dataInvalida = document.getElementById('data-erro')
    !ehValido ? dataInvalida.classList.remove('d-none') : dataInvalida.classList.add('d-none')

    return ehValido;
}

const validarCadastro = (event) => {
  event.preventDefault();
  console.log(`Cadastro ${validarNome() && validarData() && validarEmail() && validarSenha() ? 'válido!' : 'inválido'}`);
  const totalmenteValido = validarNome() && validarData() && validarEmail() && validarSenha()
  totalmenteValido ?  incluirCadastro() : null
}

class Colaborador {
    id
    nome
    dataNascimento
    email 
    senha

    constructor(id, nome, dataNascimento, email, senha){
        this.id = id
        this.nome = nome
        this.dataNascimento = dataNascimento
        this.email = email
        this.senha = senha
    }
}

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