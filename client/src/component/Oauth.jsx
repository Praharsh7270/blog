// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Button } from 'flowbite-react';
import { AiFillGoogleCircle } from 'react-icons/ai';
import { getAuth, GoogleAuthProvider,signInWithPopup } from 'firebase/auth';
import { app } from '../firebase';
import { useDispatch } from 'react-redux';
import { signInSuccess  } from '../redux/user/UserSlice';
import { useNavigate } from 'react-router-dom';


const useGoogleSignIn = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleGoogleClick = async () => {
        const auth = getAuth(app);
        const provider  = new GoogleAuthProvider();
        provider.setCustomParameters({ prompt: 'select_account' });

        try{

            const resultFromGoogle = await signInWithPopup(auth, provider);
            console.log(resultFromGoogle);
            const res = await fetch('/api/auth/google', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ 
                    name: resultFromGoogle.user.displayName,
                    email: resultFromGoogle.user.email,
                    googlePhotoUrl: resultFromGoogle.user.photoURL,
                 }),
            });
            const data = await res.json();
            if(res.ok){
                console.log('User signed in successfully:', data);
                 dispatch(signInSuccess(data));
                 navigate('/');
            }
        }
        catch(err){
            console.error('Error during Google sign-in:', err);
            
        }
        // Handle the Google OAuth login here
    };

    return handleGoogleClick;
};

const Oauth = () => {
    const handleGoogleClick = useGoogleSignIn();

    return (
        <div>
            <Button
                type="button"
                className=" text-white font-bold py-2 px-4 rounded inline-flex items-center"
                outline
                onClick={handleGoogleClick}
            >
                <AiFillGoogleCircle size={30} />
                <span className="ml-2">Sign in with Google</span>
            </Button>
        </div>
    );
};

export default Oauth;
