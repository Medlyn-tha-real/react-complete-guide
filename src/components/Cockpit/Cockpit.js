import React, { useEffect } from "react";
import classes from "./Cockpit.css";

const Cockpit = (props) => {
    useEffect(() => {
        console.log("[Cockpit.js] useEffect")
        setTimeout(() => {
            alert("Saved data to cloud");
        }, 1000);
        return () => {
            console.log("[Cockpit.js] cleanup work in useEffect");
        };
    }, []); //NB:if we just need it to run once(componentdidmount) and not everytime the persons array is modified, 
                            // as a second argument to the (useEffect) function we simply pass an empty array \
                           // and this will make it run just once on reload.


    useEffect (() => {
        console.log("[Cockpit.js] 2nd useEffect");
        return () => {
            console.log("[Cockpit.js] cleanup work in 2nd useEffect");
        };
    });


    const assignedClasses = []
    let btnClass = "";
    if (props.showpersons) {
        btnClass = classes.Red;
    }

    if(props.personsLength <= 2) {
      assignedClasses.push(classes.red);  /* classes = ['red] */
    }
    if(props.personsLength <= 1) {
      assignedClasses.push(classes.bold);  /* classes = ['red', 'bold] */
    }

    return(
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <h3 className={assignedClasses.join(" ")}>This is really working!</h3>
            <button className={btnClass} onClick={props.clicked}>
                Toggle Persons
            </button>
        </div>
    )
};


export default React.memo(Cockpit);