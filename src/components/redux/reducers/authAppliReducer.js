import { TYPES } from "../actions/authAppliAction";

const initialState = {
  authAppli: null,
};

const authAppliReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.AUTH_APPLI:
      return { authAppli: action.payload };

    default:
      return state;
  }
};

export default authAppliReducer;
