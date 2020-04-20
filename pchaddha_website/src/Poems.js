import React, { useState, useRef } from 'react';
import {busPoem, busTitle} from "./Poems/Bus";
import "./Styling/Poems.css";

export default function Poems () {
    const [whichPoem, setWhichPoem] = useState("bus")
    const poem_titles = [
        "The Bus", 
        "A School",
        "America The Great", 
        "E.P."
    ];
    const poem_options = poem_titles.map(
        function(value, index) {
            return (
                <form >
                    <input
                        type = "submit"
                        value = {value}
                        onClick = {(event) => setWhichPoem(event.target.value)}
                    />
                </form>
            )
        }
    );
    return (
        <div className= "poems">
            <h1 className = "poems-h1"> Poems </h1>

            <div className = "poems-options">
                {poem_options}
            </div>

            <div className = "poems-complete">
                <div className = "poems-title"> 
                    <h2> {busTitle} </h2>
                </div>
                <div className = "poems-body"> 
                    <span> {busPoem}</span>
                </div>
            </div>
        </div>
    )
}