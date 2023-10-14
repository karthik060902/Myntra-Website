import React from 'react'
import './Footer.css'
import returns from '../Assessts1/returnimg.png'
import original from '../Assessts1/original.png'
import playstore from '../Assessts1/playstore.png'
import appstore from '../Assessts1/appstore.png'
import fbimg from '../Assessts1/fbimg.png'
import twitter from '../Assessts1/twittimg.png'
import ytimg from '../Assessts1/ytimg.png'
import insta from '../Assessts1/ytimg.png'
function Footer() {
  return (
    <div>
      <div className=' footer'>
                <div>
                    <div className='textheader '>ONLINE SHOPPPING</div>
                    <div className='text'>Men</div>
                    <div className='text'>Women</div>
                    <div className='text'>Kids</div>
                    <div className='text'>Home & Living</div>
                    <div className='text'>Beauty</div>
                    <div className='text'>Gift Cards</div>
                    <div className='text'>Myntra Insider</div>
                    <div className='textheader '>USEFUL LINKS</div>
                    <div className='text'>Blog</div>
                    <div className='text'>Careers</div>
                    <div className='text'>Site Map</div>
                    <div className='text'>Corporate Information</div>
                    <div className='text'>Whitehat</div>
                </div>
                <div>
                    <div className='textheader '>CUSTOMER POLICIES</div>
                    <div className='text'>Contact us</div>
                    <div className='text'>FAQ</div>
                    <div className='text'>T&C</div>
                    <div className='text'>Terms Of Use</div>
                    <div className='text'>Track Orders</div>
                    <div className='text'>Shipping</div>
                    <div className='text'>Cancellation</div>
                    <div className='text'>Returns</div>
                    <div className='text'>Privacy policy</div>
                    <div className='text'>Grievance Officer</div>
                </div>
                <div className='d-flex flex-column gap-2'>
                    <div className='exp'>EXPERIENCE MYNTRA APP ON MOBILE</div>
                    <div className='d-flex gap-2'>
                        <a className='appstore' href='https://play.google.com/store/apps/details?id=com.myntra.android'><div ><img src={playstore} alt='playstore' /></div></a>
                        <a className='appstore' href='https://apps.apple.com/in/app/myntra-indias-fashion-store/id907394059'><div><img src={appstore} alt='appstore' /></div></a>
                    </div>
                    <div className='textheader'>KEEP IN TOUCH</div>
                    <div className='footericon'>
                        <a href='https://www.facebook.com/myntra'><img src={fbimg} alt='fbimg' className='footericons' /></a>
                        <a href='https://twitter.com/myntra'><img src={twitter} alt='twitter' className='footericons' /></a>
                        <a href='https://www.youtube.com/user/myntradotcom'> <img src={ytimg} alt='youtube' className='footericons' /></a>
                        <a href='https://www.instagram.com/myntra/'><img src={insta} alt='insta' className='footericons' /></a>




                    </div>
                </div>

                <div className='returns'>
                    <div className='d-flex align-items-center gap-1' >
                        <img src={original} alt="original" width="40" height="60" />
                        <div><b>100% ORIGINAL</b><span className='content1'>&nbsp;
                            guarantee for<br /> all products at myntra.com
                        </span></div>
                    </div>
                    <div className='d-flex align-items-center gap-1' >
                        <img src={returns} alt="original" width="40" height="60" />
                        <div><b >Return within 14days</b><span className='content1'>&nbsp;
                            of<br /> receiving your order
                        </span></div>
                    </div>
                </div>
            </div>
            <div className='d-flex flex-column justify-content-center  align-items-center gap-3'>
                <div className='searches  '>POPULAR SEARCHES</div>

                <div className='topbrands'>
                    Makeup| Dresses For Girls | T-Shirts | Sandals | Headphones | Babydolls | Blazers For Men | Handbags | Ladies Watches |
                    Bags | Sport Shoes | Reebok Shoes | Puma Shoes  |<br /> Boxers | Wallets | Tops | Earrings|  Fastrack Watches | Kurtis | Nike | Smart Watches |
                    Titan Watches | Designer Blouse | Gowns | Cricket Shoes | Forever 21 | Eye<br /> Makeup | Photo Frames |
                    Punjabi Suits | Bikini | Myntra | Fashion Show | Lipstick | Saree | Watches | Dresses | Lehenga | Nike Shoes |<br />
                    Goggles|  Bras | Suit | Chinos | Shoes | Adidas Shoes | Woodland Shoes | Jewellery | Designers Sarees
                </div>
            </div>
    </div>
  )
}

export default Footer
