import React from 'react';

import './sign-in-up.styles.scss';

import SignIn from '../../components/SignIn/SignIn.components';
import SignUp from '../../components/signUp/signUp.components';

const SignInAndUpPage = () => (
    <div className='sign-in-up'>
        <SignIn />
        <SignUp />
    </div>
)

export default SignInAndUpPage;