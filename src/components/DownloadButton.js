import React from 'react';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
const DownloadButton = ({name,isArrow=false, resumeLink}) => {
  const handleDownload = () => {
    // // Replace 'YOUR_GOOGLE_DRIVE_LINK' with the shareable link to your resume file
    // const resumeLink = 'https://docs.google.com/document/d/1n0wyhQ3wiLRLtXh4dO0qLQFaTjMb7mRB/edit?usp=sharing&ouid=117966507979020320122&rtpof=true&sd=true';

    // Open the link in a new tab/window to trigger the download
    window.open(resumeLink, '_blank');
  };

  return (
    <button onClick={handleDownload} className='buttoncls'>
      {name} { isArrow ? <ArrowDownwardIcon style={{ padding:0,margin:0, fontSize: 30 }}/> : ""}
    </button>
    
  );
};

export default DownloadButton;
