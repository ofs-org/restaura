<div align="center">

## 🍽️ Restaura – Landing Page para Restaurantes Modernos

<!-- Banner -->

![Restaura – Experiência Gastronômica Digital](https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&fit=crop "Restaura – Experiência Gastronômica Digital")

<div align="left">

[![React](https://img.shields.io/badge/React-19.0.0-61DAFB?style=plastic&logo=react&logoColor=000000)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-6.3.1-B73BFE?style=plastic&logo=vite&logoColor=FFD62E)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.1.5-0EA5E9?style=plastic&logo=tailwindcss&logoColor=FFFFFF)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer%20Motion-12.15.0-0055FF?style=plastic&logo=framer&logoColor=FFFFFF)](https://www.framer.com/motion/)
[![React Icons](https://img.shields.io/badge/React%20Icons-5.5.0-20232A?style=plastic&logo=react&logoColor=61DAFB)](https://react-icons.github.io/react-icons/)[![ESLint](https://img.shields.io/badge/ESLint-9.22.0-4B32C3?style=plastic&logo=eslint&logoColor=FFFFFF)](https://eslint.org/)
[![Prettier](https://img.shields.io/badge/Prettier-3.5.3-F7B93E?style=plastic&logo=prettier&logoColor=000000)](https://prettier.io/)

</div>

<!-- Badges de GitHub (stars e fork) -->

[![GitHub Repo stars](https://img.shields.io/github/stars/ofs-org/restaura?style=plastic&logo=github&logoColor=FFFFFF&label=Stars&color=24292F)](https://github.com/ofs-org/restaura/stargazers)
[![GitHub Forks](https://img.shields.io/github/forks/ofs-org/restaura?style=plastic&logo=github&logoColor=FFFFFF&label=Fork&color=0D9488)](https://github.com/ofs-org/restaura/fork)

**Restaura** é uma landing page moderna e responsiva para restaurantes, cafés e negócios gastronômicos que desejam apresentar seu cardápio, missão, avaliações de clientes e informações de contato de forma elegante e envolvente.

</div>

<div align="left">

<!-- Menu com ícones representando os tópicos -->

`Menu`

[🏠 Início](#-restaura--landing-page-para-restaurantes-modernos) <br>
[ℹ️ Sobre](#-sobre) <br>
[🧩 Tecnologias](#-tecnologias) <br>
[✨ Funcionalidades](#-funcionalidades) <br>
[🗂️ Arquitetura de dados](#-arquitetura-de-dados) <br>
[📁 Estrutura do projeto](#-estrutura-do-projeto) <br>
[⚙️ Configuração](#-configuração) <br>
[📜 Scripts disponíveis](#-scripts-disponíveis) <br>
[🛣️ Rotas](#-rotas) <br>
[🤝 Contribuidores - proprietário](#-contributors-or-owners) <br>
[📞 Contato](#-contact) <br>
[📄 Licença](#-license)

</div>

---

### 📌 Sobre

O **Restaura** é uma aplicação front-end criada como landing page para um restaurante fictício, com foco em **apresentar o cardápio**, **equipe**, **missão**, **ambiente** e **formas de contato** de forma visualmente atrativa e responsiva.  
O objetivo principal é **demonstrar boas práticas de UI/UX com React + Vite + TailwindCSS**, fornecendo uma base que pode ser facilmente adaptada para restaurantes reais ou outros negócios do ramo alimentício.

---

### 🧩 Tecnologias

- **React (19.0.0)**  
  Biblioteca JavaScript para construção de interfaces de usuário baseadas em componentes.

- **Vite (6.3.1)**  
  Ferramenta de build e dev server extremamente rápido para projetos modernos em React.

- **TailwindCSS (4.1.5)**  
  Framework CSS utilitário para criação rápida de interfaces responsivas e personalizáveis.

- **Framer Motion (12.15.0)**  
  Biblioteca de animações para React, utilizada para transições suaves e elementos animados na página.

- **React Icons (5.5.0)**  
  Coleção de ícones populares para React, utilizada para ícones de seções, redes sociais e navegação.

- **ESLint (9.22.0)**  
  Ferramenta de linting para manter a qualidade e padronização do código.

- **Prettier (3.5.3)**  
  Formatador de código para manter um estilo consistente em todo o projeto.

---

### ✨ Funcionalidades

- **Seção Hero / Banner principal**  
  Apresenta o nome do restaurante, com um vídeo de fundo.

- **Seção de Pratos em Destaque**  
  Lista de pratos com imagens e descrições, utilizando o componente `DishCard`.

- **Seção de Missão / Sobre o Restaurante**  
  Explica a proposta de valor, conceito e diferenciais do restaurante.

- **Seção de Expertise / Especialidades**  
  Mostra os tipos de culinária, técnicas ou especialidades do restaurante.

- **Seção de Avaliações (Reviews)**  
  Fotos de clientes que reforçam a credibilidade do estabelecimento.

- **Seção de Contato**  
  Informações de endereço, telefone, redes sociais e formas de contato.

- **Footer informativo**  
  Rodapé com créditos, direitos autorais e links importantes.

---

### 🗂️ Arquitetura de dados

Esta seção documenta como os dados são gerenciados na aplicação.

**Fonte de Dados**

Atualmente, o projeto utiliza **dados locais** definidos em `src/utils/data.js`, representando pratos, depoimentos, seções de conteúdo e demais informações exibidas na interface.  
Essa abordagem facilita a prototipação e pode ser posteriormente substituída por uma API real.

> Caso seja necessário integrar com uma API real.

---

### 📁 Estrutura do Projeto

```txt
src/
├── assets/                 # Imagens, ícones e recursos estáticos
├── components/             # Componentes reutilizáveis da interface
│   ├── NavBar.jsx          # Navegação principal do site
│   ├── HeroSection.jsx     # Seção hero / banner inicial
│   ├── Dishes.jsx          # Lista de pratos em destaque
│   ├── DishCard.jsx        # Card individual de prato
│   ├── Expertise.jsx       # Seção de especialidades / expertise
│   ├── Mission.jsx         # Seção de missão / sobre o restaurante
│   ├── Review.jsx          # Depoimentos / avaliações de clientes
│   ├── ContactSection.jsx  # Seção de contato e informações
│   ├── Footer.jsx          # Rodapé do site
│   └── ...                 # Outros componentes auxiliares
├── utils/
│   └── data.js             # Dados mockados usados pela interface
├── index.css               # Estilos globais e integração com TailwindCSS
├── App.jsx                 # Composição principal da página
└── main.jsx                # Ponto de entrada da aplicação React + Vite
```

---

### ⚙️ Configuração

Siga os passos abaixo para clonar e executar o projeto localmente.

```bash
# 1. Clone o repositório
git clone git@github.com:ofs-org/restaura.git

# 2. Acesse a pasta do projeto
cd restaura

# 3. Instale as dependências
npm install

# 4. Inicie o servidor de desenvolvimento
npm run dev

# 5. Acesse no navegador (endereço padrão do Vite)
http://localhost:5173
```

---

### 📜 Scripts disponíveis

Os scripts configurados em `package.json` são:

- **`npm run dev`**  
  Inicia o servidor de desenvolvimento Vite.

- **`npm run build`**  
  Gera a versão de produção da aplicação.

- **`npm run preview`**  
  Executa localmente a build de produção para pré-visualização.

- **`npm run lint`**  
  Roda o ESLint em todo o projeto para verificar problemas de código.

---

### 🛣️ Rotas

Este projeto é uma **single page application** simples construída com React e Vite, sem uso de `react-router-dom`.  
Todas as seções (Hero, Sobre, Pratos, Avaliações, Contato, etc.) são renderizadas dentro da mesma página principal (`App.jsx`), com navegação feita via **links de âncora** na `NavBar`.

---

## ✅ Contributors or owners

<img height="64px" src="https://res.cloudinary.com/delo0gvyb/image/upload/v1752287431/profile_mjvmdb.png"><br>
<small>Emmanuel Oliveira</small>
developed by 💖 [Emmanuel Oliveira](https://www.linkedin.com/feed/?trk=homepage-basic_sign-in-submit)<br>
&copy; Todos os Direitos Reservados

---

### ✅ Contribute to the projects

> Clique na seta abaixo e veja como você pode contribuir para o projeto

 <details close>
 <summary>Como fazer uma contribuição ao Projeto ?</summary>

Familiarize-se com a documentação do projeto, que geralmente inclui guias de instalação.<br>
Explore o código do projeto para entender sua estrutura e funcionamento.
<br>

**Faça um Fork**

Crie uma cópia (fork) do repositório original em sua conta do GitHub.<br>

 <img alt="Static Badge" src="https://img.shields.io/badge/-path?style=social&logo=git&label=GitHub%20Docs&color=%23000">
 <a href="https://docs.github.com/pt/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo"></a>

**Clone o Repositório**

Isso criará uma cópia local do projeto, onde você poderá fazer suas modificações.

 <img alt="Static Badge" src="https://img.shields.io/badge/-path?style=social&logo=git&label=GitHub%20Docs&color=%23000">
 <a href="https://docs.github.com/pt/repositories/creating-and-managing-repositories/cloning-a-repository"></a>

**Crie uma Nova Branch:**

Crie uma nova branch para isolar suas alterações.<br>
Isso facilita a organização do seu trabalho e a criação de pull requests.<br>

**Faça as Alterações:**

Crie funcionalidades, mude estilos ou resolva `bugs` que irão contribuir para a melhoria do Projeto.<br>

**Crie um Pull Request:**

Inclua uma descrição clara das suas alterações e explique como elas resolvem o problema ou melhoram o projeto.<br>
Solicitação: Envie um pull request para o repositório original, solicitando que suas alterações sejam incorporadas ao projeto.

 <br>

**Revise e Responda a Feedback:**

Colabore: Os mantenedores do projeto podem solicitar alterações ou fornecer feedback sobre o seu código.

 </details>

---

## 📞 Contact

[![Lindekin](https://img.shields.io/badge/--path?style=social&logo=Linkedin&logoColor=%230664C1&logoSize=auto&label=Linkedin&labelColor=%23fff&cacheSeconds=https%3A%2F%2Fwww.linkedin.com%2Fin%2Femmanuel-marcos-oliveira%2F)](https://www.linkedin.com/in/emmanuel-marcos-oliveira/)
[![WhatsApp](https://img.shields.io/badge/--path?style=social&logo=WhatsApp&logoColor=%231F3833&logoSize=auto&label=WhatsApp&color=%23fff&cacheSeconds=https%3A%2F%2Fwa.me%2F5511968336094)](https://wa.me/5511968336094)
<a href="mailto:ofs.dev.br@gmail.com"><img alt="Static Badge" src="https://img.shields.io/badge/--path?style=social&logo=Gmail&logoSize=auto&label=Gmail&cacheSeconds=--query&link=mailto%3Adev-oliveira%40outlook.com.br%22"> </a>

- [x] <sub>😁Obrigado por chegar até aqui!<sub>

---

## 📄 License

![Static Badge](https://img.shields.io/badge/--path?style=plastic&logo=mit&logoSize=auto&label=license%20MIT&labelColor=%23555555&color=%2397CA00)<br>

Released in 2026 – This project is under the **MIT license**.<br>
<br>

<div align="center">
<strong>⭐ Se este projeto foi útil para você, considere dar uma estrela!</strong>
</div>
