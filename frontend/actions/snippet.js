import fetch from 'isomorphic-fetch';

import {API} from '../config';

//Send a request to the server to register a new user

export const createSnippet = (snippet, token) => {
    return fetch(`${API}/snippet`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
        },
        //Change the body to JSON
        body: snippet
    })
    .then(response => {
        return response.json();
    })
    .catch(err => console.log(err));
}

export const getSnippets = (snippet, token) => {
    return fetch(`${API}/snippet`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
        },
        //Change the body to JSON
        body: snippet
    })
    .then(response => {
        return response.json();
    })
    .catch(err => console.log(err));
}
