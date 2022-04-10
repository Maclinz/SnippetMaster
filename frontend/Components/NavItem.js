import Link from 'next/link';
import React from 'react'
import styled from 'styled-components';
import {useRouter} from 'next/router';


function NavItem({name, icon, link}) {

    const router = useRouter();

    return (
        <NavItemStyled className={router.pathname == link ? "active": ''} >
            <p>
                {icon}
            </p>
            <Link href={link}>
                {name}
            </Link>
        </NavItemStyled >
    )
}
const NavItemStyled  =  styled.li`
    display: flex;
    align-items: center;
    width: 100%;
    transition: all .4s ease-in-out;
    padding: .8rem 1rem;
    border-radius: var(--border-radius-sm);
    transition: background .4s ease-in-out;
    position : relative;
    &::before{
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: var(--color-gradient-1);
        transform: scaleY(0);
        z-index: -1;
        transition: all .4s ease-in-out;
        cursor: pointer;
        border-radius: var(--border-radius-sm);
    }
    &:hover{
        cursor: pointer;
        &::before{
            transform: scaleY(1);
        }
        a,i{
            transition: all .4s ease-in-out;
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
        width: 100%;
        height: 100%;
        padding: 0 2rem;
    }
`;

export default NavItem;
