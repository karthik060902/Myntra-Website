import React,{useState} from 'react'
import studio from '../Assessts1/studio.png'
import { NavLink } from 'react-router-dom'
import {AiOutlineSearch} from 'react-icons/ai'
import {BsPersonCircle} from 'react-icons/bs'
import {AiOutlineHeart} from 'react-icons/ai'
import {BiShoppingBag} from 'react-icons/bi'
import { BsFilePlus } from 'react-icons/bs'
import { RxHamburgerMenu } from 'react-icons/rx'
import {BiSolidRightArrow} from 'react-icons/bi'
import bell from '../Assessts3/Screenshot_35-removebg-preview.png'
import logo from '../Assessts/download.png'
import './Header.css'
function Header() {
    const [click, setClick] = useState(false)
  return (
      <div className=' background d-flex justify-content-center align-items-center '>

<div className='d-flex  gap-3'>< RxHamburgerMenu className='hamburger' />
    <NavLink to='/'> <img src={logo} className='logo' alt='logo' width={"70"} height={"70"} style={{cursor:'pointer'}} /></NavLink>
</div>
<div className='d-flex gap-5  '>
    <NavLink to="/men" className='category' >MEN</NavLink>
    <NavLink to="/women" className='category'>WOMEN</NavLink>
    <NavLink to="/kids"className='category'>KIDS</NavLink>
    <NavLink to="/homeliving"className='category'>HOME LIVING</NavLink>
    <NavLink to="/beauty"className='category'>BEAUTY</NavLink>
    <NavLink to="/studio"className='category' onMouseEnter={() => setClick(true)} onMouseLeave={() => setClick(false)}>STUDIO<sup className='new p-1'>NEW</sup>
        {click && (
            <div className='photo'><img src={studio} alt='studio' /></div>
        )}
    </NavLink>
</div>
<div className='d-flex gap-5'>
    <div className='install'>
        <BsFilePlus className='icons' />
    </div>

    <div className='d-flex align-items-center search'>
        <AiOutlineSearch className='searchicon' />
        <input type='text' placeholder='Search for products and brands' />
    </div>
    <div className='d-flex flex-row  align-items-center gap-3'>
        <div className='profile-sec'>
            <BsPersonCircle className='icon-profile' />
            <span className='settings'>Profile</span>
        </div>

        <div className='charts '>
            <div><AiOutlineHeart className='icon' /></div>
            <div className='settings'>Wishlist</div>
        </div>
        <div className='charts '>
            <div><BiShoppingBag className='icon' /></div>
            <div className='settings'>Bag</div>
        </div>
    </div>
</div>
<div className='offer  '><p className='flat d-flex'>FLAT ₹500 OFF &nbsp; <BiSolidRightArrow className='arrow'/></p></div>
<div><img src={bell} className='bell' alt='bell'/></div>
</div>
  )
}

export default Header
