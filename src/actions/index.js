import { SIGN_IN, SIGN_OUT, FETCH_POSTS } from "./types";
import posts from "../apis/jsonPlaceholder";

export const signIn = profile => {
  return {
    type: SIGN_IN,
    payload: profile
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT
  };
};

export const fetchPosts = async dispatch => {
  const response = await posts.get("/posts");
  dispatch({ type: FETCH_POSTS, payload: response.data });
};
