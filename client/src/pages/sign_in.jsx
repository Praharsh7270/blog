// eslint-disable-next-line no-unused-vars
import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Alert, Button, Label, Spinner, TextInput } from 'flowbite-react';
import { Link } from 'react-router-dom';
import { signInStart , signInFail ,signInSuccess } from '../redux/user/UserSlice.js';
import { useDispatch, useSelector } from 'react-redux';


const Signin = () => {

  const Navigate = useNavigate();
const [formData, setFormData] = useState({ email: '', password: '' });
const {loading,error:errorMeassage} = useSelector((state) => state.user); 
  const dispatch = useDispatch();

const handleChange = (e) => {
  setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
};


const handleSubmit = async (e) => {
  e.preventDefault();
  if(!formData.email || !formData.password){
    return dispatch(signInFail("All fields are required"));
  }

  try {
    dispatch(signInStart());
    const res = await fetch('/api/auth/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    if (res.ok) {
      console.log('User signed in successfully:', data);
      Navigate('/');
      return dispatch(signInSuccess(data));
      
    } else {
      console.error('Sign-in failed:', data);
      return dispatch(signInFail(data));
    }
  } catch (err) {
    
    return dispatch(signInFail(err));
  }
};

return (
  <div className="min-h-screen mt-20">
    {/* left side */}
    <div className="flex-1">
      <div className="flex p-3 max-w-3xl mx-auto">
        <Link to="/" className="text-4xl font-bold dark:text-white">
          <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
            Praharsh
          </span>
          Blog
        </Link>
        <p className="mt-5 text-sm">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis nam pariatur ducimus.
        </p>
      </div>
    </div>
    {/* right side */}
    <div className="flex-1">
      <div>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <div>
            <Label value="Your email" />
            <TextInput
              placeholder="name@gmail.com"
              type="email"
              id="email"
              onChange={handleChange}
              value={formData.email}
            />
          </div>
          <div>
            <Label value="Your password" />
            <TextInput
              placeholder="Enter password"
              type="password"
              id="password"
              onChange={handleChange}
              value={formData.password}
            />
          </div>
          <Button gradientDuoTone="purpleToPink" type="submit" disabled={loading}>
            {
              loading ? (
                  <>
                  <Spinner size='sm' />
                  <span className='p-3'>Loading...</span>
                  </>
              ) : "Sign in"
            }
          </Button>
        </form>
        <div>
          <span>Do not Have an account?</span>
          <Link to="/signup">Sign up</Link>
        </div>
        {
          errorMeassage &&(
              <Alert className="mt-4 bg-red-300 w-1/4">
                  {errorMeassage}
              </Alert>
          )
        }
      </div>
    </div>
  </div>
);
};

export default Signin