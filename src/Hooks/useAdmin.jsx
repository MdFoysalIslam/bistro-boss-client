// @flow strict

import { useQuery } from '@tanstack/react-query';
import * as React from 'react';
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';

function useAdmin() {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const { data: isAdmin, isPending: isAdminLoading } = useQuery({
        queryKey: [user?.email, 'isAdmin'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/admin/${user.email}`)
            console.log(res.data);
            return res.data?.admin;
        }
    })

    return [isAdmin, isAdminLoading]
};

export default useAdmin;