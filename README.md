**Estudos em React e Props com API Fake em JSON**

Bem-vindo ao meu projeto de estudos em React, focado em entender o conceito de "props" (propriedades) e como integrar dados de uma API falsa em formato JSON. Neste projeto, vamos explorar como passar dados de um componente pai para um componente filho usando props, bem como simular uma conexão com uma API JSON para obter dados dinâmicos.

## Objetivo

O objetivo deste projeto é proporcionar um entendimento sólido sobre:

- O que são props em React e como usá-las para passar dados de um componente pai para um componente filho.
- Como simular uma API em formato JSON para obter dados dinâmicos para seu aplicativo React.
- Estruturação básica de um aplicativo React.
- Integração de componentes e organização de código.

## Pré-requisitos

Antes de iniciar, certifique-se de ter o seguinte instalado:

- Node.js e npm (ou yarn)

## Configuração do Projeto

1. Clone este repositório para o seu ambiente local:

   ```bash
   git clone  https://github.com/benetesla/xfake.git
   ```

2. Navegue para o diretório do projeto:

   ```bash
   cd nome-do-repositorio
   ```

3. Instale as dependências do projeto:

   ```bash
   npm install
   ```

## Executando o Projeto

1. Inicie o servidor de desenvolvimento:

   ```bash
   npm start
   ```

2. Abra o navegador e acesse [http://localhost:3000](http://localhost:3000) para visualizar o aplicativo.

## Conteúdo do Projeto

O projeto consiste em:

- Um componente `Livro` que recebe dados do pai através de props.
- Um componente `LivrosList` que simula a obtenção de dados de uma API em formato JSON (api/livros.json) e renderiza uma lista de livros usando o componente `Livro`.
- Componentes `App`, `TabelaHead`, `TableFooter` e `TableBody` para compor a estrutura da tabela de livros.

## API Fake em JSON

O arquivo `api/livros.json` contém dados fictícios de livros em formato JSON. Esses dados serão usados para simular a obtenção de dados de uma API externa.

## Aprendizado

Ao explorar este projeto, você estará se aprofundando em:

- Passagem de props de componentes pai para componentes filhos.
- Estruturação e organização básica de componentes em um aplicativo React.
- Simulação de obtenção de dados de uma API em formato JSON.
- Manipulação de dados dinâmicos para renderização de componentes.

## Contribuições

Contribuições são bem-vindas! Se você tiver melhorias, sugestões ou correções, sinta-se à vontade para criar um pull request ou abrir uma issue neste repositório.

Espero que este projeto de estudos seja útil para você aprender sobre React e o uso de props com uma API fake em JSON. Divirta-se explorando e aprendendo!
