import fetch from 'isomorphic-fetch';

import { API } from '../config';
import queryString from 'query-string';

//Send a request to the server to register a new user

export const createSnippet = (snippet, token) => {
    //lazy to use the config file for the API xd 
    return fetch(`https://snippet-api-demo-v1.herokuapp.com/api/snippet`, {
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

export const getSnippetsAndTags = (skip, limit) => {
    const data = {
        limit,
        skip
    }

    //lazy to use the config file for the API xd 
    return fetch(`https://snippet-api-demo-v1.herokuapp.com/api/snippet-tags`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
}

export const listSearch = (params) => {
    console.log('Search Params:', params);

    let query = queryString.stringify(params);

    // console.log('Query:', query);

    //lazy to use the config file for the API xd 
    return fetch(`https://snippet-api-demo-v1.herokuapp.com/api/snippet/search?${query}`, {
        method: 'GET',
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
}



export const listUserSnippets = () => {
    return fetch(`https://snippet-api-demo-v1.herokuapp.com/api/snippet`, {
        method: 'GET',
        headers: {
            Accept: 'application/json'
        }
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
}

