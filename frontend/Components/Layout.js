import React, { useState, useEffect } from 'react'
import GlobalStyles from '../GlobalStyles';
import Header from './Header';
import Sidebar from './Sidebar';
import { API } from '../config';
import { listSearch } from '../actions/snippet';


function Layout({ children }) {
    const [toggle, setToggle] = useState(false);

    //function for toggling classes
    const toggler = () => {
        setToggle(!toggle);
    }
    return (
        <div>
            <GlobalStyles />

            <Header toggler={toggler} toggle={toggle} />

            <Sidebar toggle={toggle} />
            <main className={`MainContent ${toggle ? 'remove-margin-left' : ''}`}>{children}</main>
        </div>
    )
}

export default Layout; 
