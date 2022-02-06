import React from 'react'
import styled from 'styled-components';

function ActionButton({icon, name}) {
    return (
        <ActionButtonStyled >
            <p className='gradient-text-1'>
                {icon} <span>2.3K</span> {name}
            </p>
        </ActionButtonStyled>
    )
}

const ActionButtonStyled = styled.div`
    position: relative;
    background: var(--button-gradient-2);
    border-radius: var(--border-radius-sm);
    display: inline-block;
    padding: 1rem 2rem;
    cursor: pointer;
    p{
        display: flex;
        font-weight: 500;
        span{
            margin: 0 0.5rem;
        }
    }

`;

export default ActionButton;
