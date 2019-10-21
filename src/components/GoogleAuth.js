import React, { Component } from "react";
import { connect } from "react-redux";
import { signIn, signOut } from "../actions";

class GoogleAuth extends Component {
  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId:
            "149280653784-sbddb8bmp0e6h7ktgvbeqkjbdo267n50.apps.googleusercontent.com",
          scope: "profile email"
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.onAuthChange(this.auth.isSignedIn.get());
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  onAuthChange = isSignedIn => {
    if (isSignedIn) {
      this.props.signIn(this.auth.currentUser.get().getBasicProfile());
    } else {
      this.props.signOut();
    }
  };

  onSignInClick = () => {
    this.auth.signIn();
  };

  onSignOutClick = () => {
    this.auth.signOut();
  };

  renderAuthButton() {
    if (this.props.isSignedIn === null) {
      return null;
    } else if (this.props.isSignedIn) {
      return (
        <>
          <button
            id="sign-out-btn"
            title="Sign Out"
            onClick={this.onSignOutClick}
            className="mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab mdl-button--accent mdl-js-ripple-effect"
          >
            <i className="material-icons">exit_to_app</i>
          </button>
        </>
      );
    } else {
      return (
        <>
          <button
            id="sign-in-btn"
            title="Sign In"
            onClick={this.onSignInClick}
            className="mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab mdl-button--accent mdl-js-ripple-effect"
          >
            <i className="material-icons">perm_identity</i>
          </button>
        </>
      );
    }
  }

  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

const mapStateToProps = state => {
  return { isSignedIn: state.auth.isSignedIn };
};
export default connect(
  mapStateToProps,
  { signIn, signOut }
)(GoogleAuth);
