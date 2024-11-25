---
title: "Introduction to NestJS: A Progressive Node.js Framework"
description: "Learn how to get started with NestJS, a powerful Node.js framework inspired by Angular that embraces MVC architecture"
pubDate: 2021-04-23
author: "Ferrel John Fernando"
category: "Programming"
series: "NestJS"
image: "/images/posts/1/logo.webp"
---

NestJS is one of many frameworks for Node.js. In this post, I'll share what I'm currently learning about it and walk through setting up your first NestJS project.

## About NestJS

![NestJS Logo](/images/posts/1/logo.webp)

> Nest (NestJS) is a framework for building efficient, scalable [Node.js](https://nodejs.org/) server-side applications.

[NestJS](https://nestjs.com) embraces the MVC (Model, View, Controller) concept. Controllers are responsible for handling incoming requests and returning responses, with a routing mechanism that determines which controller should handle each request. If you're familiar with [Angular](https://angular.io), you'll find NestJS easy to pick up as it was heavily inspired by Angular's architecture.

Under the hood, NestJS uses HTTP Server frameworks like [Express](https://expressjs.com) (the default) and [Fastify](https://www.fastify.io). While NestJS is built with TypeScript, it still allows you to write code in pure JavaScript. The framework combines elements of:

- • OOP (Object Oriented Programming)
- • FP (Functional Programming)
- • FRP (Functional Reactive Programming)

## Installing the Nest CLI

Before installing the Nest CLI, ensure you have [Node.js](https://nodejs.org/en/) installed on your system (minimum version **8.9.0**).

To install the Nest CLI globally, run this command on your terminal:

```
$ npm install -g @nestjs/cli
```

Once it completed, create a new project with the following command:

```
$ nest new my-first-nestjs-app
```

There will be some question “which package manager would you love to use”. In this project, I choose Yarn.

![Choosing package manager](/images/posts/1/choose-package-manager.webp)

After generating project is done, you can open the project using any Text Editor or IDE. Your project structure will look like:

![NestJS Project Structure](/images/posts/1/project-structure.webp)

## Run the project

To run the project, open your terminal to project directory (this is go to default if you open terminal from text editor or IDE) and use command `yarn run start` . If you using NPM, use `npm run start` .

After that, open your browser at [http://localhost:3000/](http://localhost:3000/)

![Result](/images/posts/1/hello-world.webp)

I hope you find this post helpful. We will continue to learn more about NestJS in the next post.
