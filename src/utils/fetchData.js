import axios from "axios";

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
