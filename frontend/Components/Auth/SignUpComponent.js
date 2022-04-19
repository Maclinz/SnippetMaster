import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import logo from '../../public/static/images/logo.svg';
import { signUp, isAuth } from '../../actions/auth';
import Router from 'next/router';

const passwordIcon =  <i className="fi fi-rr-lock"></i>;

function SignUpComponent({ btn, title, question }) {
    const [values, setValues] = useState({
        name: '',
        email: '',
        password: '',
        error: '',
        loading: '',
        message: '',
        showForm: true,
    })

    //Destructuring from values state
    const { name, email, password, error, loading, message, showForm } = values;
    //redirect users if they manually type in the url
    useEffect(() => {
        isAuth() && Router.push('/');
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        //console.table({ name, email, password });
        //set values in the state before submitting
        setValues({ ...values, loading: true, error: false });
        //create a new user
        const user = {name, email, password};
        console.log(user);
        signUp(user)
        .then((data) => {
            //if there is an error
            if(data.error){
                setValues({ ...values, error: data.error, loading: false });
            }
            else{
                //if there is no error
                setValues({
                    ...values,
                    name: '',
                    email: '',
                    password: '',
                    error: '',
                    loading: false,
                    message: data.message,
                    showForm: false
                });
            }
        })
    }

    //Function returning another function
    const handleChange = name => (e) => {
        setValues({ ...values, error: false, [name]: e.target.value });
    }

    //show loading spinner
    const showLoading = () => (loading ? <div className="alert alert-info">Loading...</div> : '');
    //show error message
    const showError = () => (error ? <div className="alert alert-error">{error}</div> : '');
    //show success message
    const showMessage = () => (message ? <div className="alert alert-message">{message}</div> : '');

    const signUpForm = () => {
        return (
            <form action="" onSubmit={handleSubmit} >
               <div className="form-content">
                   <div className="signup-text">
                       <div className="left-text">
                           <h3 className='gradient-text-1'>{title}</h3>
                           <p>Enter credintials to continue.</p>
                       </div>
                       <div className="right-text">
                       <Image src={logo} alt="avatar" width="60" height="60" className='profile-img' />
                       </div>
                   </div>
                <div className="input-control">
                        <label htmlFor="text">Name</label>
                        <input value={name} onChange={handleChange('name')} type="text" placeholder='Enter Name' required/>
                    </div>
                    <div className="input-control">
                        <label htmlFor="email">Email</label>
                        <input value={email} onChange={handleChange('email')} type="email" placeholder='Enter Your Email' required />
                    </div>
                    <div className="input-control ">
                        <label className='password' htmlFor="password">Password <span>{passwordIcon}</span></label>
                        <input value={password} onChange={handleChange('password')} type="password" placeholder='Enter Your Password' required />
                    </div>
                    <div className="form-btn">
                        <button type='submit' className="btn-submit" >{btn}</button>
                    </div>
                    <p className='have-account'>
                        <Link href='/signin'>
                            <a >{question}</a>
                        </Link>
                    </p>
                    <div className="sign-up-con">
                        <Link href='/signin'>
                            <a className='gradient-text-1'>Sign In</a>
                        </Link>
                    </div>
                    
               </div>
            </form>
        )
    }

    return (
        <SignUpComponentStyled >
            {showError()}
            {showLoading()}
            {showMessage()}
            {showForm && signUpForm()}
        </SignUpComponentStyled >
    )
}

const SignUpComponentStyled = styled.div`
    background: var(--button-gradient-3);
    display: flex;
    align-items: center;
    justify-content: center;
    form{
        background: var(--color-white);
        border-radius: var(--border-radius-md);
        width: 50%;
        box-shadow:var(--shadow-2) ;
        .form-content{
            padding: 2.5rem;
            .signup-text{
                padding-bottom: 1rem;
                display: flex;
                justify-content: space-between;
                align-items: center;
                .left-text{
                    h3{
                        display: inline-block;
                        font-size: var(--font-size-3);
                        font-weight: 800;
                    }
                    p{
                        font-weight: 600;
                        font-size: var(--font-size-2);
                        color: var(--color-grey-3);
                    }
                }
            }
            .input-control{
                position: relative;
                margin: 2rem 0;
                input{
                    width: 100%;
                    border: 1px solid var(--color-grey-2);
                    border-radius: var(--border-radius-sm);
                    padding: 1rem;
                    margin-top: .4rem;
                }
                label{
                    padding-bottom: .4rem;
                }
            }
            .password{
                display: flex;
                justify-content: space-between;
                align-items: center;
                span{
                    opacity: 0.7;
                }
            }

            .have-account{
                display: flex;
                justify-content: flex-end;
                padding-top: 1rem;
                margin-top: 1rem;
                border-top: 1px solid var(--color-grey-1);
            }
            .sign-up-con{
                display: flex;
                justify-content: flex-end;
                padding-top: .4rem;
            }
        }
    }
`;

export default SignUpComponent;
