import React from "react";
import { Link } from "react-router-dom";

const Resume = () => {
    return (
        <div>
            <nav className="top-nav">
                <div className="top-nav-items">
                    <Link to="/">
                        <button className="current">about</button>
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
                <iframe title="Resume" src="public\resumemay2020.pdf" width="500" height="600"></iframe>
            </div>
        </div>
    )
};

export default Resume;