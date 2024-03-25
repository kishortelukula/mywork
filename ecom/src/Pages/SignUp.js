import React, { useEffect, useState } from "react";
import axios from "axios";

function SignUp(){

    const [allCountries,setAllCountries]=useState([]);
    const [allState,setAllState]=useState([]);
    const [allCity,setAllCity]=useState([]);
useEffect(()=>{
getCountry();
// getState("India");
},[])

const getCountry=async ()=>{
  const getCountryData= await axios.get("https://countriesnow.space/api/v0.1/countries/iso");
  console.log("Data",getCountryData.data.data);
setAllCountries(getCountryData.data.data);
}

const getState=async (event)=>{
    var selectedValue=event.target.value;
    console.log("selected country ",selectedValue);
    var fromdata= new URLSearchParams();
    fromdata.append('country',selectedValue);
   
    const getStateData= await axios.post("https://countriesnow.space/api/v0.1/countries/states",fromdata);
console.log("Selected State :",getStateData.data.data.states);
setAllState(getStateData.data.data.states);

}

const getCity=async (event)=>{
  var selectedValue=event.target.value;
  var fromdata= new URLSearchParams();
  const countryS=document.getElementById("selectedCountry").value;
  const stateS=document.getElementById("selectedState").value
  // console.log("inside get city :",countryS,"state: ",stateS);
  fromdata.append('country',countryS);
  fromdata.append('state',stateS);

  const getCityData=await axios.post("https://countriesnow.space/api/v0.1/countries/state/cities",fromdata)
  console.log("Selected City :",getCityData.data.data);
  setAllCity(getCityData.data.data);
}

    return(

        <section className="h-100 bg-dark">
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col">
        <div className="card1 card-registration my-4">
          <div className="row g-0">
            <div className="col-xl-6 d-none d-xl-block">
              <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img4.webp"
                alt="Sample photo" className="img-fluid" style={{borderTopLeftRadius:".25rem",borderBottomLeftRadius:"025rem"}} />
            </div>
            <div className="col-xl-6">
              <div className="card-body p-md-5 text-black">
                <h3 className="mb-5 text-uppercase">User registration form</h3>

                <div className="row">
                  <div className="col-md-6 mb-4">
                    <div className="form-outline">
                      <input type="text" id="form3Example1m" className="form-control form-control-lg" />
                      <label className="form-label" for="form3Example1m">First name</label>
                    </div>
                  </div>
                  <div className="col-md-6 mb-4">
                    <div className="form-outline">
                      <input type="text" id="form3Example1n" className="form-control form-control-lg" />
                      <label className="form-label" for="form3Example1n">Last name</label>
                    </div>
                  </div>
                </div>
                <div className="row">
                <div className="col-md-6 mb-4 form-outline">
                  <input type="text" id="form3Example97" className="form-control form-control-lg" />
                  <label className="form-label" for="form3Example97">Email ID</label>
                </div>
                <div className="col-md-6 mb-4 form-outline">
                  <input type="text" id="form3Example97" className="form-control form-control-lg" />
                  <label className="form-label" for="form3Example97">User ID</label>
                </div>
                </div>
                <div className="row">
                  <div className="col-md-6 mb-4">
                    <div className="form-outline">
                      <input type="password" id="form3Example1m1" className="form-control form-control-lg" />
                      <label className="form-label" for="form3Example1m1">Password</label>
                    </div>
                  </div>
                  <div className="col-md-6 mb-4">
                    <div className="form-outline">
                      <input type="password" id="form3Example1n1" className="form-control form-control-lg" />
                      <label className="form-label" for="form3Example1n1">Confrom Password</label>
                    </div>
                  </div>
                </div>

                

                <div className="d-md-flex justify-content-start align-items-center mb-4 py-2">

                  <h6 className="mb-0 me-4">Gender: </h6>

                  <div className="form-check form-check-inline mb-0 me-4">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="femaleGender"
                      value="option1" />
                    <label className="form-check-label" for="femaleGender">Female</label>
                  </div>

                  <div className="form-check form-check-inline mb-0 me-4">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="maleGender"
                      value="option2" />
                    <label className="form-check-label" for="maleGender">Male</label>
                  </div>

                  <div className="form-check form-check-inline mb-0">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="otherGender"
                      value="option3" />
                    <label className="form-check-label" for="otherGender">Other</label>
                  </div>

                </div>

                <div className="row">
                  <div  className="col-md-6 mb-4 form-outline"> 

                    <select className="select " onChange={getState} id="selectedCountry">
                    <option value="1" defaultChecked={"...."}>...</option>
                        {
                        allCountries.map((allcount,index)=>(
                            <option value={allcount.name}  key={index+1} >{allcount.name}</option>
                        ))}
                     
                    </select>
                    <label className="form-check-label" for="otherGender">Country</label>
                  </div>
                 
                </div>
                      <div className="row">
                      <div className="col-md-6 mb-4 form-outline">

<select className="select" onChange={getCity} id="selectedState">
<option value="0">...</option>
  {
    allState.map((stateData,index)=>(
        <option value={stateData.name} key={index+1}>{stateData.name}</option>

    ))
  }

</select>
<label className="form-check-label" for="otherGender">State</label>
</div>

<div className="col-md-6 mb-4 form-outline">

<select className="select">
<option value="0">...</option>
  {
    allCity.map((cityData,index)=>(
        <option value={cityData} key={index+1}>{cityData}</option>

    ))
  }

 </select>
<label className="form-check-label" for="otherGender">City</label>
</div>


        </div>
                <div className="form-outline mb-4">
                  <input type="date" id="form3Example9" className="form-control form-control-lg" />
                  <label className="form-label" for="form3Example9">DOB</label>
                </div>

                <div className="form-outline mb-4">
                  <input type="text" id="form3Example90" className="form-control form-control-lg" />
                  <label className="form-label" for="form3Example90">Pincode</label>
                </div>

                <div className="form-outline mb-4">
                  <input type="text" id="form3Example8" className="form-control form-control-lg" />
                  <label className="form-label" for="form3Example8">Address</label>
                </div>

                

                <div className="d-flex justify-content-end pt-3">
                  <button type="button" className="btn btn-light btn-lg">Reset all</button>
                  <button type="button" className="btn btn-warning btn-lg ms-2">Submit </button>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    )

}

export default SignUp;