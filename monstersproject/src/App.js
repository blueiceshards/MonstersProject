import React, {Component} from 'react';
import {CardList} from './components/card-list/card-list.component.jsx'
import './App.css';

// what is Component, in class App extends Component? Component is part of the 'react' library, and is imported as {Component} using destructuring. If we didnt include {Component} like that, and just import React, we can still use Component in our code by just simply saying class App extends React.Component. Component is a property of React that we can use. 

// when we say class App extends Component or class App extends React.Component, we are saying that we want whatever functionality that this React Component that was already built into the library by sombody, I want that functionality and I am going to add on to it. for example the render() method comes built in with React.Component. This React.Component gives us some battery operated options to use in our component so that we don't have to constantly repeat ourselves. super() helps us with this by calling React.Component's constructor(). we use something that react says is a Component and we just tag on some specific functionality to it. we will learn about life cycle methods and how these components already have some important methods already on them. for instance, componentDidCatch, componentDidMount that are methods of the React.ComponentLifecycle. 

// Lifecycle methods are methods that called automatically by React at different stages of when this componenet gets rendered. componentDidMount lifecycle method: when this component mounts (i.e. when React puts our component on the page and renders it onto the DOM for the first time) When it does, componentDidMount method calls whatever block of code we we write inside. we have access to lifecycle methods because of our class component. 

// The birth of single page applications. Initially, all we had to do with a normal webpage was to visit a link and we get a HTML, JS, and CSS file. when we click on another link, we go to another page which gives us a whole new HTML, JS, and CSS file. however, with single page applications, we now have this idea of communicating with the backend initially, where we get a tiny HTML page (with our ID of 'root' where we filled in our React component) and then we have this massive JS file with our react library, components and all our logic. now, isntead of having to communicate back and forth with the server, if I click on something and visit a different part of the page, don't have to go back to the server to receive new files; I can just have JS or react say , rerender the DOM with something else. so now, with a Single Page Applicaiton, isntead of requesting for a page, it's turned more into requesting for data. and this is when we have the ability to communicate with outside servers, servers we don't control. for e.g. in our big project, we  can talk to the google firebase database, and some different API endpoints so that we can communicate with different APIs back and forth and using JS to just receive the data. for e.g. JSON placeholder website -> we simply get some data in JSON format, which can be converted into a JS object that we can use. all this does is to provide us with API, a way for us to access info from this server. now, single page applications, instead of just rendering HTML, can use this data to display different monsters adn different user information and as we will see, let us do intersting things like sign in and sign out, add items to shopping cart. 

// as you build larger and larger applications, you will start talking to APIs and start to get different data for your applications. these endpoints or servers that we speak to can be 3rd party servers like google servers or can be your own server, where you perhaps have your own database. the way we build applications now is very dynamic. most of the time, we don't hardcode all the info into HTML, JS, and CSS files. instead, when a user opens something, we are always communciating with outside servers. we are going to start structuring our app this way. 

// this.state.monsters array-> in the real world, we probably won't hardcode our information, but rather, get our information from some sort of database. 

class App extends Component { 
  constructor() {
    super();

    this.state = {
      //string: 'Hello thereeee!'
      monsters: [], // can be an empty array because now we are just going to wait for our component to mount, then we are going to fetch all of our users, then we are going to update our state's monsters property with the new array of users from fetch method. 
      searchField: ''
    }
  }

  // state vs prop: once we pass a state down to a component as an attribute, e.g. <CardList monsters = {this.state.monsters} /> What you notice is that once we pass our state down to our component, this component receives it as a prop. this is whatt we usually see happening through our apps. we have state, which often is something that changes because of user interaction. in this case, monsters changes because of user interactions, from an empty array, to a array of users after ComponentDidMount() after we update the page. this.state(.monsters) trickles down our component tree as props to whoever needs it. one way unidirectional data flow. whenever something changes in the parent state, it will trickle down, pass it down as attribute, that state turns into props for all these little components down the line. here, CardList component gets passed down this.state.monsters, and the CardList componenet uses it as props because <CardList monsters = {this.state.monsters}/> State usually lives in one location and it trickles down as props. 

// JS's native fetch will make an API request to the URL and returns us a promise. that promise gives us a response of the actual body. 

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users') // returns a promise
    .then(response => response.json()) // returns a new promise - taking the response and converting it into a json format that our javascript can understand
    //.then(users => console.log(users)); // console logs an array
    .then(users => this.setState({monsters: users})); // take the users that we get back from it and set our monsters to that users array. 
  }
  
