import React from 'react'
import { TbTruckDelivery } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";
import { RiSecurePaymentLine } from "react-icons/ri";
import styled from 'styled-components';

const Services = () => {
  return (
    <Wrapper>
    <div className="container">
        <div className="service service-1">
        <TbTruckDelivery className='icon'/>
        <h4>Super Fast Delivery</h4>
        </div>
        <div className="service service-2">
                <div className='service-col-2'> 
                <MdSecurity className="icon" />
                <h5>Non-contact Shipping</h5>
                </div>
                <div className='service-col-2'>
                <GiReceiveMoney className="icon" />
                <h5>Money-back Guaranteed</h5>
                </div>
        </div>
        <div className="service service-3">
        <RiSecurePaymentLine className="icon" />
        <h4>Secure Payment Gateway</h4>
        </div>
    </div>
    </Wrapper>
  )
}

export default Services

const Wrapper= styled.section`

.container{
display:flex;
gap: 50px;
margin-top: 30px;
margin-bottom:30px;
justify-content:center;
}

.service{
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
// border: 1px solid grey;
border-radius: 15px;
background-color:#f5e8e8;
padding:5px;
}

.service-col-2{
display:flex;
flex-direction:column;
align-items:center;
}

.icon {
display: flex;            /* Make the icon a flex container */
    justify-content: center;  /* Center the icon horizontally */
    align-items: center;      /* Center the icon vertically */
    width: 5rem;
    height: 5rem;
    padding: 1rem;
    border-radius: 50%;
    background-color: #fff;
    color: #5138ee;
}
`