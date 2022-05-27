import React, { useEffect } from 'react';
import './Preview.css';
import hani from '../Assets/hani.jpg';
import Aos from 'aos';
import 'aos/dist/aos.css';
import About from '../routes/About.js'; 
import { Link } from 'react-router-dom';

const Preview = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="about">
      <article className="about-me" data-aos="fade-down">
        <img className="myImage" alt="Hani" src={hani} />

        <div className="flex-item">
          <h2 className="article_title">Hani Mohamed</h2>
          <p>
          I'm a system development student at Orebro University. I've had courses in Java, C#, .net, SQL, web-development and
                    other thoeritcal courses such as Interaction design, requirements management and etc. <br></br> 
            <br></br>
            <Link to="/About" className='readBtn'>Read More</Link>
          </p>
        </div>
      </article>
    </div>
  );
};

export default Preview;
