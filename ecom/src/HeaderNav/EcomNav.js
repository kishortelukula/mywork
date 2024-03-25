import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import{faSignIn,faUserPlus} from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';
function EcomNav(){
    return(
        <nav className="navbar navbar-expand-lg bg-body-tertiary " data-bs-theme="primary"style={{backgroundColor:"#e3f2fd"}}>
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><img style={{height:"26px",width:"50px"}} src="https://png.pngtree.com/png-clipart/20201208/original/pngtree-red-and-black-logo-png-image_5517319.jpg" alt="" /></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to={"/"}>Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={"/About"} >About</Link>
        </li>
      
        <li className="nav-item">
          <a className="nav-link " >Products</a>
        </li>
        <li className="nav-item">
          <a className="nav-link " >Services</a>
        </li>
        
       
      </ul>
     <ul  className="navbar-nav ">
     <li className="nav-item" style={{margin:"0px 15px"}}>
     <Link to={"/LogIn"} data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Tooltip on top"><FontAwesomeIcon icon={faSignIn } size='lg' /></Link>
        </li>
        <li className="nav-item" style={{margin:"0px 15px"}}>
        <Link to={"/SignUp"}><FontAwesomeIcon icon={faUserPlus } size='lg' /></Link>
        </li>
     </ul>
     
    </div>
  </div>
</nav>
    );
}
export default EcomNav;