// import { HandThumbDownIcon } from '@heroicons/react/24/solid'
import React from 'react'
import { FaUndo } from 'react-icons/fa'
import { Link, useRouteError } from 'react-router-dom'

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <section className='flex items-center h-screen p-16 bg-gray-100 text-gray-900'>
      <div className='container flex flex-col items-center justify-center px-5 mx-auto my-8'>
        <div className='max-w-md text-center'>
          <h2 className='mb-8 font-extrabold text-9xl text-gray-500'>
            <span className='sr-only'>Error</span>
            <div className='flex justify-center items-center h-full'>
              4
              <div className='w-24 h-24 border-8 border-dashed rounded-full animate-spin mt-3 border-green-400'></div>
              4
            </div>
          </h2>
          <p className='text-2xl font-semibold md:text-3xl mb-8 text-red-500'>
            {error.statusText || error.message}
          </p>
          <Link to='/'>
            <button className='btn bg-gradient-to-r from-cyan-500 to-green-500 border-none px-8 py-3 font-semibold rounded'>
              Back to homepage <FaUndo className='ml-2'></FaUndo>
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ErrorPage