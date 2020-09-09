# MessageApp - Angular messaging application

Angular messaging application, developed for showcase.
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.2.

# Description

ChatBuzz is a web application that is used for p2p messaging, it features the following functions:
* Chat management feature - [DONE]
* Messages feature - [DONE]
* User management feature - [TODO]
* Firebase database (Currently In-Memory Data Service) - [TODO]

This application is developed by following Angular best practices.
All features are broken into seperate components(or child components), all data fetching is done by injecting services, and all data models are seperated to model files. 
All cross component communication is done via services or events.

## Schema

![Schema Picture](https://imgur.com/jzANiKX.png)

## Requirements
* Angular 10
* Bootstrap@4.5.2
* jQuery@3.5.1
* Popper@1.16.1

## Screenshots

![Main screen](https://imgur.com/abjYK1x.png)
![Chat settings](https://imgur.com/zYH9C0V.png)
![New chat](https://imgur.com/n3LA8qy.png)

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
