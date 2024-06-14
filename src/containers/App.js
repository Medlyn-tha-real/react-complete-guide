import React, { Component } from "react";
import classes from"./App.css";
import Person from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";
import WithClass from "../hoc/WithClass";

class App extends Component {
  constructor(props) {
    super(props);
    console.log("[App.js] constructor");
  }
  
  state = {
    persons: [
      {id:'one', name: "Ahmeed", age: 21 },
      {id:'two', name: "Medlyn", age: 22 },
      {id:'three', name: "Pelumi", age: 23 }, 
    ],
    otherState: "Some random values",
    showPersons: false,
    showCockpit: true,

  // kins: [
  //   {val:"Ahmeed raps"},
  //   {val:"Medlyn codes"}, 
  //   {val: "Pelumi barbs"},]
  };

  static getDerivedStateFromProps(props, state) {
    console.log("[App.js] getDerivedStateFromProps", props);
    return state;
  }

  // componentWillMount() {
  //   console.log("[App.js] componentWillMount");
  // }

  componentDidMount() {
    console.log("[App.js] componentDidMount");
    return {showPersons: true};
  }
  shouldComponentUpdate() {
    console.log("[App.js] shouldComponentUpdate");
    return true;
  }

  componentDidUpdate() {
    console.log("[App.js] componentDidUpdate");
  }

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
    console.log("[App.js] render");
    let personss = null;

    if (this.state.showPersons) {
      personss = (
        <Person 
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler}
        />
      );
    } 
    
  
    return (
        <WithClass classes={classes.App}>
          <button onClick={() => {
            const notshow = this.state.showCockpit;
            this.setState({ showCockpit: !notshow });
          }}> Toggle Cockpit </button>
          {this.state.showCockpit ? ( 
          <Cockpit
          title={this.props.appTitle}
          showpersons={this.state.showPersons}
          personsLength={this.state.persons.length}
          clicked={this.tooglePersonsHandler} /> ) : null}
          {personss}
        </WithClass>
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

// toBeDisplayed = () => {
//   const kindred = [...this.state.kins]
//   kindred.map((kin, index)=>{
//     // index = kin.id;
//     return kin.val[index];
//   })
// }
