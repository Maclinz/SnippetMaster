import React from 'react'
import Admin from '../../Components/Auth/Admin';
import Layout from '../../Components/Layout';

const AdminIndex= () => {
    return (
        <div>
            <Layout>
                <Admin>
                    <h1>Admin DashBoard</h1>
                </Admin>
            </Layout>
        </div>
    )
}

export default AdminIndex;