// we will call this.state.monsters.map because map returns us the return of whatever function we pass to it, iterated over every element in this array. map takes a function where the first argument is going to be actual element that this function is goign to get called on. so it's goign to call the function we passed on it, on Frankenstein, and then on Dracula, and then on Zombie. it's goign to call the function on each object in the array of monsters. what the function returns is what gets returned out of this map. usually it's a new array when you call map, but react is smart enough to know that if we end up rendering a bunch of HTML blocks in an array, then it's just goign to display those elements.

// you must call curly braces inside of <h1></h1> tags because it's a new return block of HTML (that is JS language I guess)

// <h1 key = {}> because if not: Warning: Each child in a list should have a unique "key" prop. The reason why you want a unique key is because React needs to know what to update if one of these elementsin our monsters array has a value that changes. For e.g. the user does something and it changes the name of our first monster from Frankenstein to Banshee in the code somewhere with setState. React is smart enough to know that it only needs to update the first h1 with the new property. it does not need to re-render all of the other elements like Dracula and zombie. the key will help React know which element is the one that's been updated, which HTML it's attached to, so it doesn't hve to re-render everything. if this list was way bigger, it would be performance-heavy to rerender everything. this is what makes React great because it's smart and knows it only needs to rerender the HTML of that one element that changes in a list of a 1000 elements. 

// INPUTS: type is a built in property of input, for e.g. type='password' will censor passwords. what search gives us is the placeholder property which puts a string there when you haven't typed anything into the searchfield. inputs also have a built in method called onChange. onChange fires with this synthetic event hwich is an eventt inour browser whenever our input is changed. onChange = {e => console.log(e)}, where e is a synthetic event whenever the input is changed. e is a huge object that contains many attributes. we are only interested in the get target. and value is a property of a get target. e.target gives the HTML element that fires the event. value is a property on the input that literally gives the string value. 

  render() {
    return (
      <div className='App'>
      <input 
      type='search'
      placeholder='Search monsters' 
      onChange={e => 
        {this.setState({searchField: e.target.value}, () => console.log(this.state));
      // console log lags a little because of asynchronous things, unless you pass consolelog as a second argument to this.setState function.
      }} // must do curly brackets so it's JS, and another curly brackets after the arrow as well...
      /> 
      <CardList monsters = {this.state.monsters} />
      </div>
    )
  }
  
  /* render() { 
    return ( 
      <div className = 'App'> 
        <header className = 'App-header'>
          <img src={logo} className='App-logo' alt='logo'/>
          <p>{this.state.string}</p>
          <button onClick = {() => this.setState({string: 'Hello Andrei!'})}>Change Text</button>
          <a
            className='App-link'
            href='https://reactjs.org'
            target='_blank'
            rel='noopener noreferrer'
          >
            Learn React
          </a>
        </header>
      </div>
    )
  } */
}

// we know that we can write functions that return HTML, but we can also write classes that return HTML. why we want to use a class -> react has given us the ability to write classes that have a lot more functionality vs a function that returns some HTML. to write a class, we have to first import {Component} from React. i.e. import React, {Component} from 'react'. 

// if, instead of functions, we use class, e.g. class App extends Component, we now have access to the Render method inside of our app class, which returns any HTML you want. 

// right now, we jsut changed our function App to a class App extends Component, retaining the exact same functionality. The reason why we would want to use this kind of thing, is, instead of displaying the static string of "Hello There!", what if you want to make it change whenever you click a <button>Change Text</button>. 

