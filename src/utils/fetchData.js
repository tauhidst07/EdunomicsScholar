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
// export const DonorDashAPI = async (token) => {
//   // console.log("hjg", token);
//   const newDonor = localStorage.getItem("id");
//   const res = await axios.get(
//     `https://bckendapi.herokuapp.com/api/donar/donarDashboard/${newDonor}`,

//     {
//       headers: { Authorization: token },
//     }
//   );
//   return res;
// };
