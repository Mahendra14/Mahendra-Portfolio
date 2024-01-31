import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";

import DownloadButton from "../components/DownloadButton";

function Home() {
  const handleIconClick = (profileUrl) => {
    window.open(profileUrl, '_blank');
  };

  const handleEmailClick = () => {
    const emailAddress = 'mraichur@asu.edu';
    const subject = 'Reaching out about an Internship Opportunity';
    const body = '<<Type Your Message HERE>>';

    const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Open the user's default email client
    window.location.href = mailtoLink;
  };
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, I am Mahendra Kumar Raichur</h2>
        <div className="prompt">
          <p>A Full Stack Developer with a passion for learning and creating.</p>
          <LinkedInIcon onClick={() => handleIconClick('https://www.linkedin.com/in/mahendra-raichur/')}/>
          <EmailIcon onClick={handleEmailClick} />
          <GithubIcon onClick={() => handleIconClick('https://github.com/Mahendra14')}/>
          <div>
          <DownloadButton /> 
          </div>
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
        <li className="item">
            <h2>Languages</h2>
            <span>JavaScript, Java, Python, TypeScript, Go, C, C++, SQL, Ruby</span>
          </li>
          <li className="item">
            <h2> Front-End</h2>
            <span>
              ReactJS (Hooks, Context APIs), NextJS, Redux, HTML, CSS, Sass, jQuery, React Native, TailwindCSS, NPM,
              Axios, MaterialUI, Yarn, Web Pack, StyledComponents, OJET, Knockout JS
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>
              NodeJS, Java Spring Boot, ExpressJS, Django, Flask, Maven,  GraphQL, ApolloServer,
              MySQL, MongoDB, DynamoDB, Helidon, PostgreSQL
            </span>
          </li>
          <li className="item">
            <h2>DevOps</h2>
            <span>Docker, Kubernetes, Oracle Cloud, AWS S3, Jenkins, Git Version Control System, CI/CD(continuous integration and deployment)
              Nginx, OCI Gateways, Kibana
            </span>
          </li>
          <li className="item">
            <h2>Tools</h2>
            <span>Elastic Search, Kibana, Kafka, LogStash, Grafana, Visual Studio, Agile, Scrum, JIRA</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
