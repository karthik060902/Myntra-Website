import React from 'react'
import Header from '../Component/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../Component/Footer'
import Offer from './Offer'

function CommonPage() {
  return (
    <div>
      <Header/>
      <Outlet/>
      <Offer/>
      <Footer/>
    </div>
  )
}

export default CommonPage
