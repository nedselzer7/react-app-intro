import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

    state = {
        persons: [
            { id:'1111', name:'Ned', age: 25 },
            { id:'2222', name:'Meredith', age: 24 },
            { id:'3333', name:'Nick', age: 26 }
        ],
        otherState: 'Some values',
        showPersons: false
    }

    nameChangedHandler = (event) => {
        this.setState({
            persons: [
                { name:'Ned', age: 25 },
                { name:'Meredith', age: 24 },
                { name:event.target.value, age: 26 }
            ]
        })
    }

    deletePersonHander = (personIndex) => {
        // const persons = this.state.persons.slice();
        const persons = [...this.state.persons];
        persons.splice(personIndex, 1);
        this.setState({persons: persons});
    }

    togglePersonsHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({showPersons: !doesShow});
    }

    render() {

        const style = {
            backgroundColor: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer'
        };

        let persons = null;

        if ( this.state.showPersons ) {
            persons = (
                <div>
                    {this.state.persons.map((person, index) => {
                        return <Person
                            click = {() => this.deletePersonHander(index)}
                            name = {person.name}
                            age = {person.age}
                            key = {person.id}/>
                    })}
                </div>
            )
        }

        return (
          <div className="App">
            <h1>Hi, I'm a React App!</h1>
            <p>One day I'll be big</p>
            <button
                style={style}
                onClick={this.togglePersonsHandler}>Toggle Persons</button>
            {persons}
          </div>
    );
  }
}

export default App;
