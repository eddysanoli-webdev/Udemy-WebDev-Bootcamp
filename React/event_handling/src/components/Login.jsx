import React from 'react';
import Input from './Input';

const Login = (props) => {
    return (
        <form className="form">
            <h1>{props.isRegistered ? 'Login' : 'Register'}</h1>
            <Input type="text" placeholder="Username"/>
            <Input type="password" placeholder="Password"/>

            {/* Render the "confirm password" field only if the user is registered */}
            { !props.isRegistered && (
                <Input type="confirm_password" placeholder="Confirm Password"/>
            )}
            
            <button type="submit">{props.isRegistered ? 'Login' : 'Register'}</button>
        </form>
    );
}

export default Login;