import React, { useEffect, useState } from 'react';
import virat from '../Assessts/virat.webp';
import shoe1 from '../Assessts/shoe1.webp';
import shoe2 from '../Assessts/shoe4.webp';
import shoe3 from '../Assessts/shoe6.webp';
import shoe4 from '../Assessts/shoe3.webp';
import shoe5 from '../Assessts/shoe4.webp';
import shoe6 from '../Assessts/shoe3.webp';
import shoe7 from '../Assessts/shoe7.webp';
import shoe8 from '../Assessts/shoe8.webp';
import shoe9 from '../Assessts/shoe9.webp';
import shoe10 from '../Assessts/shoe10.webp';
import shoe11 from '../Assessts/shoe11.webp';
import shoe12 from '../Assessts/shoe12.webp';
import shop1 from '../Assessts/shop1.webp';
import shop2 from '../Assessts/shop2.webp';
import shop3 from '../Assessts/shop3.webp';
import shop4 from '../Assessts/shop4.webp';
import shop5 from '../Assessts/shop5.webp';
import shop6 from '../Assessts/shop6.webp';
import shop7 from '../Assessts/shop7.webp';
import shop8 from '../Assessts/shop8.webp';
import shop9 from '../Assessts/shop9.webp';
import shop10 from '../Assessts/shop10.webp';
import shop11 from '../Assessts/shop11.png';
import shop12 from '../Assessts/shop12.webp';
import offer1 from '../Assessts1/Screenshot_1.png';
import offer2 from '../Assessts1/Screenshot_2.png';
import offer3 from '../Assessts1/Screenshot_3.png';
import offer4 from '../Assessts1/Screenshot_4.png';
import offer5 from '../Assessts1/Screenshot_5.png';
import offer6 from '../Assessts1/Screenshot_6.png';
import offer7 from '../Assessts1/Screenshot_7.png';
import offer8 from '../Assessts1/Screenshot_8.png';
import offer9 from '../Assessts1/Screenshot_9.png';
import offer10 from '../Assessts1/Screenshot_10.png';
import offer11 from '../Assessts1/Screenshot_11.png';
import offer12 from '../Assessts1/Screenshot_12.png';
import offer13 from '../Assessts1/Screenshot_13.png';
import offer14 from '../Assessts1/Screenshot_14.png';
import offer15 from '../Assessts1/Screenshot_15.png';
import offer16 from '../Assessts1/Screenshot_16.png';
import offer17 from '../Assessts1/Screenshot_17.png';
import offer18 from '../Assessts1/Screenshot_18.png';
import offer19 from '../Assessts1/Screenshot_19.png';
import offer20 from '../Assessts1/Screenshot_20.png';
import offer21 from '../Assessts1/Screenshot_21.png';
import offer22 from '../Assessts1/Screenshot_22.png';
import offer23 from '../Assessts1/Screenshot_23.png';
import offer24 from '../Assessts1/Screenshot_24.png';
import offer25 from '../Assessts1/Screenshot_25.png';
import offer26 from '../Assessts1/Screenshot_26.png';
import offer27 from '../Assessts1/Screenshot_27.png';
import offer28 from '../Assessts1/Screenshot_28.png';
import offer29 from '../Assessts1/Screenshot_29.png';
import offer30 from '../Assessts1/Screenshot_30.png';
import offer31 from '../Assessts1/Screenshot_31.png';
import offer32 from '../Assessts1/Screenshot_32.png';
import offer33 from '../Assessts1/Screenshot_33.png';
import offer34 from '../Assessts1/Screenshot_34.png';
import header from '../Assessts1/header.webp';
import head from '../Assessts1/img2.webp';
import { CCarousel, CCarouselItem, CImage, CSpinner } from '@coreui/react';

