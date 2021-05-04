import React from "react";
import "../styles/toast.css";
import { makeStyles } from "@material-ui/core/styles";
import { Alert, AlertTitle } from "@material-ui/lab";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "50%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));
export function DescriptionAlerts() {
  const classes = useStyles();

  return (
    <Alert
      severity="success"
      style={{ display: "flex", justifyContent: "center" }}
    >
      <AlertTitle>Registration Successfull</AlertTitle>
      Signin to Donate — <strong>check it out!</strong>
    </Alert>
  );
}
function Toast() {
  return (
    <div>
      <DescriptionAlerts />
    </div>
    // <div className="toast" style={{ right: "5px" }}>
    //   <div className="toast-header">
    //     <button>&times;</button>
    //   </div>
    //   <div className="toast-body">toast body</div>
    // </div>
  );
}

export default Toast;
