import React, { useEffect, useState } from 'react'
import carousel1 from '../Assessts2/carousel1.webp'
import carousel2 from '../Assessts2/carousel2.webp'
import carousel3 from '../Assessts2/carousel3.webp'
import carousel4 from '../Assessts2/carousel4.jpg'
import carousel5 from '../Assessts2/carousel5.webp'
import carousel6 from '../Assessts2/carousel6.jpg'
import carousel7 from '../Assessts2/carousel7.jpg'
import carousel8 from '../Assessts2/carousel8.webp'
import image1 from '../Assessts2/bigdeals1.webp'
import image2 from '../Assessts2/bigdeals2.webp'
import image3 from '../Assessts2/bigdeals3.jpg'
import image4 from '../Assessts2/bigdelas4.jpg'
import image5 from '../Assessts2/bigdelas5.webp'
import image6 from '../Assessts2/bigdeals6.webp'
import image7 from '../Assessts2/bigdeals7.webp'
import image8 from '../Assessts2/bigdeals8.webp'
import categories1 from '../Assessts2/categories1.webp'
import categories2 from '../Assessts2/categories2.webp'
import categories3 from '../Assessts2/categories3.webp'
import categories4 from '../Assessts2/categories4.webp'
import categories5 from '../Assessts2/categories5.webp'
import categories6 from '../Assessts2/categories6.webp' 
import topbrand1 from '../Assessts2/topbrand1.webp'
import topbrand2 from '../Assessts2/topbrand2.webp'
import topbrand3 from '../Assessts2/topbrand3.webp'
import topbrand4 from '../Assessts2/topbrand4.webp'
import topbrand5 from '../Assessts2/topbrand5.webp'
import brand1 from '../Assessts2/royaldress1.webp'
import brand2 from '../Assessts2/royaldress2.webp'
import brand3 from '../Assessts2/royaldress3.webp'
import brand4 from '../Assessts2/royaldress4.webp'
import brand5 from '../Assessts2/royaldress5.webp'
import brand6 from '../Assessts2/royaldress6.webp'
import indianwear1 from '../Assessts2/indianwear1.webp'
import indianwear2 from '../Assessts2/indianwear2.webp'
import indianwear3 from '../Assessts2/indianwear3.webp'
import indianwear4 from '../Assessts2/indianwear4.webp'
import indianwear5 from '../Assessts2/indianwear5.webp'

import './Men.css'
import { CCarousel, CCarouselItem, CImage } from '@coreui/react-pro'
import { CSpinner } from '@coreui/react'
function Men() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => setLoading(false), 3000);
    }, []);
    const deal=[
        {
            id:1,
            pic:image1,
        },
        {
            id:2,
            pic:image2,
        },
        {
            id:3,
            pic:image3,
        },
        {
            id:4,
            pic:image4,
        },
        {
            id:5,
            pic:image5,
        },
        {
            id:6,
            pic:image6,
        },
        {
            id:7,
            pic:image7,
        },
        {
            id:8,
            pic:image8,
        },
    ];
    return (
        loading ? <div className='d-flex justify-content-center pt-5'><CSpinner /></div> :
        <div >

            
            <CCarousel controls interval={3000} dark className='pt-5'   >
                <CCarouselItem >
                    <CImage img src={carousel1} alt='virat' width="100%" className='viratimg ' />
                </CCarouselItem>
                <CCarouselItem>
                    <CImage img src={carousel2} alt='virat' width="100%" className='viratimg ' />
                </CCarouselItem>
                <CCarouselItem>
                    <CImage img src={carousel3} alt='virat' width="100%" className='viratimg ' />
                </CCarouselItem>
                <CCarouselItem>
                    <CImage img src={carousel4} alt='virat' width="100%" className='viratimg ' />
                </CCarouselItem>
                <CCarouselItem>
                    <CImage img src={carousel5} alt='virat' width="100%" className='viratimg ' />
                </CCarouselItem>
                <CCarouselItem>
                    <CImage img src={carousel6} alt='virat' width="100%" className='viratimg ' />
                </CCarouselItem>
                <CCarouselItem>
                    <CImage img src={carousel7} alt='virat' width="100%" className='viratimg ' />
                </CCarouselItem>
                <CCarouselItem>
                    <CImage img src={carousel8} alt='virat' width="100%" className='viratimg ' />
                </CCarouselItem>
            </CCarousel>

       <div className='deals p-5'>BIGGEST DEALS ON TOP BRANDS</div>

       <div className='d-flex flex-wrap justify-content-center align-items-center gap-5 '>
       {deal.map((x)=>
       <div key={x.id}><img src={x.pic} alt='pics' width="100%" height="100%"/></div>)}
        </div>

<div className='deals p-5' >CATEGORIES TO BAG</div>

<div className='d-flex gap-3 justify-content-center px-5 '>
    <div><img src={categories1} alt='categories' width="100%" height="100%"/></div>
    <div><img src={categories2} alt='categories' width="100%" height="100%"/></div>
    <div><img src={categories3} alt='categories' width="100%" height="100%"/></div>
    <div><img src={categories4} alt='categories' width="100%" height="100%"/></div>
    <div><img src={categories5} alt='categories' width="100%" height="100%"/></div>
    <div><img src={categories6} alt='categories' width="100%" height="100%"/></div>
</div>

<div className='deals p-5'>EXPLORE TOP BRANDS</div>

<div className='d-flex gap-3 justify-content-center px-5 '>
    <div><img src={topbrand1} alt='categories' width="100%" height="100%"/></div>
    <div><img src={topbrand2} alt='categories' width="100%" height="100%"/></div>
    <div><img src={topbrand3} alt='categories' width="100%" height="100%"/></div>
    <div><img src={topbrand4} alt='categories' width="100%" height="100%"/></div>
    <div><img src={topbrand5} alt='categories' width="100%" height="100%"/></div>
</div>
<div  className='deals p-5' >MYNTRA LUXE</div>

<div className='d-flex gap-3 justify-content-center px-5 ' >
    <div><img src={brand1} alt='categories' width="100%" height="100%"/></div>
    <div><img src={brand2} alt='categories' width="100%" height="100%"/></div>
    <div><img src={brand3} alt='categories' width="100%" height="100%"/></div>
    <div><img src={brand4} alt='categories' width="100%" height="100%"/></div>
    <div><img src={brand5} alt='categories' width="100%" height="100%"/></div>
    <div><img src={brand6} alt='categories' width="100%" height="100%"/></div>
</div>

<div  className='deals p-5' >TRENDING IN INDIAN WEAR</div>

<div className='d-flex gap-3 justify-content-center px-5 ' >
    <div><img src={indianwear1} alt='categories' width="100%" height="100%"/></div>
    <div><img src={indianwear2} alt='categories' width="100%" height="100%"/></div>
    <div><img src={indianwear3} alt='categories' width="100%" height="100%"/></div>
    <div><img src={indianwear4} alt='categories' width="100%" height="100%"/></div>
    <div><img src={indianwear5} alt='categories' width="100%" height="100%"/></div>
</div>
    </div >
  )
}

export default Men
