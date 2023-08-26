import React, { useState } from "react";
import "./forgotpassword.css";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [question, setQuestion] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put(
        `http://localhost:8000/api/v1/user/forgot-password`,
        {
          email,
          question,
          newPassword,
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
      toast.error("something went wrong");
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="forgot-page">
          <div className="forgot">
            <h1>Forgot password</h1>
            <label htmlFor="username">Email</label>
            <input
              type="email"
              autoComplete="off"
              required
              className="input-with-cursor"
              value={email}
              placeholder="Enter Your Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="username">Answer</label>
            <input
              type="text"
              autoComplete="off"
              required
              className="input-with-cursor"
              value={question}
              placeholder="What is your favourite sports?"
              onChange={(e) => setQuestion(e.target.value)}
            />
            <label htmlFor="username">New Password</label>
            <input
              type="password"
              autoComplete="off"
              required
              className="input-with-cursor"
              value={newPassword}
              placeholder="Enter New Password"
              onChange={(e) => setNewPassword(e.target.value)}
            />
            <button type="submit">Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ForgotPassword;
