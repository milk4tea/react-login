import React from "react";
import { Link } from "react-router-dom";

import GoogleAuth from "./GoogleAuth";

const Header = () => {
  return (
    <header className="mdl-layout__header mdl-layout--transparent">
      <div className="mdl-layout__header-row">
        {/* Title */}
        <span className="mdl-layout-title">Blog</span>
        {/* Add spacer, to align navigation to the right */}
        <div className="mdl-layout-spacer"></div>
        {/* Navigation */}
        <nav className="mdl-navigation">
          <Link
            to="/"
            className="mdl-navigation__link mdl-typography--text-uppercase"
          >
            Posts
          </Link>
        </nav>
        <GoogleAuth />
      </div>
    </header>
  );
};

export default Header;
