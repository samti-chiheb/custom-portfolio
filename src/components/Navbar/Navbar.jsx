import React from "react";
import "./Navbar.scss";
import {images} from '../../constants'

const Navbar = () => {
  return <nav>
    <div>
      <img src={images.logo} alt="logo" />
    </div>
    <ul>
      {['home', 'about', 'work', 'skills', 'contact'].map((item, index)=>(
        <li key={`link-${index}`}>
          <div>
            <a href={`#${item}`}>{item}</a>
          </div>
        </li>
      ))}
    </ul>
  </nav>;
};

export default Navbar;
