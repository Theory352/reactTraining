import React, { useState } from "react";
import Diver from "./Diver";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import {db} from '../components/db'




const LoginForm = () => {
  const [on, setOn] = useState(false);

  const [emailVal, setEmailVal] = useState('')
  const [passwordVal, setPasswordVal] = useState('')



  const navigate = useNavigate()

  const toggleOn = (e) => {
   
    setOn(!on);
  };

  const validation = db.find((e) => { return e.email === emailVal && e.password === passwordVal })
  const HandleSubmit = (e) => { 
    e.preventDefault();
    
   if (validation) {
    navigate('/')
   } else{
    return <h1 className=" text-3xl text-red-700">Login Fail</h1>
   }

  }

  return (
    <>
      <p className=" text-center text-3xl text-blue-500  cursor-pointer p-3">Login</p>
    
      <form onSubmit={HandleSubmit} method="post" className="flex flex-col justify-center items-center gap-6">
        <input
          type="email"
          className=" border-2 border-blue-700 outline-none rounded-md p-2"
          name="email"
          placeholder="email"
          value={emailVal}
          onChange={(e) => { setEmailVal(e.target.value) }}
        />

        <div className=" relative">
          <input
            type={on ? "text" : "password"}
            className=" border-2 border-blue-700 outline-none rounded-md p-2"
            name="password"
            placeholder="password"
            value={passwordVal}
            onChange={(e) => { setPasswordVal(e.target.value) }}
          />
          <button
            onClick={toggleOn}
            className=" cursor-pointer absolute right-3 top-3"
          >
            {on ? <FaEye /> : <FaEyeSlash />}
          </button>
        </div>

        <p className="grid justify-end text-blue-500">
          <Link to='/'>Forget password</Link>
        </p>

        <button
          type="submit"
          className=" bg-blue-300 w-24 rounded-md p-2 hover:bg-blue-600 hover:text-white
      "
        >
          Log in
        </button>
      </form>

      <Diver />
    </>
  );
};

export default LoginForm;