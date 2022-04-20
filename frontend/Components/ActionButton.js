import React from 'react'
import styled from 'styled-components';

function ActionButton({icon, name,likes}) {
    return (
        <ActionButtonStyled className='action-btn' >
            <p className='gradient-text-1'>
                {icon} <span>{likes}</span> {name}
            </p>
            <div className="bg-btn"></div>
            <div className="bg-btn-2"></div>
        </ActionButtonStyled>
    )
}

const ActionButtonStyled = styled.button`
    position: relative;
    border-radius: var(--border-radius-sm);
    display: inline-block;
    padding: .8rem 2rem;
    cursor: pointer;
    transition: var(--trans);
    border: 1px solid var(--color-grey-1);
    outline:none ;
    border:none ;
    background:transparent ;
    &:hover{
        transition: var(--trans);
        box-shadow: var(--shadow-5);
    }
    &:active{
        transition: var(--trans-quick);
        box-shadow: var(--shadow-6);
    }
    .bg-btn{
        content: '';
        position: absolute;
        transition: var(--trans);
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(110.42deg, rgba(207, 87, 163, 0.1) 29.2%, rgba(71, 49, 182, 0.1) 63.56%);
        border-radius: var(--border-radius-sm);
        z-index: 2;
        &:hover{
            z-index: 4;
            transition: var(--trans);
            &::before{
                transform:translate(-50%, -50%) scaleX(1);
                transition: var(--trans);
                width: 100%;
            }
        }
        &::before{
            transition: var(--trans);
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%) scaleX(0);
            width: 0;
            height: 100%;;
            background: linear-gradient(110.42deg, rgba(207, 87, 163, 0.1) 29.2%, rgba(71, 49, 182, 0.1) 63.56%);
            opacity: 0.7;           
            border-radius: var(--border-radius-sm);
            z-index: 3;
        }
    }
    
    p{
        display: flex;
        font-weight: 500;
        position: relative;
        z-index: 10;
        pointer-events: none;
        span{
            margin: 0 0.5rem;
        }
    }

`;

export default ActionButton;
