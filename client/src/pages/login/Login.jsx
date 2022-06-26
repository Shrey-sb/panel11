import React, { useState } from "react";
import { axiosInstance } from "../../config";
import "./login.scss";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [approved, setApproval] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axiosInstance.post("/auth/login", {
        username: email,
        password: password,
      });
      if (res.status === 200) {
        setApproval(true);
      }
    } catch (err) {
      alert("Wrong password!");
    }
  };
  return (
    <div>
      {!approved ? (
        <div className="login">
          <span className="loginTitle">Login</span>
          <form className="loginform">
            <label>Username</label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              className="logininput"
              type="text"
              placeholder="Enter your username..."
            />
            <label>Password</label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              className="logininput"
              type="password"
              placeholder="Enter your password..."
            />
            <button
              type="submit"
              className="loginButton"
              onClick={handleSubmit}
            >
              Login
            </button>
          </form>
        </div>
      ) : (
        <Link to="/home" style={{ textDecoration: "none" }}>
          <span className="proceed">Proceed</span>
        </Link>
      )}
    </div>
  );
};

export default Login;
