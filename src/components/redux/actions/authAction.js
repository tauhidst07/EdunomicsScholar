import { signinDonorAPI, signupDonorAPI } from "../../../utils/fetchData";

export const TYPES = {
  AUTH: "AUTH",
};

export const signupDonor = (data) => async (dispatch) => {
  try {
    dispatch({ type: "NOTIFY", payload: { loading: true } });
    const res = await signupDonorAPI("signup-donar", data);
    dispatch({
      type: "AUTH",
      payload: {
        user: res,
      },
    });

    dispatch({
      type: "NOTIFY",
      payload: {
        success: res.data.message,
      },
    });

    console.log(res);
  } catch (error) {}
};

export const loginDonor = (data) => async (dispatch) => {
  try {
    dispatch({ type: "NOTIFY", payload: { loading: true } });
    const res = await signinDonorAPI("signin-donar", data);
    console.log(res);
  } catch (error) {}
};
