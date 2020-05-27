import React, { useState, useRef } from 'react';
import poemDict from "./Poems/poemDict";
import "./Styling/Poems.css";

export default function Poems () {
    const [whichPoem, setWhichPoem] = useState("bus");
    const [poem_title, setPoemTitle] = useState(poemDict["bus"]["title"]);
    const [poem_body, setPoemBody] = useState(poemDict["bus"]["body"]);

    function renderPoemOnClick(keyValue) {
        setWhichPoem(keyValue);
        setPoemTitle(poemDict[keyValue]["title"]);
        setPoemBody(poemDict[keyValue]["body"]);
    }

    const poem_options = Object.keys(poemDict).map(
        function(keyValue, index) {
            return (
                <div className = "poems-options-dividers">
                    <form >
                        <div className = {whichPoem === keyValue ? "poems-options-dividers-active" : "poems-options-dividers-inactive"}>
                            <input
                                type = "submit"
                                value = {poemDict[keyValue]["title"]}
                                onClick = {(event) => {event.preventDefault(); renderPoemOnClick(keyValue)}}
                            />
                        </div>
                    </form>
                </div>
            )
        }
    );

    return (
        <div className= "poems">
            <h1 className = "poems-h1"> Poems </h1>

            <div className = "poems-options">
                <div className = "poems-options-container">
                    {poem_options}
                </div>
            </div>

            <div className = "poems-complete">
                <div className = "poems-title"> 
                    <h2> {poem_title} </h2>
                </div>
                <div className = "poems-body"> 
                    <span> {poem_body}</span>
                </div>
            </div>

            {console.log(whichPoem)}
        </div>
    )
}