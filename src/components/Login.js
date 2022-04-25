import React from "react";
import ForgotPassword from "./contents/ForgotPassword";
import Register from "./contents/Register";
import UserProfile from "./contents/UserProfile";
import { NavLink, Route, Routes } from "react-router-dom";
import NotFound from "./NotFound";

const Login = () => {
  // const [username, setUserName] = useState({});
  // const [password, setPassword] = useState({});

  // const

  return (
    <>
      <div>
        <form>
          <label>
            Нэр
            <input name="emailOrUsername" type="text" />
          </label>
          <label>
            Password
            <input name="password" type="password" />
          </label>
          <button type="submit">Бүртгүүлэх</button>
        </form>
      </div>
    </>
  );
};
export default Login;
