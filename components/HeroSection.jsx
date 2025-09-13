'use client'
import React from 'react'
import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-coverflow'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import FeaturesSection from './FeaturesSection'
import ImageSlider from './ImageSlider'
import Contact from './Contact'

export default function HeroSection() {

    return (
        <>
            <div className="min-h-screen w-full relative bg-black">
                {/* Arctic Lights Background with Top Glow */}
                <div
                    className="absolute inset-0 z-0"
                    style={{
                        background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(34, 197, 94, 0.25), transparent 70%), #151e1b",
                    }}
                />

                <main className="overflow-hidden bg-[#151e1b] text-white">
                    <section className="relative">
                        <div className="relative py-6 lg:py-10">
                            <div className="mx-auto ">
                                <div className="text-center flex flex-col items-center sm:mx-auto sm:w-10/12 lg:mr-auto lg:mt-0 lg:w-4/5">
                                    <Link
                                        href="/"
                                        aria-label="home"
                                        className="flex items-center space-x-2">
                                        <img className='text-black pb-11' src='/Logo.png' alt="" />
                                    </Link>
                                    <Link
                                        href="/"
                                        className="rounded-full bg-[#151e1b] border-t-2 border-t-[#1FFFA5] mx-auto flex w-fit items-center gap-2 border p-1 pr-3">
                                        <span className=" px-2 py-1 text-xs"><img src="/star.svg" alt="" /></span>
                                        <span className="text-sm">Trusted by 30+ startups & entrepreneurs worldwide</span>
                                        <span className="bg-(--color-border) block h-4 w-px"></span>

                                        <ArrowRight className="size-4" />
                                    </Link>

                                    <h1 className="mt-8 text-4xl font-semibold md:text-6xl xl:text-6xl xl:[line-height:1.125]">
                                        Strategic Landing Pages That <br /> Convert From Just <span className='text-[#1FFFA5]'>$200</span>
                                    </h1>
                                    <p className="mx-auto mt-8 hidden max-w-2xl text-wrap text-lg font-thin sm:block">Stop wasting traffic on generic pages. We deliver premium, conversion-focused landing pages designed, developed, and launched in just 5 days.</p>
                                </div>


                                {/*Contact Details submission component*/}
                                <div className='my-14 mx-5 sm:mx-0'>
                                    <Contact text={'Ami valo manusGet my high-converting landing page →'}></Contact>

                                </div>
                                


                                {/* Image Slider */}
                                <ImageSlider></ImageSlider>


                                {/* Features Section */}
                                <FeaturesSection></FeaturesSection>
                            </div>
                        </div>
                    </section>
                </main>
            </div>

        </>
    )
}