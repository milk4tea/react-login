import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import "./Dashboard.css";

class Dashboard extends Component {
  render() {
    if (this.props.isSignedIn) {
      const { name, email, imageUrl } = this.props.profile;
      return (
        <main className="mdl-layout__content">
          <div className="mdl-grid">
            <div className="mdl-layout-spacer"></div>
            <div className="mdl-cell mdl-cell--6-col">
              <div className="mdl-card mdl-shadow--2dp profile-card">
                <div className="mdl-card__title mdl-card--expand">
                  <h2 className="md-card__title-text">Profile</h2>
                </div>
                <div className="mdl-card__supporting-text">
                  <img src={imageUrl} alt="user avatar" />
                  <div>Name: {name}</div>
                  <div>Email: {email}</div>
                </div>
                <div className="mdl-card__actions mdl-card--border">
                  <Link
                    to="/"
                    className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect"
                  >
                    Back
                  </Link>
                </div>
              </div>
            </div>
            <div className="mdl-layout-spacer"></div>
          </div>
        </main>
      );
    }

    return null;
  }
}

const mapStateToProps = state => {
  return {
    profile: state.auth.profile,
    isSignedIn: state.auth.isSignedIn
  };
};

export default connect(mapStateToProps)(Dashboard);
