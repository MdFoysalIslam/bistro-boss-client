// @flow strict

import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";
export const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000'
})
function useAxiosSecure() {
    const navigate = useNavigate();
    const {logOut} = useAuth();

    axiosSecure.interceptors.request.use(function (config) {
        const token = localStorage.getItem('access-token')
  //      console.log('request stopped by interceptors', token)
        config.headers.authorization = `Bearer ${token}`
        return config;
    }, function (error) {
        // do somethins with request error
        return Promise.reject(error);
    });
    // intercepts 4-01 s
    axiosSecure.interceptors.response.use(function(response) {
        return response;
    },  async (error) => {
        const status = error.response.status;
    //    console.log('status error in the interceptop', status);
        if(status === 401 || status === 403) {
            await logOut()
            navigate('/login')
        }
        return Promise.reject(error);
    })
    return axiosSecure
};

export default useAxiosSecure;