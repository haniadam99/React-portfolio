import React from "react";
import './Skills.css'



function Skills(){
    return(
        <div className="wrapper">
            <div className="container">
                <h2>Skills</h2>

                <div className="skills">
                    <div className="content">
                        <span>HTML</span>
                        <span>90%</span>
                    </div>
                    <div className="bar">
                    <div id="html-bar"></div>
                    </div>
                </div>

                <div className="skills">
                    <div className="content">
                        <span>CSS</span>
                        <span>90%</span>
                    </div>
                    <div className="bar">
                    <div id="css-bar"></div>
                    </div>
                </div>

                <div className="skills">
                    <div className="content">
                        <span>Java</span>
                        <span>60%</span>
                    </div>
                    <div className="bar">
                    <div id="Java-bar"></div>
                    </div>
                </div>

                <div className="skills">
                    <div className="content">
                        <span>C#</span>
                        <span>70%</span>
                    </div>
                    <div className="bar">
                    <div id="C-bar"></div>
                    </div>
                </div>

                <div className="skills">
                    <div className="content">
                        <span>Javascript</span>
                        <span>60%</span>
                    </div>
                    <div className="bar">
                    <div id="Javascript-bar"></div>
                    </div>
                </div>
            </div>
        </div>

    )
}




export default Skills