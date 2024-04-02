import React,{useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './SignInAndSignUp.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faStreetView} from "@fortawesome/free-solid-svg-icons";
import 'tooltippy/dist/tooltippy--translucid.min.css'
import axios from "axios";




function SignInAndSignUp(){
		function signup()
	{
		document.querySelector(".login-form-container").style.cssText = "display: none;";
		document.querySelector(".signup-form-container").style.cssText = "display: block;";
		document.querySelector(".sinContainer").style.cssText = "background: linear-gradient(to bottom, rgb(56, 189, 149),  rgb(28, 139, 106));";
		document.querySelector(".button-1").style.cssText = "display: none";
		document.querySelector(".button-2").style.cssText = "display: block";
	
	};
	
	function login()
	{
		document.querySelector(".signup-form-container").style.cssText = "display: none;";
		document.querySelector(".login-form-container").style.cssText = "display: block;";
		document.querySelector(".sinContainer").style.cssText = "background: linear-gradient(to bottom, rgb(6, 108, 224),  rgb(14, 48, 122));";
		document.querySelector(".button-2").style.cssText = "display: none";
		document.querySelector(".button-1").style.cssText = "display: block";
	
	}	

	function viewLocation(){
				var pincodeSearch = document.querySelector(".pincodeSearch");
    if (pincodeSearch.style.display === "none") {
        pincodeSearch.style.display = "block";
    } else {
        pincodeSearch.style.display = "none";
    }
	}
	
	// const [getAddress,setAddress]=useState({})
const featchAddersh =async ()=>{

	var pinCode = document.getElementById("pinCode").value;
	const elements = document.getElementsByClassName("postValidationP");
    var validNumber = new RegExp(/^[0-9]{6}$/);
if(pinCode.length !==0){
    if (validNumber.test(pinCode)) {
        console.log("Valid PIN Code");
        // Reset the validation alert if the PIN code is valid
		for (let i = 0; i < elements.length; i++) {
			elements[i].textContent = '';
		}
		try {
			const FullAddress= await axios.get(`https://api.postalpincode.in/pincode/${pinCode}`);
			console.log("Full data",FullAddress);
			if(FullAddress.data[0].PostOffice.length !==0){
				document.querySelector("#Country").value=FullAddress.data[0].PostOffice[0].Country;
				document.querySelector("#State").value=FullAddress.data[0].PostOffice[0].State;
				document.querySelector("#District").value=FullAddress.data[0].PostOffice[0].District;
				document.querySelector("#City").value=FullAddress.data[0].PostOffice[0].Name;
		
				}

		} catch (error) {
			console.log("Error :",error)
		}
				
		
		
    } else {
        console.log("Invalid PIN Code");
        // Assign the validation message if the PIN code is invalid
		for (let i = 0; i < elements.length; i++) {
			elements[i].textContent = "Please Enter Valid PIN Code";
		}
    }
}
else{
	for (let i = 0; i < elements.length; i++) {
		elements[i].textContent = '';
	}	
}

}

const AddUser=async()=>{
	
	var firstName=document.getElementById("FirstName").value;
	var lastName=document.getElementById("LastName").value;
	var email=document.getElementById("Email").value;
	var phoneNumber=document.getElementById("PhoneNumber").value;
	var password=document.getElementById("Password").value;
	var ConformPassword=document.getElementById("ConformPassword").value;
	var country=document.getElementById("Country").value;
	var state=document.getElementById("State").value;
	var district=document.getElementById("District").value;
	var city=document.getElementById("City").value;
	var pINCode=document.getElementById("PINCode").value;
	var userType=document.getElementById("bluetooth").checked;
	if(firstName !=="" && lastName !=="" && email !=="" && phoneNumber !=="" && password !=="" 
	&& ConformPassword !=="" && country !=="" && state !=="" && district !=="" && city !=="" &&
	 pINCode !=="" && userType !==""){
var emailRegex= new RegExp( /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
var phoneRegex= new RegExp(/^\d{10}$/)
if(emailRegex.test(email) === false){
toast.error("Please Enter Valid Email")
return false;
}
// if(phoneRegex.test(phoneNumber)=== false){
// 	toast.error("Please Enter Valid Phone number")
// 	return false;
// }

if(password !== ConformPassword){
	toast.error("Password and Conform Password not match")
	return false;
}

var regestorUserData={
"firstName":firstName,
"lastName":lastName,
"emailId":email,
"password":password,
"country":country,
"state":state,
"district":district,
"city":city,
"userType":userType,
"pincode":pINCode,
"mobileNumber":phoneNumber
}

const returnData=await axios.post("http://localhost:8080/product/signUpDetails",regestorUserData);
console.log("inserted :",returnData.data)
if(returnData.data =="Existed"){
	toast.info("Email already excist please enter new Email")

}
else if(returnData.data =="Inserted"){
	toast.success("User added sucessfully")

}
else{
	toast.error("please try again")
}


		
	}
	else{
toast.error("Please enter all data");
// login();
	}
	
}
	

return(
<div className="sinContainer">
	{/* <!--Data or Content--> */}
	<div className="box-1">
		<div className="content-holder">
			<h2>Hello!</h2>
		   
			<button className="button-1" onClick={signup}>Sign up</button>
			<button className="button-2" onClick={login}>Login</button>
		</div>
	</div>

	
	{/* <!--Forms--> */}
	<div className="box-2">
		<div className="login-form-container">
			<h1>Login Form</h1>
			<input type="text" placeholder="Username" className="input-field"/>
			<br/><br/>
			<input type="password" placeholder="Password" className="input-field"/>
			<br/><br/>
			<button className="login-button" type="button">Login</button>
			<a href="">Forgot Password</a>
		</div>
	

{/* <!--Create Container for Signup form--> */}
	<div className="signup-form-container">
		<h1>Sign Up Form <span><button   onClick={viewLocation} className="LocationIcon tooltippy tooltippy--top"  data-tooltippy="Click for Address"><FontAwesomeIcon icon={faStreetView} style={{color: "#87eaf7",}} /></button><input type="number" onInput={featchAddersh} max={6} id="pinCode"  placeholder="Pin Code" className="pincodeSearch"/>
		
		
		</span></h1><span>  <p className ="postValidationP" style={{color:"red"}}></p></span>
		

	
		
		<div className="row">
		<input type="text" placeholder="FirstName" name="FirstName" id="FirstName" className="input-field"/>
		<input type="text" placeholder="LastName" name="LastName" id="LastName" className="input-field"/>
		</div><br />
		<div className="row">
		<input type="email" placeholder="Email" name="Email" id="Email" className="input-field"/>
		<input type="text" placeholder="PhoneNumber" name="PhoneNumber" id="PhoneNumber" className="input-field"/>
		</div><br />
		<div className="row">
			
		<input type="password" placeholder="Password" name="Password" id="Password" className="input-field"/>
		<input type="password" placeholder="Conform Password" name="ConformPassword" id="ConformPassword" className="input-field"/>
		</div><br />
		
		<div className="row">
		<input type="text" placeholder="Country" id="Country" className="input-field"/>
		<input type="text" placeholder="State" id="State" className="input-field"/>
		</div><br />
		<div className="row">
		<input type="text" placeholder="District" id="District" className="input-field"/>
		<input type="text" placeholder="City" id="City" className="input-field"/>
		</div><br />
		<div className="row">
		<input type="text" placeholder="PINCode" id="PINCode" className="input-field"/>
		{/* <input className="form-check-input" type="checkbox" id="UserType"/><span style={{display:"contents"}}> Are you Admin ?</span> */}
		<div className="switch-holder">
    <div className="switch-label">
        <i className="fa fa-bluetooth-b"></i><span>Are you Admin ?</span>
    </div>
    <div className="switch-toggle">
        <input type="checkbox" id="bluetooth"/>
        <label htmlFor="bluetooth"></label>
    </div>
</div>
		
		
		
		</div><br />
		
		
		
		<button className="signup-button" type="button" onClick={AddUser}>Sign Up</button>
	</div>

</div>
<ToastContainer/>
</div>
)
}
export default SignInAndSignUp;