import axios from 'axios'
const API_URL = process.env.REACT_APP_API_URL;

export const getById = async(user) => {
    let path = '/v1/oauth/user/info';
    return this.requestWithHeader(axios.get, `${API_URL}${path}`, user)
};