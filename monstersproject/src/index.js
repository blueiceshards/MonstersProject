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

// JSON
// react-scripts allows us to not worry about webpack and babel. it includes four scripts: react-scripts start, " build, " test, " eject. 

// Start - starts the project.

// Build - src folder is where our application lives. all our react code that we write for our application is goign to go into the source folder. the public folder is where all those files where our browser needs an older version of html and javascript to understand, where all that's gonna go. when we call build script, what create react-app is going to do is to turn all the code in our source folder into a version that our browser understands and puts it into the public folder. 

// Build 2 - src folder is the workbench where we are going to work on our application. however, when we put it to the outside world, when we deploy our app, if we give all these files to the browser, the browser is going to say it has no idea what you are trying to do, no idea what syntax this is, going to error. npm run build -> creates an optimized production build. we will now have a build folder with minified html, css, and a bunch of js. inside these files in the build folder, they contain all the code that we wrote in our source folder and it went through the step to create optimized build files for us. what we want to do now is to take this build folder and put it on a server. build folder is what we will use to deploy our application, and src folder is our playground/workbench.

// Test runs test code that we are going to write.

// Eject takes out all the config files that're hidden from us for babel and webpack in case we wanted to manage it ourselves. 

// create-react-app uses webpack and babel, which allows us to take our source folder. babel is goign to take these files with react syntax, and make sure that our js files are going to work on all types of browsers. webpack is a module bundle that lets us write modular code. the build folder only has a few JS files (even though our src folder has a lot of js file). webpack is goign to take all our js and all our inputs and bundle them together and optimize it for production. we don't need to understand this whole process because react has a dedicated team of developers that implement this behind the scenes for us. create-react-app is a command line interface (CLI). other frameworks like angular or view have the same thing, i.e. a way to start the project really fast, have all this config done and optimized for us so that we can build really nice performing applications. 

// package.json - allows us to have a package manager. we can use package.json to intall other react components. when you do npm install package, it automatically gets added to our json file. 

// what react is actually doing under the hood. public/index.html, we have all these pre-setup code for us. when we look at the body tag, the only thing we have is the div id of "root". this is where we are going to inject our react application. but at the end of the day, all we are going to do is to replace whatever is here with our react application. if code along in the index.html and add a h1 tag. => this will make your app part react and part HTML => this enables react to be injected into just parts of our application. 

// if we go to App.js, we are importing React, and if we go to index.js, we are importing React AND ReactDOM. React library allows us to write HTML-like syntax in a js file and it understands it because of this react library. the ReactDOM is the robot that interacts with the DOM, it can be replaced with different robots (the one that interacts with a mobile device). React package allows us to write JSX and build components and build that virtual DOM, and ReactDOM is the robot that actually interacts with the DOM. ReactDOM.render allows us to grab an element from HTML and insert App into it. 

// Don't eject. -> a lot of extra files and code. no matter how many extra time you spend with react, you are never going to compete with the developers that are working full time to make create-react-app the best tool ever, as easy and efficient for you as possible. do not eject out of create-react-app unless you absoltuely have to. with create-react-app, you automatically get the best system and project to build out of the box. anytime there are updates, the industry changes, and there are new ways of doign things, create-react-app is automatically going to have new versions that have those changes implemented by professionals. you don't need to know what's goign on underneath tthe hood, so don't eject, you lose the benefits as create-react-app gets more complex. 

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
