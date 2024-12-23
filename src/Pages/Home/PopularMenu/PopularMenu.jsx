// @flow strict

import * as React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import MenuItem from '../../Shared/MenuItem/MenuItem';
import { Link } from 'react-router-dom';


function PopularMenu() {

    const [menu, setManu] = React.useState([]);
    React.useEffect( () => {
        fetch('menu.json')
        .then(res => res.json())
        .then(data =>
        {const popularItems = data.filter(item => item.category === 'popular');
            setManu(popularItems)})

    }, [])
    return (
        <div>
            <SectionTitle
            heading='From Our Menu'
            subHeading='Popular Items'
            >
              
            </SectionTitle>
            <div className='grid md:grid-cols-2 gap-10'>
                {
                    menu.map(item=> <MenuItem 
                        key={item._id}
                        item={item}
                        ></MenuItem>
                    )
                }
            </div>
           <Link to='/menu'>
           <button className="btn btn-outline btn-accent">View Full Item</button>
           </Link>
        </div>
    );
};

export default PopularMenu;