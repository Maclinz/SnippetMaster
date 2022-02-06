import React from 'react'
import GlobalStyles from '../GlobalStyles';
import Sidebar from './Sidebar';

function Layout({children}) {
    return (
        <div>
            <GlobalStyles />
            <Sidebar />
            <main className='MainContent'>{children}</main>
        </div>
    )
}

export default Layout; 