// By using a class component, we actually get access to this thing called State. what State is some object (JS object, with properties, that we can access at any point inside our class). the way to do this is to call the constructor keyword. inside of our constructor, we want to call super(). what super() does is it calls the constructor method on the Component files, which gives us access to this.state. this.state property now exists on our class App and we can set it to something. the first time you define it, you are setting the default value of this.state. 

// once we have stated the default state under this.state in the constructor(), we can call this.state using curly brackets. When you use curly brackets, which JSX lets us do, it tells us that anything between these curly brackets is going to be JS, and to render JS instead of HTML. (if not, language is in pseudo-HTML.) {this.state.string} allows us to do great things, like if we want to render it multiple times, we can just call it multiple times to get multiple instances of {this.state.string}.

// now, if you want to change {this.state.string} value: class App extends Component {} -> Component also gives us this method called this.setState that lets us modify the state object (i.e. this.state.string). on every single HTML elemnt, we now have access to this method/property called onClick. <button onClick={() => }Change Text</button>. onClick method/property takes a *function* that gets called whenever this element (in this case, button) gets clicked. ***because function is a JS element -> it's in curly brackets! but notice it still has function syntax i.e. {() =>}*** in this case, let this *function* be this.setState({ string: 'Hello Andrei!'}). what setState takes is an object with all of the properties that you want to change on your state, as well as the new values that they have. 

// <button onClick = {() => this.setState({string: 'Hello Andrei!'})}>Change Text</button> (): receives no input. =>: output of the function, which is another function that sets the state of the string to 'Hello Andrei!'. 

// JSX syntax-> looks like HTML tags. However, because JSX is actually javascript (XML), there are a few changes. e.g. className is not HTML. it's a JSX attribute. if we use class instead of className, class means something else in Javascript -> it means we are creating a class. JSX uses this syntax of className to distinguish between what we actually mean (of actually giving it a HTML class, vs a class in Javascript e.g. like class App extends Component). 

// Other thing with JSX: curly brackets. Every time we write curly brackets inside of our JSX, they mean that whatever is inside is a javascript expression. e.g. {logo} is a variable, which is the logo that we imported. {this.state.string} is also a variable which is referring to the string propoerty of this.state object. it's a JS expression that produces a value. You can also put {4+5} in curly brackets to display 9 because it's a JS expression. <button onClick ={() => this.setState({string: 'Hello!'})}>Change text</button> so () => .... is a JS expression which is an anonymous function using arrow syntax that calls this.setState. 

// notice how we use this.setState({string: '....'}) instead of this.state.string = '....' like we would normally. this goes back to the idea of UNIDIRECTIONAL DATA FLOW of react. you are not allowed to modify state in react without calling the method, this.setState. WHY? Because anytime we change the state, let's say a user clicks the button to change the state to a new string, when that click happens, react actually intercepts that click (because react is the one that's talking to the DOM) and it's goign to report that and say hey, I jsut got a click on the DOM, what do I do? In this case, whenever the button is clicked, we want to update the state. But we are not going to modify the state automatically, we are going to say: A click happens -> State gets updated using setState -> that change is going to rerender the components so that we can go through this flow again. 

// as soon as this.setState gets called, which is, when a click happens (cos of button onClick), render() method gets called again. why does render() get called again? because, this.state (under constructor()) just got updated. state (.string) is now a different thing. because of the declarative approach with react, as soon as state changes, we re-render the component with the new state, at {this.state.string} again, and we display that. this onClick is not a HTML; it's a JSX attribute; we are just MIMICKING html. notice that in actual HTML, onclick is called onclick with no capital C. because Javascript uses camelcase, JSX onClick has a capital C. just like how className was a little different for html, onClick is also different. in react, we can use whatever HTML attributes that we want, like src, class, onClick, but sometimes there are differences like className and onClick. we are going to explore these different attributes throughout the course, but the key thing to remember is that JSX is trying to mimick what HTML does so that we can create that virtual DOM so that we can break down each part of the app into these components that keep getting re-rendered as we update the state using setState. 

export default App;
