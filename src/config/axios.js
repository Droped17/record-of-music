import axios from "axios";
import {getAccessToken,removeAccessToken} from '../utils/local-storage';

const BACKEND_URL = "http://localhost:1112";

axios.defaults.baseURL = BACKEND_URL;
axios.interceptors.request.use((configObj)=>{
    const getToken = getAccessToken();
    if (getToken) {
        configObj.headers.Authorization = `Bearer ${getToken}`;
    }
    return configObj;
});

axios.interceptors.response.use((response) => response,error => {
    if (error.response.status === 401) {
        removeAccessToken();
        window.location.href = '/login';
    }
    return Promise.reject(error);
});


export default axios;
