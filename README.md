# Cypress - User Project

O projeto tem por finalidade validar os cenários propostos para os serviços de um CRUD de usuários.

## Ferramentas:
[Cypress](https://www.npmjs.com/package/cypress "Cypress")

[VSCode](https://code.visualstudio.com/ "VSCode")




### Instruções para execução

Utilizando o terminal, acesse o diretório do projeto e execute o comando para instalara s dependências:


```
npm i
```

### Instruções para executar os testes

Para executar os testes sem interface gráfica utilize o comando:

```
npm run cypress:run 
```
Para executar os testes com a interface gráfica (necessário escolher a suíte) utilize o comando:

```
npm run cypress:open 
```
### Cenários de testes

Criar um usuário válido e confirmar a criação pelo endpoint "Listar todos Usuarios".

Validações:
- Verificar sucesso na criação do usuário;
- Verificar sucesso na pesquisa do usuário criado;
- Verificar se foi atribuido um id ao usuário criado; e
- Verificar se e-mail informado na criação é igual ao do usuário obtido na pesquisa.


Alterar o usúario criado e confirmar a alteração pelo endpoint "Listar um unico Usuario".

Validações:
- Verificar sucesso na alteração do nome do usuário;
- Verificar se o nome do usuário obtido na pesquisa do usuário é igual ao nome informado na alteração; e
- Verificar se data de criação é diferente da data de alteração.


Deletar o usúario criado e confirmar a exclusão pelo endpoint "Listar todos Usuario".

Validações:
- Verificar sucesso na exclusão do usuário;
- Verificar sucesso na pesquisa do usuário;
- Verificar se o atributo total é igual a 0; e
- Verificar se o atributo data está vazio.
