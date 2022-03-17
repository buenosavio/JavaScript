/*
  Temos o seguinte sistema atualmente (imaginando que temos completo tudo o que foi proposto em aula):

  - um campo data de nascimento (validado e com o texto de data inválida caso assim esteja);
  - um campo email (validado e com o texto de email inválido caso assim esteja);
  - um campo senha (validado e com o texto de senha inválida caso assim esteja);
  - um botão cadastrar que "sabe" se o cadastro está válido ou não;

  
  Agora precisamos:
  (o modelo do html está no arquivo index.html e o modelo visual está em um arquivo page-model.png);

  - adicionar um campo de nome acima da data de nascimento e adicionar a validação para possuir somente letras;
  - criar uma classe Colaborador contendo todas as propriedades que os campos possuem e uma propriedade id;
  - ao clicar em cadastrar, instanciar um colaborador e adicioná-lo à ul e à uma lista de colaboradores;
  - adicionar um botão 'Visualizar Colaboradores' (pode ser no topo da tela à direita) 
    que imprime no console todos os colaboradores cadastrados 
    (ATENÇÃO -> buscar os colaboradores pelo document e não fazer um simples forEach da lista de colaboradores)
*/