import React from 'react'

function Label({label,name}) {
  return (
    <div>
        <label name ={name} className=' pt-3 block mb-2 text-sm font-medium text-gray-900'>{label}</label>
    </div>
  )
}

export default Label