import React from 'react'
import styled from 'styled-components';
import NavItem from './NavItem';
import { signOut } from '../actions/auth';
import Router from 'next/router';

const feedIcon = <i className="fi fi-rr-apps"></i>
const bookmarkIcon = <i className="fi fi-rr-bookmark"></i>
const snippetsIcon = <i className="fi fi-rr-archive"></i>
const helpIcon = <i className="fi fi-rr-interrogation"></i>
const outIcon = <i className="fi fi-rr-sign-out"></i>


function Sidebar({toggle}) {
    return (
        <SidebarStyled className={`${toggle ? 'toggle-nav': ''}`}>
            <div className="sidebar-middle">
                <div className="nav-item-con">
                    <NavItem name={'Feed'} link={'/'} icon={feedIcon} />
                </div>
                <div className="nav-item-con">
                    <NavItem name={'Bookmarks'} link={'/bookmarks'} icon={bookmarkIcon} />
                </div>
                <div className="nav-item-con">
                    <NavItem name={'My Snippets'} link={'/snippets'} icon={snippetsIcon} />
                </div>
            </div>
            <div className="sidebar-bottom">
                <div className="nav-item-con">
                    <NavItem name={'Help'} link={'/help'} icon={helpIcon} />
                </div>
                <div className="nav-item-con" onClick={() => signOut(() => Router.replace('/signin'))}>
                    <NavItem name={'Sign Out'} link={'/signin'} icon={outIcon} />
                </div>
            </div>
        </SidebarStyled>
    )
}

const SidebarStyled = styled.nav`
    height: calc(100% - var(--header-height));
    width: var(--nav-width);
    background-color: var(--color-white);
    box-shadow: var(--shadow-1);
    padding: 1rem 2rem ;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transition: var(--trans);
    position: fixed;
    .sidebar-middle{
        flex: 1;
    }

    .nav-item-con{
        margin: 1rem 0;
    }

`;

export default Sidebar;
