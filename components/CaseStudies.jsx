"use client";

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import { Check } from "lucide-react";

const caseStudies = [
    {
        id: 1,
        title: "Flowpilot",
        img: "/mac-slider/mac-slider-1.png", // store in public/images
        points: [
            "20% high conversion than average in first week",
            "Clean and modern design with clear CTA",
        ],
    },
    {
        id: 2,
        title: "GrowthSummit",
        img: "/mac-slider/mac-slider-2.png", // store in public/images
        points: [
            "20% high conversion than average in first week",
            "Clean and modern design with clear CTA",
        ],
    },
    {
        id: 3,
        title: "Velora Events",
        img: "/mac-slider/mac-slider-3.png", // store in public/images
        points: [
            "20% high conversion than average in first week",
            "Clean and modern design with clear CTA",
        ],
    },
    {
        id: 4,
        title: "Flowpilot",
        img: "/mac-slider/mac-slider-4.png", // store in public/images
        points: [
            "20% high conversion than average in first week",
            "Clean and modern design with clear CTA",
        ],
    },
    {
        id: 5,
        title: "GrowthSummit",
        img: "/mac-slider/mac-slider-5.png", // store in public/images
        points: [
            "20% high conversion than average in first week",
            "Clean and modern design with clear CTA",
        ],
    },
    {
        id: 6,
        title: "Velora Events",
        img: "/mac-slider/mac-slider-6.png", // store in public/images
        points: [
            "20% high conversion than average in first week",
            "Clean and modern design with clear CTA",
        ],
    },
];

export default function CaseStudies() {
    return (
        <section className="text-white py-16">
            <div className="mx-auto px-6 text-center">
                {/* Title */}
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold mb-3"
                >
                    Case Studies
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="text-gray-400 mb-12"
                >
                    See the designs that delivered results
                </motion.p>

                {/* Swiper Slider */}
                <Swiper
                    spaceBetween={150}
                    loop={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay]}
                    slidesPerView={1}
                    breakpoints={{
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                >
                    {caseStudies.map((item) => (
                        <SwiperSlide key={item.id}>
                            <motion.div
                                whileHover={{ scale: 1.03 }}
                                className="bg-[#151E1B] border-2 border-[#2A3C36] my-5 w-[430px] rounded-2xl overflow-hidden shadow-lg p-3 flex flex-col items-center"
                            >
                                {/* Image */}
                                <div className="w-full h-60 rounded-lg overflow-hidden">
                                    <img
                                        src={item.img}
                                        alt={item.title}
                                        className="w-full h-full object-contain"
                                    />
                                </div>

                                <div className="flex w-full justify-between">
                                    {/* Title */}
                                    <h3 className="text-xl font-semibold mt-4">{item.title}</h3>

                                    {/* Points */}
                                    <ul className="mt-3 text-right flex flex-col items-end space-y-2">
                                        {item.points.map((point, idx) => (
                                            <li
                                                key={idx}
                                                className="flex items-center bg-[#003D25] w-fit px-4 py-1.5 rounded-full font-thin gap-2 text-[10px] text-gray-300"
                                            >
                                                <Check className="text-green-400 w-4 h-4" />
                                                {point}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* CTA Button */}
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-12 px-6 py-3 rounded-xl shadow-[0_0_10px_#00ffae] bg-gradient-to-b from-green-400 to-[#1FFFA5] text-black font-semibold "
                >
                    I want similar results →
                </motion.button>
            </div>
        </section>
    );
}
