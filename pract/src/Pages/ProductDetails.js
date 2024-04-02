import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import './ProductDetails.css'
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faHeart, faLongArrowLeft,faShare,faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import  axios from "axios";
function ProductDeatils(){
//     function change_image(image){
//         var container = document.getElementById("main-image");
//        container.src = image.src;
//    }
//    document.addEventListener("DOMContentLoaded", function(event) {
//    });
useEffect(()=>{
    getProductDetails()
},[])

const {id}=useParams();
const [product, setProduct] = useState({}); // Renamed getProduct to product for clarity

const getProductDetails = async () => {
  try {
    const response = await axios.get(`http://localhost:8080/product/productbyId/${id}`);
    if (response.data) {
        console.log("data :",response.data)
      setProduct(response.data); // Update product state using setProduct function
    }
  } catch (error) {
    console.error("Error fetching product details:", error);
  }
};

return(

<div className="container mt-5 mb-5">
    <div className="row d-flex justify-content-center">
        <div className="col-md-10">
            <div className="card">
                <div className="row">
                    <div className="col-md-6">
                        <div className="images p-3">
                            <div className="text-center p-4"> 
                            <img id="main-image" src={`/SuppertedFiles/${product.fileName}`} width="250" /> </div>
                            <div className="thumbnail text-center"> 
                            <img 
                            // onClick={change_image(this)} 
                            src="https://i.imgur.com/Rx7uKd0.jpg" width="70"/> 
                            <img 
                            // onClick={change_image(this)} 
                            src="https://i.imgur.com/Dhebu4F.jpg" width="70"/> 
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="product p-4">
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="d-flex align-items-center"> 
                                <FontAwesomeIcon icon={faLongArrowLeft}/>
                                <span className="ml-1">Back</span> </div> 
                                <FontAwesomeIcon icon={faShoppingCart}/>
                                 {/* <i className="fa fa-shopping-cart text-muted"></i> */}
                            </div>
                            <div className="mt-4 mb-3"> <span className="text-uppercase text-muted brand">{product.productName}</span>
                                <h5 className="text-uppercase">{product.productTitle}</h5>
                                <div className="price d-flex flex-row align-items-center"> <span className="act-price">$20</span>
                                    <div className="ml-2"> <small className="dis-price">${product.productPrice}</small> <span>40% OFF</span> </div>
                                </div>
                            </div>
                            <p className="about">{product.productDescription}</p>
                            <div className="sizes mt-5">
                                <h6 className="text-uppercase">Size</h6> 
                                <label className="radio"> 
                                <input type="radio" name="size" value="S" checked/> <span>S</span> 
                                </label> 
                                <label className="radio"> 
                                <input type="radio" name="size" value="M"/> <span>M</span> 
                                </label> 
                                <label className="radio"> 
                                <input type="radio" name="size" value="L"/> <span>L</span> 
                                </label> 
                                <label className="radio"> 
                                <input type="radio" name="size" value="XL"/> <span>XL</span> 
                                </label> 
                                <label className="radio"> 
                                <input type="radio" name="size" value="XXL"/> <span>XXL</span> 
                                </label>
                            </div>
                            <div className="cart mt-4 align-items-center"> <button className="btn btn-danger text-uppercase mr-2 px-4">Add to cart</button>
                            <FontAwesomeIcon icon={faHeart} className="text-muted"/>
                           
                             <FontAwesomeIcon icon={faShare} className="text-muted"/>
                           
                             
                             </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>


)
}
export default ProductDeatils;