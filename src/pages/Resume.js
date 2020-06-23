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
            </div>
        </div>
    )
};


export default Resume;