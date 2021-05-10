import { TYPES } from "../actions/authAppliAction";

const initialState = {};

const authAppliReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.GET_PROFILE:
      return action.payload;
    default:
      return state;
  }
};

export default authAppliReducer;
