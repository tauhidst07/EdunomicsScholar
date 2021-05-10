import React from "react";
import { useSelector } from "react-redux";
import Loading from "./Loading";
import Toast from "./Toast";

function Alert({ isSignup, isAppSignup }) {
  const { notify } = useSelector((state) => state);

  return (
    <div>
      {notify.loading && <Loading />}
      {isSignup & isAppSignup ? <></> : <>{notify.success && <Toast />}</>}
    </div>
  );
}

export default Alert;
