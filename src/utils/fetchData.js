import axios from "axios";
import API_URL from '../service/url'
// donor signup and login

export const signupDonorAPI = async (url, post) => {
  console.log(post,"error")

  const res = await axios.post(
    `${API_URL}user/${url}`,
    post
  );
  console.log("res",res)
  return res;
};
export const signinDonorAPI = async (url, post, token) => {
  const res = await axios.post(
    `${API_URL}user/${url}`,
    post,
    {
      headers: { Authorization: token },
    }
  );
  return res;
};

// appli sign up  & login

export const signupAppliAPI = async (url, post) => {
  const res = await axios.post(
    `${API_URL}user/${url}`,
    post
  );
  return res;
};
export const signinAppliAPI = async (url, post, token) => {
  const res = await axios.post(
    `${API_URL}user/${url}`,
    post,
    {
      headers: { Authorization: token },
    }
  );
  return res;
};
