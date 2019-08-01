import React from 'react';

import './auth.css'

import LoginForm from './LoginForm/LoginForm';

export const Auth = () => {
    const loginSubmit = () => {
        console.log('sub')
    }
    return (
        <div className='auth'>
            <h1>Reawala</h1>
            <br/>
            <LoginForm
             onSubmit={loginSubmit}
            />
        </div>
    )
};

export default Auth;