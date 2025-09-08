import React from 'react'
import {PricingTable } from '@clerk/clerk-react'

const Plan = () => {
  return (
    <div className='max-w-2xl mx-auto z-20 my-30'>

        <div className='text-center'>
            <h2 className='text-slate-700 text-[42px] font-semibold'>
                Choose Your Plan
            </h2>

        </div>
       {/* displaying the billing section */}
        <div className='mt-14 max-sm:mx-8'>
           <PricingTable />
        </div>

    </div>
  )
}

export default Plan