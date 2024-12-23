// @flow strict

import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import dessertImg from '../../../assets/menu/dessert-bg.jpeg';
import menuImg from '../../../assets/menu/banner3.jpg';
import pizzaImg from '../../../assets/menu/pizza-bg.jpg';
import soupImg from '../../../assets/menu/soup-bg.jpg';
import saladImg from '../../../assets/menu/salad-bg.jpg';
import drinksImg from '../../../assets/menu/drinks-bg.jpg';
import useMenu from '../../../Hooks/useMenu';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import MenuCategory from '../MenuCategory/MenuCategory';


function Menu() {
  const [menu] = useMenu();
  const dessert = menu.filter(item => item.category === 'dessert');
  const soup = menu.filter(item => item.category === 'soup');
  const salad = menu.filter(item => item.category === 'salad');
  const pizza = menu.filter(item => item.category === 'pizza');
  const drinks = menu.filter(item => item.category === 'drinks');
  const offered = menu.filter(item => item.category === 'offered');
  return (
    <div>
      <Helmet>
        <title> The Fitness Meals -Menu</title>
      </Helmet>
      <Cover img={menuImg} title="our menu" />

      {/*** main cover */}
      <SectionTitle subHeading='Dont miss' heading="Today's Offer">
      </SectionTitle>

      {/**Offered menu item */}
      <MenuCategory items={offered}></MenuCategory>

      {/**dessert menu item */}
      <MenuCategory items={dessert} title="dessert" img={dessertImg}> </MenuCategory>

      {/*pizza menu item */}
      <MenuCategory items={pizza} title={"pizza"} img={pizzaImg} ></MenuCategory>

      {/**Salad menu item */}
      <MenuCategory items={salad} title={"salad"} img={saladImg} ></MenuCategory>

      {/**Soup menu item */}
      <MenuCategory items={soup} title={"soup"} img={soupImg} ></MenuCategory>
      
      {/**Drinks menu item */}
      <MenuCategory items={drinks} title={"drinks"} img={drinksImg} ></MenuCategory>

      

    </div>
  );
};

export default Menu;