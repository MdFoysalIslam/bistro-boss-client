// @flow strict

import * as React from 'react';
import useAxiosPublic from './useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

function useMenu() {
    const axiosPublic = useAxiosPublic()

    // const [menu, setManu] = React.useState([]);
    // const [loading, setLoading] = React.useState(true);

    // React.useEffect( () => {
    //     fetch('http://localhost:5000/menu')
    //     .then(res => res.json())
    //     .then(data =>
    //     {
    //         setManu(data);
    //         setLoading(false);
    //     })

    // }, [])
    const {data: menu = [], isPending: loading, refetch} = useQuery({
        queryKey: ['menu'],
        queryFn: async() => {
            const res = await axiosPublic.get('/menu');
            return res.data;
        }
    })
  return [menu, loading, refetch]
};

export default useMenu;