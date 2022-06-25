import * as React from "react";
import { Link } from "gatsby";

const Header = () => (
  <div id="header">
    <nav className="border-b-2 border-orange-600 grid grid-cols-3 pt-2">
      <Link to="/about/" className="h-16">
        <svg viewBox="0 0 200 200" className="fill-orange-400">
          <path
            d="M62.4,-30.2C76.7,-11.2,81.3,19.2,69.3,36.9C57.3,54.6,28.6,59.5,0.5,59.3C-27.7,59,-55.5,53.5,-66.5,36.4C-77.6,19.2,-72,-9.5,-58.1,-28.3C-44.2,-47,-22.1,-55.7,0.9,-56.3C24,-56.8,48,-49.2,62.4,-30.2Z"
            transform="translate(75 75)"
          />
        </svg>
        <span className="text-xl lg:text-2xl pr-8 lg:pr-10 mt-8 lg:mt-12 font-bold hover:text-orange-800">
          About
        </span>
      </Link>
      <header className="text-base text-center text-orange-900">
        <Link to="/">Archives of Tomorrow</Link>
      </header>
      <Link to="/books/" className="h-16">
        <svg viewBox="0 0 200 200" className="fill-orange-400">
          <path
            d="M67.8,-27.6C72.2,-8.3,49.5,14.3,27.2,28.4C4.9,42.4,-17,48,-36.9,36.8C-56.9,25.6,-74.8,-2.3,-68.3,-24.4C-61.9,-46.5,-30.9,-62.9,0.4,-63C31.7,-63.1,63.3,-47,67.8,-27.6Z"
            transform="translate(75 75)"
          />
        </svg>
        <span className="pr-8 lg:pr-12 text-xl lg:text-2xl mt-5 lg:mt-8 font-bold hover:text-orange-800">
          Books
        </span>
      </Link>
    </nav>
  </div>
);

export default Header;
