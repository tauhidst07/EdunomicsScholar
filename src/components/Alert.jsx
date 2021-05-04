import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "./Loading";

function Alert() {
  const { alert } = useSelector((state) => state);
  return (
    <div>
      <Loading />
    </div>
  );
}

export default Alert;
