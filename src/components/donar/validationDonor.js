// export default function validateInfo(values) {
//   let errors = {};

//   // Name

//   if (!values.name.trim()) {
//     errors.name = "Name is Required!";
//   }
//   //username
//   if (!values.username.trim()) {
//     errors.username = "Username is Required!";
//   }
//   //email
//   if (!values.name.trim()) {
//     errors.name = "Email is Required!";
//   } else if (!/\S+@\S+\.\S+/.test(values.email)) {
//     errors.email = "Email address is invalid";
//   }
//   if (!values.password) {
//     errors.password = "Password is required";
//   } else if (values.password.length < 6) {
//     errors.password = "Password needs to be 6 characters or more";
//   }

//   return errors;
// }
