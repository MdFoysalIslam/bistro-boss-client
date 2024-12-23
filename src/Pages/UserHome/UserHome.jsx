// @flow strict

import * as React from 'react';
import useAuth from '../../Hooks/useAuth';

function UserHome() {
    const {user} = useAuth();
    return (
        <div>
            <h2 className='text-3xl'>
                <span>Hi, Welcome</span>
                {
                    user?.displayName ? user.displayName: 'Back'
                }

            </h2>
        </div>
    );
};

export default UserHome;