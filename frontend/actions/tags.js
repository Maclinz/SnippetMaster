import fetch from 'isomorphic-fetch';

import { API } from '../config';



export const create = (tag, token) => {
    //lazy to use the config file for the API xd
    return fetch(`https://snippet-api-demo-v1.herokuapp.com/api/tags`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        },
        //Change the body to JSON
        body: JSON.stringify(tag)
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
}