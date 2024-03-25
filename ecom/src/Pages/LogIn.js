import React from "react";
import "./pages.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faKey, faUser, faX } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";


function LogIn(){
return(
    <div className="LogIn_BG">
    <div className="container">
	<div className="d-flex justify-content-center h-100">
		<div className="card">
			<div className="card-header">
				<h3>Sign In</h3>
				<div className="d-flex justify-content-end social_icon">
					<span><FontAwesomeIcon icon={faFacebook} className="fab" size="xs"/></span>
					<span><FontAwesomeIcon icon={faGoogle} className="fab" size="xs"/></span>
					<span><FontAwesomeIcon icon={faX} className="fab" size="xs"/></span>
				</div>
			</div>
			<div className="card-body">
				 
					<div className="input-group form-group">
						<div className="input-group-prepend">
							<span className="input-group-text"><FontAwesomeIcon icon={faUser } size="xl"/></span>
						</div>
						<input type="text" className="form-control" placeholder="username"/>
						
					</div>
					<div className="input-group form-group">
						<div className="input-group-prepend">
							<span className="input-group-text"><FontAwesomeIcon icon={faKey } size="xl"/></span>
						</div>
						<input type="password" className="form-control" placeholder="password"/>
					</div>
					<div className="row align-items-center remember">
						<input type="checkbox"/>Remember Me
					</div>
					<div className="form-group">
						<input type="submit" value="Login" className="btn float-right login_btn"/>
					</div>
                    
			</div>
			<div className="card-footer">
				<div className="d-flex justify-content-center links">
					Don't have an account?<a href="#">Sign Up</a>
				</div>
				<div className="d-flex justify-content-center">
					<a href="#">Forgot your password?</a>
				</div>
			</div>
		</div>
	</div>
 </div>
 </div>
   )
   }

   export default LogIn;