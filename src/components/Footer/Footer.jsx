import React from 'react'
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="copyright app__primarybg">
      <p>&copy; {new Date().getFullYear()} Med Garci Portfolio</p>
      <p>All rights reserved</p>
      <p>
        Created with ♡ By{" "}
        <a href="http://samtichiheb.com/" target="_blank" rel="noreferrer">
          SAMTI Chiheb
        </a>
      </p>
    </div>
  );
}

export default Footer