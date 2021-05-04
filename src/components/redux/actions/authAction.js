import { signinDonorAPI, signupDonorAPI } from "../../../utils/fetchData";

export const TYPES = {
  AUTH: "AUTH",
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

export const loginDonor = (data) => async (dispatch) => {
  try {
    dispatch({ type: "NOTIFY", payload: { loading: true } });
    const res = await signinDonorAPI("signin-donar", data);
    // history.push("/donar-dash");

    console.log(res);
    dispatch({
      type: "AUTH",
      payload: {
        token: res.data.token,
        user: res.data,
      },
    });
    localStorage.setItem("auth-token", true);
    dispatch({
      type: "NOTIFY",
      payload: {
        success: res.data.message,
      },
    });
    // console.log(res);
  } catch (err) {
    dispatch({
      type: "NOTIFY",
      payload: {
        error: err.response.data.message,
      },
    });
  }
};
