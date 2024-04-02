import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import{faHeading,faClose,faRupeeSign,faAudioDescription,faSquarePlus,faUpload,faInfo, faPlusCircle, faHeart}from '@fortawesome/free-solid-svg-icons'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import './Pages.css'
import './AdminStyle.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import { Link } from 'react-router-dom';

import React, { useEffect, useState } from 'react'
function AdminUserPage(){
    
        const[alldata,setalldata]=useState([])
    useEffect(()=>{
      LoadeData()
    },[]);
    
     const LoadeData=async ()=>{
    const Data=await axios.get("http://localhost:8080/product/all");
    console.log("all data is :",Data.data);
    setalldata(Data.data);
    }
    

const DecimalValidation=(e)=>{
    var Price=document.getElementById('Product_Price').value;
    var validNumber = new RegExp(/^\d*\.?\d*$/);
    if(validNumber.test(Price)){
console.log("pass",e.value)
    }else{
        console.log("fail",e.value)
        document.getElementById('Product_Price').value="";
    }
}

const UploadeData=async (e)=>{
    console.log("BTN CLICK...")
    e.preventDefault();
    var Name=document.getElementById('Product_Name').value;
    var Title= document.getElementById('Product_Title').value;
    var Price=document.getElementById('Product_Price').value;
    var Description=document.getElementById('Product_Descrition').value;
    var Image=document.getElementById('Product_image').files[0];

    console.log("Name :",Name,"Title :",Title,"Price :",Price,"Description :",Description,"Image :",Image);
if(Name !=="" && Title !=="" && Price !=="" && Description !=="" && Image !== undefined ){
    console.log("insed")
    const ProductData={"productName":Name,"productDescription":Description,"productPrice":String(Price),"productTitle":Title}
    try {
        const InsertedData= await axios.post("http://localhost:8080/product/insert",ProductData);
console.log("ID: ",InsertedData.data)


if(InsertedData.data !==""){
    const formData = new FormData();
        formData.append('file', Image);
        formData.append('productId',InsertedData.data)
    const ImageUploade= await axios.post("http://localhost:8080/product/insertFiles",formData,{headers: {
        'Content-Type': 'multipart/form-data'
    }})
    console.log("Uploded :",ImageUploade)
}
        toast.success("data inserted with Id:",InsertedData.data.data);
        LoadeData();
        var myModalElement  = document.getElementById('exampleModal');
        var modelElements = document.getElementsByClassName('modal-backdrop');
    
      // Iterate over each element in the collection
      for (var i = 0; i < modelElements.length; i++) {
          var modelElement = modelElements[i];
          modelElement.classList.remove('modal-backdrop', 'fade','show');
         
      }
        
      myModalElement.style.display='none';
      ProductData={};
    } catch (error) {
        
    }
    
   
}
else{

    toast.error("Please Enter All Details");
    
   
   
}


}


    return(
        <>
        <button type="button" className="Add_Product_BTN" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                <span className="button__text">Add Product</span>
                                <FontAwesomeIcon icon={faPlusCircle} className="button__icon"/>
        </button>
         
              
        <><div className="container">
            <div className="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content modal_add">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Add Product</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="screen">
                                <div className="screen__content">
                                    <form className="login">
                                        <div className="login__field">

                                            <FontAwesomeIcon icon={faHeading} className="login__icon" />
                                            <input type="text" className="login__input" id='Product_Name' name='Product_Name' placeholder="Product Name" />
                                        </div>
                                        <div className="login__field">
                                            <FontAwesomeIcon icon={faRupeeSign} className="login__icon" />
                                            <input type="text" className="login__input" id='Product_Price' name='Product_Price' onInput={(e) => DecimalValidation(e)} placeholder="Price" />
                                        </div>
                                        <div className="login__field">
                                            <FontAwesomeIcon icon={faInfo} className="login__icon" />
                                            <input type="text" className="login__input" id='Product_Title' name='Product_Title' placeholder="Title" />

                                        </div>
                                        <div className="login__field">
                                            <FontAwesomeIcon icon={faAudioDescription} className="login__icon" />
                                            <textarea name="Product_Descrition" id="Product_Descrition" className="login__input" placeholder='Descrition'></textarea>

                                        </div>
                                        <div className="login__field">
                                            <FontAwesomeIcon icon={faUpload} className="login__icon" />
                                            <input type="file" className="login__uploade" id='Product_image' name='Product_image' placeholder="Uploade Image" />
                                        </div>

                                    </form>
                                    <div className="social-login">
                                        <h3>Add Product</h3>

                                    </div>
                                </div>
                                <div className="screen__background">
                                    <span className="screen__background__shape screen__background__shape4"></span>
                                    <span className="screen__background__shape screen__background__shape3"></span>
                                    <span className="screen__background__shape screen__background__shape2"></span>
                                    <span className="screen__background__shape screen__background__shape1"></span>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="login__submit" data-bs-dismiss="modal">
                                <span className="button__text">Close</span>
                                <FontAwesomeIcon icon={faClose} className="button__icon" />

                            </button>
                            <button className="button login__submit" onClick={UploadeData}>
                                <span className="button__text">Add</span>
                                <FontAwesomeIcon icon={faSquarePlus} className="button__icon" />

                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='container' style={{display:'inline-flex'}}>
   {
alldata.map((dataList,index)=>(
    
<div className="col-6 Card-Main" key={index}>
      <div>
   <img src={`/SuppertedFiles/${dataList.fileName}`} className="Product-img" alt=""/>
   </div>
   <h1 className='Product-h1'> {dataList.productName}</h1>
   <p>{dataList.productTitle}</p>
     <h5 className='Product-Price'><FontAwesomeIcon icon={faRupeeSign}/>:{dataList.productPrice} </h5>
     <div className="button-wrapper"> 

  <Link className="btn outline btn-outline-secondary" to={`/Product/${dataList.productId}`}>DETAILS</Link>
    <Link className="btn fill btn-outline-secondary">BUY NOW</Link>
    <button className='btn wish '><FontAwesomeIcon icon={faHeart} style={{color: "snow"}} size='2x' /></button>
  </div>
  </div>
  
))

   }
        
   </div>   
        <ToastContainer /></></>
      
    )
}

export default AdminUserPage;