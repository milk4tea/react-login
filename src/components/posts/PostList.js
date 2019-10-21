import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchPosts } from "../../actions";

class PostList extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    return <div>PostList</div>;
  }
}

const mapStateToProps = state => {
  return {
    streams: Object.values(state.posts),
    currentUser: state.auth.profile,
    isSignedIn: state.auth.isSignedIn
  };
};
export default connect(
  mapStateToProps,
  { fetchPosts }
)(PostList);
