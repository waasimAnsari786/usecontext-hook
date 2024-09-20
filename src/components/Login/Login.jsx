import React, { useContext, useState } from "react";
import { MainContext } from "../../context/MainContext";

export default function Login() {
  const [userName, setUserName] = useState("");
  const [userPwd, setUserPwd] = useState("");

  const { setUser } = useContext(MainContext);

  const handleOnClick = () => {
    setUser({ userName, userPwd });
  };

  return (
    <>
    <h1>Login</h1>
      <input
        type="text"
        placeholder="Your Name"
        onChange={(e) => setUserName(e.target.value)}
      />

      <input
        type="password"
        placeholder="Your Password"
        onChange={(e) => setUserPwd(e.target.value)}
      />

      <button onClick={handleOnClick}>Submit</button>
    </>
  );
}
