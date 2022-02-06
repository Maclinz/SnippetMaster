import React from 'react'
import styled from 'styled-components';
import SignUpComponent from '../Components/Auth/SignUpComponent';
import GlobalStyles from '../GlobalStyles';

function Signin() {
    return (
        <SignInPageStyled>
            <GlobalStyles />
            <SignUpComponent btn={'Sign In'} title={'Sign In'} question={'Dont have an account?'} route={'/signup'} />
            <div className="right-con">
                <div className="shape1"></div>
                <div className="shape2"></div>
                <div className="shape3"></div>
            </div>
        </SignInPageStyled>
    )
}

const SignInPageStyled = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    width: 100%;
    height: 100vh;
    .right-con{
        background-color: #171A38;
        background-image:  linear-gradient(rgba(255,255, 255, 0.04) 1px, transparent 1px), linear-gradient(to right, rgba(255,255, 255, 0.05) 1px, #171A38 1px);
        background-size: 35px 35px;
        position: relative;
        overflow: hidden;
        .shape1{
            position: absolute;
            top: 60%;
            left: 50%;
            width: 500px;
            height: 200px;
            background: var(--color-gradient-1);
            border-radius: 50%;
            filter: blur(170px);
            animation: shape1Anim 20s linear infinite;
            transition: all 1s ease-in-out;
            
        }
        .shape2{
            position: absolute;
            top: 25%;
            left: 30%;
            width: 700px;
            height: 300px;
            background: var(--button-gradient-2);
            border-radius: 50%;
            filter: blur(100px);
            transform: rotate(45deg);
            animation: shape1Anim 20s linear infinite;
            transition: all 1s ease-in-out;
            
        }
        .shape3{
            position: absolute;
            top: 10%;
            left: 10%;
            width: 700px;
            height: 300px;
            background: var(--button-gradient-5);
            border-radius: 50%;
            filter: blur(150px);
            transform: rotate(80deg);
        }

        @keyframes shape1Anim {
                0%{
                    transform: rotate(0deg) scale(0);
                }
                50%{
                    transform: rotate(360deg) scale(2);
                }
                100%{
                    transform: rotate(360deg) scale(0);
                    
                }
        }
    }
`;

export default Signin;
