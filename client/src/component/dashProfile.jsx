// eslint-disable-next-line no-unused-vars
import { Alert, Button, TextInput } from 'flowbite-react'
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from 'firebase/storage'
import { app } from '../firebase'
import { getAuth } from "firebase/auth";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const dashProfile = () => {
  const { currentUser } = useSelector((state) => state.user)
  const [profilePhoto, setProfilePhoto] = useState(null)
  const [ImageFileurl, setImageFileurl] = useState(null)
  const [uploading, setUploading] = useState(null)
  const auth = getAuth();
    console.log(auth.currentUser); 

  const handleImageChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      setProfilePhoto(file)
      setImageFileurl(URL.createObjectURL(file))
    }
  }

  useEffect(() => {
    if (profilePhoto) {
      uploadImage()
    }
  }, [profilePhoto])

  const uploadImage = async () => {
    console.log('uploading image')
    

    const storage = getStorage(app)
    const fileName = new Date().getTime() + profilePhoto.name
    const storageRef = ref(storage, fileName)
    const uploadTask = uploadBytesResumable(storageRef, profilePhoto)

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        console.log('Upload is ' + progress + '% done')
        setUploading(progress.toFixed(0))
        console.log('Progress:', uploading)
        switch (snapshot.state) {
          case 'paused':
            console.log('Upload is paused')
            break
          case 'running':
            console.log('Upload is running')
            break
        }
      },
      (error) => {
        console.error(error)
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setImageFileurl(downloadURL)
        })
      }
    )
  }

  return (
    <div className='max-w-lg mx-auto p-3 w-full'>
      <h1 className='my-7 text-center font-semibold text-3xl'>Profile</h1>
      <form className='flex flex-col gap-4'>
        <input type='file' accept='image/*' onChange={handleImageChange} />
        <div className="relative w-32 h-32 self-center cursor-pointer shadow-md overflow-hidden rounded-full">
  {uploading > 0 && uploading < 100 && (
    <div className="absolute inset-0 flex items-center justify-center z-10">
      <CircularProgressbar
        value={uploading}
        text={`${uploading}%`}
        strokeWidth={5}
        styles={{
          root: {
            width: '100%',
            height: '100%',
          },
          path: {
            stroke: 'blue',
          },
        }}
      />
    </div>
  )}
  <img
    src={ImageFileurl || currentUser.profilePhoto}
    alt="user"
    className={`rounded-full border-8 border-[lightgray] object-cover w-full h-full transition-all duration-300 ${
      uploading > 0 && uploading < 100 ? 'blur-sm' : ''
    }`}
  />
</div>

        <TextInput type='text' id='username' placeholder='username' defaultValue={currentUser.username} />
        <TextInput type='email' id='email' placeholder='@gmail.com' defaultValue={currentUser.email} />
        <TextInput type='password' id='password' placeholder='******' />
        <Button type='submit' className='bg-blue-500 text-white border-blue-500 hover:bg-blue-600 outline-none'>
          Update
        </Button>
      </form>
      <Alert color='failure'/>

      <div className='text-red-500 flex justify-between mt-5'>
        <span className='cursor-pointer'>Delete account</span>
        <span className='cursor-pointer'>Sign out</span>
      </div>
    </div>
  )
}

export default dashProfile