export function Myntra() {

    const pictures = [
        {
            id: 1,
            pics: offer1,
        },
        {
            id: 2,
            pics: offer2,
        },
        {
            id: 3,
            pics: offer3,
        },
        {
            id: 4,
            pics: offer4,
        },
        {
            id: 5,
            pics: offer5,
        },
        {
            id: 6,
            pics: offer6,
        },
        {
            id: 7,
            pics: offer7,
        },
        {
            id: 8,
            pics: offer8,
        },
        {
            id: 9,
            pics: offer9,
        },
        {
            id: 10,
            pics: offer10,
        },
        {
            id: 11,
            pics: offer11,
        },
        {
            id: 12,
            pics: offer12,
        },
        {
            id: 13,
            pics: offer13,
        },
        {
            id: 14,
            pics: offer14,
        },
        {
            id: 15,
            pics: offer15,
        },
        {
            id: 16,
            pics: offer16,
        },
        {
            id: 17,
            pics: offer17,
        },
        {
            id: 18,
            pics: offer18,
        },
        {
            id: 19,
            pics: offer19,
        },
        {
            id: 20,
            pics: offer20,
        },
        {
            id: 21,
            pics: offer21,
        },
        {
            id: 22,
            pics: offer22,
        },
        {
            id: 23,
            pics: offer23,
        },
        {
            id: 24,
            pics: offer24,
        },
        {
            id: 25,
            pics: offer25,
        },
        {
            id: 26,
            pics: offer26,
        },
        {
            id: 27,
            pics: offer27,
        },
        {
            id: 28,
            pics: offer28,
        },
        {
            id: 29,
            pics: offer29,
        },
        {
            id: 30,
            pics: offer30,
        },
        {
            id: 31,
            pics: offer31,
        },
        {
            id: 32,
            pics: offer32,
        },
        {
            id: 33,
            pics: offer33,
        },
        {
            id: 34,
            pics: offer34,
        },
    ];
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => setLoading(false), 3000);
    }, []);
    return (
        loading ? <div className='d-flex justify-content-center pt-5'><CSpinner /></div> :
            <div>
                <div><img src={header} alt='header' className=' header' /></div>
                <div className='offerimg'>
                    <CCarousel controls indicators interval={3000} dark>
                        <CCarouselItem>
                            <div><img src={virat} alt='virat' className='viratimg ' /></div>
                        </CCarouselItem>
                        <CCarouselItem>
                            <div><img src={head} alt='virat' className='viratimg' /></div>
                        </CCarouselItem>
                    </CCarousel>
                </div>
                <div className='deals p-5'>NOW OR NEVER DEALS</div>
                <CCarousel controls indicators interval={3000} dark className='offerimg'>
                    <CCarouselItem>
                        <div className='offershoes'>
                            <CImage src={shoe1} alt="slide 1" />
                            <CImage src={shoe2} alt="slide 2" />
                            <CImage src={shoe3} alt="slide 3" />
                            <CImage src={shoe4} alt="slide 1" />
                            <CImage src={shoe5} alt="slide 2" />
                            <CImage src={shoe6} alt="slide 3" />
                        </div>
                    </CCarouselItem>
                    <CCarouselItem>
                        <div className='offershoes'>
                            <CImage src={shoe7} alt="slide 1" />
                            <CImage src={shoe8} alt="slide 1" />
                            <CImage src={shoe9} alt="slide 1" />
                            <CImage src={shoe10} alt="slide 1" />
                            <CImage src={shoe11} alt="slide 1" />
                            <CImage src={shoe12} alt="slide 1" />
                        </div>
                    </CCarouselItem>
                </CCarousel>

                <div className='deals p-5'>FESTIVE CRAZY OFFERS</div>
                <CCarousel controls indicators interval={3000} dark className='offerimg'>
                    <CCarouselItem>
                        <div className='offershoes'>
                            <CImage src={shop2} alt="slide 2" />
                            <CImage src={shop1} alt="slide 1" />
                            <CImage src={shop3} alt="slide 3" />
                            <CImage src={shop4} alt="slide 1" />
                            <CImage src={shop5} alt="slide 2" />
                            <CImage src={shop6} alt="slide 3" />
                        </div>
                    </CCarouselItem>
                    <CCarouselItem>
                        <div className='offershoes '>
                            <CImage src={shop7} alt="slide 1" />
                            <CImage src={shop8} alt="slide 1" />
                            <CImage src={shop9} alt="slide 1" />
                            <CImage src={shop10} alt="slide 1" />
                            <CImage src={shop11} alt="slide 1" />
                            <CImage src={shop12} alt="slide 1" />
                        </div>
                    </CCarouselItem>
                </CCarousel>

                <CCarousel controls indicators interval={3000} dark className='pt-5 offerimg'>
                    <CCarouselItem>
                        <div className='offershoes'>
                            <CImage src={shop1} alt="slide 1" />
                            <CImage src={shop2} alt="slide 2" />
                            <CImage src={shop3} alt="slide 3" />
                            <CImage src={shop4} alt="slide 1" />
                            <CImage src={shop5} alt="slide 2" />
                            <CImage src={shop6} alt="slide 3" />
                        </div>
                    </CCarouselItem>
                    <CCarouselItem>
                        <div className='offershoes '>
                            <CImage src={shop7} alt="slide 1" />
                            <CImage src={shop8} alt="slide 1" />
                            <CImage src={shop9} alt="slide 1" />
                            <CImage src={shop10} alt="slide 1" />
                            <CImage src={shop11} alt="slide 1" />
                            <CImage src={shop12} alt="slide 1" />
                        </div>
                    </CCarouselItem>
                </CCarousel>
                <div className='deals p-5'>SHOP BY CATEGORY</div>
                <div className='offerdress1'>
                    {pictures.map((x) => <div key={x.id}><img src={x.pics} alt='pics' className='offerdress' /></div>
                    )}
                </div>

            </div>

    );
}
