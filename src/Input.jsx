import React from 'react'


function Input({type,onchange ,name, max ,id,value}) {
    

  return (
    <div>
        <input type={type} name={name} id ={id}  value ={value}maxLength ={max} className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5' onChange={onchange}
        />
      
    </div>
  )
}

export default Input