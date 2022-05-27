import React from 'react';
import './Slideshow.css';
import img1 from '../Assets/Img1.jpg';
import img2 from '../Assets/Img2.jpg';
import img3 from '../Assets/Img3.jpg';

function Slideshow() {
  return (
    <div className="slideshow">
      <div className="items">
        <img src={img1} alt="Project" />
        <div className="item-text">
          <h5>Java Project</h5>
          <p>
          This project was about developing a system with inspiration that comes from the film Men In Black. 
          The project was a group project with 3 people.
          </p>
        </div>
      </div>

      <div className="items">
        <img src={img2} alt="Project" />
        <div className="item-text">
          <h5>C# Project</h5>
          <p>
          The C# project was also a group project with 3 people. We created automated rss readers to use to subscribe to podcasts.
          This was done by using a desktop application for windows (Windows forms on Visual studio).
          </p>
        </div>
      </div>

      <div className="items">
        <img src={img3} alt="Project" />
        <div className="item-text">
          <h5>.net Project</h5>
          <p>
          The .net project was much larger. We were 4 people on the project.
          We developed a dating site, where you can register an account, update information and also delete information.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Slideshow;
