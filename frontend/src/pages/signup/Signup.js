import React, { useState } from "react";
import "./signup.css";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

const Signup = () => {
  const navigate = useNavigate();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [question, setQuestion] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `http://localhost:8000/api/v1/user/register`,
        {
          name,
          email,
          phone,
          question,
          password,
        }
      );
      if (res.data.success) {
        toast.info(res.data.message);
        navigate("/login");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Email Already Exist! Try Another one");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="signup-page">
          <div className="signup">
            <h1>Sign up</h1>
            <label htmlFor="username">Name</label>
            <input
              type="text"
              required
              className="input-with-cursor"
              value={name}
              placeholder="Enter Your Name"
              onChange={(event) => setName(event.target.value)}
            />
            <label htmlFor="username">Email</label>
            <input
              type="email"
              required
              className="input-with-cursor"
              value={email}
              placeholder="Enter Your Email"
              onChange={(event) => setEmail(event.target.value)}
            />
            <label htmlFor="username">Phone</label>
            <input
              type="number"
              required
              className="input-with-cursor"
              value={phone}
              placeholder="Enter Your Phone"
              onChange={(event) => setPhone(event.target.value)}
            />
            <label htmlFor="username">Question</label>
            <input
              type="text"
              required
              className="input-with-cursor"
              value={question}
              placeholder="what is Your favourite sports?"
              onChange={(event) => setQuestion(event.target.value)}
            />
            <label htmlFor="username">Password</label>
            <input
              type="password"
              required
              className="input-with-cursor"
              value={password}
              placeholder="Enter Your Password"
              onChange={(event) => setPassword(event.target.value)}
            />
            <p>
              Already have an account ?{" "}
              <Link to={"/login"} className="linked">
                Login
              </Link>
            </p>
            <button type="submit">Register</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Signup;
