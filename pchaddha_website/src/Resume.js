import React, { useState, useRef, useEffect } from 'react';
import { usePdf } from '@mikecousins/react-pdf';
import "./Styling/Resume.css";

const BrewCoffee = () => {
  return (
    <>
      <div className = "resume-brew-coffee">
        <div className = "resume-brew-coffee-title">
          <div>
            <h2>Coffee's Brewing...</h2> 
          </div>
        </div>
        <img src = {"/coffee.gif"} alt = "coffee brewing"/>
      </div>
    </>
  )
}

const RenderPDF = () => {
    const [page, setPage] = useState(1);
    const canvasRef = useRef(null);
    const [loaded, setLoaded] = useState(false);
    
    const { pdfDocument, pdfPage } = usePdf({
      file: '/resume.pdf',
      page,
      canvasRef,
      scale:0.96, 
    });
    
    useEffect( () => {
      const timer = setTimeout(() => {setLoaded(true)}, 3500);
      return () => clearTimeout(timer);
    },[])

    return (
      <>
      <div>
          <>
            <div className = {loaded ? "resume-show" : "resume-not-show"}>
              {pdfDocument ? 
                <div className = "resume-pdf">
                  <canvas ref={canvasRef}/>
                </div>
                :
                <BrewCoffee/>}
            </div>
            <div className = {!loaded ? "resume-show" : "resume-not-show"}>
              <BrewCoffee/>
            </div>
          </>
      </div>
      </>
    );
  };
  
export default function Resume () {
    return (
        <>
        <div style = {{width:"60%"}}>
        <RenderPDF/>
        </div>
        </>
)
}