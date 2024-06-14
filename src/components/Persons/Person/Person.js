import React, { Component, Fragment } from "react";
import Aux from "../../../hoc/Auxiliary";
import classes from"./Person.css";

class Person extends Component {
    render() {
        console.log("[Person.js] rendering...");
        return (
            <Aux>
                <h1 key="i1">I'm just a dude with bigger dreams!! </h1>,
                <p key="i2" onClick={this.props.click}>
                I'm {this.props.name} and i am {this.props.age} years old!</p>,
                <p key="i3">{this.props.children}</p>,
                <input key="i4"
                type="text" onChange={this.props.changed} 
                value={this.props.name} />
            </Aux>
        );
    }
};

export default Person;













