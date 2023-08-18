import React from "react";
import styles from './About.scss'
import "../../styles/partials/_layout.scss";
import "../../styles/partials/_services.scss";

const About = () => {
  return (
    <>
      <div className={styles.aboutwrraper}>
        <div className={styles.aboutcontainer}>
          <p>
            I am arash ammarlooi , a full stack web & mobile application developer & designer . I
            have worked for about 6 years in web and mobile application
            developing . I have exprienced in developing and managing diffrent
            web and mobile applications . In this case I have a deep knowledge about
            implementing the code with javascript (react js , nodejs) and
            varoius tehcnologies related to web and mobile developing . also
            experienced in designing superb user interfaces for any kind of
            software system. Dou to design and develop various computer software
            applications, such as mobile apps and websites, and web applications
            , I have a great deal of creativity and speed in the field of design
            and implementing easy & clean algorithms for implementing the code .
            also I have so much willingnes and interested in working with great
            companies and also great teams. I like to be in the part of the
            company progression and advantage, and also I am a kind of
            hardworking, committed, responsible, peace-loving, and a regular person
            and also passionate for working in the field of software design.
          </p>
        </div>
        {/* <div className="footer">Developed and deisgned by Arash Ammarlooi</div> */}
      </div>
    </>
  );
};

export default About;
