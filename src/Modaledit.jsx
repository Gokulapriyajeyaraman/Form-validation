import React from 'react'
import { useState } from 'react';




function Modaledit({openEdit,  closeEdit,  editData,setEditData,tableData,index}) {

    const [PhErr, setNamePh] = useState(false);
    const [genErr, setGenErr] = useState(false);
    const [nameErr, setNameErr] = useState(false);
    

   


    function handleNameError(e) {
        const name = e.target.value;
        let newName = name.trim().split(" ");


        for (let i = 0; i < newName.length; i++) {

            let childName = newName[i];
            for (let j = 0; j < childName.length; j++) {
                if ((childName[j] < 'a' || childName[j] > 'z') && (childName[j] < 'A' || childName[j] > 'Z')) {
                    setNameErr(true);
                    return
                }
            }
        }
        setNameErr(false);
    }




    function phNumberCheck(e) {
        let num = e.target.value;
        for (let i = 0; i < num.length; i++) {
            if (num[i] >= 'a' && num[i] <= 'z' || num[i] >= 'A' && num[i] <= 'Z') {
                setNamePh(true)
                return
            }
        }
        if (num.length > 10) {
            setNamePh(true)
            return
        }

        setNamePh(false);

    }
    function handleGenErr(e) {
        const gen = e.target.value;

        if (gen === "Select Gender") {
            setGenErr(true)
            return

        }
        setGenErr(false)

    }
    function handleClose(){
        setGenErr(false);
        setNameErr(false);
        setNamePh(false)
    }

    function handleEditChange(e){
        const { name, value } = e.target;
        setEditData({...editData,[name] : value})
    }
    function handleEditSubmit(){
          tableData.splice(index,1,editData)
            
    }

    if (!openEdit) {
        return null


    }

    return (
        <div>
            <div
                id="static-modal"
                data-modal-backdrop="static"
                className="overflow-y-auto overflow-x-hidden fixed  z-50 flex justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
                <div class="relative p-4 w-full max-w-2xl max-h-full">

                    <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                                Student Details
                            </h3>
                            <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="crud-modal" onClick={closeEdit}>
                                <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                </svg>

                            </button>
                        </div>

                        <form class="p-4 md:p-5">
                            <div class="grid gap-4 mb-4 grid-cols-2">
                                <div class="col-span-2">
                                    <label htmlFor="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                        Name
                                    </label>
                                    <input type="text" name="name" id="name" onChange={(e) => { handleEditChange(e) ; handleNameError(e) }} value={editData.name}
                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="name of student" required="" />
                                    {nameErr && <p className='text-red-500 '>Enter valid name</p>}
                                </div>

                                <div>
                                    <label htmlFor="dateOfBirth" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                        Date of Birth
                                    </label>
                                    <input type="date" id="birthday" name="dateOfBirth" onChange={(e)=>{handleEditChange(e)}} value={editData.dateOfBirth}
                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" />
                                </div>

                                <div class="col-span-2 sm:col-span-1">
                                    <label for="gender" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                        Gender
                                    </label>
                                    <select id="gender" name="gender" value={editData.gender} onChange={(e) => { handleEditChange(e) ; handleGenErr(e) }} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 ">
                                        <option selected="">Select Gender</option>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                        <option value="Others">Others</option>

                                    </select>
                                    {genErr && <p className='text-red-500 '>Enter valid gender</p>}
                                </div>
                                <div class="col-span-2">
                                    <label htmlFor="phno" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                        Phone Number
                                    </label>
                                    <input   value ={editData.phNo} name="phNo" id="phno" onChange={(e) => { handleEditChange(e) ; phNumberCheck(e); }}
                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="phone number" required />
                                    {PhErr && <p className='text-red-500 '>Invalid number</p>}
                                </div>
                            </div>

                        </form>

                        <div class="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                            <button data-modal-hide="static-modal" type="button" 
                                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                                onClick={() => { closeEdit();handleEditSubmit(); handleClose() }}>
                                SAVE
                            </button>
                        </div>

                    </div>
                </div>

            </div>


        </div >
    )
}

export default Modaledit