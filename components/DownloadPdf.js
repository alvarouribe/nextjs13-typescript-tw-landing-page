import React from 'react'

function DownloadPdf({ children, href }) {
  return (
    <a
      className='text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-1 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 transform transition duration-300 hover:scale-110'
      href={ href }>
      { children }
    </a>
  )
}

export default DownloadPdf
