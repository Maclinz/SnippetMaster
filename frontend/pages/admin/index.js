import React from 'react'
import Admin from '../../Components/Auth/Admin';
import Layout from '../../Components/Layout';
import RightTagsBar from '../../Components/RightTagsBar';

const AdminIndex= () => {
    return (
        <div>
            <Layout>
                <Admin>
                    <h1>Admin DashBoard</h1>
                    <div className="tags-con">
                        <RightTagsBar>
                        
                        </RightTagsBar>
                    </div>
                </Admin>
            </Layout>
        </div>
    )
}

export default AdminIndex;
