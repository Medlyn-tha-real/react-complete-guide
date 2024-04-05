import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      {id:'one', name: "Ahmeed", age: 21 },
      {id:'two', name: "Medlyn", age: 22 },
      {id:'three', name: "Pelumi", age: 23 }, 
    ],
    otherState: "Some random values",
    showPersons: false,
  };


  nameChangedHandler = (event, index) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === index;
    });

    
    const person  = {
      ...this.state.persons[personIndex]
    };
    person.name = event.target.value;


    const people = [...this.state.persons];
    people[personIndex] = person;

    this.setState({ persons: people});
  };



  
  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }


 
  tooglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    const stylingButton = {
      backgroundColor: "green",
      color: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer"
    };

    let personss = null;

    if (this.state.showPersons) {
      personss = (
        <div> 
          {this.state.persons.map((person, index) => {
            return <Person
              click={() => this.deletePersonHandler(index)} 
              name={person.name} age={person.age}
              key={person.id}
              changed={(event) => this.nameChangedHandler(event, person.id)}>Me into React</Person>;
          })}
        </div>
      );
      stylingButton.backgroundColor = "red";
    } 

    const classes = []
    if(this.state.persons.length <= 2) {
      classes.push("first");  /* classes = ['red] */
    }
    if(this.state.persons.length <= 1) {
      classes.push("second");  /* classes = ['red', 'bold] */
    }
    
  
    return (
        <div className="App">
          <h1>Hi, i'm a React App</h1>
          <h3 className={classes.join(" ")}>This is really working!</h3>
          <button style={stylingButton} onClick={this.tooglePersonsHandler}>
            Toggle Persons
          </button>
          {personss}
        </div>
    );
  }
}

export default App;

// return React.createElement("div", {className: "App"}, React.createElement("h1", null, "Does this work now!!"))

// const [personState, setPersonState] = useState({
//   persons: [
//     {name: "Ahmeed", age: 23},
//     {name: "Medlyn", age: 23}
//   ],
//   // would be ignored if we do nothing with it
//   // otherState: "Some random values"
// });
