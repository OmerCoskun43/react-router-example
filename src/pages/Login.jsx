import React from "react";
import "./login.css";

const Login = () => {
  return (
    <div>
      <h1
        className="text-center
      "
      >
        Login
      </h1>
      <h2
        className="text-center
      "
      >
        Lütfen Giriş Yapınız:{" "}
      </h2>
      <div>
        <form>
          <div className="container">
            <label>Username : </label>
            <input
              type="text"
              placeholder="Enter Username"
              name="username"
              required=""
            />
            <label>Password : </label>
            <input
              type="password"
              placeholder="Enter Password"
              name="password"
              required=""
            />
            <button type="submit">Login</button>
            <input type="checkbox" defaultChecked="checked" /> Remember me
            <button type="button" className="cancelbtn">
              {" "}
              Cancel
            </button>
            Forgot <a href="#"> password? </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
