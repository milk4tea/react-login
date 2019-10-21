import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import authReducer from "./authReducer";
import postsReducder from "./postsReducer";

export default combineReducers({
  auth: authReducer,
  posts: postsReducder,
  form: formReducer
});
