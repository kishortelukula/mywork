import React, { useEffect, useState } from 'react'
import axios from 'axios'
import 'font-awesome/css/font-awesome.min.css';
import { Link, useNavigate } from 'react-router-dom';
export default function HomePage() {
  
  const[alldata,setalldata]=useState([])

  const {id}=useNavigate();
  useEffect(()=>{
    loadData();
  },[])

  const loadData=async ()=>{

    const ouput=await axios.get("http://localhost:8080/findall");
    console.log(ouput.data);
    setalldata(ouput.data);
  }
  const deleteRecord= async (id)=>{
    console.log("delete called")
const result=await axios.delete(`http://localhost:8080/deletbyid/${id}`)
loadData()
  }
  
    return (

    <div className='container'>
        <div className='py-3'>
<table className="table table-success table-striped-columns table-hover shadow">
<thead>
    <tr>
      <th scope="col">SI.NO</th>
      <th scope="col">ID</th>
      <th scope="col">NAME</th>
      <th scope="col">GENDER</th>
      <th scope="col">ACTIONS</th>
    </tr>
  </thead>
  <tbody>
    {
        alldata.map((all,index)=>(
<tr>
      <th scope="row" key={index}>{index+1}</th>
      <td>{all.user_id}</td>
      <td>{all.user_name}</td>
      <td>{all.gender}</td>
      <td><Link to={`/view/${all.user_id}`} className="btn btn-outline-success"><i className="fa fa-eye" aria-hidden="true"></i></Link><Link className="btn btn-outline-info" to={`/edit/${all.user_id}`}><i className="fa fa-pencil-square-o" aria-hidden="true" ></i></Link><button className="btn btn-outline-danger"onClick={()=>{deleteRecord(all.user_id)}}><i className="fa fa-trash"  aria-hidden="true"></i></button></td>
</tr>

        ))
    }
    
   
  </tbody>
</table>
</div>
    </div>
  )
}