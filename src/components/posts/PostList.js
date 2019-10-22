import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchPosts } from "../../actions";

class PostList extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  renderList() {
    return this.props.posts.map(post => {
      return (
        <div
          key={post.id}
          className="mdl-cell mdl-cell--4-col mdl-cell--8-col-tablet post-card mdl-card mdl-shadow--2dp"
        >
          <div className="mdl-card__title">{post.title}</div>
          <div className="mdl-card__supporting-text">{post.body}</div>
          <div className="mdl-card__actions mdl-card--border">
            <Link
              to={`/post/${post.id}`}
              className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect"
            >
              View
            </Link>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <main className="mdl-layout__content">
        <div className="mdl-grid">{this.renderList()}</div>
      </main>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: Object.values(state.posts),
    currentUser: state.auth.profile,
    isSignedIn: state.auth.isSignedIn
  };
};
export default connect(
  mapStateToProps,
  { fetchPosts }
)(PostList);
