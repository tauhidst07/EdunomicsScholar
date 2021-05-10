import { signinAppliAPI, signupAppliAPI } from "../../../utils/fetchData";
import axios from "axios";

export const TYPES = {
  AUTH_APPLI: "AUTH_APPLI",
  APPLI_DASH: "APPLI_DASH",
  SET_LOADER: "SET_LOADER",
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
