import React from 'react'
import { FaCheck } from 'react-icons/fa'

const PricingSection = () => {
  return (
    <div className='py-20 bg-white'>
      <div className='text-center pb-16'>
        <h3 className='text-5xl font-bold text-slate-900 mb-4'>Simple, Transparent Pricing</h3>
        <p className='text-lg text-slate-500'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-8 w-11/12 max-w-6xl mx-auto items-stretch'>
        
        <div className='border border-gray-100 shadow-sm p-8 bg-white flex flex-col rounded-2xl hover:scale-105 transition-all'>
          <div className='mb-8'>
            <h3 className='text-2xl font-bold text-slate-800'>Starter</h3>
            <p className='text-slate-500'>Perfect for getting started</p>
          </div>
          <div className='mb-8'>
            <h3 className='text-5xl font-bold text-slate-900'>$0<span className='text-xl font-normal text-slate-400'>/Month</span></h3>
          </div>
          <ul className='space-y-4 mb-10 grow'>
            <li className='flex items-center gap-3 text-slate-600'><FaCheck className="text-green-500" />Access to 10 free tools</li>
            <li className='flex items-center gap-3 text-slate-600'><FaCheck className="text-green-500" />Basic templates</li>
            <li className='flex items-center gap-3 text-slate-600'><FaCheck className="text-green-500" />Community support</li>
            <li className='flex items-center gap-3 text-slate-600'><FaCheck className="text-green-500" />1 project per month</li>
          </ul>
          <button className='w-full py-4 bg-[#8B2CFF] hover:bg-[#7a25e0] text-white font-bold rounded-xl transition-all active:scale-[0.98]'>
            Get Started Free
          </button>
        </div>

        <div className='relative border border-transparent shadow-xl p-8 bg-[#7C3AED] flex flex-col rounded-2xl transform md:scale-105 z-10 hover:scale-110 transition-all'>

          <div className='absolute -top-4 left-1/2 -translate-x-1/2 bg-[#FFF9C4] text-[#856404] text-xs font-bold px-4 py-1.5 rounded-full border border-yellow-200'>
            Most Popular
          </div>
          
          <div className='mb-8'>
            <h3 className='text-2xl font-bold text-white'>Pro</h3>
            <p className='text-purple-100 opacity-90'>Best for professionals</p>
          </div>
          <div className='mb-8'>
            <h3 className='text-5xl font-bold text-white'>$29<span className='text-xl font-normal text-purple-200'>/Month</span></h3>
          </div>
          <ul className='space-y-4 mb-10 grow'>
            <li className='flex items-center gap-3 text-white'><FaCheck />Access to all premium tools</li>
            <li className='flex items-center gap-3 text-white'><FaCheck />Unlimited templates</li>
            <li className='flex items-center gap-3 text-white'><FaCheck />Priority support</li>
            <li className='flex items-center gap-3 text-white'><FaCheck />Unlimited projects</li>
            <li className='flex items-center gap-3 text-white'><FaCheck />Cloud sync</li>
            <li className='flex items-center gap-3 text-white'><FaCheck />Advanced analytics</li>
          </ul>
          <button className='w-full py-4 bg-white text-[#7C3AED] font-bold rounded-xl hover:bg-gray-50 transition-all active:scale-[0.98]'>
            Start Pro Trial
          </button>
        </div>

        <div className='border border-gray-100 shadow-sm p-8 bg-white flex flex-col rounded-2xl hover:scale-105 transition-all'>
          <div className='mb-8'>
            <h3 className='text-2xl font-bold text-slate-800'>Enterprise</h3>
            <p className='text-slate-500'>For teams and businesses</p>
          </div>
          <div className='mb-8'>
            <h3 className='text-5xl font-bold text-slate-900'>$99<span className='text-xl font-normal text-slate-400'>/Month</span></h3>
          </div>
          <ul className='space-y-4 mb-10 grow'>
            <li className='flex items-center gap-3 text-slate-600'><FaCheck className="text-green-500" />Everything in Pro</li>
            <li className='flex items-center gap-3 text-slate-600'><FaCheck className="text-green-500" />Team collaboration</li>
            <li className='flex items-center gap-3 text-slate-600'><FaCheck className="text-green-500" />Custom integrations</li>
            <li className='flex items-center gap-3 text-slate-600'><FaCheck className="text-green-500" />Dedicated support</li>
            <li className='flex items-center gap-3 text-slate-600'><FaCheck className="text-green-500" />SLA guarantee</li>
            <li className='flex items-center gap-3 text-slate-600'><FaCheck className="text-green-500" />Custom branding</li>
          </ul>
          <button className='w-full py-4 bg-[#8B2CFF] hover:bg-[#7a25e0] text-white font-bold rounded-xl transition-all active:scale-[0.98]'>
            Contact Sales
          </button>
        </div>

      </div>
    </div>
  )
}

export default PricingSection