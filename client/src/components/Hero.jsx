import React from 'react'
import { useNavigate } from 'react-router-dom'
import { PlayCircle, Sparkles } from 'lucide-react'

const Hero = () => {
  const navigate = useNavigate()

  return (
    <div className='px-4 sm:px-20 xl:px-32 relative flex flex-col 
    w-full justify-center items-center bg-[url(/gradientBackground.png)] 
    bg-cover bg-no-repeat min-h-screen'>

      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/30 to-white/5 pointer-events-none" />

      {/* Headline */}
      <div className='text-center mb-6 relative z-10'>
        <h1 className='text-3xl sm:text-5xl md:text-6xl 2xl:text-7xl font-bold mx-auto leading-[1.2]'>
          Create content with <span className='bg-gradient-to-r from-[#0e2e72] to-[#3498db] bg-clip-text text-transparent'>AI tools</span>
        </h1>
        <p className='mt-4 max-w-xs sm:max-w-lg 2xl:max-w-xl m-auto 
        max-sm:text-xs text-gray-600'>
          Transform your content creation with our suite of AI tools. Write articles, generate images, and enhance your workflow.
        </p>
      </div>

      {/* Buttons */}
      <div className='flex flex-wrap justify-center gap-4 text-sm max-sm:text-xs relative z-10'>
        <button 
          onClick={()=> navigate('/ai')} 
          className='flex items-center gap-2 bg-primary text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105 active:scale-95'>
          <Sparkles size={18}/> Start creating now
        </button>
        <button 
          className='flex items-center gap-2 bg-white px-8 py-3 rounded-full border border-gray-300 shadow-sm hover:shadow-md transition-all hover:scale-105 active:scale-95'>
          <PlayCircle size={18}/> Watch demo
        </button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 animate-bounce text-gray-500">
        ↓
      </div>
    </div>
  )
}

export default Hero
