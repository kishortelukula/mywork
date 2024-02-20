import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link,  useParams } from 'react-router-dom';

export default function ViewUser() {

  
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

const setData=async ()=>{
    const result= await axios.get(`http://localhost:8080/selectbyid/${id}`)
    setUser(result.data)
}

  return (
    <div className='container'>
        <div className='row'>
        <div className='col-md-5 offset-md-3 border rounde p-4 mt-2 shadow'>
            <h4 className='text-center m-3'> User Data</h4>
            <form >
                <div className='mb-3 input-group'>
                <span className="input-group-text">ID</span>
                <div className="form-floating">
                <input type="text" className="form-control" id="floatingInputGroup1" readOnly="true" name='user_id' value={user_id} onChange={(e)=>changeInput(e)}/>
               </div>
                </div>

                <div className='mb-3 input-group'>
                <span className="input-group-text">NAME</span>
                <div className="form-floating">
                <input type="text" className="form-control" id="floatingInputGroup2" readOnly="true" name='user_name'value={user_name} onChange={(e)=>changeInput(e)}/>
               </div>
                </div>
                <div className='mb-3 input-group'>
                <span className="input-group-text">GENDER</span>
                <div className="form-floating">
                <input type="text" className="form-control" id="floatingInputGroup3" readOnly="true" name='gender'value={gender} onChange={(e)=>changeInput(e)}/>
               </div>
                </div>
                <Link to={"/"} className='btn btn-outline-info me-2'>Close</Link>
              </form>
        </div>
        </div>
    </div>
  )}