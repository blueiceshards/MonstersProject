import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component { 
  constructor() {
    super();

    this.state = {
      string: 'Hello thereeee!'
    }
  }
  render() { 
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
  }
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
