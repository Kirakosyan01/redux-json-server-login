import React from 'react';
import "./loginPage.css";
import Lottie from 'lottie-react';
import { FaRegUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import animationData from "../../assets/Animation - 1728211799876.json";
import { Link } from 'react-router-dom';

export default function LoginPage() {
  return (
    <div className='LoginPageContainer'>
      <div className='LoginPage'>
        <div className='LoginPageAnimation'>
          <Lottie animationData={animationData}/>
        </div>
        <div>
          <h1 className='LoginH1'>Welcome Back</h1>
          <p className='LoginText'>Sign in to your Account</p>
          <form className='LoginForm'>
          <FaRegUser className='LoginUserSvg'/>
          <FaLock className='LoginPasswordLock'/>
            <label htmlFor="email">Email</label>
            <input type="text" name='email' placeholder='Email' required/>
            <label htmlFor='password'>Password</label>
            <input type="password" email='password' placeholder='Password' required/>
            <button type='submit' className='LoginSignInBtn'>Sign in</button>
          </form>
          <Link className='LoginToRegister' to="/register">Don't have an account?</Link>
        </div>
      </div>
    </div>
  )
}
