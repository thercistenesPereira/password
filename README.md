# SecurePass - Gerenciador de Senhas
![Static Badge](https://img.shields.io/badge/thercistenes-secure%20pass-purple)
![GitHub License](https://img.shields.io/github/license/thercistenesPereira/password)

## Visão Geral
O SecurePass é um gerenciador de senhas baseado na web que ajuda você a organizar e armazenar suas credenciais de login de forma segura para vários serviços. Esta aplicação permite que você armazene nomes de serviços, logins, senhas e URLs associados de maneira organizada.

## Recursos
- **Adicionar e Gerenciar Serviços**: Adicione facilmente novos serviços com credenciais de login e URLs correspondentes.
- **Validação de Senhas**: A aplicação impõe políticas de senhas fortes, incluindo requisitos de comprimento mínimo e máximo, alfanuméricos e inclusão de caracteres especiais.
- **Indicadores de Força de Senha**: Indicadores visuais no formulário fornecem feedback em tempo real sobre a força da senha, facilitando a criação de senhas seguras.
- **Excluir Serviços**: Remova serviços do gerenciador de senhas quando não forem mais necessários.

## Como Começar
### Pré-requisitos
- Node.js instalado em sua máquina
- npm (Node Package Manager) ou yarn

### Instalação
1. Clone o repositório em sua máquina local:

```
git clone git@github.com:thercistenesPereira/password.git
```
2. Navegue até o diretório do projeto:
```
cd password
```
3. Instale as dependências:
```
npm install
```
ou
```
yarn install
```
### Use
1. Adicionar um Novo Serviço:
- Clique no botão "Cadastrar nova senha".
- Insira o nome do serviço, login, senha e URL.
- Certifique-se de que a senha atenda aos critérios especificados.
- Clique em "Cadastrar" para salvar o novo serviço.
  
2. Ver e Excluir Serviços:
- Os serviços existentes são exibidos na página principal.
- Clique em um serviço para ver seus detalhes.
- Clique no botão "Remover Serviço" para excluir um serviço.

3. Validação de Senhas:
- A força da senha é indicada visualmente com feedback codificado por cores.
- Certifique-se de que a senha atenda aos critérios especificados para comprimento, caracteres alfanuméricos e caracteres especiais.

4. Cancelar Adição de Novo Serviço:
- Clique no botão "Cancelar" para sair do formulário sem salvar.

### Estilo e Temas
A aplicação usa SASS para estilização, e você pode personalizar as variáveis de estilização modificando o arquivo de variáveis.

### Contribuições
Se você deseja contribuir para este projeto, siga as diretrizes de contribuição.

Licença
Este projeto está licenciado sob a Licença MIT.
