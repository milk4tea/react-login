import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import GoogleAuth from "./GoogleAuth";

class Header extends Component {
  renderDashborad() {
    if (this.props.isSignedIn) {
      return (
        <Link to="/dashboard" className="mdl-navigation__link">
          Dashboard
        </Link>
      );
    }
  }
  render() {
    return (
      <>
        <header className="mdl-layout__header mdl-layout--transparent">
          <div className="mdl-layout__header-row">
            {/* Title */}
            <span className="mdl-layout-title">Blog</span>
            {/* Add spacer, to align navigation to the right */}
            <div className="mdl-layout-spacer"></div>
            {/* Navigation */}
            <nav className="mdl-navigation">
              <Link to="/" className="mdl-navigation__link">
                Posts
              </Link>
              {this.renderDashborad()}
            </nav>
            <GoogleAuth />
          </div>
        </header>
        <div className="mdl-layout__drawer">
          <span className="mdl-layout-title">Menu</span>
          <nav className="mdl-navigation">
            <Link to="/" className="mdl-navigation__link">
              Posts
            </Link>
            {this.renderDashborad()}
          </nav>
        </div>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    isSignedIn: state.auth.isSignedIn
  };
};

export default connect(mapStateToProps)(Header);
