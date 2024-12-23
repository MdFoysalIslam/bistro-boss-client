// @flow strict

import * as React from 'react';

function SectionTitle({heading, subHeading}) {

    return (
        <div className='mx-auto text-center md:w-4/12 my-8'>
            <h3 className='text-yellow-600 mb-2'>---{subHeading}---</h3>
            <p className='text-4xl uppercase border-y-4 py-4'>{heading}</p>
            
        </div>
    );
};

export default SectionTitle;