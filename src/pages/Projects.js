import React from "react";
import { Link } from "react-router-dom";

const Projects = () => {
    
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
            <div className="projects-box">
                <div className="project">
                    <a href="https://careerkarma.com/discussions/projects/food-journal-519/">
                        <img src="https://i.imgur.com/Khdt6cM.png" alt="oh.. hello" />
                    </a>
                    <div className="project-text">
                        <a href="https://careerkarma.com/discussions/projects/food-journal-519/">Food Journal</a>
                        <p>An alternative to typical calorie-tracking apps that focuses on logging meals with pictures.  Type the calories and take a picture, and the calorie total of the day will update.</p>
                        <div className="labels">
                            <div>javascript</div>
                            <div>html</div>
                            <div>css</div>
                            <div>webrtc api</div>
                            <div>firebase</div>
                        </div>
                    </div>
                </div>
                <div className="project">
                    <p>IM A PROJECT TOO</p>
                </div>
            </div>
        </div>
    )
};

export default Projects;