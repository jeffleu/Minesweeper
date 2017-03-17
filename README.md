# Minesweeper in React
![](https://raw.githubusercontent.com/jeffleu/Minesweeper/master/src/client/images/demo.gif)

## Requirements
* [Node.js](https://nodejs.org/) v6.x.x
* [NPM](https://www.npmjs.com/) v3.x.x
* [nodemon](https://nodemon.io/) installed globally (if you plan on contributing to this game)

To install `nodemon` globally, run the following command:
```
npm install nodemon -g
```

## Download
You can either download the [zip file](https://github.com/jeffleu/Minesweeper/archive/master.zip) or use `git` to clone it down:
```
git clone https://github.com/jeffleu/Minesweeper.git
cd Minesweeper
```

## Installation
Before you are able to play, you will need to install the dependancies required to run the application:
```
npm install
```

## Play
Once you have all the requirements fulfilled and dependancies installed, run the following command, which will transpile the server files then start up the local server:
```
npm start
```
Once the server has started, navigate to `localhost:8080` in your browser to play!

## Development
If you would like to contribute, you are more than welcome to make a pull request as this game is only in its early stages. Execute the following command to start up the development server. The script actively uses `nodemon`, which is a utility that will monitor for any changes in your source and automatically restart your server.
```
npm run dev:start
```
