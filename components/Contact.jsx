import { Mail, Phone, User } from 'lucide-react'
import React from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { motion } from "framer-motion";

export default function Contact({text}) {
    return (
        <div className="w-full max-w-3xl mx-auto bg-white/5 backdrop-blur-md rounded-lg border border-gray-600 p-6 md:p-8 shadow-[0_0_9px_rgba(0,255,174,0.15)]">
            {/* Inputs */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                        placeholder="Your name"
                        className="pl-10 bg-transparent border border-white/10 focus:border-green-400 focus:ring-green-400"
                    />
                </div>

                <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                        type="email"
                        placeholder="Email Address"
                        className="pl-10 bg-transparent border border-white/10 focus:border-green-400 focus:ring-green-400"
                    />
                </div>

                <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                        type="tel"
                        placeholder="Phone Number"
                        className="pl-10 bg-transparent border border-white/10 focus:border-green-400 focus:ring-green-400"
                    />
                </div>
            </div>

            {/* CTA Button */}
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                <Button
                    asChild
                    className="w-full mt-6 py-6 text-lg font-semibold bg-[#1FFFA5] text-black rounded-lg shadow-[0_0_10px_#00ffae]  transition-all duration-300 hover:bg-[#0fff9f]"
                >
                    <a href="/">{text}</a>
                </Button>
            </motion.div>

            {/* Bottom Guarantees */}
            <div className="flex justify-center gap-8 mt-6 text-gray-400 text-sm">
                <div className="flex items-center gap-2">
                    <span>🔒</span> SSL secure
                </div>
                <div className="flex items-center gap-2">
                    <span>✔</span> Money-back guaranteed
                </div>
                <div className="flex items-center gap-2">
                    <span>⭐</span> Satisfaction guaranteed
                </div>
            </div>
        </div>
    )
}
