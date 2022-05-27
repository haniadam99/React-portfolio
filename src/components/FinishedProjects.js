import React, { useEffect } from 'react';
import C from '../Assets/C.jpg';
import Java from '../Assets/Java.jpg';
import NetProject from '../Assets/NetProject.jpg';
import './FinishedProjects.css';
import './Preview.css';
import Aos from 'aos';
import 'aos/dist/aos.css';

const FinishedProjects = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="projects">
      <article className="about-me  project" data-aos="fade-down">
        <img className="myImage" alt="Java" src={Java} />

        <div className="flex-item">
          <h2 className="article_title">Java Project</h2>
          <p>
          This project was about developing a system with inspiration that comes from the film Men In Black. 
          The project was a group project with 3 people.
          With the help of the system, it should be possible to register agents, aliens and all their information.
          As a user you should also be able to update, delete the information that is available.
          The project was developed with the programming language java and we have used SQL to be able to collect data there. 
          The development environment was netbeans, which was ok.
          </p>
        </div>
      </article>

      <article className="about-me  project" data-aos="fade-left">
        <img className="myImage" alt="C#" src={C} />

        <div className="flex-item">
          <h2 className="article_title">C# Project</h2>
          <p>
          The C # project was also a group project with 3 people. We created automated rss readers to use to subscribe to podcasts.
          This was done by using a desktop application for windows (Windows forms on Visual studio).
          A user should enter the url of a podcast and then the podcast should be categorized and so on.
          The programming language was C # and the development environment was Visual studio which was very good.
          </p>
        </div>
      </article>

      <article className="about-me  project" data-aos="fade-right">
        <img className="myImage" alt=".Net" src={NetProject} />

        <div className="flex-item">
          <h2 className="article_title">.Net Project</h2>
          <p>
          The .net project was much larger. We were 4 people on the project.
          We developed a dating site, where you can register an account, update information and also delete information.
          We used C# as programming language and .net framework.
          The development environment was Visual Studio. 
          </p>
        </div>
      </article>
    </div>
  );
};

export default FinishedProjects;
