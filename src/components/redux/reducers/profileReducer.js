import { TYPES } from "../actions/authAction";

const initialState = {};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.GET_PROFILE:
      return action.payload;
    default:
      return state;
  }
};

export default profileReducer;
