import React, { useState, useRef } from 'react';
import { usePdf } from '@mikecousins/react-pdf';

const RenderPDF = () => {
    const [page, setPage] = useState(1);
    const canvasRef = useRef(null);
    const { pdfDocument, pdfPage } = usePdf({
      file: 'resume.pdf',
      page,
      canvasRef,
      scale:0.96, 
    });
    return (
      <>
      <div>
        {!pdfDocument ?
          <>
            <h3>Coffee's Brewing ... </h3> 
            <img src = "/coffee.jpg" alt = "coffee brewing"/>
          </>
          : 
          <canvas ref={canvasRef} />
        }
      </div>
      </>
    );
  };
  
export default function Resume () {
    return (
        <>
        <div style = {{width:600}}>
        <RenderPDF/>
        </div>
        </>
)
}
