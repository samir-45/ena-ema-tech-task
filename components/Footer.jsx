import React from 'react'

export default function Footer() {
    return (
        <div className='relative bg-[#1FFFA5] flex justify-between items-center px-8 py-10'>
            <div>
                <img className='invert' src="/Logo.png" alt="" />
            </div>
            <div>
                <p className='text-sm'>© All rights reserved to Ena Ema Technologies</p>
            </div>
            <div className='flex gap-1 sm:gap-3 items-center'>
                <img src="/Scicons/linkedin.svg" alt="linkedin" />
                <img src="/Scicons/fb.svg" alt="facebook" />
                <img src="/Scicons/insta.svg" alt="instagram" />
                <img src="/Scicons/drib.svg" alt="dribble" />
                <img src="/Scicons/be.svg" alt="behance" />
            </div>
        </div>
    )
}
