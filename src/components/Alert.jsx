import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "./Loading";
import Toast from "./Toast";

function Alert({ ishide }) {
  const { notify } = useSelector((state) => state);

  return (
    <div>
      {notify.loading && <Loading />}
      {notify.success && <Toast />}

      {/* <Toast /> */}
    </div>
  );
}

export default Alert;
