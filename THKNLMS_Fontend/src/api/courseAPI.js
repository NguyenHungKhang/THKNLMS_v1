import axios from 'axios'
import { getMethod } from './Methods';

const API_URL = process.env.REACT_APP_API_URL;
const CONFIG = {
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    }
};

export const getOwnedCourse = async(userid) => {

};

export const findById = async() => {
    return getMethod('/course/1');
};