import React from 'react'
import writeImg from "../assets/products/writing.png"
import { FaCheck } from 'react-icons/fa'
const Card = () => {
    return (
        <div className='border border-gray-200 shadow-sm rounded-2xl p-4 flex flex-col gap-4 relative'>
            <div className='bg-yellow-200 mt-1 absolute top-0 right-0 rounded-full px-2 py-1'>
                <h3>Best Seller</h3>
            </div>
            <div className="border w-12 h-12 rounded-full overflow-hidden flex items-center justify-center p-2">
                <img src={writeImg} alt="" className="w-full h-full object-cover" />
            </div>
            <div>
                <h3 className='text-2xl font-bold'>AI Writing Pro</h3>
                <p className='text-[#627382]'>Generate high-quality content, blogs, and marketing copy in seconds with advanced AI.</p>
            </div>
            <div>
                <h3 className='text-2xl font-bold'>$29 <span className='text-lg opacity-50'>/Mo</span></h3>
                <ul className='opacity-50'>
                    <li className='flex items-center gap-1'><FaCheck color='#30B868' />Unlimited AI Generations</li>
                    <li className='flex items-center gap-1'><FaCheck color='#30B868' />Unlimited AI Generations</li>
                    <li className='flex items-center gap-1'><FaCheck color='#30B868' />Unlimited AI Generations</li>
                </ul>
            </div>
            <div className=''>
                <button className='inline-flex justify-center items-center rounded-full bg-linear-to-r from-blue-600 to-purple-600 px-6 py-3 w-full
                     text-sm font-semibold text-white shadow-md transition-all hover:bg-blue-700 active:scale-95'>Buy Now</button>
            </div>
        </div>
    )
}

export default Card
