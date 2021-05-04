import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "./Loading";

function Alert() {
  const { notify } = useSelector((state) => state);
  // const { auth, notify } = state;
  // console.log({ notify });
  return <div>{notify.loading && <Loading />}</div>;

  // <div>{alert.loading && <Loading />}</div>;
  // <div>{alert && <Loading />}</div>;
  // <div>{/* <Loading /> */}</div>;
}

export default Alert;
