// eslint-disable-next-line no-unused-vars
import { Button, TextInput } from 'flowbite-react'
import React from 'react'
import { useSelector } from 'react-redux'

const dashProfile = () => {

    const {currentUser} = useSelector(state => state.user)
  return (
    <div className='max-w-lg mx-auto p-3 w-full'>
        <h1 className='my-7 text-center font-semibold text-3xl'>Profile</h1>
        <form className='flex flex-col gap-4'>
            <div className='w-32 h-32 self-center cursor-pointer shadow-md overflow-hidden rounded-full'>
            <img src={currentUser.profilePhoto} alt="user" className='border rounded-full border-8 border-[lightgray] object-cover w-full h-full' />
            </div>
            <TextInput type='text' id='username' placeholder='username' defaultValue={currentUser.username} />
            <TextInput type='email' id='email' placeholder='@gmail.com' defaultValue={currentUser.email} />
            <TextInput type='password' id='password' placeholder='******'/>
            <Button type='submit' className='bg-blue-500 text-white border-blue-500 hover:bg-blue-600 outline-none'>
    update
</Button>
        </form>

        <div className='text-red-500 flex justify-between mt-5'>
            <span className='cursor-pointer'>Delete account</span>
            <span className='cursor-pointer'>Sign out</span>
        </div>
    </div>
  )
}

export default dashProfile