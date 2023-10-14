import React, { useEffect, useState } from 'react'
import furniture from '../Assessts4/furniture1.webp'
import bed1 from '../Assessts4/bed1.webp'
import bed2 from '../Assessts4/bed2.webp'
import bed3 from '../Assessts4/bed3.webp'
import bed4 from '../Assessts4/bed4.webp'
import bed5 from '../Assessts4/bed5.webp'
import bed6 from '../Assessts4/bed6.webp'
import homepage from '../Assessts4/homepage.webp'
import doublecot1 from '../Assessts4/doublecot1.webp'
import doublecot2 from '../Assessts4/doublecot-2.webp'
import doublecot3 from '../Assessts4/doublecot-3.webp'
import brands from '../Assessts4/photo.webp'
import swayam from '../Assessts4/brandedweb1.webp'
import HM from '../Assessts4/brandedweb2.jpg'
import spaces from '../Assessts4/brandedweb3.webp'
import marks from '../Assessts4/brandedweb4.webp'
import decor from '../Assessts4/brandedweb5.webp'
import {BiSolidRightArrow} from 'react-icons/bi'
import bell from '../Assessts3/Screenshot_35-removebg-preview.png'
import './Homeliving.css'
import { CSpinner } from '@coreui/react'
function Homeliving() { 
  const [loading, setLoading] = useState(true);

  useEffect(() => {
      setTimeout(() => setLoading(false), 3000);
  }, []);
  return (
    loading ? <div className='d-flex justify-content-center pt-5'><CSpinner /></div> :
    <div>
   <div className='pt-4 px-5 d-flex justify-content-center'><img src={furniture} alt='furniture' width={"100%"}/></div>

   <div className='deals p-5'>NICE TO SEE YOU, COME ON IN!</div>

<div className=' d-flex  justify-content-center  gap-5'>
<div className='d-flex flex-column'>
<div className='d-flex gap-5 '>
<div><img src={bed1} alt='bed1' className='bed' width={"100%"} height={"300"}/></div>
<div><img src={bed2} alt='bed1' className='bed' width={"100%"} height={"300"}/></div>
</div>
<div className='d-flex gap-5'>
<div><img src={bed3} alt='bed1' className='bed' width={"100%"} height={"300"}/></div>
<div><img src={bed4} alt='bed1' className='bed' width={"100%"} height={"300"}/></div>
</div>
<div className='d-flex gap-5' >
<div><img src={bed5} alt='bed1' className='bed' width={"100%"} height={"300"}/></div>
<div><img src={bed6} alt='bed1' className='bed' width={"100%"} height={"300"}/></div>
</div>
  </div> 
  <div className='col-3'>
<div className='word'>Furnishings & Bed Linen</div>
<div className='word'>BedSheet</div>
<div className='word'>Pillows&Pillows Cover</div>
<div className='word'>Blankets,Quilts & Dohars</div>
<div className='word'>Curtains</div>
<div className='word'>Mats&Dhuries</div>
<div className='word'>Carpets</div>
<div className='word'>Bath Rugs</div>
<div className='word'>laptop Table</div>
<div className='word'>Wall Art</div>
<div className='word'>Mirrors</div>
<div className='word'>lamps&Lighting</div>
<div className='word'>Lamp</div>
<div className='word'> Dinnerware</div>
<div className='word'>Bakeaware</div>
<div className='word'>Water Bottle</div>
<div className='word'>Kitche Storage</div>
<div className='word'>Fridge</div>
<div className='word'>Home Thaeater</div>
<div className='word'>Home Application</div>
<div className='word'>Decorative Items</div>
<div className='word'>Table Lamps</div>
<div className='word'>Floor Lamps</div>
<div className='word'>Candles & Candle Holder</div>
  </div>
</div>
<div className='p-5 '><img src={homepage} alt='homepage' width={'100%'}/>
<div className='d-flex justify-content-center gap-3'>
  <div><img src={doublecot1} alt='doublecot1'  className='bed' width={"100%"} /></div>
  <div><img src={doublecot2} alt='doublecot2'  className='bed' width={"100%"} /></div>
  <div><img src={doublecot3} alt='doublecot3'  className='bed' width={"100%"} /></div>
  </div>
  <div ><img src={brands} alt='photo'/></div>
  <div className='d-flex justify-content-center gap-4'>
    <div><img src={swayam} alt='swayam' className='bed' width={"270"} height={"200"}/></div>
    <div><img src={HM} alt='HM' className='bed' width={"270"} height={"200"}/></div>
    <div><img src={spaces} alt='spaces'className='bed' width={"270"} height={"200"}/></div>
    <div><img src={marks} alt='marks'className='bed' width={"270"} height={"200"}/></div>
    <div><img src={decor} alt='decor'className='bed' width={"270"} height={"200"}/></div>
  </div>
</div>

    </div>
  )
}

export default Homeliving
