import { signinAppliAPI, signupAppliAPI } from "../../../utils/fetchData";
import axios from "axios";

export const TYPES = {
  AUTH_APPLI: "AUTH_APPLI",
  APPLI_DASH: "APPLI_DASH",
  SET_LOADER: "SET_LOADER",
  GET_ALL_SCHOL: "GET_ALL_SCHOL",
  GET_LEADERS: "GET_LEADERS",
  GET_APPLI_PROFILE: "GET_APPLI_PROFILE",
};

export const signupAppli = (data, history) => async (dispatch) => {
  try {
    dispatch({ type: "NOTIFY", payload: { loading: true } });
    const res = await signupAppliAPI("signup", data);
    // console.log(res);
    history.push("/loginApli");
    dispatch({
      type: "AUTH_APPLI",
      payload: {
        user: res.data,
      },
    });

    dispatch({
      type: "NOTIFY",
      payload: {
        success: res.data.message,
      },
    });
  } catch (err) {
    dispatch({
      type: "NOTIFY",
      payload: {
        error: err.response.data.message,
      },
    });
  }
};

export const loginAppli = (data, history) => async (dispatch) => {
  try {
    dispatch({ type: "NOTIFY", payload: { loading: true } });
    const res = await signinAppliAPI("signin", data);
    localStorage.setItem("auth-token", true);
    localStorage.setItem("token", res.data.token);

    localStorage.setItem("id", res.data._id);
    console.log(res);
    history.push("/dashboard");

    dispatch({
      type: "AUTH",
      payload: {
        token: res.data.token,
        user: res.data,
      },
    });

    dispatch({
      type: "NOTIFY",
      payload: {
        success: "succesfully login",
      },
    });
  } catch (err) {
    dispatch({
      type: "NOTIFY",
      payload: {
        error: "error",
      },
    });
  }
};

export const loaderHelper = (data) => {
  return {
    type: "SET_LOADER",
    payload: data,
  };
};
export const appliDash = (id) => {
  return async (dispatch) => {
    try {
      dispatch(loaderHelper(true));

      const { data } = await axios({
        method: "Get",
        url: `https://bckendapi.herokuapp.com/api/user/dashboard/${id}`,
      });
      dispatch(loaderHelper(false));

      dispatch({
        type: "APPLI_DASH",
        payload: data,
      });
    } catch (err) {
      console.log("Error in getStage");
    }
  };
};
export const getAllSchlor = () => {
  return async (dispatch) => {
    try {
      dispatch(loaderHelper(true));

      const { data } = await axios({
        method: "Get",
        url: `https://bckendapi.herokuapp.com/api/applicant/allScholarships`,
      });
      dispatch(loaderHelper(false));

      dispatch({
        type: "GET_ALL_SCHOL",
        payload: data,
      });
    } catch (err) {
      console.log("Error in getStage");
    }
  };
};
export const getLeaders = () => {
  return async (dispatch) => {
    try {
      // dispatch(loaderHelper(true));

      const { data } = await axios({
        method: "Get",
        url: `https://bckendapi.herokuapp.com/api/user/leaders`,
      });
      // dispatch(loaderHelper(false));
      // console.log(data);
      dispatch({
        type: "GET_LEADERS",
        payload: data,
      });
    } catch (err) {
      console.log(err);
    }
  };
};
export const getAppliProfile = (id) => {
  return async (dispatch) => {
    try {
      dispatch(loaderHelper(true));

      const { data } = await axios({
        method: "Get",
        url: `https://bckendapi.herokuapp.com/api/user/dashboard/${id}`,
      });
      dispatch(loaderHelper(false));

      dispatch({
        type: "GET_APPLI_PROFILE",
        payload: data,
      });
    } catch (err) {
      console.log("Error in getStage");
    }
  };
};
