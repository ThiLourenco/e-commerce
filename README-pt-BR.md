<p align="center">
<a href=https://github.com/ThiLourenco/e-commerce target="_blank">
<img src='./public/store_2.png' width="100%" alt="Store 88 Home"/>
</a>
</p>


<p align="center">
<img src="https://img.shields.io/github/contributors/ThiLourenco/e-commerce" alt="GitHub contributors" />
<img src="https://img.shields.io/github/discussions/ThiLourenco/e-commerce" alt="GitHub discussions" />
<img src="https://img.shields.io/github/issues/ThiLourenco/e-commerce" alt="GitHub issues" />
<img src="https://img.shields.io/github/issues-pr/ThiLourenco/e-commerce" alt="GitHub pull request" />
</p>

*Este readme também pode ser lido em [Português](README-pt-BR.md) ou [Inglês](README.md).*

## ☁️ Implantação

Você pode acessá-lo através deste link <a href=https://e-commerce-thilourenco.vercel.app/ target="_blank">Store 88</a>.


## 📌 Projeto

O projeto e-commerce é um exemplo concreto do meu trabalho em desenvolvimento web, demonstrando as minhas competências e conhecimentos. Este aplicativo representa uma solução completa para compras online, abrangendo desde a experiência do cliente até a administração do produto.

## 🔍 Índice

