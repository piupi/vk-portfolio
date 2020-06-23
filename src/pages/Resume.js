import React from "react";
import { Link } from "react-router-dom";
// import { Document, Page } from "react-pdf";
import { Document, Page } from "react-pdf/dist/entry.webpack";
// import pdfjs from "pdfjs-dist";
import { pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


const Resume = () => {
    return (
        <div>
            <nav className="top-nav">
                <div className="top-nav-items">
                    <Link to="/">
                        <button className="current">home</button>
                    </Link>
                    <Link to="/projects">
                        <button>projects</button>
                    </Link>
                    <Link to="/resume">
                        <button>resume</button>
                    </Link>
                    <Link to="/contact">
                        <button>contact</button>
                    </Link>
                </div>
            </nav>
            <div className="resume">
            <iframe src="https://drive.google.com/file/d/1C_go3lJxisGfqw7Rn1J4ahrreMmrpzKh/preview" width="750" height="600"></iframe>
            </div>
            <Document file="public/resumemay2020.pdf">
                <Page pageNumber={1} />
            </Document>
            
        </div>
    )
};


export default Resume;