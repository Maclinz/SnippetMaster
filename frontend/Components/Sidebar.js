import React from 'react'
import styled from 'styled-components';
import logo from '../public/static/images/logo.svg';
import Image from 'next/image'
import NavItem from './NavItem';

const feedIcon = <i className="fi fi-rr-apps"></i>
const bookmarkIcon = <i className="fi fi-rr-bookmark"></i>
const snippetsIcon = <i className="fi fi-rr-archive"></i>
const helpIcon = <i className="fi fi-rr-interrogation"></i>
const outIcon = <i className="fi fi-rr-sign-out"></i>


function Sidebar() {
    return (
        <SidebarStyled>
            <div className="sidebar-top">
                <div className="logo">
                    <Image src={logo} alt="logo" className='logo-img' />
                </div>
                <h1 className="sm-title gradient-text-1">Snippet Master</h1>
            </div>
            <div className="sidebar-middle">
                <div className="nav-item-con">
                    <NavItem name={'Feed'} link={'/'} icon={feedIcon} />
                </div>
                <div className="nav-item-con">
                    <NavItem name={'Bookmarks'} link={'/'} icon={bookmarkIcon} />
                </div>
                <div className="nav-item-con">
                    <NavItem name={'My Snippets'} link={'/'} icon={snippetsIcon} />
                </div>
            </div>
            <div className="sidebar-bottom">
                <div className="nav-item-con">
                    <NavItem name={'Help'} link={'/'} icon={helpIcon} />
                </div>
                <div className="nav-item-con">
                    <NavItem name={'Sign Out'} link={'/signup'} icon={outIcon} />
                </div>
            </div>
        </SidebarStyled>
    )
}

const SidebarStyled = styled.header`
    height: 100vh;
    width: var(--nav-width);
    background-color: var(--color-white);
    box-shadow: var(--shadow-1);
    padding: 1.6rem 2rem ;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: fixed;
    .sidebar-top{
        display: flex;
        align-items: center;
        justify-content: center;
        img{
            width: 40px !important;
        }
        .sm-title{
            padding-left: .8rem;
            font-size: 1.8rem;
        }
    }

    .sidebar-middle{
        flex: 1;
        padding-top: 3rem;
    }

    .nav-item-con{
        margin: 1rem 0;
    }

`;

export default Sidebar;
