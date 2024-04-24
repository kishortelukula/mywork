import React, { useEffect, useState } from 'react'
// import './AdminStyle.css'
import './Pages.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import{faRupeeSign}from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';

function UserPage1(){
 const[alldata,setalldata]=useState([])
useEffect(()=>{
  LoadeData()
},[]);

 const LoadeData=async ()=>{
const Data=await axios.get("http://localhost:8080/product/all");
console.log("all data is :",Data.data);
setalldata(Data.data);
}

return(
<div className="container">
    <div className="row">

      {
alldata.map((dataList,index)=>(
<div className="col-6 Card-Main" key={index}>
      <div>
   <img src={`/SuppertedFiles/${dataList.fileName}`} className="Product-img" alt=""/>
   </div>
   <h1 className='Product-h1'> {dataList.productName}</h1>
   <p>{dataList.productTitle}</p>
     <h5 className='Product-Price'><FontAwesomeIcon icon={faRupeeSign}/>{dataList.productPrice} </h5>
     <div className="button-wrapper"> 
  <button className="btn outline btn-outline-secondary">DETAILS</button>
    <button className="btn fill btn-outline-secondary">BUY NOW</button>
  </div>
  </div>

))

      }
 
  
  </div>
</div>




)
}
export default UserPage1;