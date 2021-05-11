import { signinDonorAPI, signupDonorAPI } from "../../../utils/fetchData";
import axios from "axios";

export const TYPES = {
  AUTH: "AUTH",
  GETDONOR: "GETDONOR",
  GET_PROFILE: "GET_PROFILE",
  GET_DATA: "GET_DATA",
  SET_LOADER: "SET_LOADER",
  GET_MY_SCHOL: "GET_MY_SCHOL",
  SET_CREATE_SCHOL: "SET_CREATE_SCHOL",
  GET_ALL_SCHOL: "GET_ALL_SCHOL",
  GET_DONOR_PROFILE: "GET_DONOR_PROFILE",
  GET_LEADERS: "GET_LEADERS",
  GET_VIEW_SCHOL: "GET_VIEW_SCHOL",
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
    localStorage.setItem("auth-token", true);
    localStorage.setItem("token", res.data.token);

    localStorage.setItem("id", res.data._id);

    history.push("/donar-dash");

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

export const getData = (id) => {
  return async (dispatch) => {
    try {
      dispatch(loaderHelper(true));

      const { data } = await axios({
        method: "Get",
        url: `https://bckendapi.herokuapp.com/api/donar/donarDashboard/${id}`,
      });
      dispatch(loaderHelper(false));

      dispatch({
        type: "GET_DATA",
        payload: data,
      });
    } catch (err) {
      console.log("Error in getStage");
    }
  };
};

export const getmySchlData = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await axios({
        method: "Get",
        url: `https://bckendapi.herokuapp.com/api/donar/myScholarships/${id}`,
      });

      dispatch({
        type: "GET_MY_SCHOL",
        payload: data,
      });
    } catch (err) {
      console.log("Error in getStage");
    }
  };
};

export const postCreateSchol = (dataSchol, history) => {
  return async (dispatch) => {
    try {
      dispatch(loaderHelper(true));

      const { data } = await axios({
        method: "Post",
        url: `https://bckendapi.herokuapp.com/api/donar/scholarship/`,
        data: dataSchol,
      });
      dispatch(loaderHelper(false));

      dispatch({
        type: "SET_CREATE_SCHOL",
        payload: data,
      });
      history.push("/all-scholar");
    } catch (err) {
      console.log(err);
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

export const getDonorProfile = (id) => {
  return async (dispatch) => {
    try {
      dispatch(loaderHelper(true));

      const { data } = await axios({
        method: "Get",
        url: `https://bckendapi.herokuapp.com/api/donar/donarprofile/${id}`,
      });
      dispatch(loaderHelper(false));

      dispatch({
        type: "GET_DONOR_PROFILE",
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

      dispatch({
        type: "GET_LEADERS",
        payload: data,
      });
    } catch (err) {
      console.log(err);
    }
  };
};
export const getViewSchol = (scholarParams) => {
  return async (dispatch) => {
    try {
      const { data } = await axios({
        method: "Get",
        url: `https://bckendapi.herokuapp.com/api/donar/oneScholarship/${
          scholarParams.split("&")[0]
        }`,
      });

      dispatch({
        type: "GET_VIEW_SCHOL",
        payload: data,
      });
    } catch (err) {
      console.log("Error in getStage");
    }
  };
};
