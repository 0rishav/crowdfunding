import React, { useState } from "react";
import "./login.css";
import axios from "axios";
import { toast } from "react-toastify";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/auth";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [auth, setAuth] = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `http://localhost:8000/api/v1/user/login`,
        {
          email,
          password,
        },
        {
          withCredentials: true,
        }
      );
      if (res.data.success) {
        toast.info(res.data.message);
        setAuth({
          ...auth,
          user: res.data.user,
          token: res.data.token,
        });
        localStorage.setItem("auth", JSON.stringify(res.data));
        navigate(location.state || "/");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Incorrect Email or Password !");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="login-page">
          <div className="login">
            <h1>Log in</h1>
            <label htmlFor="username">Email</label>
            <input
              type="email"
              autoComplete="off"
              required
              className="input-with-cursor"
              value={email}
              placeholder="Enter Your Name"
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="username">Password</label>
            <input
              type="password"
              autoComplete="off"
              required
              className="input-with-cursor"
              value={password}
              placeholder="Enter Your Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <h2>
              Don't remember password click here ?{" "}
              <Link to={"/forgot-password"}>Forgot password</Link>
            </h2>
            <p>
              Don't have an account ?{" "}
              <Link to={"/signup"} className="linked">
                SignUp
              </Link>
            </p>
            <button type="submit">Login</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
