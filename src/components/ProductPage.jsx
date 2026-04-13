import React from 'react'
import Card from './Card'

const ProductPage = () => {
    return (
        <div className='w-5/6 mx-auto'>
            <div className='text-center mb-10'>
                <div>
                    <h1 className='text-6xl text-[#101727] font-bold mb-4'>Premium Digital Tools</h1>
                    <p className='text-[#627382]'>Choose from our curated collection of premium digital products
                        designed <br /> to boost your productivity and creativity.</p>
                </div>
                <div className='mt-4'>
                    <button className='rounded-full bg-linear-to-r from-blue-600 to-purple-600 px-6 py-3 inline-flex
                     text-sm font-semibold text-white shadow-md transition-all hover:bg-blue-700 active:scale-95'>
                        Products</button>
                    <button className='py-2 px-6 border  border-[#4F39F6]
                    hover:bg-gray-100 active:scale-95 active:shadow-inner gap-2 rounded-r-full'>
                        Cart</button>
                </div>
            </div>
            <div className='grid grid-cols-3 gap-2'>
                <Card></Card>
                <Card></Card>
                <Card></Card>
            </div>
        </div>
    )
}

export default ProductPage
