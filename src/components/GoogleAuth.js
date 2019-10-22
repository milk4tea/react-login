import React, { Component } from "react";
import { connect } from "react-redux";
import { signIn, signOut } from "../actions";
import history from "../history";

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

  onSignInClick = e => {
    this.auth.signIn();
  };

  onSignOutClick = e => {
    this.auth.signOut();
    history.push("/");
  };

  renderAuthButton() {
    if (this.props.isSignedIn === null) {
      return null;
    } else if (this.props.isSignedIn) {
      return (
        <>
          <button
            title="Sign Out"
            onClick={this.onSignOutClick}
            className="mdl-button mdl-js-button mdl-button--raised mdl-button--accent"
          >
            Sign Out
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
            className="mdl-button mdl-js-button mdl-button--raised mdl-button--accent"
          >
            Sign In
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
  return {
    isSignedIn: state.auth.isSignedIn,
    profile: state.auth.profile
  };
};
export default connect(
  mapStateToProps,
  { signIn, signOut }
)(GoogleAuth);
