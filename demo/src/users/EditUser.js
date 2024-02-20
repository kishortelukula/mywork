import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';

export default function EditUser() {

    const nav = useNavigate();
    const {id}=useParams();
const [User,setUser]=useState({
    user_id:"",
    user_name:"",
    gender:""
})
const{user_id,user_name,gender}=User;
const changeInput=(e)=>{
setUser({...User,[e.target.name]:e.target.value})
}
useEffect(()=>{
    setData()
},[])
const  submitUserData =async (e)=>{
    e.preventDefault();
    console.log("Data is :",User)
await axios.put("http://localhost:8080/update",User)
nav("/")

}
const setData=async ()=>{
    const result= await axios.get(`http://localhost:8080/selectbyid/${id}`)
    setUser(result.data)
}

  return (
    <div className='container'>
        <div className='row'>
        <div className='col-md-5 offset-md-3 border rounde p-4 mt-2 shadow'>
            <h4 className='text-center m-3'> Edit User Data</h4>
            <form  onSubmit={(e)=>{submitUserData(e)}} autoCapitalize='offset'>
                <div className='mb-3 input-group'>
                <span className="input-group-text">ID</span>
                <div className="form-floating">
                <input type="text" className="form-control" id="floatingInputGroup1" name='user_id' value={user_id} onChange={(e)=>changeInput(e)}/>
               </div>
                </div>

                <div className='mb-3 input-group'>
                <span className="input-group-text">NAME</span>
                <div className="form-floating">
                <input type="text" className="form-control" id="floatingInputGroup2" name='user_name'value={user_name} onChange={(e)=>changeInput(e)}/>
               </div>
                </div>
                <div className='mb-3 input-group'>
                <span className="input-group-text">GENDER</span>
                <div className="form-floating">
                <input type="text" className="form-control" id="floatingInputGroup3" name='gender'value={gender} onChange={(e)=>changeInput(e)}/>
               </div>
                </div>
                <button type='submit' className='btn btn-outline-success me-2'>Update</button><Link type='reset' className='btn btn-outline-info me-2' to={"/"}>Close</Link>
                </form>
        </div>
        </div>
    </div>
  )}