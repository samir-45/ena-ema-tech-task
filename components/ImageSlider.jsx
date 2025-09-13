import React from 'react'
import { Autoplay, EffectCoverflow } from 'swiper/modules'
import { Swiper, SwiperSlide } from "swiper/react"

export default function ImageSlider() {
    return (
        <div className="x-auto relative mx-auto mt-8 sm:mt-12">
            <div className="absolute inset-0 -top-8 left-1/2 -z-20 h-56 w-full -translate-x-1/2 [background-image:linear-gradient(to_bottom,transparent_98%,theme(colors.gray.200/75%)_98%),linear-gradient(to_right,transparent_94%,_theme(colors.gray.200/75%)_94%)] [background-size:16px_35px] [mask:radial-gradient(black,transparent_95%)] dark:opacity-10"></div>
            <div className="absolute inset-x-0 top-12 -z-[1] mx-auto h-1/3 w-2/3 rounded-full bg-blue-300 blur-3xl dark:bg-white/20"></div>

            <Swiper
                slidesPerView={1.5}
                pagination={{ clickable: true }}
                loop
                autoplay={{ delay: 5000 }}
                className='w-full'
                modules={[Autoplay, EffectCoverflow]}>
                <SwiperSlide className="px-2">
                    <div>
                        <img className='rounded-lg h-11/12 opacity-70' src="/slider-1.jpg" alt="slider-1" />
                    </div>
                </SwiperSlide>
                <SwiperSlide className="px-2">
                    <div>
                        <img className='rounded-lg h-11/12 opacity-70' src="/slider-3.jpg" alt="slider-3" />
                    </div>
                </SwiperSlide>
                <SwiperSlide className="px-2">
                    <div>
                        <img className='rounded-lg h-11/12 opacity-70' src="/slider-4.jpg" alt="slider-4" />
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}
