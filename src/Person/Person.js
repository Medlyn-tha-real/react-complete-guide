import React from "react";
import "./Person.css";

const person = props => {
    return (
        <div className="Person" onClick={props.click}>
            <p>I'm {props.name} and i am {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} />
        </div>
    )
};
export default person;













