import { FileText, Sparkles } from 'lucide-react'
import React, { useState } from 'react'
import axios from 'axios'
import { useAuth } from '@clerk/clerk-react'
import toast from 'react-hot-toast'
import Markdown from 'react-markdown'

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL

const ReviewResume = () => {

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
      formData.append('resume', input)

      const { data } = await axios.post('/api/ai/resume-review',
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
          <h1 className="text-xl font-semibold">Resume Review</h1>
        </div>

        <p className="mt-6 text-sm font-medium">Upload Resume</p>
        <input
          onChange={(e) => setInput(e.target.files[0])}

          type="file"
          accept='application/pdf'
          required
          className="
          w-full p-1 px-2 mt-2 
          outline-none text-sm rounded-md 
          border border-gray-400 
         text-gray-700
          file:mr-4 file:py-1 file:px-2
          file:rounded-md file:border file:border-gray-400
          file:text-sm file:font-medium
         file:bg-gray-100 file:text-gray-700
         hover:file:bg-gray-200"

        />

        <p className='text-xs text-gray-500 font-light mt-1'>
          Supports PDF format only.
        </p>

        <button className="w-full flex justify-center items-center gap-2 bg-gradient-to-r from-[#0e2e72] to-[#3498db] text-white px-4 py-2 mt-6 text-sm rounded-lg cursor-pointer">
          {
            loading ? <span className='w-4 h-4 my-1 rounded-full border-2 
                        border-t-transparent animate-spin'></span> :
              <FileText className="w-5" />
          }


          Review Resume
        </button>
      </form>

      {/* right column */}
      <div className="w-full p-4 bg-white rounded-lg flex flex-col border border-gray-300 min-h-96 max-h-[600px] ">
        <div className="flex items-center gap-3">
          <FileText className="w-5 h-5 text-primary" />
          <h1 className="text-xl font-semibold">Analysis Results</h1>
        </div>
        {
          !content ? (
            <div className="flex-1 flex justify-center items-center">
          <div className="text-sm flex flex-col items-center gap-5 text-gray-400">
            <FileText className="w-9 h-9 text-primary opacity-60" />
            <p>Upload a resume and click "Review Resume" to get started</p>
          </div>
        </div>

          ): (

            <div className='mt-3 h-full overflow-y-scroll text-sm text-slate-600'>
              <div className='reset-tw'>
                <Markdown>
                  {content}
                </Markdown>
              </div>

            </div>

          )
        }

        
      </div>
    </div>
  )
}

export default ReviewResume