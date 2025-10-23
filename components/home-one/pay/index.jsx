'use client'


import React, { useState, useEffect } from "react" ;
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import Link from 'next/link'

const PayPage = () => {

    const [price, setPrice] = useState("");
    const [show, setShow] = useState(false);
    const [success, setSuccess] = useState(false);
    const [ErrorMessage, setErrorMessage] = useState("");
    const [orderID, setOrderID] = useState(false);

    

    // creates a paypal order
    const createOrder = (data, actions) => {
        return actions.order.create({
            purchase_units: [
                {
                    amount: {
                        currency_code: "USD",
                        value: price,
                    },
                },
            ],
        }).then((orderID) => {
                setOrderID(orderID);
                return orderID;
            });
    };

    // check Approval
    const onApprove = (data, actions) => {
        return actions.order.capture().then(function (details) {
            const { payer } = details;
            setSuccess(true);
            setPrice('');
        });
    };

    //capture likely error
    const onError = (data, actions) => {
        setErrorMessage("An Error occured with your payment ");
    };

    useEffect(() => {
        if (success) {
            setPrice('');
            alert("Payment successful!!");
            console.log('Order successful . Your order id is--', orderID);
        }
    },[success]);



    return (
      <section className='' style={{width:'80%', margin: '3rem auto 5rem', textAlign: 'center'}}>
      

            <div className=''>

                <p className="uppercase underline w-fit text-xs font-medium tracking-widest text-[#071952] inline-block py-2 pl-1 pr-3 rounded-full   sm:text-xs xs:text-center   md:pl-3" style={{textDecoration: 'underline'}}> 
                    Affordable & easy payments for you
                </p>

                <h2 className='text-6xl mt-8 font-semibold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-blue-600   md:text-5xl sm:text-3xl' style={{fontSize: '1.75rem'}}>
                    Your Business Success Starts Here.
                </h2>
                <h2 className='text-3xl my-2   md:text-xl md:my-4 sm:text-lg' style={{fontSize: '2.5rem'}}>
                    Stay ahead of the curve with our forward-thinking
                </h2>
            </div>

            <PayPalScriptProvider options={{ "client-id": "AQmIOk2YHxrSK4c6f9Yq9kNfLAMOPJtSMVC2JCKKCE5lHgGG1qMZgtB4-pBev_c9yq4QVMdTVRHnm5GG"}}>
                <div className="" style={{width: '50%', margin: '40px auto', padding: '40px', border: '2px solid gray', borderRadius: '10px'}}>
                    <div className="" style={{marginBottom: '20px'}}>
                        {/* <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"></label> */}
                        <input value={price} onChange={(event) => {setPrice(event.target.value);}} type="number" id="amount" className="bg-gray-50 border border-gray-00 text-gray-900 text-lg rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500   md:p-3" placeholder="Enter amount" style={{margin: '0'}}  required />
                    </div>
                
                    <PayPalButtons
                        style={{ 
                          layout: "vertical",
                          size: "large",
                          label: "pay",
                          height: 50,
                          tagline: "false",
                          borderRadius: 6,
                         }}
                        createOrder={createOrder}
                        onApprove={onApprove}
                        onError={onError}
                        forceReRender={[price]}
                    />
                
                </div>
                </PayPalScriptProvider>


        </section>
    );
}

export default PayPage


