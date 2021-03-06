This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

Below you will find some information on how to perform common tasks.<br>
You can find the most recent version of this guide [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Purpose
Play-ground-project for testing out some ReactJS, GraphQL in Node and Relay on Client

## Install
```npm install``` <br>
```server/npm install``` <br>
```client/npm install``` <br>

## Implemented so far

### Client
ReactJS following and monkeying https://facebook.github.io/react/docs/thinking-in-react.html

### Server
Node, Express returning an array of data

### Client-Server
This setup is running both in the same project, using webpack and foreman to serve them both.
Each directory, the root, the client and the server, have their own package.json
Note that ```"proxy": "http://localhost:3001/"``` in ```client/package.json```, 
makes webpack proxy each request from the client to webpack's port to this, url and port.