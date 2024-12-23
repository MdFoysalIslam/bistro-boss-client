// @flow strict

import * as React from 'react';
import Banner from './Banner/Banner';
import Category from './Category/Category';
import PopularMenu from './PopularMenu/PopularMenu';
import Featured from './Featured/Featured';
import Testimoneia from './Testimoniea/Testimoneia';
import { Helmet } from 'react-helmet-async';
import About from '../About/About';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div>
          <Helmet>
            <title> The Fitness Meals- home</title>
          </Helmet>
          <Banner/>
          <Category/>
          <PopularMenu/>
          <Featured/>
          <About></About>
          <Testimoneia/>
        </div>
    );
};

export default Home;