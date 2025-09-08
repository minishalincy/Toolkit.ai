import { Eraser, Sparkles } from 'lucide-react'
import React, { useState } from 'react'
import axios from 'axios'
import { useAuth } from '@clerk/clerk-react'
import toast from 'react-hot-toast'

const RemoveBackground = () => {

  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [content, setContent] = useState('')

  const { getToken } = useAuth()

  // form submission
  const onSubmitHandler = async (e) => {
    e.preventDefault()
    try {

      setLoading(true)
      const formData = new FormData()
      formData.append('image', input)

      const { data } = await axios.post('/api/ai/remove-image-background',
        formData, { headers: { Authorization: `Bearer ${await getToken()}` } }
      )

      if (data.success) {
        setContent(data.content)

      } else {
        toast.error(data.message)
      }

    } catch (error) {
      toast.error(error.message)

    }
    setLoading(false)
  }


  return (
    <div className="h-full overflow-y-scroll p-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* left column */}
      <form
        onSubmit={onSubmitHandler}
        className="w-full p-4 bg-white rounded-lg border border-gray-200"
      >
        <div className="flex items-center gap-3">
          <Sparkles className="w-6 text-primary" />
          <h1 className="text-xl font-semibold">Background Remover</h1>
        </div>

        <p className="mt-6 text-sm font-medium">Upload image</p>
        <input
          onChange={(e) => setInput(e.target.files[0])}

          type="file"
          accept='image/*'
          className="w-full p-1 px-2 mt-2 
                    outline-none text-sm rounded-md 
                    border border-gray-400 
                   text-gray-700
                    file:mr-4 file:py-1 file:px-2
                    file:rounded-md file:border file:border-gray-400
                    file:text-sm file:font-medium
                   file:bg-gray-100 file:text-gray-700
                   hover:file:bg-gray-200"
          required
        />

        <p className='text-xs text-gray-500 font-light mt-1'>
          Supports JPG, PNG, and other image formats
        </p>

        <button disabled={loading} className="w-full flex justify-center items-center gap-2 bg-gradient-to-r from-[#0e2e72] to-[#3498db] text-white px-4 py-2 mt-6 text-sm rounded-lg cursor-pointer">
          {
            loading ? <span className='w-4 h-4 my-1 rounded-full border-2 
                        border-t-transparent animate-spin'></span>
              : <Eraser className="w-5" />
          }

          Remove Background
        </button>
      </form>

      {/* right column */}
      <div className="w-full p-4 bg-white rounded-lg flex flex-col border border-gray-300 min-h-96 ">
        <div className="flex items-center gap-3">
          <Eraser className="w-5 h-5 text-primary" />
          <h1 className="text-xl font-semibold">Processed Image</h1>
        </div>

        {
          !content ? (

            <div className="flex-1 flex justify-center items-center">
          <div className="text-sm flex flex-col items-center gap-5 text-gray-400">
            <Eraser className="w-9 h-9 text-primary opacity-60" />
            <p>Upload an image and click "Remove Background" to get started</p>
          </div>
        </div>

          ): ( 

            <img src={content} alt="image" className='mt-3 w-full h-full'/>

          )
        }

        
      </div>
    </div>
  )
}

export default RemoveBackground