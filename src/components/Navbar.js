import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate  } from "react-router-dom";
import "../styles/Navbar.css";
import ReorderIcon from "@material-ui/icons/Reorder";

function Navbar() {
  const [expandNavbar, setExpandNavbar] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setExpandNavbar(false);
  }, [location]);

  const handleLinkClick = (path) => {
    // Scroll to the top of the page before navigating
    window.scrollTo(0, 0);
  };

  return (
    <div className="navbar" id={expandNavbar ? "open" : "close"}>
      <div className="toggleButton">
        <button
          onClick={() => {
            setExpandNavbar((prev) => !prev);
          }}
        >
          <ReorderIcon />
        </button>
      </div>
      <div className="links">
        <Link to="/Mahendra-Portfolio" onClick={handleLinkClick}> Home </Link>
        <Link to="/projects" onClick={handleLinkClick}> Projects </Link>
        <Link to="/experience" onClick={handleLinkClick}> Experience </Link>
      </div>
    </div>
  );
}

export default Navbar;
