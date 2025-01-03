// @flow strict

import axios from 'axios';
import * as React from 'react';

const axiosPublic = axios.create({
    baseURL: 'http://localhost:5000'
})

function useAxiosPublic() {
    return axiosPublic;
};

export default useAxiosPublic;