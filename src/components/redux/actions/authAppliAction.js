import { signinAppliAPI, signupAppliAPI } from "../../../utils/fetchData";

export const TYPES = {
  AUTH_APPLI: "AUTH_APPLI",
};

export const signupAppli = (data, history) => async (dispatch) => {
  try {
    dispatch({ type: "NOTIFY", payload: { loading: true } });
    const res = await signupAppliAPI("signup", data);
    console.log(res);
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
