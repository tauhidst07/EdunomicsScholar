import { TYPES } from "../actions/authAppliAction";

const initialState = {
  authAppli: null,
  appliData: [],
  loader: false,
};

const authAppliReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.AUTH_APPLI:
      return { authAppli: action.payload };
    case TYPES.APPLI_DASH:
      return { ...state, appliData: action.payload };
    case TYPES.SET_LOADER:
      return { loader: action.payload };
    default:
      return state;
  }
};

export default authAppliReducer;
