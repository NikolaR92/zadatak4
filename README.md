#[Memory Game]

Game was made as a test for a Intership. It is basic Memory Game.
More information about this types of games can be found at
[Concentration games](https://en.wikipedia.org/wiki/Concentration_(game))

##Dependencies
* [git](https://git-scm.com/) - Distributed version control system
* [node.js](http://nodejs.org) - JavaScript runtime
* [yarn](https://yarnpkg.com) - Packages dependecy manager

## Clone a repository

```sh
$ git clone https://NikolaR92@bitbucket.org/NikolaR92/zadatak4.git
```

##Installing dependencies for Ubuntu

Npm
```sh
$ sudo apt-get install npm
```
Yarn
```sh
$ sudo apt-get install curl
$ curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
$ echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
$ sudo apt-get update
$ sudo apt-get install yarn

##Install tools JavaScript

```sh
$ yarn install - installs all packages of a project
$ yarn upgrade - upgrades all packages of a project
```
##Adding new packages with yarn
dependencies
```sh
$ yarn add package_name
```
devDependencies
```sh
$ yarn add --dev package_name
```

## JavaScript packages for a project

* [React.js](https://reactjs.org/) - A JavaScript library for building user interfaces
* [Redux.js](https://redux.js.org/) - Redux is a predictable state container for JavaScript apps.
* [Immutable.js](http://facebook.github.io/immutable-js/) - Immutable.js provides many Persistent Immutable data structures

## Start project
```sh
$ yarn start
```

## Build project
```sh
$ yarn build
```
