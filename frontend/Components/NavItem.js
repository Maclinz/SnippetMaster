import Link from 'next/link';
import React from 'react'
import styled from 'styled-components';

function NavItem({name, icon, link}) {
    return (
        <NavItemStyled >
            <p>
                {icon}
            </p>
            <Link href={link}>
                {name}
            </Link>
        </NavItemStyled >
    )
}
const NavItemStyled  =  styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    transition: all .4s ease-in-out;
    padding: .8rem 1rem;
    border-radius: var(--border-radius-sm);
    transition: background .4s ease-in-out;
    background-color: var(--color-white);
    &:hover{
        cursor: pointer;
        background: var(--color-gradient-1);
        transition: background .4s ease-in-out;
        a,i{
            color: var(--color-white);
        }
    }
    p{
        display: flex;
        align-items: center;
    }
    i{
        display: flex;
    }
    a{
        text-decoration: none;
        color: var(--color-grey-3);
        font-family: inherit;
        font-weight: 500;
        font-size: inherit;
        margin-left: 3rem;
    }
`;

export default NavItem;
