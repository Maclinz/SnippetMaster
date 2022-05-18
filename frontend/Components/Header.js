import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import logo from '../public/static/images/logo.svg';
import Image from 'next/image';
import avatar1 from '../public/static/images/avatar1.png';
import Router from "next/router";
import Link from 'next/link';
import { API } from '../config';
import { listSearch } from '../actions/snippet';
import { authenticate, getCookie, getLocalUser, signIn } from '../actions/auth';


const toggleIcon = <i className="fi fi-rr-menu-burger"></i>;
const addIcon = <i className="fi fi-rr-add"></i>;
const searchIcon = <i className="fi fi-rr-search"></i>;
const bell = <i className="fi fi-rr-bell"></i>;
const downArrow = <i className="fi fi-rr-angle-down"></i>;
const themeIcon = <i className="fi fi-rr-moon"></i>

function Header({ toggler, toggle, username }) {
    //set to empty string if undefined

    const [values, setValues] = useState({
        search: undefined,
        results: [],
        searched: false,
        loading: false,
        message: ''
    });

    const { search, results, searched, loading, message } = values;



    //handle change
    const handleChange = e => {
        setValues({ ...values, search: e.target.value, searched: false, results: [] });
    }

    //search submit
    const searchSubmit = e => {
        e.preventDefault();

        listSearch(search).then(data => {
            setValues({ ...values, results: data, searched: true, loading: false, message: `${data.length} snippets found!` });
        }).catch(err => {

        })
    }

    return (
        <HeaderStyled>
            <div className="header-items">
                <div className="sidebar-top">
                    <div className="logo">
                        <Image src={logo} alt="logo" className='logo-img' />
                    </div>
                    <h1 className="sm-title gradient-text-1">Snippet Master</h1>
                </div>
                <div className="menu-toggler" onClick={toggler}>
                    {toggleIcon}
                </div>
                <form action="" className="search-form" onSubmit={searchSubmit}>
                    <div className="input-control" >
                        <input type={'text'} onChange={handleChange} placeholder='Search...' />
                        <button type='submit' className="btn-search-submit">
                            {searchIcon}
                        </button>
                    </div>
                </form>
                <div className='empty-flex'></div>
                <div className='empty-flex'></div>
                <div className="profile">
                    <div className="notifications create-snippet profile-item" onClick={() => Router.push('/create-snippet')}>
                        {addIcon}
                    </div>
                    <div className="notifications profile-item">
                        {bell}
                    </div>
                    <div className="user profile-item">
                        <div className="user-img">
                            <Image src={avatar1} alt="avatar" width="64" height="64" className='profile-img' />
                        </div>
                        <div className="user-info" onClick={() => Router.push('/user')}>
                            <h3>{username ? username : 'Loading...'}</h3>
                            <p>@{username ? username.toLowerCase() : 'Loading...'}</p>
                        </div>
                        <div className="user-options profile-item">
                            {downArrow}
                        </div>
                    </div>
                </div>
            </div>
        </HeaderStyled>
    )
}

const HeaderStyled = styled.header`
    box-shadow: none;
    background-image: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    box-sizing: border-box;
    flex-shrink: 0;
    position: fixed;
    z-index: 11;
    top: 0px;
    left: auto;
    right: 0px;
    color: inherit;
    background-color: var(--color-white);
    min-height: var(--header-height);
    transition: width 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    padding: var(--pad-lr-2);
    .header-items{
        display: flex;
        justify-content: space-between;
        align-items: center;
        i{
            color: var(--color-grey-2);
            transition: var(--trans);
        }
        .sidebar-top{
            display: flex;
            align-items: center;
            justify-content: flex-start;
            width: var(--nav-width);
            img{
                width: 40px !important;
            }
            .sm-title{
                padding-left: .8rem;
                font-size: 1.8rem;
            }
        }
        .menu-toggler{
            background-color: var(--color-background);
            width: 3rem;
            height: 3rem;
            border-radius: var(--border-radius-md);
            display: flex;
            justify-content: center;
            align-items: center;
            border: 1px solid var(--color-grey-2);
            cursor: pointer;
            transition: var(--trans);
            margin-right: 1rem;
            &:hover{
                transition: var(--trans);
                border: 1px solid #7263F3;
                i{
                    transition: var(--trans);
                    color: #7263F3;
                }
            }
        }
        .search-form{
            width: var(--form-width);
            .input-control{
                width: 100%;
                position: relative;
                input{
                    width: 100%;
                    border: 1px solid var(--color-grey-2);
                    border-radius: var(--border-radius-md);
                    padding: .6rem 1.2rem;
                    background-color: var(--color-background);
                    font-family: inherit;
                    font-size: inherit;
                    font-weight: inherit;
                    &:active, &:focus{
                        border: 1px solid #7263F3;
                    }
                }
                .btn-search-submit{
                    position: absolute;
                    right: 0;
                    top: 50%;
                    transform: translateY(-50%);
                    outline: none;
                    border: none;
                    cursor: pointer;
                    background: none;
                    padding: .3rem 1rem;
                    font-family: inherit;
                    font-size: inherit;
                    font-weight: inherit;
                }
            }
        }
        .empty-flex{
            flex-grow: 1;
        }
        .profile{
            display: flex;
            align-items: center;
            transition: var(--trans) ;
            .profile-item{
                margin: 0 .5rem;
                transition: var(--trans) ;
            }
            .notifications{
                background-color: var(--color-background);
                width: 3rem;
                height: 3rem;
                border-radius: var(--border-radius-md);
                display: flex;
                justify-content: center;
                align-items: center;
                border: 1px solid var(--color-grey-2);
                cursor: pointer;
                transition: var(--trans);
                &:hover{
                    transition: var(--trans);
                    border: 1px solid #7263F3;
                    i{
                        transition: var(--trans);
                        color: #7263F3;
                    }
                }
            }
            .user{
                display: flex;
                cursor: pointer;
                transition: var(--trans);
                &:hover{
                    color: #7263F3;
                    i{
                        color: #7263F3;
                    }
                }
                .user-info{
                    padding-left:.5rem;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    p{
                        font-size: 1rem;
                        color: var(--color-grey-3);
                    }
                }
                .profile-img{
                    border-radius: 50% !important;
                }

                .user-options{
                    display: flex;
                    align-items: center;
                    justify-content: flex-end;
                    padding-left: .7rem;
                    cursor: pointer;
                    transition: var(--trans);
                    &:hover{
                        transition: var(--trans);
                        i{
                            transition: var(--trans);
                            color: #7263F3;
                        }
                    }
                }
                
            }
        }
    }
`;

export default Header;