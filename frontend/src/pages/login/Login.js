import React from 'react'
import "./login.css"
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div>
        <div className='login-page'>
            <div className='login'>
                <h1>Log in</h1>
                <label htmlFor="username">Email</label>
                <input type="email" autoComplete='off' required className="input-with-cursor" name="" placeholder='Enter Your Name' />
                <label htmlFor="username">Password</label>
                <input type="password" autoComplete='off' required className="input-with-cursor" name="" placeholder='Enter Your Password' />
                <p>Don't have an account ? <Link to={"/signup"} className='linked'>SignUp</Link></p>
                <button>Login</button>
            </div>
        </div>
    </div>
  )
}

export default Login