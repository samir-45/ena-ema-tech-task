"use client";

import { motion } from "framer-motion";
import { Palette, Rocket, User, UserRound } from "lucide-react";

const ProcessSection = () => {
  return (
    <section className="bg-gray-900 text-white grid py-20 px-8">
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center max-w-4xl relative mx-auto mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          From Idea to Live Landing Page in <span className="text-green-400">Just 5 Days</span>
        </h2>
        <p className="text-gray-400">
          Our streamlined process ensures fast delivery without compromising quality.
        </p>
      </motion.div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">


        
        {/* Day 1 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="bg-[#192420] rounded-lg p-6 flex w-64 h-64 flex-col items-center text-center relative"
        >
          <span className="absolute border-2 border-[#1FFFA5] -top-3 bg-[#192420] text-[#1FFFA5] px-4 py-1 rounded-full text-sm font-semibold">
            Day 1
          </span>
          <div className="w-16 h-16 bg-[#003D25] rounded-full flex items-center justify-center mb-4">
            <span className="text-3xl"><UserRound></UserRound></span>
          </div>
          <h3 className="text-xl font-semibold mb-2">Book Your Project</h3>
          <p className="text-gray-300">
            Fill out a short form and we'll get started immediately.
          </p>
        </motion.div>

        {/* Day 2-4 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-[#192420]  rounded-lg p-6 flex w-64 h-64 flex-col items-center text-center relative"
        >
          <span className="absolute -top-3 bg-[#192420] border-2 border-[#1FFFA5] text-[#1FFFA5] px-4 py-1 rounded-full text-sm font-semibold">
            Day 2-4
          </span>
          <div className="w-16 h-16 bg-[#003D25] rounded-full flex items-center justify-center mb-4">
            <span className="text-3xl"><Palette></Palette></span>
          </div>
          <h3 className="text-xl font-semibold mb-2">Design & Development</h3>
          <p className="text-gray-300">
            Unlimited revisions until perfect. You're involved every step.
          </p>
        </motion.div>

        {/* Day 5 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="bg-[#192420] rounded-lg p-6 flex w-64 h-64 flex-col items-center text-center relative"
        >
          <span className="absolute -top-3 bg-[#192420] border-2 border-[#1FFFA5] text-[#1FFFA5] px-4 py-1 rounded-full text-sm font-semibold">
            Day 5
          </span>
          <div className="w-16 h-16 bg-[#003D25] rounded-full flex items-center justify-center mb-4">
            <span className="text-3xl"><Rocket></Rocket></span>
          </div>
          <h3 className="text-xl font-semibold mb-2">Launch</h3>
          <p className="text-gray-300">
            Fully deployed on your hosting and ready to convert visitors.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessSection;
