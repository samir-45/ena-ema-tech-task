import React from 'react'

export default function Footer() {
    return (
        <div className='relative bg-[#1FFFA5] flex justify-between items-center px-8 py-10'>
            <div>
                <img className='invert' src="/Logo.png" alt="" />
            </div>
            <div>
                <p className='text-sm text-center'>© All rights reserved to Ena Ema Technologies</p>
            </div>
            <div className='flex gap-1 sm:gap-3 items-center'>
                <img src="/linkedin.svg" alt="linkedin" />
                <img src="/fb.svg" alt="facebook" />
                <img src="/insta.svg" alt="instagram" />
                <img src="/drib.svg" alt="dribble" />
                <img src="/be.svg" alt="behance" />
            </div>
        </div>
    )
}
