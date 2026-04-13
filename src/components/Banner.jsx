import React from 'react'
import { CiPlay1 } from 'react-icons/ci'
import heroImg from "../assets/banner.png"
import { FaDotCircle } from 'react-icons/fa'
const Banner = () => {
    return (
        <div className='flex justify-between items-center w-5/6 mx-auto mt-20'>
            <div className='flex flex-col gap-4'>
                <div className=''>
                    <button className='text-[#4f39f6] bg-blue-100 py-1.5 px-2 rounded-full flex justify-center items-center gap-2'><FaDotCircle />New: AI-Powered tools available</button>
                </div>
                <div>
                    <h1 className='text-7xl text-[#101727] font-bold'>
                        Supercharge Your <br /> digital Workflow
                    </h1>
                    <p className='text-[#627382] pt-3'>Access premium AI tools, design assets, templates, and productivity <br />
                        software—all in one place. Start creating faster today. <br />
                        Explore Products
                    </p>
                </div>
                <div className='flex gap-4'>
                    <button className='text-white bg-[#4F39F6] py-2 px-3 rounded-full active:scale-95 active:shadow-inner'>Explore Products</button>
                    <button className='py-2 px-3 border text-[#4F39F6] border-[#4F39F6] flex justify-center items-center
                    hover:bg-gray-100 active:scale-95 active:shadow-inner gap-2 rounded-full'><CiPlay1 />Wach Demo</button>
                </div>
            </div>
            <div>
                <img src={heroImg} alt="" />
            </div>
        </div>
    )
}

export default Banner
