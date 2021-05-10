import axios from "axios";

// donor signup and login

export const signupDonorAPI = async (url, post) => {
  const res = await axios.post(
    `https://bckendapi.herokuapp.com/api/user/${url}`,
    post
  );
  return res;
};
export const signinDonorAPI = async (url, post, token) => {
  const res = await axios.post(
    `https://bckendapi.herokuapp.com/api/user/${url}`,
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
    `https://bckendapi.herokuapp.com/api/user/${url}`,
    post
  );
  return res;
};
export const signinAppliAPI = async (url, post, token) => {
  const res = await axios.post(
    `https://bckendapi.herokuapp.com/api/user/${url}`,
    post,
    {
      headers: { Authorization: token },
    }
  );
  return res;
};
