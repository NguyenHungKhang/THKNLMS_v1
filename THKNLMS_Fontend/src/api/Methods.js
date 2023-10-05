import axios from 'axios'
const API_URL = process.env.REACT_APP_API_URL;
const CONFIG = {
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    }
};

export const postMethod = async(data, path) => {
    try {

        await axios.post(`${API_URL}${path}`, JSON.stringify(data), {
            withCredentials: true,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        });
        return true;
    } catch (e) {
        console.error('postLoginToken Error: ', e.message);
        return false;
    }
};

export const getMethod = async(path) => {

    try {
        let data = undefined;
        await axios.get(`${API_URL}${path}`, CONFIG)
            .then(element => {
                data = element.data
            });
        return data;
    } catch (e) {
        console.error('Get Method Error: ', e.message);
        return false;
    }
};