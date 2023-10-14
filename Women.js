import React, { useEffect, useState } from 'react'
import './Women.css'
import carousel1 from '../Assessts3/carousel1.webp'
import carousel2 from '../Assessts3/carousel2.webp'
import carousel3 from '../Assessts3/carousel3.webp'
import carousel4 from '../Assessts3/carousel4.webp'
import carousel5 from '../Assessts3/carousel5.webp'
import carousel6 from '../Assessts3/carousel6.webp'
import carousel7 from '../Assessts3/carousel7.webp'
import carousel8 from '../Assessts3/carousel8.webp'
import carousel9 from '../Assessts3/carousel9.webp'
import carousel10 from '../Assessts3/carousel10.webp'
import carousel11 from '../Assessts3/carousel11.webp'
import pic1 from '../Assessts3/brand1.webp'
import pic2 from '../Assessts3/brand2.webp'
import pic3 from '../Assessts3/brand3.webp'
import pic4 from '../Assessts3/brand4.webp'
import pic5 from '../Assessts3/brand5.webp'
import pic6 from '../Assessts3/brand6.webp'
import pic7 from '../Assessts3/brand7.webp'
import pic8 from '../Assessts3/brand8.webp'
import pic9 from '../Assessts3/brand9.webp'
import pic10 from '../Assessts3/brand10.webp'
import topbrand1 from '../Assessts3/topbrand1.webp'
import topbrand2 from '../Assessts3/topbrand2.webp'
import topbrand3 from '../Assessts3/topbrand3.webp'
import topbrand4 from '../Assessts3/topbrand4.webp'
import topbrand5 from '../Assessts3/topbrand5.webp'
import topbrand6 from '../Assessts3/topbrand6.webp'
import branded1 from '../Assessts3/branded1.webp'
import branded2 from '../Assessts3/branded2.webp'
import branded3 from '../Assessts3/branded3.webp'
import branded4 from '../Assessts3/branded4.webp'
import branded5 from '../Assessts3/branded5.webp'
import westernwear1 from '../Assessts3/westernwear1.webp'
import westernwear2 from '../Assessts3/westernwear2.webp'
import westernwear3 from '../Assessts3/westernwear3.webp'
import westernwear4 from '../Assessts3/westernwear4.webp'
import westernwear5 from '../Assessts3/westernwear5.webp'
import indianwear1 from '../Assessts3/indianwear1.webp'
import indianwear2 from '../Assessts3/indianwear2.webp'
import indianwear3 from '../Assessts3/indianwear3.webp'
import indianwear4 from '../Assessts3/indianwear4.webp'
import indianwear5 from '../Assessts3/indianwear5.webp'
import sportswear1 from '../Assessts3/sportswear1.webp'
import sportswear2 from '../Assessts3/sportswear2.webp'
import sportswear3 from '../Assessts3/sportswear3.webp'
import sportswear4 from '../Assessts3/sportswear4.webp'
import sportswear5 from '../Assessts3/sportswear5.webp'
import footwear1 from '../Assessts3/footwear1.webp'
import footwear2 from '../Assessts3/footwear2.webp'
import footwear3 from '../Assessts3/footwear3.webp'
import footwear4 from '../Assessts3/footwear4.webp'
import footwear5 from '../Assessts3/footwear5.webp'
import accessories1 from '../Assessts3/accessories1.webp'
import accessories2 from '../Assessts3/accessories2.webp'
import accessories3 from '../Assessts3/accessories3.webp'
import accessories4 from '../Assessts3/accessories4.webp'
import accessories5 from '../Assessts3/accessories5.webp'
import { CCarousel, CCarouselItem, CImage } from '@coreui/react-pro'
import { CSpinner } from '@coreui/react'
function Women() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
      setTimeout(() => setLoading(false), 3000);
  }, []);
  const deals = [
    {
      id: 1,
      img: pic1,
    },
    {
      id: 2,
      img: pic2,
    },
    {
      id: 3,
      img: pic3,
    },
    {
      id: 4,
      img: pic4,
    },
    {
      id: 5,
      img: pic5,
    },
    {
      id: 6,
      img: pic6,
    },
    {
      id: 7,
      img: pic7,
    },
    {
      id: 8,
      img: pic8,
    },
    {
      id: 9,
      img: pic9,
    },
    {
      id: 10,
      img: pic10,
    },
  ];
  return (
    loading ? <div className='d-flex justify-content-center pt-5'><CSpinner/></div> :
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
        <CCarouselItem>
          <CImage img src={carousel6} alt='carousel6' width={"100%"} />
        </CCarouselItem>
        <CCarouselItem>
          <CImage img src={carousel7} alt='carousel7' width={"100%"} />
        </CCarouselItem>
        <CCarouselItem>
          <CImage img src={carousel8} alt='carousel8' width={"100%"} />
        </CCarouselItem>
        <CCarouselItem>
          <CImage img src={carousel9} alt='carousel9' width={"100%"} />
        </CCarouselItem>
        <CCarouselItem>
          <CImage img src={carousel10} alt='carousel10' width={"100%"} />
        </CCarouselItem>
        <CCarouselItem>
          <CImage img src={carousel11} alt='carousel10' width={"100%"} />
        </CCarouselItem>
      </CCarousel>

      <div className='deals p-5'>BIGGEST DEALS ON TOP BRANDS</div>

      <div className='d-flex flex-wrap justify-content-center column-gap-4'>
        {deals.map((x) =>
          <div key={x.id}><img src={x.img} alt='imgs' width={"100%"} height={"450"} /></div>
        )}
      </div>

      <div className='deals p-5'>CATEGORIES TO BAG</div>

      <div className='d-flex justify-content-center gap-3 p-5'>
        <div><img src={topbrand1} alt='topbrand1' width={"100%"} height={"300"} /></div>
        <div><img src={topbrand2} alt='topbrand1' width={"100%"} height={"300"} /></div>
        <div><img src={topbrand3} alt='topbrand1' width={"100%"} height={"300"} /></div>
        <div><img src={topbrand4} alt='topbrand1' width={"100%"} height={"300"} /></div>
        <div><img src={topbrand5} alt='topbrand1' width={"100%"} height={"300"} /></div>
        <div><img src={topbrand6} alt='topbrand1' width={"100%"} height={"300"} /></div>
      </div>

      <div className='deals p-5'>EXPLORE TOP BRANDS</div>

      <div className='d-flex justify-content-center gap-3 p-5'>
        <div><img src={branded1} alt='topbrand1' width={"100%"} /></div>
        <div><img src={branded2} alt='topbrand1' width={"100%"} /></div>
        <div><img src={branded3} alt='topbrand1' width={"100%"} /></div>
        <div><img src={branded4} alt='topbrand1' width={"100%"} /></div>
        <div><img src={branded5} alt='topbrand1' width={"100%"} /></div>
      </div>

      <div className='deals p-5'>TRENDING IN WESTERN WEAR</div>

      <div className='d-flex justify-content-center gap-3 p-5'>
        <div><img src={westernwear1} alt='topbrand1' width={"100%"} /></div>
        <div><img src={westernwear2} alt='topbrand1' width={"100%"} /></div>
        <div><img src={westernwear3} alt='topbrand1' width={"100%"} /></div>
        <div><img src={westernwear4} alt='topbrand1' width={"100%"} /></div>
        <div><img src={westernwear5} alt='topbrand1' width={"100%"} /></div>
      </div>

      <div className='deals p-5'>TRENDING IN INDIAN WEAR</div>

      <div className='d-flex justify-content-center gap-3 p-5' >
        <div><img src={indianwear1} alt='topbrand1' width={"100%"} /></div>
        <div><img src={indianwear2} alt='topbrand1' width={"100%"} /></div>
        <div><img src={indianwear3} alt='topbrand1' width={"100%"} /></div>
        <div><img src={indianwear4} alt='topbrand1' width={"100%"} /></div>
        <div><img src={indianwear5} alt='topbrand1' width={"100%"} /></div>

      </div>

      <div className='deals p-5'>TRENDING IN SPORTS WEAR</div>

      <div className='d-flex justify-content-center gap-3 p-5' >
        <div><img src={sportswear1} alt='topbrand1' width={"100%"} /></div>
        <div><img src={sportswear2} alt='topbrand1' width={"100%"} /></div>
        <div><img src={sportswear3} alt='topbrand1' width={"100%"} /></div>
        <div><img src={sportswear4} alt='topbrand1' width={"100%"} /></div>
        <div><img src={sportswear5} alt='topbrand1' width={"100%"} /></div>

    </div>

    <div className='deals p-5'>TRENDING FOOT WEAR</div>

      <div className='d-flex justify-content-center gap-3 p-5' >
        <div><img src={footwear1} alt='topbrand1' width={"100%"} /></div>
        <div><img src={footwear2} alt='topbrand1' width={"100%"} /></div>
        <div><img src={footwear3} alt='topbrand1' width={"100%"} /></div>
        <div><img src={footwear4} alt='topbrand1' width={"100%"} /></div>
        <div><img src={footwear5} alt='topbrand1' width={"100%"} /></div>

    </div>

    <div className='deals p-5'>TRENDING IN ACCESSSORIES</div>

<div className='d-flex justify-content-center gap-3 p-5' >
  <div><img src={accessories1} alt='topbrand1' width={"100%"} /></div>
  <div><img src={accessories2} alt='topbrand1' width={"100%"} /></div>
  <div><img src={accessories3} alt='topbrand1' width={"100%"} /></div>
  <div><img src={accessories4} alt='topbrand1' width={"100%"} /></div>
  <div><img src={accessories5} alt='topbrand1' width={"100%"} /></div>

</div>


    </div>
  )
}

export default Women
