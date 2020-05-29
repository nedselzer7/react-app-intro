import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app = props => {

    const [ personState, setPersonState ] = useState({
        persons: [
            { name:'Ned', age: 25 },
            { name:'Meredith', age: 24 },
            { name:'Nick', age: 26 }
        ]
    });

    const [ otherState, setOtherState ] = useState('some other value');

    console.log(personState, otherState)

    const switchNameHandler = () => {
        //console.log('Was Clicked!');
        setPersonState({
            persons: [
                { name:'Edward', age: 25 },
                { name:'Meredith', age: 24 },
                { name:'Nick', age: 27 }
            ]
        })
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App!</h1>
        <p>One day I'll be big</p>
        <button onClick={switchNameHandler}>Switch Names</button>
        <Person name={personState.persons[0].name} age={personState.persons[0].age}>My Hobbies: Snowboarding</Person>
        <Person name={personState.persons[1].name} age={personState.persons[1].age}/>
        <Person name={personState.persons[2].name} age={personState.persons[2].age}/>
      </div>
    );
  }

export default app;
