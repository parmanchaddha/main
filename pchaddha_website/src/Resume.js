import React, { useState, useRef, useEffect } from 'react';
import { usePdf } from '@mikecousins/react-pdf';

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
      const timer = setTimeout(() => {setLoaded(true);}, 2000);
      return () => clearTimeout(timer);
    },[])

    return (
      <>
      <div>
        {pdfDocument ?
          <canvas ref={canvasRef} />
          :
          <>
            <h3>Coffee's Brewing ... </h3> 
            <img src = "/coffee.jpg" alt = "coffee brewing"/>
          </>
        }
      
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
