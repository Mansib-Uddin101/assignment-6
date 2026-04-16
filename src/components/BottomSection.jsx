import React from 'react';

const BottomSection = () => {
  return (
    <section className=" ">
      <div className= "w-full bg-linear-to-r from-[#7C3AED] to-[#8B2CFF] py-16 px-6 text-center">
        
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
          Ready To Transform Your Workflow?
        </h2>

        <p className="text-purple-100 text-sm md:text-base max-w-2xl mx-auto mb-10 leading-relaxed opacity-90">
          Join thousands of professionals who are already using Digitools to work smarter.
          <br className="hidden md:block" /> Start your free trial today.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <button className="bg-white text-[#7C3AED] font-semibold px-8 py-3 rounded-full hover:bg-gray-100 transition-colors duration-200 shadow-lg">
            Explore Products
          </button>
          
          <button className="bg-transparent border border-white/60 text-white font-semibold px-8 py-3 rounded-full hover:bg-white/10 transition-colors duration-200">
            View Pricing
          </button>
        </div>

        <div className="text-purple-200/80 text-xs md:text-sm font-medium tracking-wide">
          14-day free trial <span className="mx-2">•</span> 
          No credit card required <span className="mx-2">•</span> 
          Cancel anytime
        </div>
      </div>
    </section>
  );
};

export default BottomSection;