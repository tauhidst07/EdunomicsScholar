import {
  signinDonorAPI,
  signupDonorAPI,
  DonorDashAPI,
} from "../../../utils/fetchData";

export const TYPES = {
  AUTH: "AUTH",
  GETDONOR: "GETDONOR",
  GET_PROFILE: " GET_PROFILE",
};

export const signupDonor = (data, history) => async (dispatch) => {
  try {
    dispatch({ type: "NOTIFY", payload: { loading: true } });
    const res = await signupDonorAPI("signup-donar", data);
    console.log(res);
    history.push("/login");
    dispatch({
      type: "AUTH",
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

export const loginDonor = (data, history) => async (dispatch) => {
  try {
    dispatch({ type: "NOTIFY", payload: { loading: true } });
    const res = await signinDonorAPI("signin-donar", data);
    history.push("/donar-dash");

    // console.log(res);
    dispatch({
      type: "AUTH",
      payload: {
        token: res.data.token,
        user: res.data,
      },
    });
    localStorage.setItem("auth-token", true);
    localStorage.setItem("token", res.data.token);

    localStorage.setItem("id", res.data._id);

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
        error: err.response.data.message,
      },
    });
  }
};
export const DonorDASH = (data, history) => async (dispatch) => {
  try {
    const getToken = localStorage.getItem("token");
    dispatch({ type: "GETDONOR", payload: { loading: true } });
    const res = await DonorDashAPI(getToken, data);

    console.log(res);
    dispatch({
      type: "AUTH",
      payload: {
        token: res.data.token,
        user: res.data,
      },
    });
    // localStorage.setItem("auth-token", true);
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
