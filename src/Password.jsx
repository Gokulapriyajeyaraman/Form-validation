import React, { useState } from 'react';

function Password({ onchange, name, max, id, value }) {
  const [i, seti] = useState(false);

  function handlei() {
    seti(!i);
  }

  return (
    <div className='flex justify-between bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'>
      <input
        type={i ? "text" : "password"}
        name={name}
        id={id}
        value={value}
        maxLength={max}
        onChange={onchange}
        className='bg-gray-50 text-black-600 focus:outline-none w-full'
      />
      <button
        type="button"
        onClick={handlei}
       
      >
        <img
          className='h-4'
          src={i ? '/eye.webp' :'/eye hide.webp' }
        
        />
      </button>
    </div>
  );
}

export default Password;
