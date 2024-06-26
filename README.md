# b2bit Auth

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![Typescript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Testing Library](https://img.shields.io/badge/testing%20library-323330?style=for-the-badge&logo=testing-library&logoColor=red)

Bem-vindo(a) ao repositório do b2bit Auth! Este é um projeto desenvolvido como parte de um teste técnico para avaliação na empresa B2Bit. O objetivo principal é criar um sistema de login utilizando ReactJS, TypeScript e diversas outras tecnologias.

https://github.com/josevictorn/b2bit-challenge/assets/71568404/5b7f5934-6fca-4705-bc9c-224bc5a73f3d

## Sumário

- [Visão Geral](#visão-geral)
- [Funcionalidades](#funcionalidades)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Pré-requisitos](#pré-requisitos)
- [Instalação](#instalação)
- [Executando o Projeto](#executando-o-projeto)
- [Executando Testes Unitários](#executando-testes-unitários)
- [Executando Testes E2E](#executando-testes-e2e)
- [Contato](#contato)
- [Autor](#autor)

## Visão Geral

Este projeto foi desenvolvido para demonstrar como criar um sistema de login funcional usando React. Ele inclui:

- Formulário de login.
- Validação de credenciais.
- Integração com uma API backend.
- Tratamento de erros.
- Testes unitários, de integração e E2E.

## Funcionalidades

1. **Design responsivo**: o formulário de login, assim como a página de profile, foram estilizados com Tailwind CSS para proporcionar uma experiência visual agradável em diversos dispositivos.

2. **Validação de credenciais**: utilizando Formik e Yup, asseguramos que os campos do formulário estejam preenchidos corretamente antes de enviar as credenciais para autenticação.
   - Obs.: para validação de formulários, costumava utilizar o React Hook Form em conjunto com o Zod, mas como na descrição do projeto foi indicado o Formik, e que este tem uma integração mais facilitada com o Yup, resolvi aprender essas duas novas ferramentas.

3. **Integração com API**: as credenciais fornecidas são enviadas para uma API e a resposta é recebida utilizando Axios, estabelecendo uma comunicação eficiente entre o front-end e o back-end.

4. **Navegação segura**: utilizamos o React Router Dom para roteamento de páginas públicas e privadas, além de um contexto de autenticação personalizado para garantir que apenas usuários autenticados acessem determinadas páginas.

5. **Tratamento de erros apropriado**: mensagens de erro são exibidas de forma clara e amigável ao usuário através de Toast, utilizando a biblioteca Sonner, proporcionando uma experiência de usuário mais agradável.

6. **Persistência de dados**: utilizamos o localStorage para armazenar o accessToken do usuário, assegurando que o mesmo permaneça autenticado mesmo após recarregar a página.

7. **Testes unitários e de integração**: foram implementados testes unitários e de integração utilizando Vitest e a Testing Library, garantindo a qualidade e robustez do código.

8. **Testes E2E**: além dos testes unitários e de integração, foram realizados testes end-to-end (E2E) utilizando Playwright, para verificar o correto funcionamento do sistema em um ambiente simulado de usuário.


## Tecnologias utilizadas

- React e Typescript para criação de um projeto SPA
- Axios para requisições HTTP
- React Router para navegação
- Tailwind CSS para estilização
- Formik e Yup para validação de formulário
- Vitest para testes unitários e de integração
- Playwright para testes E2E

## Pré-requisitos

Antes de começar, certifique-se de ter as seguintes ferramentas instaladas em sua máquina:

- Node.js (versão 20 ou superior)
- npm (gerenciador de pacotes do Node)

## Instalação

Siga os passos abaixo para configurar o projeto localmente:

1. Clone o repositório:
    ```sh
    git clone https://github.com/josevictorn/b2bit-challenge.git
    ```
2. Navegue até o diretório do projeto:
    ```sh
    cd b2bit-challenge
    ```
3. Instale as dependências:
    ```sh
    npm install
    ```
4. Crie os arquivos ```.env``` e ```.env.test``` seguindo a estrutura dos arquivos ```.env.example``` e ```.env.test.example``` presentes no projeto. Atribua o endereço da sua API à variável ```VITE_API_URL```.

Você pode adicionar o seguinte valor, que é o endereço de uma API real, à variável ```VITE_API_URL``` no arquivo ```.env``` para testar a aplicação:
```.env
VITE_API_URL='https://api.homologation.cliqdrive.com.br'
```
Porém, no arquivo ```.env.test``` siga a estrutura de ```.env.test.example``` e matenha a seguinte configuração:
```.env
VITE_API_URL='/'
```

## Executando o Projeto

Para executar o projeto em modo de desenvolvimento, utilize o seguinte comando:
```sh
npm run dev
```

O aplicativo estará disponível em http://localhost:5173.

Você pode utilizar os seguintes dados de um usuário já cadastrado no sistema para testar a aplicação:
```json
{
    "email": "cliente@youdrive.com",
    "password": "password"
}
```

## Executando Testes Unitários

Para executar os testes unitários, utilize o seguinte comando:
```sh
npm test
```

## Executando Testes E2E

Para executar os testes end-to-end (E2E), siga os seguintes passos:
1. Inicialize o ambiente de teste e deixe-o rodando:
    ```sh
    npm run dev:test
    ```
2. Em outro terminal execute o Playwright:
    ```sh
    npx playwright test
    ```
3. Se lhe for retornardo algum erro você pode tentar reinstalar o Playwright:
   ```sh
    npm init playwright@latest
    ```
   Na instalação, você verá os seguintes prompts:
   ```
    Where to put your end-to-end tests? · tests
    Add a GitHub Actions workflow? (y/N) · false
    Install Playwright browsers (can be done manually via 'npx playwright install')? (Y/n) · true
    C:\b2bit-challenge\playwright.config.ts already exists. Override it? (y/N) » false
    ```

- Você também pode executar os testes no modo de interface do usuário (UI Mode): 
    ```sh
    npx playwright test --ui
    ```
    Será aberto uma nova janela com o ambiente de teste do Playwright. Depois de iniciar o UI Mode, você verá uma lista de todos os arquivos de teste. Você pode executar todos os testes clicando no ícone de triângulo na barra lateral. Ou você também pode executar um único arquivo de teste, um bloco de testes ou um único teste passando o mouse sobre o nome e clicando no triângulo próximo a ele.

## Contato
Para dúvidas ou sugestões, entre em contato através de:

- [Email](mailto:josevictornascimento2016@gmail.com)
- [Linkedin](https://www.linkedin.com/in/jos%C3%A9-victor-nascimento-7983b2230/)

## Autor

Feito com amor por [@josevictorn](https://github.com/josevictorn)

