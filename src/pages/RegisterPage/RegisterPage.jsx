import React from 'react';
import "./registerPage.css";
import Lottie from 'lottie-react';
import animationData from "../../assets/Animation - 1728213938956.json";

export default function RegisterPage() {
  return (
    <div className='RegisterPageContainer'>
      <div className='RegisterPage'>
    <div className='RegisterPageAnimation'>
    <Lottie animationData={animationData}/>
    </div>
    <div>
      <h1 className='RegisterH1'>Sign Up</h1>
      <form className='RegisterForm'>
        <label htmlFor="firstName">First name:</label>
        <input type="text" name='firstName' placeholder='First name'/>
        <label htmlFor="lastName">Last name:</label>
        <input type="text" name='lastName' placeholder='Last name'/>
        <label htmlFor="email">Email:</label>
        <input type="text" name='email' placeholder='Email'/>
        <label htmlFor="birthDate">Birth date:</label>
        <input type="date" name='birthDate'/>
        <label htmlFor="password">Password:</label>
        <input type="password" name='password' placeholder='Password'/>
        <div>
        <button type='submit' className='RegisterEnterBtn'>Enter</button>
        <button type='button'>Back to Sign in</button>
        </div>
      </form>
    </div>
      </div>
    </div>
  )
}
