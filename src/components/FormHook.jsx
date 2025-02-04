import { useForm } from "react-hook-form"
import { Send } from 'lucide-react';
import { useEffect, useState } from "react";
import React from 'react'

function FormHook() {
    let [objects,setObjects]=useState([])
    const {register,handleSubmit,formState:{errors}}=useForm()
    function handleformsubmission(obj){
        setObjects([...objects,obj])
        console.log(objects)
    }
    console.log("the errors are :",errors)
    useEffect(()=>{
        console.log('data updated succesfully')
    },[objects])

  return (
    <div className="container">
    <form className="container text-center text-primary my-5" onSubmit={(handleSubmit(handleformsubmission))}>
        <h1>Form Validation</h1>
        <div className="formgroup">
            <label className="text-warning mx-2  my-4  fs-4" id="username">Name :</label>
            <input type="text" {...register('username')} className="rounded-2 px-2 py-2 " placeholder="Name"></input>
        </div>
        <div className="formgroup ">
            <label className="text-warning my-4 mx-2 fs-4" id="mail">   Mail :</label>
            <input type="mail"{...register('mail')} className="rounded-2 px-2 py-2 " placeholder="Mail id"></input>

        </div>
        <div className="formgroup ">
            <label className="text-warning mx-2 my-2 fs-4" id="mobile">Mobile :</label>
            <input type="mobile" {...register('mobile',{required:'true',minLength:10,maxLength:10})} className="rounded-2 px-2 py-2 " placeholder="Mobile number"></input>
            {
                errors.mobile?.type=="minLength" && <h1 className="text-danger fs-6">*mobile number should be of length 10</h1>
            }
            {
                errors.mobile?.type=="required" && <h1 className="text-danger fs-6">*mobile number is required</h1>
            }
        </div>
        <div>
            <label className="text-warning mx-2 my-4 fs-4" id="password" >Password :</label>
            <input type="password" {...register('password',{required:"true"})} className="rounded-2 px-2 py-2 " placeholder="Password"></input>
            {
                errors.password?.type=="required" && <h1 className="text-danger fs-6">*password is required</h1>
            }
        </div>
        <div className="formgroup d-flex justify-content-center " id="checkbox">
            <input type='checkbox' {...register('checkbox')} className='form-check-label'/>
            <label>click me</label>
        </div>
        
        <button type="submit" className="btn mx-2 my-4 px-1 py-2 btn-secondary"><Send/> Submit</button>
    </form>
    <div className="d-flex">
            <table className="text-center mx-auto ">
                <thead>
                <tr className="px-4 py-3 mx-auto bg-secondary text-white">    
                    <td className="mx-1 px-2">NAME</td>
                    <td className="mx-1 px-2">MOBILE </td>
                    <td className="mx-1 px-2">MAIL</td>
                </tr>
                </thead>
    {
    objects.map((element)=>(
                <tbody  key={element.mobile}>
                    <tr className="bg-warning">
                        <td className="text-danger">{element.username}</td>
                        <td className="text-primary">{element.mail}</td>
                        <td className="text-secondary">{element.mobile}</td>
                    </tr>
                </tbody>
            ))
    }
            </table>
        </div>
    
    </div>
  )
}

export default FormHook