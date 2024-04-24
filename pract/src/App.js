
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import UserPage1 from './Pages/UserPage1';
import AdminUserPage from './Pages/AdminUserPage';
import SignInAndSignUp from './Pages/SignInAndSignUp';
import ProductDeatils from './Pages/ProductDetails';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './Pages/NavBar';
import Slider from './Pages/Slider'
// import Test from './Pages/Test';

function App() {
  return (
    <div className="App">
        {/* <UserPage1/> */}
     {/* <AdminUserPage/> */}
     
     {/* <SignInAndSignUp/> */}

     {/* <ProductDeatils/> */}
     {/* <Test/> */}
    

     <Router>
     <NavBar/>
     {/* <Slider/> */}
      <Routes>
        <Route path="/" element={ <UserPage1/>} />
        <Route path="/product/:id" element={<ProductDeatils />} />
        <Route path='/Products' element={<AdminUserPage/>} />
      </Routes>
    </Router>

    </div>
  );
}

export default App;
