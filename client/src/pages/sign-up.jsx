// eslint-disable-next-line no-unused-vars
import { Button, Label, TextInput } from 'flowbite-react'
// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Link } from 'react-router-dom'

const sign_up = () => {
  return (
    <div className='min-h-screen mt-20'>
        {/* left side */}
        <div className='flex-1'>
        <div className='flex p-3 max-w-3xl mx-auto'>     
        <Link
        to="/"
        className="text-4xl  font-bold dark:text-white"
      >
        <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
          Praharsh
        </span>
        Blog
      </Link>
      <p className='mt-5 text-sm'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis nam pariatur ducimus.</p>
        </div>
        </div>
        {/* right side */}
        <div className='flex-1'>
            <div>
                <form className='flex flex-col gap-4'>
                    <div>
                        <Label value='Your Name' />
                        <TextInput 
                            placeholder='Usename'
                            id = "username"
                        />
                    </div>
                    <div>
                        <Label value='Your email' />
                        <TextInput 
                            placeholder='name@gmail.com'
                            id = "email"
                        />
                    </div>
                    <div>
                        <Label value='Your password' />
                        <TextInput 
                            placeholder='Enter password'
                            id = "password"
                        />
                    </div>

                    <Button gradientDuoTone='purpleToPink' type='submit'>
                        Sign Up
                    </Button>
                </form>

                <div>
                    <span>Have an account?</span>
                    <Link to='/sign-in'>Sign In</Link> 
                </div>
            </div>
        </div>
    </div>
  )
}

export default sign_up