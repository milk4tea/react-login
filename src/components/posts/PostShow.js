import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchPost } from "../../actions";
import "./PostShow.css";

class PostShow extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchPost(id);
  }

  render() {
    if (!this.props.post) {
      return <div>Loading...</div>;
    }

    const { title, body } = this.props.post;
    return (
      <main className="mdl-layout__content">
        <div className="mdl-grid">
          <div className="mdl-layout-spacer"></div>
          <div className="mdl-cell mdl-cell--8-col">
            <div className="mdl-card mdl-shadow--2dp post-show">
              <div className="mdl-card__title">
                <h5 className="mdl-card__title-text">{title}</h5>
              </div>
              <div className="mdl-card__supporting-text">{body}</div>
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
}

const mapStateToProps = (state, ownProps) => {
  return { post: state.posts[ownProps.match.params.id] };
};
export default connect(
  mapStateToProps,
  { fetchPost }
)(PostShow);
