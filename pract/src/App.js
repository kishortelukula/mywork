
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import UserPage1 from './Pages/UserPage1';
import AdminUserPage from './Pages/AdminUserPage';
import SignInAndSignUp from './Pages/SignInAndSignUp';
import ProductDeatils from './Pages/ProductDetails';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Test from './Pages/Test';

function App() {
  return (
    <div className="App">
        {/* <UserPage1/> */}
     {/* <AdminUserPage/> */}
     <SignInAndSignUp/>
     {/* <ProductDeatils/> */}
     {/* <Test/> */}
    

     <Router>
      <Routes>
        <Route path="/" element={<AdminUserPage />} />
        <Route path="/product/:id" element={<ProductDeatils />} />
      </Routes>
    </Router>

    </div>
  );
}

export default App;
