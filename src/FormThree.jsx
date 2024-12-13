import React from 'react'
import { useState } from 'react'
import Modals from './Modals'
import Details from './Details';

function FormThree() {
  
        const [isModalOpen, setModalOpen] = useState(false)

const [formData, setformData] = useState({

  name: "",
  gender: "",
  dateOfBirth: "",
  phNo: "",

})

const [tableData, SetTable] = useState([])



function openModal() {
  setModalOpen(true);
}
function closeModal() {
  setModalOpen(false);
}
function handlechange(e) {
  const { name, value } = e.target;
  setformData({ ...formData, [name]: value })
}
console.log(formData)
function handlesubmit() {
  SetTable([...tableData, formData])
  setformData({
    name: "",
    gender: "",
    dateOfBirth: "",
    phNo: ""
  })
}
console.log(tableData)

return (
   
  <div className='h-full'>
    <div className='flex  gap-80 m-5'>
      <h1 className='text-2xl font-extrabold '>STUDENT  DATA</h1>
      <button className='text-gray-900 bg-white border border-gray-300 focus:outline-none 
      hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2' onClick={openModal}>
        ADD
      </button>
    </div>
    <Modals isOpen={isModalOpen} closeModal={closeModal} handleChange={handlechange} handleSubmit={handlesubmit} formdata = {formData} />


    <Details tableData={tableData}  formData ={formData} setTable = {SetTable}  closeModal={closeModal} handleChange={handlechange} handleSubmit={handlesubmit} />


    </div>
   
  )
}

export default FormThree