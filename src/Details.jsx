import React from 'react'
import { useState } from 'react';
import Modals from './Modals';
import Modaledit from './Modaledit';

function Details({tableData,setTable,formData,closeModal, handleChange, handleSubmit}) {

  const[isEditOpen, setEditOpen] = useState(false);
  const[editData , setEditData] = useState([]);
  const[indexV , setIndexV] = useState();

  function editOpen(){
    setEditOpen(true);
  }
  function closeEdit(){
    setEditOpen(false);
  }

  function calAge(age){
     const Age = age.trim().split("-");
     return 2024 - Age[0] ;
  }
  function handleDelete(index){
      setTable(
        tableData.filter((a,i) => i !== index)
      )
  }

  function handleColors(gender){
     if(gender == "Male"){
      return {backgroundColor: '#90EE90'}
     }
     else if(gender == "Female"){
     return  {backgroundColor:	'#ADD8E6'}
     }
     else{
       return {backgroundColor:'grey'}
     }
  }

  function handleEditValues(index){
    setEditData(tableData.find((a,i) => i == index))
    setIndexV(tableData.indexOf(tableData.find((a,i) => i == index)))

  }
  console.log(editData)

  return (
    <div>
      <table className=' border-spacing-2 border border-slate-400'>
        <tr>
            <th className='border border-slate-300 p-3'>S.NO</th>
            <th className='border border-slate-300 p-3'>NAME</th>
            <th className='border border-slate-300 p-3'>GENDER</th>
            <th className='border border-slate-300 p-3'>DATE OF BIRTH</th>
            <th className='border border-slate-300 p-3'>AGE</th>
            <th className='border border-slate-300 p-3'>PH NO</th>
            <th className='border border-slate-300 p-3'></th>
            
        </tr>

       {tableData.map((items,index )=>  <tr  style={handleColors(items.gender)}>

        
        <td className='border border-slate-300 p-3'>{index +1}</td>
        <td className='border border-slate-300 p-3' >{items.name}</td>   
        <td className='border border-slate-300 p-3'>{items.gender}</td>
        <td className='border border-slate-300 p-3'>{items.dateOfBirth}</td>
        <td className='border border-slate-300 p-3' >{ calAge(items.dateOfBirth)}</td>
        <td className='border border-slate-300 p-3'>{items.phNo}</td>
        <button  className='border border-slate-300 p-3 m-3' style ={{backgroundColor:'white'}}onClick={ () =>handleDelete(index)} >DELETE</button>
        <button  className='border border-slate-300 p-3 m-3' style ={{backgroundColor:'white'}} onClick = {() =>{editOpen(); handleEditValues(index)}} >EDIT</button>

        <Modaledit index={indexV} tableData ={tableData} editData = {editData} setEditData={setEditData} openEdit = {isEditOpen} closeEdit={closeEdit}  handleSubmit={handleSubmit}/>

         

        </tr>)}

        
      </table>
    </div>
  )
}

export default Details