import React, {useState, useEffect} from "react";
import Wobble from "react-reveal/Wobble";
import "./Styling/Podcasts.css"
const MicrophoneAnimation = () => {
    return (
        <>
        <div className = "microphone-animation">
            <iframe src="https://giphy.com/embed/tIk25Lo9CAjJd1lvik" 
                width="200" 
                height="300"
                frameBorder="0"
                class="giphy-embed"
                allowFullScreen/>
            <p>Animation courtesy of GIPHY</p>
        </div>
        </>
    )
}


export default function Podcast () {
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
            <div>
                <MicrophoneAnimation/>
            </div>
        </div>
    )
}
