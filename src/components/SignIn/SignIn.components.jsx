import React, { useState } from 'react';
import './SignIn.styles.scss';
import FormInput from '../FormInput/FormInput.component';
import CustomButton from '../custom-button/custom-button.components';
import { auth, signInWithGoogle} from '../../firebase/firebase.utils';


const SignIn = () => {
    const [ userCredentials , setuserCredentials ] = useState({
        email: '',
        password:''
    })
    const { email, password } = userCredentials;
    const handleSubmit = async event => {
        event.preventDefault();       
        try {
            await auth.signInWithEmailAndPassword(email, password);
            setuserCredentials({ ...userCredentials, email:'', password:''});

        }catch(error) {
            console.log(error);
        }
    }
    const handleChange = event => {
        const {name ,value} = event.target;
        setuserCredentials({ ...userCredentials, [name]: value});
    }

    return(<div className='sign-in'>
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput 
                    name='email' 
                    type='email'
                    value={email}
                    handleChange={handleChange}
                    lable='Email'
                    required/>
                <FormInput 
                    name='password' 
                    type='password'
                    value={password}
                    handleChange={handleChange}
                    lable='Password'
                    required/>
                    <div className='buttons'>
                    <CustomButton type='submit'> Sign in</CustomButton> 
                    <CustomButton onClick ={signInWithGoogle} isGoogleSignIn>
                        Sign in with Google
                        </CustomButton>    
                        </div>   
                            
            </form>    
        </div>)
    }


export default SignIn;