    import React from 'react'
    import Banner from './Banner'

    const Home = () => {
        return (
            <div>
                <Banner></Banner>
                <div className='bg-linear-to-r from-blue-800 to-purple-500 w-full'>
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
            </div>
        )
    }

    export default Home
