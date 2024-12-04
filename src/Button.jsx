import React from 'react'

function Button({type,children}) {
  return (
    <div>
        <button type={type} className='py-2.5 px-5 m-5 text-sm font-medium text-gray-900  bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700'
        >
        {children}
        </button>
    </div>
  )
}

export default Button