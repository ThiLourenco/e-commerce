<p align="center">
<a href=https://github.com/ThiLourenco/e-commerce target="_blank">
<img src='./public/store_2.png' width="100%" alt="Banner" />
</a>
</p>


<p align="center">
<img src="https://img.shields.io/github/contributors/ThiLourenco/e-commerce" alt="GitHub contributors" />
<img src="https://img.shields.io/github/discussions/ThiLourenco/e-commerce" alt="GitHub discussions" />
<img src="https://img.shields.io/github/issues/ThiLourenco/e-commerce" alt="GitHub issues" />
<img src="https://img.shields.io/github/issues-pr/ThiLourenco/e-commerce" alt="GitHub pull request" />
</p>

*This readme can also be read in [Brazilian Portuguese](README-pt-BR.md) or [English](README.md).*

## ☁️ Deploy

You can access it through this link <a href=https://e-commerce-thilourenco.vercel.app/ target="_blank">Store 88</a>


## 📌 Project

The e-commerce project is a concrete example of my work in web development, demonstrating my skills and knowledge. This application represents a complete solution for online shopping, covering everything from the customer experience to product administration.

## 🔍 Table of Contents

* [💻 Stack](#stack)

* [📝 Project Summary](#project-summary)

* [⚙️ Setting Up](#setting-up)

* [🚀 Run Locally](#run-locally)

* [📄 License](#license)

## 💻 Stack

This project makes use of a modern and essential technology stack, including:

- [next-sanity](https://github.com/vercel/next.js/tree/canary/examples/with-sanity): Integration between Next.js and Sanity CMS.
- [react-hook-form](https://react-hook-form.com/): Library for building forms with React, providing form validation and handling.
- [sanity/client](https://www.sanity.io/docs/client-libraries): Official Sanity client library for JavaScript.
- [stripe/stripe-js](https://stripe.com/docs/stripe-js): JavaScript library for interacting with the Stripe API.
- [typescript](https://www.typescriptlang.org/): A typed superset of JavaScript that compiles to plain JavaScript.
- [zod](https://github.com/colinhacks/zod): TypeScript-first schema validation library.

- [next](https://nextjs.org/): Framework for server-rendered React applications.
- [next-auth](https://next-auth.js.org/): Authentication library that simplifies session management and ensures user security in Next.js applications.
- [react](https://reactjs.org/): JavaScript library for building user interfaces.
- [react-dom](https://reactjs.org/docs/react-dom.html): Entry point to the DOM and server renderers for React.
- [tailwindcss](https://tailwindcss.com/): A utility CSS framework that accelerates the development of user interfaces with consistent styles.
- [prisma/client](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client): Prisma client for database access and ORM.
- [nodemailer](https://nodemailer.com): Nodemailer is a module for Node.js applications to allow easy as cake email sending.

- *And many others:* Additionally, technologies such as [shadcn](https://ui.shadcn.com/), [Radix UI](https://www.radix-ui.com/) and [React Email](https://react.email/) to create a complete and robust experience.

## 📝 Project Summary

- [app](app): Main application directory containing various pages and components.
- [app/api](app/api): Directory for API endpoints related to authentication, cart, user registration, etc.
- [app/cart](app/cart): Handles functionality related to the user's shopping cart.
- [app/dashboard](app/dashboard): Contains components and pages related to the admin dashboard.
- [app/products](app/products): Manages functionality related to displaying and managing products.
- [components](components): Reusable UI components used throughout the application.
- [config](config): Directory for project configuration files.
- [prisma](prisma): Contains database schema and migration files.
- [public](public): Directory for static assets and public files.
- [sanity](sanity): Handles content management using Sanity CMS.


## 📝 Features

<b>Products Features</b>

| Feature  |  Check?       | Description  |
|----------|:-------------:|:-------------|
| Add a Product | &#10004; | Ability of Add a Product on the System |
| List Products | &#10004; | Ability of List Products |
| Edit a Product | &#10004; | Ability of Edit a Product |
| Delete a Product | &#10004; | Ability of Delete a Product |

<b>Purchase Features</b>

| Feature  |  Check?       | Description  |
|----------|:-------------:|:-------------|
| Create a Cart | &#10004; | Ability of Create a new Cart |
| See Cart | &#10004; | Ability to see the Cart and it items |
| Remove a Cart | &#10004; | Ability of Remove a Cart |
| Add Item | &#10004; | Ability of add a new Item on the Cart |
| Remove a Item | &#10004; | Ability of Remove a Item from the Cart |
| Checkout | &#10004; | Ability to Checkout |

<b>User Features</b>

| Feature  |  Check?       | Description  |
|----------|:-------------:|:-------------|
| Create a User | &#10004; | Ability of Create a new User |
| User Login | &#10004; | Ability to Login |
| User Logoff | &#10004; | Ability to Logoff |
| Password Recovery | &#10004; | Ability to recover a User Password |


## 🗺️ Roadmap

- [X] **Task #1:** page with list of orders with private route.
- [X] **Task #2:** authentication flow.
- [   ] **Task #3:** creating a store user's purchase history, persisting in the database.
- [   ] **Task #4:** email order information after purchase.
- more others...

## ⚙️ Setting Up

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

## 🚀 Run Locally

You must have the following installed on your machine to run this project:

- [Node.js](https://nodejs.org/en/): Version >= 17
- Package Manager: ([Npm](https://www.npmjs.com/) or [pNPM](https://pnpm.io/pt/)) or others...


1.Clone the e-commerce repository:
```sh
git clone https://github.com/ThiLourenco/e-commerce
```
2.Install the dependencies with one of the package managers listed below:
```bash
pnpm install
npm install

```
3.Start the development mode:
```bash
pnpm dev
npm run dev

```

## 🙌 Contributors
<a href="https://github.com/ThiLourenco/e-commerce/graphs/contributors">
<img src="https://contrib.rocks/image?repo=ThiLourenco/e-commerce" />
</a>


## 📄 License

This project is licensed under the **MIT License** - see the [**MIT License**](https://github.com/ThiLourenco/e-commerce/blob/main/LICENSE) file for details.

