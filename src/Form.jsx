import React from 'react'
import Label from './Label'
import Input from './Input'
import Button from './Button'
import { useState } from 'react'

function Form() {
    const [fdata, setFData] = useState({
        uname: "",
        email: "",
        password: "",
        mobnum: ""
    })

    const [errph, setErrPh] = useState(false)
    const [errPass, setErrPass] = useState(false)
    const [errEmail, setErrEmail] = useState(false)
    const [errUname, setErrUname] = useState(false)

    function handlesumbit(e) {
        e.preventDefault()
        if((errph != true && errPass != true && errEmail != true && errUname != true ) && (fdata.uname != 0 && fdata.email.length != 0 && fdata.password.length != 0 && fdata.mobnum.length != 0)  ) 
        
         console.log(fdata)
    }
    function handlechange(e) {
        const { name, value } = e.target;
        setFData({ ...fdata, [name]: value })

    }
    function handleErrPh(e) {


        var regExp = /^(0|91)?[6-9][0-9]{9}$/;
        let inputP = regExp.test(e.target.value)
        if (!inputP) {
            setErrPh(true)
        }
        else {
            setErrPh(false)
        }
    }

    function handleErrPass(e) {
        var regex = /^(?=.*[a-z])(?=.*[A-Z])[a-zA-Z\d]{6,12}$/;
        let inputP = regex.test(e.target.value)
        if (!inputP) {
            setErrPass(true)
        }
        else {
            setErrPass(false)
        }
    }

    function handleErrEmail(e) {
        var regex = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;
        let inputVl = regex.test(e.target.value);
        if (!inputVl) {
            setErrEmail(true)
        }
        else {
            setErrEmail(false)
        }


    }

    function handleErrName(e) {
        var regex = /^[a-zA-Z0-9 . _]+$/;
        let inputN = regex.test(e.target.value);
        if (!inputN) {
            setErrUname(true)
        }
        else {
            setErrUname(false)
        }
    }
    
    return (
        <>
       
            <div className='flex flex-col items-center block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100  '>
            <h1 className='mb-4 text-4xl font-extrabold '>REGISTER NOW </h1>
                <form onSubmit={(e) => { handlesumbit(e) }}>
                    <Label label="NAME" />
                    <Input type="text" name="uname" onchange={(e) => { handlechange(e); handleErrName(e) }} />
                    {errUname && <p className='text-red-500'>Enter valid name</p>}
                    <Label label="EMAIL" />
                    <Input type="email" name="email" onchange={(e) => { handlechange(e); handleErrEmail(e) }} />
                    {errEmail && <p className='text-red-500'>Enter valid Email</p>}
                    <Label label="PASSWORD" />
                    <Input type="password" name="password" onchange={(e) => { handlechange(e); handleErrPass(e) }} />
                    {errPass && <p className='text-red-500'>Enter atleast one upper and lower case length above 6</p>}
                    <Label label="MOBILE NUMBER" />
                    <Input type="text" name="mobnum" onchange={(e) => { handlechange(e); handleErrPh(e) }} />
                    {errph && <p className='text-red-500'>Enter valid Phone No</p>}
                    <Button type="submit">SUBMIT</Button>
                </form>
            </div>
        </>
    )
}

export default Form