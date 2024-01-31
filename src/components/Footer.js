import React from "react";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from '@material-ui/icons/GitHub';
import "../styles/Footer.css";

function Footer() {
  const handleIconClick = (profileUrl) => {
    window.open(profileUrl, '_blank');
  };
  return (
    <div className="footer">
      <div className="socialMedia">
        <TwitterIcon onClick={() => handleIconClick('https://twitter.com/Mahendra_1_4')}/>
        <GitHubIcon onClick={() => handleIconClick('https://github.com/Mahendra14')}/>
        <LinkedInIcon onClick={() => handleIconClick('https://www.linkedin.com/in/mahendra-raichur/')}/>
      </div>
      <p> &copy; 2023 Mahendra Kumar Raichur</p>
    </div>
  );
}

export default Footer;
