// @flow strict

import * as React from 'react';
import orderCoverImg from '../../assets/shop/shop.jpg'
import Cover from '../Shared/Cover/Cover';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../Hooks/useMenu';
import OrderTab from './OrderTab';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

function OrderFood() {
    const categories = ['dessert','pizza','salad', 'soup','drinks','offered']
    const {category} = useParams();
    const initialIndex = categories.indexOf(category)
    const [tabIndex, setTabIndex] = React.useState(initialIndex)
    const [menu] = useMenu();
   
    console.log(category)

    const dessert = menu.filter(item => item.category === 'dessert');
    const soup = menu.filter(item => item.category === 'soup');
    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const drinks = menu.filter(item => item.category === 'drinks');
    const offered = menu.filter(item => item.category === 'offered');

    return (
        <div>
            <Helmet>
        <title> The Fitness Meals - Order Food</title>
      </Helmet>
            <Cover img={orderCoverImg} title={'order food'} />
            <Tabs defaultIndex={tabIndex}
                onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Dessert</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Salad</Tab>
                    <Tab>Soup</Tab>
                    <Tab>Drinks</Tab>
                    <Tab>Offered</Tab>
                </TabList>
                <TabPanel><OrderTab items={dessert}></OrderTab></TabPanel>
                <TabPanel> <OrderTab items={pizza}></OrderTab></TabPanel>
                <TabPanel><OrderTab items={salad}></OrderTab></TabPanel>
                <TabPanel><OrderTab items={soup}></OrderTab></TabPanel>
                <TabPanel><OrderTab items={drinks}></OrderTab></TabPanel>
                <TabPanel><OrderTab items={offered}></OrderTab></TabPanel>
               
            </Tabs>
        </div>
    );
};

export default OrderFood;