import { SIGN_IN, SIGN_OUT } from "../actions/types";

const INITIAL_STATE = {
  isSignedIn: null,
  profile: null
};

const getUserDetails = profile => {
  return {
    userId: profile.getId(),
    name: profile.getName(),
    givenName: profile.getGivenName(),
    familyName: profile.getFamilyName(),
    imageUrl: profile.getImageUrl(),
    email: profile.getEmail()
  };
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SIGN_IN:
      return {
        ...state,
        isSignedIn: true,
        profile: getUserDetails(action.payload)
      };
    case SIGN_OUT:
      return { ...state, isSignedIn: false, profile: null };
    default:
      return state;
  }
};
