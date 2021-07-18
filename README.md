# Navedex

## Stack
Esse é um projeto de Frontend Web feito utilizando ReactJS, HTML e CSS; 
e como gerenciador de pacotes do NodeJS o npm. Os arquivos estão divididos
entre `components`(Header, NaveCard e outros) e as `pages` que são as 
páginas em si do projeto. 

## Sobre

O sistema consiste em uma web app para visualização e criação dos navers, 
possuindo informações como: nomes, idades, cargos, tempo de empresa e 
projetos que participou.

- Página de Login

Possui uma autenticação, onde o usuário só poderá acessar as telas internas 
do sistema (HomePage, formulários) passando pela tela de login com as 
credenciais já criadas.
Ao fazer o login, o usuário será redirecionado para a página HomePage.

- HomePage

A página inicial da aplicação possui um header com a opção para o usuário 
deslogar da aplicação, também terá uma lista em cards dos navers, ao clicar 
em algum card, um modal exibirá as informações completas do mesmo, e 
também as opções de excluir ou editar o naver.
Caso o usuário exclua algum naver, um modal aparecerá solicitando a
confirmação da exclusão do naver.
Caso o usuário deseja editar as informações do naver, ele será redirecionado
para a página EditNave.
A página possui um botão Adicionar naver que redicionará o usuário para 
página de criação de um naver.

- CreateNave

A página CreateNave possui o header e o formulário que o usuário poderá 
criar um novo naver, passando informações como nome, cargo, data de 
nascimento, data de admissão, projetos que participou e Url da foto.
Ao finalizar a criação do naver, um modal de confirmação da criação do
naver será exibido.

- EditNave

A página EditNave possui o header e também o formulário que o usuário 
poderá editar as informações de algum naver existente, passando 
informações de nome, cargo, data de nascimento, data de admissão, projetos 
que participou e Url da foto.
Ao finalizar a edição do naver, um modal de confirmação da atualização do
naver será exibido.

Há integrações com APIs externas. Bibliotecas: axios, styled-components, 
material-ui e moment.

## Instruções para rodar
Por ser um projeto com ReactJS, há a necessidade do NodeJS. Com ele em 
sua máquina, basta abrir o terminal e navegar até o repositório clonado e 
rodar:

1. `npm install` para instalar todas as dependências;
1. `npm run start` para rodar localmente o projeto

### Link para visualização da página

 - http://waiting-clouds.surge.sh/
 
Email de acesso: `marcos@dev.com.br`
senha: `testenave`
