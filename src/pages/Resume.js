import React from "react";
import { Link } from "react-router-dom";

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
            <iframe title="Resume" src="https://drive.google.com/file/d/1C_go3lJxisGfqw7Rn1J4ahrreMmrpzKh/preview" width="750" height="600"></iframe>
            <object data='https://drive.google.com/file/d/1C_go3lJxisGfqw7Rn1J4ahrreMmrpzKh/preview'>
                <div id="pdf-error">
                <p>Oops! Your browser doesn't support PDFs!</p>
                <p><a href="https://pdfhost.io/v/bV5p8xyXa_Vanessa_K_Resume_May2020pdf.pdf">Click to view on PDF Host instead</a></p>
                </div>
            </object>
            </div>
        </div>
    )
};


export default Resume;