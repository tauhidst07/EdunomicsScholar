import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "./Loading";
import Toast from "./Toast";

function Alert({ isSignup }) {
  const { notify } = useSelector((state) => state);

  return (
    <div>
      {notify.loading && <Loading />}
      {isSignup ? <></> : <>{notify.success && <Toast />}</>}
    </div>
  );
}

export default Alert;
