import { useForm } from "react-hook-form"
import { Send } from 'lucide-react';
import { useState } from "react";
function UserReg() {
    let [checkcount,setcheck]=useState(1)
    function handlecheckbox(){
        if(checkcount%2!=0){
            console.log("check clicked")
        }
        else{
            console.log("click the checkbox")
        }
        setcheck(checkcount+1)    

    }
  return (
    <div className="container text-center text-primary my-5">
        <h1>Form Validation</h1>
        <div className="formgroup">
            <label className="text-warning mx-2  my-4  fs-4">Name :</label>
            <input type="text" className="rounded-2 px-2 py-2 " placeholder="Name"></input>
        </div>
        <div className="formgroup ">
            <label className="text-warning my-4 mx-2 fs-4">   Mail :</label>
            <input type="mail" className="rounded-2 px-2 py-2 " placeholder="Mail id"></input>
        </div>
        <div className="formgroup ">
            <label className="text-warning mx-2 my-4 fs-4">Mobile :</label>
            <input type="mobile" className="rounded-2 px-2 py-2 " placeholder="Mobile number"></input>
        </div>
        <div>
            <label className="text-warning mx-2 my-4 fs-4">Name :</label>
            <input type="password" className="rounded-2 px-2 py-2 " placeholder="Password"></input>
        </div>
        <div className="formgroup d-flex justify-content-center ">
            <input onClick={()=>(handlecheckbox())} type='checkbox' className='form-check-label'/>
            <label>click me</label>
        </div>
        
        <button className="btn mx-2 my-4 px-1 py-2 btn-secondary"><Send/> Submit</button>
    </div>
  )
}

export default UserReg