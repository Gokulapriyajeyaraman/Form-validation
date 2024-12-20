import React from 'react'
import { useState } from 'react'
import Navtop from './Navtop'
import Sidebar from './Sidebar'
import Tabing from './Tabbing'
import randomQuotes from 'random-quotes'


function Nav({setOpen}) {
  const randomQuote = randomQuotes()
    const[quote,setQuote] = useState({
        quote:"",
        author:""
    })
    const[modal ,setModal] = useState(false)

  function handlesetQuote(){
    setQuote({
      quote:randomQuote.body || "error" ,
      
      author:randomQuote.author || "error" 

    })
  
  }

  
  return (
    <div className='flex flex-col'>
    
    <Navtop setOpen={setOpen} />
      <div className="flex">
      
        <div >
          <Sidebar  />
        </div>

      
        <div className="p-10"> 
          <div className="flex flex-col items-center  h-screen">
            <div>
            <Tabing/>
            </div>
             <button className='py-2.5 px-5 m-5 text-sm font-medium text-gray-900  bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700' onClick={()=>{handlesetQuote();setModal(true)}}>CREATE QUOTE</button>
            
          </div>
        </div>
      </div>
    
    {modal && (<div id="default-modal"  aria-hidden="true" class=" overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-screen md:inset-0 h-[calc(100%-1rem)] max-h-full">
    <div class="relative p-4 w-full max-w-2xl max-h-full">
     
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
          
            <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                    Terms of Service
                </h3>
                <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="default-modal" onClick={()=>{setModal(false)}}>
                    <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                    </svg>
                    <span class="sr-only">Close modal</span>
                </button>
            </div>
         
            <div class="p-4 md:p-5 space-y-4">
                <h1 class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                   {quote.author}
                </h1>
                <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                   {quote.quote}
                </p>
            </div>
         
            <div class="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                <button data-modal-hide="default-modal" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={()=>{setModal(false)}}>OK</button>
                </div>
        </div>
    </div>
</div>)} 
         
      

    </div>
  )
}

export default Nav