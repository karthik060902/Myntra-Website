import React, { useState } from 'react'
import { BiSolidLeftArrow } from 'react-icons/bi'
import { FaGreaterThan } from 'react-icons/fa'
import { VscWorkspaceTrusted } from 'react-icons/vsc'
import {BiSolidRightArrow} from 'react-icons/bi'
import { PiShirtFoldedDuotone } from 'react-icons/pi'
import { LiaExchangeAltSolid } from 'react-icons/lia'
import bell from '../Assessts3/Screenshot_35-removebg-preview.png'
import offerimg from '../Asseests5/offerimg.webp'
import './Offer.css'
function Offer() {
  const[click,setClick]=useState(true)
  return (
    <div>
    {click?
      <div className='offers '><div className='off d-flex'>FLAT ₹500 OFF &nbsp; 
      <BiSolidRightArrow className='arrow' onClick={()=>setClick(false)} style={{cursor:'pointer'}}/>
      </div></div>
      :
    <div  className='offersCard  '>

            
      <div className='offer  '><div className='flat d-flex'>FLAT ₹500 OFF &nbsp;
       <BiSolidLeftArrow className='arrow'onClick={()=>setClick(true)} style={{cursor:'pointer'}}/>
       </div></div>
      <div className='backgroundcolor d-flex flex-column justify-content-between '>
        <div className='d-flex justify-content-evenly  gap-5'>

          <div>
            <div className='availableoffer'>Avail Flat</div>
            <div className='offerprice'>500 OFF</div>
          </div>
          <div><img src={offerimg} alt='offerimg' width={'150'} height={'90'} /></div>
        </div>
        <div className='d-flex justify-content-evenly gap-5'>
          <div>
            <div className='couponcode'>Coupon Code:MYNTRA500</div>
            <div className='order'>Applicable on your first order</div>
          </div>
          <div className='signup mt-2 p-2 '>SIGN UP NOW&nbsp;<FaGreaterThan /></div>
        </div>
        <div>
        <div className='line '></div>
        <div className='d-flex justify-content-evenly  gap-3'>
          <div className='couponcode p-1'><VscWorkspaceTrusted />&nbsp;Genuine Products</div>
          <div className='couponcode p-1'><PiShirtFoldedDuotone />&nbsp;Try & Buy</div>
          <div className='couponcode p-1'><LiaExchangeAltSolid />&nbsp;Easy Exchanges & Returns</div>
        </div>
        </div>
   
      </div>
      
     
    </div>}
    <div><img src={bell} className='bell' alt='bell'/></div>
    </div>

  )
}

export default Offer
