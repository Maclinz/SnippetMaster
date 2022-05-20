import React from 'react'
import Admin from '../../Components/Auth/Admin';
import Private from '../../Components/Auth/Private';
import Layout from '../../Components/Layout';
import { isAuth } from '../../actions/auth';
import Popup from '../../Components/Popup';


const UserIndex = () => {

    return (
        <div>
            <Layout>
                <Private>
                    <Popup message={'This page is still under constuction. Content will be available on next update! Thanks for your understanding!'} />
                </Private>
            </Layout>
        </div>
    )
}

export default UserIndex;
