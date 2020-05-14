import React from 'react';
import { Card } from '../card/card.component';

// we want to export out a functional component called CardList. Right now, what to display for now, i.e. output, a containing div. 

// Components take in something called props. props is going to be the parameter that we get from functional component. 

// curly brackets because javascript.

// props is going to be an object of any properties that you pass in App.js <CardList name="Yihua"/>. i.e. any props that you write onto the component where it gets used. Generally speaking, we want the props that we are going to pass (in App.js <CardList prop1="" prop2=[] />) in to match the parameters that we are going to use inside of our component (card-list.component.jsx) but one of the main propoerties that exist on this props object is one called children. it will always be there. if there are no children it will be null.

// what are children? children are what you pass in between the brackets of the component that gets called. e.g. <CardList name="Yihua"><h1>Yihua</h1></Cardlist>, children is <h1>Yihua</h1>. 

export const CardList = (props) => {
    return (
    <div>
        {props.monsters.map(monster => 
        <Card key = {monster.id} monster={monster}/>
        )}
    </div> 
    );
}

// you don't need return above. 