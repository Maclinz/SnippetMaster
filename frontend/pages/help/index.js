import React from 'react'
import Layout from '../../Components/Layout';
import { isAuth } from '../../actions/auth';
import Popup from '../../Components/Popup';

const Index = () => {

    return (
        <div>
            <Layout>
                <Popup
                    message={'This app is still in development. So far it is only available for demonstration purposes. This page not yet implemented and will be added in the soon. Thank you for your understanding.'}
                />
            </Layout>
        </div>
    )
}

export default Index;
