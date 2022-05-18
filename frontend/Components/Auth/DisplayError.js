import React from 'react'
import styled from 'styled-components'

function DisplayError({ error }) {
    return (
        <ErrorStyled>
            <div className="error">
                <p>{error}</p>
            </div>
        </ErrorStyled>
    );
}

const ErrorStyled = styled.div`
    background-color: red;
    width:100% ;
    border-radius: var(--border-radius-md);
    animation: fadeIn .6s ease-in-out forwards;
    transform:translateY(-30px) ;
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform:translateY(-30px) ;
        }
        to {
            opacity: 1;
            transform:translateY(0px) ;
        }
    }
    .error{
        padding:1rem ;
        p{
            color:#fff ;
        }
    }
`;

export default DisplayError