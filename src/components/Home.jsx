    import React from 'react'
    import Banner from './Banner'
import ProductPage from './ProductPage'
import user from "../assets/user.png"
import rocket from "../assets/rocket.png"
import packageImg from "../assets/package.png"

    const Home = ({card, setCard}) => {
        return (
            <div>
                <Banner></Banner>
                <div className='bg-linear-to-r from-blue-800 to-purple-500 w-full mb-30'>
                    <div className='w-5/6 mx-auto flex justify-between text-white py-15'>
                        <div className='flex flex-col  items-center'>
                            <h3 className='text-6xl pb-4 font-bold'>50K+</h3>
                            <p className='text-lg opacity-90'>Active Users</p>
                        </div>
                        <div className='flex flex-col items-center'>
                            <h3 className='text-6xl pb-4 font-bold'>200+</h3>
                            <p className='text-lg opacity-90'>Premium Tools</p>
                        </div>
                        <div className='flex flex-col  items-center'>
                            <h3 className='text-6xl pb-4 font-bold'>4.9</h3>
                            <p className='text-lg opacity-90'>Rating</p>
                        </div>
                    </div>
                </div>
                <ProductPage setCard={setCard} card={card}></ProductPage>

                <div className='bg-[#F9FAFC] py-30'>
                    <div className='text-center pb-10'>
                        <h3 className='text-6xl font-bold'>Get Started In 3 Steps</h3>
                        <p className='text-lg opacity-60'>Start using premium digital tools in minutes, not hours</p>
                    </div>
                    <div className='grid grid-cols-3 gap-8 w-5/6 mx-auto'>
                        <div className='border border-gray-200 shadow-sm px-6 py-22 bg-white rounded-xl relative text-center'>
                            <div className='absolute top-0 right-0 m-3 bg-linear-to-r from-blue-600 to-purple-600 text-white p-1 rounded-full w-10 h-10 flex items-center justify-center'>
                                01
                            </div>
                            <div className='bg-purple-100 inline-flex p-6 rounded-full'>
                                <img src={user} alt="" />
                            </div>
                            <div>
                                <h3 className='my-4 text-2xl font-bold'>Create Account</h3>
                                <p className='text-lg opacity-60'>Sign up for free in seconds. No credit card required to get started.</p>
                            </div>
                        </div>
                        <div className='border border-gray-200 shadow-sm px-6 py-22 bg-white rounded-xl relative text-center'>
                            <div className='absolute top-0 right-0 m-3 bg-linear-to-r from-blue-600 to-purple-600 text-white p-1 rounded-full w-10 h-10 flex items-center justify-center'>
                                02
                            </div>
                            <div className='bg-purple-100 inline-flex p-6 rounded-full'>
                                <img src={packageImg} alt="" />
                            </div>
                            <div>
                                <h3 className='my-4 text-2xl font-bold'>Choose Products</h3>
                                <p className='text-lg opacity-60'>Browse our catalog and select the tools that fit your needs.</p>
                            </div>
                        </div>
                        <div className='border border-gray-200 shadow-sm px-6 py-22 bg-white rounded-xl relative text-center'>
                            <div className='absolute top-0 right-0 m-3 bg-linear-to-r from-blue-600 to-purple-600 text-white p-1 rounded-full w-10 h-10 flex items-center justify-center'>
                                03
                            </div>
                            <div className='bg-purple-100 inline-flex p-6 rounded-full'>
                                <img src={rocket} alt="" />
                            </div>
                            <div>
                                <h3 className='my-4 text-2xl font-bold'>Start Creating</h3>
                                <p className='text-lg opacity-60'>Download and start using your premium tools immediately.</p>
                            </div>
                        </div>                        
                    </div>
                </div>
            </div>

        )
    }

    export default Home
