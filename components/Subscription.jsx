import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';

const Subscription = () => {
    return (
        <div className="min-h-screen text-white flex flex-col justify-center p-8">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className=" mb-12 w-full"
            >
                <h1 className="text-4xl font-semibold text-white mb-2">
                    Simple, Transparent Pricing - <span className='text-[#1FFFA5]'>Choose Your Plan</span>
                </h1>
                <p className="text-lg text-gray-300">
                    No hidden fees, no surprises. Just premium landing pages at unbeatable prices.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
                {/* Basic Plan */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="bg-[#192420] rounded-lg p-8 flex flex-col shadow-lg "
                >
                    <div className='flex py-5 justify-between w-full border-b border-[#2A3C36] mb-5'>
                        <div>
                            <h2 className="text-2xl font-semibold mb-2">Basic</h2>
                            <p className="text-sm text-gray-400 mb-2">Perfect for solopreneurs</p>
                        </div>
                        <div>
                            <p className="text-4xl font-bold mb-2">$200</p>
                        </div>
                    </div>
                    <ul className="text-left mb-8 space-y-2">
                        <li className="flex items-center text-gray-400"><span className='h-2 w-2 bg-[#1FFFA5] mr-4 rounded-full'></span> 1 Landing Page (Design + Development)</li>
                        <li className="flex items-center text-gray-400"><span className='h-2 w-2 bg-[#1FFFA5] mr-4 rounded-full'></span> Hosting Deployment</li>
                        <li className="flex items-center text-gray-400"><span className='h-2 w-2 bg-[#1FFFA5] mr-4 rounded-full'></span> 5-Day Delivery</li>
                        <li className="flex items-center text-gray-400"><span className='h-2 w-2 bg-[#1FFFA5] mr-4 rounded-full'></span> Basic Support</li>
                    </ul>
                    <div className='h-full flex items-end justify-center'>
                        <button className="bg-[#003D25] cursor-pointer text-[#00E58A] px-6 py-3 w-full rounded-lg font-semibold hover:bg-transparent border-2 border-transparent hover:border-[#003D25] transition">
                            Start my project →
                        </button>
                    </div>

                </motion.div>

                {/* Standard Plan */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="bg-[#192420] rounded-2xl p-8 flex flex-col shadow-lg border-2 border-green-400 relative"
                >
                    <span className="absolute top-0 -translate-y-1/2 translate-x-2 bg-[#192420] border-2  border-green-400 text-green-400 px-4 py-1 rounded-full text-sm">
                        Most popular
                    </span>
                    <div className='flex py-5 justify-between w-full border-b border-[#2A3C36] mb-5'>
                        <div>
                            <h2 className="text-2xl font-semibold mb-2">Standard</h2>
                            <p className="text-sm text-gray-400 mb-2">Best balance of value & features</p>
                        </div>
                        <div>
                            <p className="text-4xl font-bold mb-2">$300</p>
                        </div>
                    </div>
                    <ul className="text-left mb-8 space-y-2">
                        <li className="flex items-center text-gray-400"><span className='h-2 w-2 bg-[#1FFFA5] mr-4 rounded-full'></span> Everything in Basic</li>
                        <li className="flex items-center text-gray-400"><span className='h-2 w-2 bg-[#1FFFA5] mr-4 rounded-full'></span> Extra Custom Section</li>
                        <li className="flex items-center text-gray-400"><span className='h-2 w-2 bg-[#1FFFA5] mr-4 rounded-full'></span> Free Hosting Setup</li>
                        <li className="flex items-center text-gray-400"><span className='h-2 w-2 bg-[#1FFFA5] mr-4 rounded-full'></span> Free Consultation Call</li>
                        <li className="flex items-center text-gray-400"><span className='h-2 w-2 bg-[#1FFFA5] mr-4 rounded-full'></span> Priority Support</li>
                    </ul>
                    <div className='h-full flex items-end justify-center'>
                        <button className="bg-[#003D25] cursor-pointer shadow-[0_0_10px_#00ffae] bg-gradient-to-b from-green-400 to-[#1FFFA5] text-black px-6 py-3 w-full rounded-lg font-semibold hover:bg-green-600 transition">
                            Start my project →
                        </button>
                    </div>
                </motion.div>

                {/* Premium Plan */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="bg-[#192420] rounded-lg p-8 flex flex-col shadow-lg"
                >

                    <div className='flex py-5 justify-between w-full border-b border-[#2A3C36] mb-5'>
                        <div>
                            <h2 className="text-2xl font-semibold mb-2">Premium</h2>
                            <p className="text-sm text-gray-400 mb-2">For brands & agencies</p>
                        </div>
                        <div>
                            <p className="text-4xl font-bold mb-2">$500</p>
                        </div>
                    </div>
                    <ul className="text-left mb-8 space-y-2">
                        <li className="flex items-center text-gray-400"><span className='h-2 w-2 bg-[#1FFFA5] mr-4 rounded-full'></span> Everything in Standard</li>
                        <li className="flex items-center text-gray-400"><span className='h-2 w-2 bg-[#1FFFA5] mr-4 rounded-full'></span> Advanced Animations</li>
                        <li className="flex items-center text-gray-400"><span className='h-2 w-2 bg-[#1FFFA5] mr-4 rounded-full'></span> Priority Delivery (3 Days)</li>
                        <li className="flex items-center text-gray-400"><span className='h-2 w-2 bg-[#1FFFA5] mr-4 rounded-full'></span> 6 Months Free Support</li>
                        <li className="flex items-center text-gray-400"><span className='h-2 w-2 bg-[#1FFFA5] mr-4 rounded-full'></span> Performance Optimization</li>
                    </ul>
                    <div className='h-full flex items-end justify-center'>
                        <button className="bg-[#003D25] cursor-pointer text-[#00E58A] px-6 py-3 w-full rounded-lg font-semibold hover:bg-transparent border-2 border-transparent hover:border-[#003D25] transition">
                            Start my project →
                        </button>
                    </div>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mt-12 text-white flex px-6 pb-10 rounded-full font-semibold items-center gap-2"
            >
                <div className='text-[#1FFFA5]'><Zap className='size-9'></Zap></div>
                <div>
                    <p className='text-2xl font-semibold'>Limited Availability</p>
                    <p className="font-thin">
                        We only onboard 5 new clients per month. 2 spots left for this month - Secure yours today.
                    </p>
                </div>

            </motion.div>


            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="bg-[#192420] w-full rounded-lg p-8 text-center"
            >
                <h2 className="text-4xl font-semibold mb-4">Special Offer For Early Clients</h2>
                <p className="text-sm font-thin text-gray-300 mb-6">
                    Get 10% OFF + Free Hosting Setup when you book this week.
                </p>
                <button className="bg-[#003D25] w-fit cursor-pointer shadow-[0_0_10px_#00ffae] bg-gradient-to-b from-green-400 to-[#1FFFA5] text-black px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition">
                    Claim my 10% discount →
                </button>
            </motion.div>
        </div>
    );
};

export default Subscription;