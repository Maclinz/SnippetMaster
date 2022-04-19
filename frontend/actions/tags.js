import fetch from 'isomorphic-fetch';

import {API} from '../config';



export const create = (tag, token) => {
    return fetch(`${API}/tags`, {
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