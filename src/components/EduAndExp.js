import React, { useEffect } from 'react';
import './EduAndExp.css';
import Aos from 'aos';
import 'aos/dist/aos.css';

const EduAndExp = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="tl">
      <h1 className="heading">Education and Experience</h1>

      <div className="cards">
        <div className="card-content" data-aos="fade-down">
          <h1 className="title">2015-2018 High School</h1>
          <p>
            I studied social studies in high school. I have had courses in psychology, socology, social studies and history. 
            I also read the basic courses such as swedish, english and math. 
          </p>
        </div>
      </div>

      <div className="cards" data-aos="fade-up">
        <div className="card-content">
          <h1 className="title">2018-2019 Warehouse job in Eskilstuna</h1>
          <p>
            Warehouse job at BCP former Mekonomen. The company sells car parts to private individuals and other companies. 
            I worked in a group who take care of all deliveries. 
          </p>
        </div>
      </div>

      <div className="cards" data-aos="fade-left">
        <div className="card-content">
          <h1 className="title">2019-  University</h1>
          <p>
            I started studying the systems science program at Örebro University in autumn of 2019. 
            The program has, among other things taught me the basics of systems science 
            and I even had various programming courses. 
          </p>
        </div>
      </div>

      <div className="cards" data-aos="fade-right">
        <div className="card-content">
          <h1 className="title">2019-2020 Warehouse Job in Örebro</h1>
          <p>
           I had a part-time job alongside my studies. I worked at Elons warehouse, a well known electronics company. 
           Elon had different amounts of products such as refrigerators, washing machines and other smaller products. 
           My tasks were to pick up products using trucks and prepare them for delivery. 
          </p>
        </div>
      </div>

      <div className="cards" data-aos="fade-up">
        <div className="card-content">
          <h1 className="title">2020-2022 Warehouse Job in Eskilstuna</h1>
          <p>
          I got another part-time job in my hometown.
           I was employed by a staffing company and I worked in various warehouses in my hometown.
          </p>
        </div>
      </div>

      <div className="cards" data-aos="fade-down">
        <div className="card-content">
          <h1 className="title">2022- Security job</h1>
          <p>
          I got another job as a security guard at securitas. The job is a part-time job alongside my studies.
         As a security guard, I have various assignments. Sometimes I guard stores or warehouses. 
         This job does not require as much physical effort compared to a warehouse job.
          </p>
        </div>
      </div>
    </div>
  );
};

export default EduAndExp;
