import React, { useState, useEffect } from 'react'
import GlobalStyles from '../GlobalStyles';
import Header from './Header';
import Sidebar from './Sidebar';
import { API } from '../config';
import { listSearch } from '../actions/snippet';
import { getLocalUser } from '../actions/auth';


function Layout({ children }) {
    const [toggle, setToggle] = useState(false);

    //Because I am lazy and don't want to create a function xd 🤣😂
    const [user, setUser] = useState();

    //get user from local storage
    const getUserInfo = async () => {
        const user = await getLocalUser()
        setUser(user);
    }

    //set username to empty string if undefined
    const { username } = user || '';

    useEffect(() => {
        getUserInfo();
    }, []);

    //function for toggling classes
    const toggler = () => {
        setToggle(!toggle);
    }
    return (
        <div>
            <GlobalStyles />

            <Header toggler={toggler} toggle={toggle} username={username} />

            <Sidebar toggle={toggle} />
            <main className={`MainContent ${toggle ? 'remove-margin-left' : ''}`} >{children}</main>
        </div>
    )
}

export default Layout; 
