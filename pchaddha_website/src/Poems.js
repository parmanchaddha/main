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
                        <input
                            className = {whichPoem === keyValue ? "poems-options-dividers-active" : "poems-options-dividers-inactive"}
                            type = "submit"
                            value = {poemDict[keyValue]["title"]}
                            onClick = {(event) => renderPoemOnClick(keyValue)}
                        />
                    </form>
                </div>
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