import React, { useContext } from "react";
import { MainContext } from "../../context/MainContext";

export default function Profile() {
  const { user } = useContext(MainContext);
  if (!user) {
    return(
    <div>
      <p>Please Login!</p>
    </div>)};
  return (
    <>
      <div>
        <h1>
          Welcome {user.userName} <br /> Your password is {user.userPwd}{" "}
        </h1>
      </div>
    </>
  );
}
