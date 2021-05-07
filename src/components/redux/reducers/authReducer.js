import { TYPES } from "../actions/authAction";

const initialState = {
  auth1: null,
  auth2: null,
  myData: [],
  loader: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.AUTH:
      return { auth1: action.payload };
    case TYPES.GET_DATA:
      return { ...state, myData: action.payload };
    case TYPES.SET_LOADER:
      return { loader: action.payload };

    default:
      return { auth2: state };
  }
};

export default authReducer;
