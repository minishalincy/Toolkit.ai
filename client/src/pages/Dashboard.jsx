import React, { useEffect, useState } from 'react'
import { Gem, Sparkles } from 'lucide-react'
import { Protect, useAuth } from '@clerk/clerk-react'
import CreationItem from '../components/CreationItem'
import axios from 'axios'
import toast from 'react-hot-toast'

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL


const Dashboard = () => {

  const [creations, setCreations] = useState([])
  const [loading, setLoading] = useState(true)
  const { getToken } = useAuth()


  const getDashboardData = async () => {
    try {
      const {data} = await axios.get('/api/user/get-user-creations',{
        headers:{Authorization:`Bearer ${await getToken()} `}
      })

      if (data.success) {
        setCreations(data.creations)
        
      }else{
        toast.error(data.message)
      }
      
    } catch (error) {
      toast.error(error.message)
      
    }
    
   setLoading(false)
  }

  useEffect(() => {
    getDashboardData()
  }, [])


  return (
    <div className='h-full overflow-y-scroll p-6'>
      <div className='flex justify-start gap-4 flex-wrap'>

        {/* total creation card */}
        <div className='flex justify-between items-center w-72 p-4 px-6 bg-white
           rounded-xl border border-gray-200'>
          <div className='text-slate-600'>
            <p className='text-sm'>Total creation</p>
            <h2 className='text-xl font-semibold'>{creations.length}</h2>
          </div>

          <div className='w-10 h-10 rounded-lg bg-gradient-to-br from-[#0e2e72] to-[#3498db] text-white flex 
              justify-center items-center'>
            <Sparkles className='w-5 text-white' />
          </div>

        </div>

        {/* active plan card */}
        <div className='flex justify-between items-center w-72 p-4 px-6 bg-white
           rounded-xl border border-gray-200'>
          <div className='text-slate-600'>
            <p className='text-sm'>Active Plan</p>
            <h2 className='text-xl font-semibold'>
              <Protect plan='premium' fallback="Free">
                Premium
              </Protect>
            </h2>
          </div>

          <div className='w-10 h-10 rounded-lg bg-gradient-to-br from-[#3498db] to-[#0e2e72] text-white flex 
              justify-center items-center'>
            <Gem className='w-5 text-white' />
          </div>

        </div>
      </div>

      {
        loading ? (
          <div className='flex justify-center items-center h-3/4'>
            <div className='w-4 h-4 my-1 rounded-full border-2 
            border-t-transparent animate-spin'>

            </div>
          </div>

        ) : (
          <div className='space-y-3'>
        <p className='mt-6 mb-4'>Recent Creations</p>
        {
          creations.map((item)=><CreationItem key={item.id} item={item}/>)
        }
      </div>

        )
      }

      
    </div>
  )
}

export default Dashboard