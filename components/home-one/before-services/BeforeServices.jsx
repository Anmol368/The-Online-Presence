import React from 'react'
import Image from 'next/image'


import Img1 from '../../../public/images/topImg/bestStrategy/service_img4.webp'
import Img2 from '../../../public/images/topImg/websiteOptimization/service_img2.webp'
import Img3 from '../../../public/images/topImg/affordablePrice/service_img3.webp'
import Img4 from '../../../public/images/topImg/reportingAnalysis/service_img1.webp'

const BeforeServices = () => {
  return (
    <div className='aximo-section-padding7'>
        <div className='before-services-section'>
            <h2 className=''>
                Expand Your Social Reach With Us!
            </h2>
            <p className=''>
                We are passionate about crafting exceptional online experiences that elevate your brand and connect you with your target audience
            </p>
        </div>
        <div className='before-services-section2'>
         <div className='before-services-section2-inside'>
            <div className='bss2-inside'>
                <Image src={Img1} alt="Best Strategy"></Image>
                <h2>Best Strategy</h2>
                <p>Increasing conversions, repeat traffic, social reach through ranking and online authority across your website is our top priority.</p>
            </div>
            <div className='bss2-inside'>
                <Image src={Img2} alt="Website Optimization"></Image>
                <h2>Website Optimization</h2>
                <p>In order for your funnel to be successful, you need to make it as smooth as possible.</p>
            </div>
        </div>
        <div className='before-services-section2-inside'>
            <div className='bss2-inside'>
                <Image src={Img3} alt="Affordable prices for you"></Image>
                <h2>Affordable prices for you</h2>
                <p>Providing the best & cost effective services to you that makes you stand out not your wallet.</p>
            </div>
            <div className='bss2-inside'>
                <Image src={Img4} alt="Reporting & Analysis"></Image>
                <h2>Reporting & Analysis</h2>
                <p>Researching target market of the competitors and analyzing keywords, hence optimizing the website.</p>
            </div>
        </div>
        </div>
    </div>
  )
}

export default BeforeServices