import { TYPES } from "../actions/authAppliAction";

const initialState = {
  authAppli: null,
  appliData: [],
  loader: false,
  allSchol: [],
  leaders: [],
};

const authAppliReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.AUTH_APPLI:
      return { authAppli: action.payload };
    case TYPES.APPLI_DASH:
      return { ...state, appliData: action.payload };
    case TYPES.SET_LOADER:
      return { loader: action.payload };
    case TYPES.GET_ALL_SCHOL:
      return { ...state, allSchol: action.payload };
    case TYPES.GET_LEADERS:
      return { ...state, leaders: action.payload };
    default:
      return state;
  }
};

export default authAppliReducer;
