// @flow strict

import * as React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import NavBar from '../Pages/Shared/NavBar/NavBar';

function Main() {
    const location = useLocation();

    const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('signup')
    return (
        <div>
           { noHeaderFooter || <NavBar/>}
            <Outlet></Outlet>
            {noHeaderFooter || <Footer/>}
        </div>
    );
};

export default Main;