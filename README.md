<h1 align="center">
  <img src="https://github.com/user-attachments/assets/73372471-c136-4b7c-97d5-842b593c2df0" alt="Proffy" title="Proffy" />
</h1>

<p align="center">
  <a href="#trophy-lessons-learned">Lessons Learned</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#rocket-technologies--resources">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#hammer-setting-up-the-environment">Environment Setup</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#zap-features-implementations">Features</a>
</p>

<p align="center">
  <img src="https://img.shields.io/static/v1?labelColor=000000&color=8257E5&label=created%20at&message=Jun%202020" alt="Creation Date" />

  <img src="https://img.shields.io/github/last-commit/juliolmuller/proffy?label=updated%20at&labelColor=000000&color=8257E5" alt="Update Date" />

  <img src="https://img.shields.io/static/v1?labelColor=000000&color=8257E5&label=PRs&message=welcome" alt="Pull Requests Welcome" />

  <img src="https://img.shields.io/github/license/juliolmuller/proffy?labelColor=000000&color=8257E5" alt="Project License" />
</p>

<br />
<p align="center">
  <img src="https://github.com/user-attachments/assets/96a4ea3b-8ede-461d-b9b4-edaf4f4106a3" alt="Application Overview" width="100%">
</p>
<br />

Application developed during the second edition of the [Next Level Week](https://nextlevelweek.com/), promoted by [RocketSeat](https://rocketseat.com.br/). The objective is to build a multi-platform application to connect people that want to study and share knowledge - teachers and students. The event chose the JavaScript stack to be used all over the implementation, using **React** in web version, **React Native** in mobile and **Node.js** as the REST API server.

[Check out the application running!](https://jlm-proffy.vercel.app/)

## :trophy: Lessons Learned

- Building a full scalable React application;
- Using TypeScript in a React app and at the backend to help on development;
- React Hooks! The fun way to build React apps;
- Building a scalable backend application with Express and SQLite;
- React Native and Expo framework;
- Yarn package manager
- Upgrading from a Create-React-App to Next.js;

## :rocket: Technologies & Resources

**Frontend (Web):**
- [React.js](https://reactjs.org)
- [Axios](https://github.com/axios/axios) (HTTP client)

**Mobile:**
- [React Native](https://facebook.github.io/react-native/)
- [Expo](https://expo.io/)
- [Axios](https://github.com/axios/axios) (HTTP client)

**Backend:**
- [Node.js](https://nodejs.org/en/)
- [SQLite 3](https://www.sqlite.org/)
- [Prisma](https://www.prisma.io/) (ORM)

**Development:**
- TypeScript
- Visual Studio Code
- Node.js routines (with Yarn and NPM)

## :hammer: Setting up the Environment

Make sure to have **Node.js 10+** installed in your machine and its **npm** available in the command line, then use the following routines to run each part of the project:

```bash
  # Server
$ cd server
$ npm install       # install required dependencies
$ npm run migrate   # setup database schema
$ npm run seed      # pre-populate database
$ npm run dev       # start development Server
$ npm run build     # transpile source files for deployment

  # Web App
$ cd web
$ npm install       # install required dependencies
$ npm run dev       # start development server
$ npm run build     # build files for production

  # Mobile App
$ cd mobile
$ npm install       # install required dependencies
$ npm run dev       # build and serve the application via Expo mobile app
```

## :zap: Features Implementations

The main idea of the project was developed during the week of the event and the result is the one found in [release v1.0](https://github.com/juliolmuller/proffy/releases/tag/v1.0). Afterwards, any incoming commits are incrementing updates to improve the application, as proposed at the end of the event.

Besides, both v1.0 and v2.0 have their layouts available at **[Figma](http://figma.com/)**.

### Version 1.0

- [Web Layout](https://www.figma.com/file/gwxPfvuOTpLKDNkouqg1DP/Proffy-1.0-web)
- [Mobile Layout](https://www.figma.com/file/aajN5dAiniL8wZSqXt4O5S/Proffy-1.0-mobile)

- Web
  - [x] Start up project using `create-react-app` and TypeScript;
  - [x] Create landing page to lead to other routes;
  - [x] Define routes and navigation to other pages;
  - [x] Create form to have teachers signing up;
  - [x] Create form to search classes of interesting;
  - [x] Create list of available classes based on search;
- Mobile
  - [x] Start up project using **Expo Framework** and TypeScript;
  - [x] Create landing page screen;
  - [x] Define navigation mechanisms;
  - [x] Create screen for interested teachers, redirecting them to the web app;
  - [x] Create screen to search for classes;
  - [x] Create functionality to mark class as favorite (save to device local storage);
  - [x] Create screen to list classes marked as favorite by the user;
- Server
  - [x] Create project with *Express*, *SQLite3* and *Knex*;
  - [x] Configure *Knex* and setup migrations;
  - [x] Create REST API to retrieving and storing data;

### Version 2.0

- [Web Layout](https://www.figma.com/file/OuBbN1qg7XRIa1OEh4r7cL/Proffy-2.0-web)
- [Mobile Layout](https://www.figma.com/file/BqoDapEZkrXcxttk61YGTU/Proffy-2.0-mobile)

- Web
  - [x] Set up linting tools;
  - [x] Upgrade to React 17;
  - [x] Switch from Create-React-App to Next;
  - [ ] Create form for logging into the service;
  - [ ] Create form for signing up to the service;
  - [ ] Create form for retrieving account access;
  - [ ] Create page to display user profile;
  - [ ] Create form to update user profile;
  - [ ] Create functionality to mark other users as favorite (save to device local storage);
  - [ ] Create functionality to mark class as favorite (save to device local storage);
  - [ ] Create screen to list favorite classes and teachers;
  - [ ] Forms validation and notification;
  - [ ] Automated tests (unit and E2E);
  - [x] Deploy app to Vercel cloud service;
- Mobile
  - [x] Set up linting tools;
  - [x] Add splash screen;
  - [ ] Add onboarding screens;
  - [ ] Create form for logging into the service;
  - [ ] Create form for signing up to the service;
  - [ ] Create page to display user profile;
  - [ ] Create form to update user profile;
  - [ ] Forms validation and notification;
  - [ ] Automated tests (unit and E2E);
- Server
  - [x] Set up linting tools;
  - [ ] Forms data validation;
  - [x] ~~ Switch from SQLite to PostgreSQL~~;
  - [x] ~~Switch from SQLite to MySQL, due to Heroku restrictions;~~
  - [x] Switch from MySQL to SQLite, due to [Render](https://render.com/) free-plan restrictions;
  - [x] Switch from Knex to Prisma;
  - [ ] Create authentication system;
  - [ ] Implement file upload system;
  - [ ] Automated tests;
  - [x] Deploy API to Heroku cloud service;

---

Also checkout the project developed in [NLW #3](https://github.com/juliolmuller/happy), [NLW #4](https://github.com/juliolmuller/move.id), [NLW #5](https://github.com/juliolmuller/podcastr) and [NLW #6](https://github.com/juliolmuller/letmeask).
