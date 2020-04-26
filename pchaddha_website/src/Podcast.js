import React, {useState, useEffect} from "react";
import Wobble from "react-reveal/Wobble";
export default function Podcast () {
    console.log('hello world')
    return (
        <div className= "podcast">
            <div  className = "podcast-h1">
                <div>
                    <h1> The Class in Session Podcast </h1>
                </div>
            </div>
            <div className = "podcast-body">
                <p className = "animated-paragraph">
                    Recordings in progress 
                    &nbsp;<span className="first">.</span>
                    &nbsp;<span className="second">.</span>
                    &nbsp;<span className="third">.</span> 
                </p>
            </div>
        </div>
    )
}
