// @flow strict

import * as React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckOutFrom from '../../Checkout/CheckOutFrom';

// todo : 
const stripPromise = loadStripe(import.meta.env.VITE_Payment_GateWay_pk)
function Payment() {
    return (
        <div>
            <SectionTitle heading='Payment' subHeading="Please Pay Befour eat"></SectionTitle>
            <div>
               <Elements stripe={stripPromise}>
        <CheckOutFrom/>
               </Elements>
            </div>
        </div>
    );
};

export default Payment;