import React from 'react'
import Admin from '../../Components/Auth/Admin';
import Private from '../../Components/Auth/Private';
import Layout from '../../Components/Layout';
import { isAuth } from '../../actions/auth';


const UserIndex = () => {

    return (
        <div>
            <Layout>
                <Private>
                    <h1>User DashBoard</h1>
                </Private>
            </Layout>
        </div>
    )
}

export default UserIndex;
