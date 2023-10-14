import React, { useEffect, useState } from 'react'
import carousel1 from '../Asseests5/carousel1.webp'
import carousel2 from '../Asseests5/carousel2.jpg'
import carousel3 from '../Asseests5/carousel3.webp'
import carousel4 from '../Asseests5/carousel4.webp'
import carousel5 from '../Asseests5/carousel5.webp'
import favbrand1 from '../Asseests5/favbrands1.webp'
import favbrand2 from '../Asseests5/favbrand2.webp'
import favbrand3 from '../Asseests5/favbrand3.webp'
import favbrand4 from '../Asseests5/favbrand4.webp'
import favbrand5 from '../Asseests5/favbrand5.webp'
import favbrand6 from '../Asseests5/favbrand6.webp'
import favbrand7 from '../Asseests5/favbrand7.webp'
import favbrand8 from '../Asseests5/favbrand8.webp'
import favbrand9 from '../Asseests5/favbrand9.webp'
import favbrand10 from '../Asseests5/favbrand10.webp'
import picture1 from '../Asseests5/toppicks1.webp'
import picture2 from '../Asseests5/toppicks2.webp'
import picture3 from '../Asseests5/toppicks3.webp'
import picture4 from '../Asseests5/toppicks4.webp'
import picture5 from '../Asseests5/toppicks5.webp'
import picture6 from '../Asseests5/toppicks6.webp'
import picture7 from '../Asseests5/toppicks7.webp'
import picture8 from '../Asseests5/toppicks10.webp'
import picture9 from '../Asseests5/toppicks12.webp'
import picture10 from '../Asseests5/toppicks10.webp'
import picture11 from '../Asseests5/toppicks11.webp'
import iconicbrand1 from '../Asseests5/iconicbrand1.webp'
import iconicbrand2 from '../Asseests5/iconicbrand2.webp'
import iconicbrand3 from '../Asseests5/iconicbrand3.webp'
import iconicbrand4 from '../Asseests5/iconicbrand4.webp'
import iconicbrand5 from '../Asseests5/iconicbrand5.webp'
import pic1 from '../Asseests5/fashiondress1.webp'
import pic2 from '../Asseests5/fashiondress2.webp'
import pic3 from '../Asseests5/fashiondress3.webp'
import pic4 from '../Asseests5/fashiondress4.webp'
import pic5 from '../Asseests5/fashiondress5.webp'
import pic6 from '../Asseests5/fashiondress6.webp'
import pic7 from '../Asseests5/fashiondress7.webp'
import pic8 from '../Asseests5/fashiondress8.webp'
import pic9 from '../Asseests5/fashiondress9.webp'
import pic10 from '../Asseests5/fashiondress10.webp'
import banner1 from '../Asseests5/bannerimg.webp'
import banner2 from '../Asseests5/bannerimg1.webp'
import banner3 from '../Asseests5/bannerimg3.webp'
import banner4 from '../Asseests5/bannerimg2.webp'
import banner5 from '../Asseests5/bannerimg5.webp'
import banner6 from '../Asseests5/bannerimg6.webp'
import kidspace1 from '../Asseests5/kidsspace1.jpg'
import kidspace2 from '../Asseests5/kidsspace2.jpg'
import budgetdress1 from '../Asseests5/budgetdress1.jpg'
import budgetdress2 from'../Asseests5/budgetdress2.jpg'
import budgetdress3 from '../Asseests5/budgetdress3.jpg'
import budgetdress4 from '../Asseests5/budgetdress4.jpg'
import budgetdress5 from '../Asseests5/budgetdress5.webp'
import budgetdress6 from '../Asseests5/budgetdress6.webp'
import morebrand1 from '../Asseests5/morebrand1.webp'
import morebrand2 from '../Asseests5/morebrand2.webp'
import morebrand3 from '../Asseests5/morebrand3.webp'
import morebrand4 from '../Asseests5/morebrand4.webp'
import morebrand5 from '../Asseests5/morebrand5.webp'
import './Kids.css'
import { CCarousel, CCarouselItem, CImage, CSpinner } from '@coreui/react'
function Kids() {
  const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => setLoading(false), 3000);
    }, []);
  const modeldress = [
    {
      id: 1,
      img: picture1,
    },
    {
      id: 2,
      img: picture2,
    },
    {
      id: 3,
      img: picture3,
    },
    {
      id: 4,
      img: picture4,
    },
    {
      id: 5,
      img: picture5,
    },
    {
      id: 6,
      img: picture6,
    },
    {
      id: 7,
      img: picture7,
    },
    {
      id: 8,
      img: picture8,
    },
    {
      id: 9,
      img: picture9,
    },
    {
      id: 10,
      img: picture10,
    },
    {
      id: 11,
      img: picture11,
    },
  ];
  const fashion = [
    {
      id: 1,
      imgs: pic1,
    },
    {
      id: 2,
      imgs: pic2,
    },
    {
      id: 3,
      imgs: pic3,
    },
    {
      id: 4,
      imgs: pic4,
    },
    {
      id: 5,
      imgs: pic5,
    },
    {
      id: 6,
      imgs: pic6,
    },
    {
      id: 7,
      imgs: pic7,
    },
    {
      id: 8,
      imgs: pic8,
    },
    {
      id: 9,
      imgs: pic9,
    },
    {
      id: 10,
      imgs: pic10,
    },
  ];
  const banner = [
    {
      id: 1,
      images: banner1,
    },
    {
      id: 2,
      images: banner2,
    },
    {
      id: 3,
      images: banner3,
    },
    {
      id: 4,
      images: banner4,
    },
    {
      id: 5,
      images: banner5,
    },
    {
      id: 6,
      images: banner6,
    },
  ];
  return (
    loading ? <div className='d-flex justify-content-center pt-5'><CSpinner /></div> :
    <div>
      <CCarousel controls interval={3000} className='pt-5'>
        <CCarouselItem>
          <CImage img src={carousel1} alt='carousel1' width={"100%"} />
        </CCarouselItem>
        <CCarouselItem>
          <CImage img src={carousel2} alt='carousel2' width={"100%"} />
        </CCarouselItem>
        <CCarouselItem>
          <CImage img src={carousel3} alt='carousel3' width={"100%"} />
        </CCarouselItem>
        <CCarouselItem>
          <CImage img src={carousel4} alt='carousel4' width={"100%"} />
        </CCarouselItem>
        <CCarouselItem>
          <CImage img src={carousel5} alt='carousel5' width={"100%"} />
        </CCarouselItem>
      </CCarousel>

      <div className='deals p-5'>FAVOURITE BRANDS</div>

      <div className='d-flex align-items-center justify-content-center gap-2 '>
        <div><img src={favbrand1} alt='favbrand1' width={"150"} height={"190"} /></div>
        <div><img src={favbrand2} alt='favbrand2' width={"150"} height={"190"} /></div>
        <div><img src={favbrand3} alt='favbrand3' width={"150"} height={"190"} /></div>
        <div><img src={favbrand4} alt='favbrand4' width={"150"} height={"190"} /></div>
        <div><img src={favbrand5} alt='favbrand5' width={"150"} height={"190"} /></div>
        <div><img src={favbrand6} alt='favbrand6' width={"150"} height={"190"} /></div>
        <div><img src={favbrand7} alt='favbrand7' width={"150"} height={"190"} /></div>
        <div><img src={favbrand8} alt='favbrand8' width={"150"} height={"190"} /></div>
        <div><img src={favbrand9} alt='favbrand9' width={"150"} height={"190"} /></div>
        <div><img src={favbrand10} alt='favbrand10' width={"150"} height={"190"} /></div>


      </div>

      <div className='deals p-5'>TOP PICKS</div>

      <div className='d-flex justify-content-center'>
        {modeldress.map((x) => <div key={x.id}><img src={x.img} alt='image' width={"143"} /></div>)}
      </div>

      <div className='deals p-5'>ICONIC BRANDS</div>

      <div className='d-flex justify-content-center'>
        <div><img src={iconicbrand1} alt='iconicbrand1' width={"100%"} /></div>
        <div><img src={iconicbrand2} alt='iconicbrand2' width={"100%"} /></div>
        <div><img src={iconicbrand3} alt='iconicbrand3' width={"100%"} /></div>
        <div><img src={iconicbrand4} alt='iconicbrand4' width={"100%"} /></div>
        <div><img src={iconicbrand5} alt='iconicbrand5' width={"100%"} /></div>
      </div>
      <div className='deals p-5'>FASHION & ESSENTIALS</div>
      <div className='d-flex flex-wrap justify-content-center'>
        {fashion.map((y) => <div key={y.id}><img src={y.imgs} alt='images' height={"400"} /></div>)}
      </div>

      <div className='deals p-5'>EXPLORE MORE</div>
      <div className='d-flex flex-wrap justify-content-center'>
        {banner.map((z) => <div key={z.id}><img src={z.images} alt='bannerimages' width={'700'} height={'800'} /></div>)}
      </div>
      <div className='d-flex justify-content-center'>
        <div><img src={kidspace1} alt='kidspace1' width={'780'} height={'500'} /></div>
        <div><img src={kidspace2} alt='kidspace2' width={'780'} height={'500'} /></div>
      </div>

       <div className='deals p-5'>BUDGET BUY</div>

      <div className='d-flex justify-content-center pt-2'>
        <div><img src={budgetdress1} alt='budgtedress1' width={'250'} height={'290'} /></div>
        <div><img src={budgetdress2} alt='budgtedress2' width={'250'} height={'290'} /></div>
        <div><img src={budgetdress3} alt='budgtedress3' width={'250'} height={'290'} /></div>
        <div><img src={budgetdress4} alt='budgtedress4' width={'250'} height={'290'} /></div>
        <div><img src={budgetdress5} alt='budgtedress5' width={'250'} height={'290'}/></div>
        <div><img src={budgetdress6} alt='budgtedress6' width={'250'} height={'290'}/></div>
      </div>


<div className='deals p-5'>SHOP MORE BRANDS</div>

<div className='d-flex justify-content-center'>
  <div><img src={morebrand1} alt='morebrand1'/></div>
  <div><img src={morebrand2} alt='morebrand1'/></div>
  <div><img src={morebrand3} alt='morebrand1'/></div>
  <div><img src={morebrand4} alt='morebrand1'/></div>
  <div><img src={morebrand5} alt='morebrand1'/></div>
</div>
    </div>
  )
}

export default Kids
