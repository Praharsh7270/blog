import { Alert, Button, Label, Spinner, TextInput } from 'flowbite-react';
// eslint-disable-next-line no-unused-vars
import { React, useState } from 'react';
import { Link ,useNavigate } from 'react-router-dom';

const SignUp = () => {
    const Navigate = useNavigate();
  const [formData, setFormData] = useState({ username: '', email: '', password: '' });
    const[errorMeassage, setErrorMessage] = useState(null);
    const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!formData.username || !formData.email || !formData.password){
      return setErrorMessage("All fields are required");
    }

    try {
        setLoading(true);
        setErrorMessage(null);
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        console.log('User signed up successfully:', data);
        setLoading(false);
        Navigate('/signin');
      } else {
        console.error('Sign-up failed:', data);
        setErrorMessage("Client side error");
        setLoading(false);
      }
    } catch (err) {
      console.error('Error during sign-up:', err);
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
              <Label value="Your Name" />
              <TextInput
                placeholder="Username"
                id="username"
                onChange={handleChange}
                value={formData.username}
              />
            </div>
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
                ) : "Sign Up"
              }
            </Button>
          </form>
          <div>
            <span>Have an account?</span>
            <Link to="/signin">Sign In</Link>
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

export default SignUp;
