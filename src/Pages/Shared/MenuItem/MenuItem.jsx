// @flow strict

import * as React from 'react';

function MenuItem({item}) {
    const {name, image, price, recipe} = item;

    return (
        <div className='flex space-x-2'>
            <img style={{borderRadius: "0 200px 200px 200px"}} 
            className='w-[100px]' src={image}></img>
            <div>
                <h3 className='uppercase'>{name}---------</h3>
                <p>{recipe}</p>
                <p>{price}</p>
            </div>
        </div>
    );
};

export default MenuItem;