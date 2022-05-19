import Router from 'next/router';
import React from 'react'
import styled from 'styled-components';
const warning = <i className="fi fi-sr-shield-exclamation"></i>
import TagButton from '../Components/TagButton';

function Popup({ title, message }) {
    return (
        <PopupStyled>
            <div className="p-overlay" onClick={() => Router.push('/')}></div>
            <div className="p-data">
                <h1 className='gradient-1'>{warning}</h1>
                <p className='gradient-text-1'>
                    {message}
                </p>
                <div className="exit-con" >
                    <div className="exit" onClick={() => Router.push('/')}>
                        <TagButton
                            name={'No Problem!'}
                            color={'var(--text-gradient-3)'}
                            bg={'var(--button-gradient-11)'}
                        />
                    </div>
                </div>
            </div>
        </PopupStyled>
    )
}

const PopupStyled = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: 100;
    .p-overlay{
        background: rgba(0, 0, 0, 0.5);
        width: 100%;
        height: 100%;
    }
    .p-data{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: #fff;
        padding: 2rem;
        border-radius:var(--border-radius-md);
        .exit-con{
            display:flex ;
            justify-content: center;
            margin-top:2rem ;
        }
        p{
            font-size:1.3rem ;
        }
        h1{
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 2rem ;
            i{
                font-size: 5rem;
                background:var(--text-gradient-3) ;
                color: transparent; 
                background-clip: text;
                -webkit-background-clip: text;
            }
        }
    }
    
`;

export default Popup;