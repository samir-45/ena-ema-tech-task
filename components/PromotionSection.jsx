'use client'
import React from 'react'
import Contact from './Contact'

export default function PromotionSection() {
    return (

        <div className="min-h-screen w-full relative ">
            {/* Arctic Lights Background with Top Glow */}
            <div
                className="absolute inset-0 z-0"
                style={{
                    background: "radial-gradient(ellipse 60% 60% at 20% 40%, rgba(34, 197, 94, 0.25), transparent 70%), #0a0f0d",
                }}
            />

            <div className='flex relative pt-6 sm:pt-12 md:pt-16 flex-col justify-center items-center'>
                {/* Heading */}
                <div>
                    <h2 className="text-3xl md:text-6xl text-center text-white font-bold mb-4">
                        Ready to Turn Visitors Into <br />
                        <span className="text-green-400">Real Customers?</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-center mb-12">
                        Don't settle for an average page. Get a premium, conversion-focused
                        landing page that pays for itself.
                    </p>
                </div>
                <div className='mx-5 sm:mx-0'>

                    <Contact text={'Get my high-converting landing page →'}></Contact>
                </div>
            </div>
        </div>

    )
}
