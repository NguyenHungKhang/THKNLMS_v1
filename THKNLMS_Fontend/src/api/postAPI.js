import { getMethod, postMethod } from './Methods';
import axios from 'axios'
const API_URL = process.env.REACT_APP_API_URL;
const CONFIG = {
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    }
};

export const savePost = async(ownerId, courseId, content) => {
    const path = '/post/add';
    var data = {
        ownerId: ownerId,
        courseId: courseId,
        content: content
    }
    return postMethod(data, path);
};

export const showPost = async(course) => {
    let path = '/post/course/1';
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
    //return getMethod('/post/course/1');
};