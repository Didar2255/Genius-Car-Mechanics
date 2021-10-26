import React from 'react';
import { Container } from 'react-bootstrap';
import useAuth from '../../Hooks/useAuth';
import './Login.css'

const Login = () => {

    const { googleSingIn, hendelForm } = useAuth()
    return (

        <Container >
            <div className='my-5 border border-2 border-primary rounded p-5'>
                <h2>Please Sign In :</h2>
                <form onSubmit={hendelForm}>
                    <input type="email" name="" id="" placeholder='Enter your email' /><br />
                    <input type="password" className='my-2' name="" id="" placeholder='Enter your password' /><br /><br />
                    <input type="submit" value="Sing in" />
                    <button className="btn btn-primary ms-4" onClick={googleSingIn}>Sign with Google</button>
                </form>

            </div>
        </Container>

    );
};

export default Login;