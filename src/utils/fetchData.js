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
export const DonorDashAPI = async (token, id) => {
  const res = await axios.get(
    `https://bckendapi.herokuapp.com/api/donar/donarDashboard/${id}`,

    {
      headers: { Authorization: token },
    }
  );
  return res;
};
