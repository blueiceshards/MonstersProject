import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// ReactDOM library that calls render, renders our app function in the form of what looks like a HTML tag, followed by document.getElementByID => it's looking at the document object for some element with an ID of root. and it's replacing it with the App function that returns HTML. This is manifested in public/index.html as a single div with an ID of root, and this is the entryway for our application. 

// npm build -> updates the public folder to render old versions of html and javascript

// JSON
// react-scripts allows us to not worry about webpack and babel. it includes four scripts: react-scripts start, " build, " test, " eject. 

// Start - starts the project.

// src folder is where our application lives. all our react code that we write for our application is goign to go into the source folder. the public folder is where all those files where our browser needs an older version of html and javascript to understand, where all that's gonna go. when we call build script, what create react-app is going to do is to turn all the code in our source folder into a version that our browser understands and puts it into the public folder. 

// test runs test code that we are going to write.

// eject takes out all the config files that're hidden from us for babel and webpack in case we wanted to manage it ourselves. 

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
