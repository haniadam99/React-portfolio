import React from "react";
import "./AboutMe.css"; 

import hani from '../Assets/hani.jpg';




function AboutMe(){

    return(
        <div className="profile">
            <div className="profile-card">
                <div className="profie-card-left">
                    <div className="profile-img">
                        <img src={hani}></img>
                    </div>
                    <div className="profile-name">
                        Hani 
                        Mohamed
                    </div>
                    <div className="profile-underline"></div>
                    <div className="profile-job"> Front-end developer</div>
                  

                </div>

                <div className="profile-card-right">
                    <div className="profile-title"> Hello </div>
                    <div className="profile-subtitle">Here's who I am and what I do</div>

                    <div className="profile-descr">
                    I'm a system development student at Orebro University. I've had courses in Java, C#, .net, SQL, web-development and
                    other thoeritcal courses such as Interaction design, requirements management and etc. 
                     <br></br>
                     I'm mostly intrested in front-end development and UX/UI designing, my strength are development using HTML and CSS
                    </div>
                </div>
            </div>
        </div>

    )
}





export default AboutMe