import React from 'react'
import Layout from '../../Components/Layout';
import { isAuth } from '../../actions/auth';
import Popup from '../../Components/Popup';

const SnippetsIndex = () => {

    return (
        <div>
            <Layout>
                <Popup message={'This page is still under constuction. Content will be available on next update! Thanks for your understanding!'} />
            </Layout>
        </div>
    )
}

export default SnippetsIndex;
