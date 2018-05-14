# SkyOnlinejudgeWeb

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.0.

記得要自行安裝

## 取得附加元件
<!-- https://codingthesmartway.com/building-an-angular-5-project-with-bootstrap-4-and-firebase/ -->
run
```sh
npm install
```
就可以取得專案的附加元件，如果不執行的話就無法build(`ng serve --open` or `ng build`)

## Build with `.htaccess`

Run `./build.sh` to build the project with `.htaccess`. the build artifacts will be stored in the `dist/` directory.

You need to input the path of RewriteBase in your `.htaccess`

for example, if you want to run your project at `http://localhost/jinkela`, then the RewriteBase is `/jinkela/`.

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
