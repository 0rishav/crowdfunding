import React from 'react'
import "./signup.css"
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <div>
        <div className='signup-page'>
            <div className='signup'>
                <h1>Sign up</h1>
                <label htmlFor="username">Name</label>
                <input type="text" required className="input-with-cursor" name="" placeholder='Enter Your Name' />
                <label htmlFor="username">Email</label>
                <input type="email" required className="input-with-cursor" name="" placeholder='Enter Your Email' />
                <label htmlFor="username">Phone</label>
                <input type="number" required className="input-with-cursor" name="" placeholder='Enter Your Phone' />
                <label htmlFor="username">Question</label>
                <input type="text" required className="input-with-cursor" name="" placeholder='what is Your favourite sports?' />
                <label htmlFor="username">Password</label>
                <input type="text" required className="input-with-cursor" name="" placeholder='Enter Your Password' />
                <p>Already have an account ? <Link to={"/login"} className='linked'>Login</Link></p>
                <button>Register</button>
            </div>
        </div>
    </div>
  )
}

export default Signup