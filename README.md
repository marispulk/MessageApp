# MessageApp - Angular messaging application

Angular messaging application, developed for showcase.
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.2.

# Description

ChatBuzz is a web application that is used for p2p messaging, it features the following functions:
* Chat management feature - [DONE]
* Messages feature - [DONE]
* User management feature - [DONE]
* Firebase database (Currently In-Memory Data Service) - [WIP]
* User and chat relation - [WIP]

This application is developed by following Angular best practices.
All features are broken into seperate components(or child components), all data fetching is done by injecting services, and all data models are seperated to model files. 
All cross component communication is done via services or events.

## Schema (To be updated)

![Schema Picture](https://imgur.com/jzANiKX.png)

## Requirements
* Angular 10
* Bootstrap@4.5.2
* jQuery@3.5.1
* Popper@1.16.1
* Firebase@^7.13.1

## Screenshots

![Main screen](https://i.imgur.com/wKZZuFR.png)
![Chat settings](https://i.imgur.com/BYTSsI6.png)
![New chat](https://i.imgur.com/DkmwXIJ.png)

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
