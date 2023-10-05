import { getMethod } from './Methods';

export const getUserInfo = async() => {
    return getMethod('/v1/oauth/user/info');
};