* [💻 Tecnologias](#Tecnologias)

* [📝 Resumo do Projeto](#project-summary)

* [⚙️ Configurando](#setting-up)

* [🚀 Execute localmente](#run-locally)

* [📄 Licença](#license)

## 💻 Tecnologias

Este projeto faz uso de uma pilha de tecnologia moderna e essencial, incluindo:

- [next-sanity](https://github.com/vercel/next.js/tree/canary/examples/with-sanity): Integração entre Next.js e Sanity CMS.
- [react-hook-form](https://react-hook-form.com/): Biblioteca para construção de formulários com React, fornecendo validação e manipulação de formulários.
- [sanity/client](https://www.sanity.io/docs/client-libraries): Biblioteca cliente oficial do Sanity para JavaScript.
- [stripe/stripe-js](https://stripe.com/docs/stripe-js): Biblioteca JavaScript para interagir com a API Stripe.
- [typescript](https://www.typescriptlang.org/): Um superconjunto de ferramentas e formas mais eficientes de escrever código JavaScript.
- [zod](https://github.com/colinhacks/zod): Biblioteca de validação de esquema TypeScript-first..
- [next](https://nextjs.org/): Framework para aplicações React renderizados em servidor.
- [next-auth](https://next-auth.js.org/): Uma biblioteca de autenticação que simplifica a gestão de sessões e garante a segurança dos usuários em aplicativos Next.js.
- [react](https://reactjs.org/): Biblioteca JavaScript para construção de interfaces de usuário.
- [react-dom](https://reactjs.org/docs/react-dom.html): Ponto de entrada para o DOM e renderizadores de servidor para React.
- [tailwindcss](https://tailwindcss.com/): Um framework CSS utilitário que acelera o desenvolvimento de interfaces de usuário com estilos consistentes.
- [prisma/client](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client): Cliente Prisma para acesso a banco de dados e ORM.
- [nodemailer](https://nodemailer.com): Nodemailer é um módulo para aplicativos Node.js que permite o envio de e-mail com facilidade.
- *E muitas outras:* Além disso, tecnologias como [shadcn](https://ui.shadcn.com/), [Radix UI](https://www.radix-ui.com/) e [React Email](https://react.email/) para criar uma experiência completa e robusta.


## 📝 Estrutura do Projeto

- [app](app): Este é o diretório principal da aplicação, onde você encontrará as páginas e componentes que compõem o aplicativo.
- [app/api](app/api): Oferece endpoints para funções essenciais, como autenticação, gerenciamento de carrinho de compras, registro de usuários e muito mais..
- [app/cart](app/cart): Lida com funcionalidades relacionadas ao carrinho de compras do usuário.
- [app/dashboard](app/dashboard): Aqui estão os componentes e páginas relacionados ao painel de administração, permitindo a gestão eficiente de produtos e pedidos.
- [app/products](app/products): Gerencia funcionalidades relacionadas à exibição e gerenciamento de produtos.
- [components](components): Componentes de UI reutilizáveis ​​usados ​​em todo o aplicativo.
- [config](config): Diretório para arquivos de configuração do projeto.
- [prisma](prisma): Contém esquema de banco de dados e arquivos de migração.
- [public](public): Diretório para ativos estáticos e arquivos públicos.
- [sanity](sanity): Lida com o gerenciamento de conteúdo usando Sanity CMS.


## 📝 Características

<b>Recursos de produtos</b>

| Características  |  Verificado?       | Descrição  |
|----------|:-------------:|:-------------|
| Adicionar um produto | &#10004; | Capacidade de adicionar um produto ao sistema |
| Listar produtos | &#10004; | Capacidade de listar produtos |
| Editar um produto | &#10004; | Capacidade de editar um produto |
| Excluir um produto | &#10004; | Capacidade de excluir um produto |

<b>Recursos de compra</b>

| Características  |  Verificado?       | Descrição  |
|----------|:-------------:|:-------------|
| Crie um carrinho | &#10004; | Capacidade de criar um novo carrinho |
| Veja carrinho | &#10004; | Capacidade de ver o carrinho e seus itens |
| Remover um carrinho | &#10004; | Capacidade de remover um carrinho |
| Adicionar item | &#10004; | Capacidade de adicionar um novo item ao carrinho |
| Remover um item | &#10004; | Capacidade de remover um item do carrinho |
| Finalizar compra | &#10004; | Capacidade de finalizar a compra |

<b>Recursos de Usuário</b>

| Características  |  Verificado?       | Descrição  |
|----------|:-------------:|:-------------|
| Crie um usuário | &#10004; | Capacidade de criar um novo usuário |
| Login do usuário | &#10004; | Capacidade de fazer login |
| Logoff do usuário | &#10004; | Capacidade de fazer logoff |
| Recuperação de senha | &#10004; | Capacidade de recuperar uma senha de usuário |


## 🗺️ Roteiro

- [X] **Tarefa #1:** página com lista de pedidos com rota privada.
- [X] **Tarefa #2:** fluxo de autenticação.
- [ ] **Tarefa #3:** criar um histórico de compras do usuário da loja, persistindo no banco de dados.
- [ ] **Tarefa #4:** enviar informações do pedido por e-mail após a compra.
- carregando...

## ⚙️ Configurando

*.env.example*

```bash
# Sanity Settings
NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET=
NEXT_PUBLIC_SANITY_API_VERSION=
NEXT_PUBLIC_SANITY_USE_CDN=
NEXT_PUBLIC_SANITY_TOKEN=

# Stripe API Key
NEXT_PUBLIC_STRIPE_PUBLIC_KEY=
STRIPE_SECRET_KEY=

# Prisma Database URL
DATABASE_URL=

# NextAuth
NEXT_PUBLIC_SECRET=
NEXTAUTH_URL=

# Google Provider
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=

# E-mail Provider (Nodemailer)
EMAIL_MAIL=
EMAIL_PASSWORD=

# Production Nodemailer
NODEMAILER_DOMAIN=
DOMAIN=
```

## 🚀 Execute localmente

Você deve ter o seguinte instalado em sua máquina para executar este projeto:

- [Node.js](https://nodejs.org/en/): Version >= 17
- Gerenciador de pacotes: ([Npm](https://www.npmjs.com/) ou [pNPM](https://pnpm.io/pt/)) ou outros...


1.Clone o repositório e-commerce :
```sh
git clone https://github.com/ThiLourenco/e-commerce
```
2.Instale as dependências com um dos gerenciadores de pacotes listados abaixo:
```bash
pnpm install
npm install

```
3.Inicie o modo de desenvolvimento:
```bash
pnpm dev
npm run dev

```

## 🙌 Contribuidores
<a href="https://github.com/ThiLourenco/e-commerce/graphs/contributors">
<img src="https://contrib.rocks/image?repo=ThiLourenco/e-commerce" />
</a>


## 📄 Licença

Este projeto está licenciado sob o **MIT License** - veja o arquivo [**MIT License**](https://github.com/ThiLourenco/e-commerce/blob/main/LICENSE) para mais detalhes.

