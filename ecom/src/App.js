import logo from './logo.svg';
import './App.css';
import Slider from './SliderContent/Slider';
import EcomNav from './HeaderNav/EcomNav';
import 'bootstrap/dist/css/bootstrap.min.css';
import{BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Cards from './Cards/Cards';
import Footer from './Footer/Footer';
import About from './Pages/About';
import LogIn from './Pages/LogIn';
import SignUp from './Pages/SignUp';
import UserDashboard from './Pages/UserDashboard';



function App() {
  return (
    <div className="App">
     <Router>
     <EcomNav/>
     {/* <Slider/>
 <Cards/> */}
     <Routes>
      <Route excut path='/About' element={<About/>}></Route>
      <Route excut path='/' element={<><Slider /><Cards /></>}></Route>
      <Route excut path='/LogIn' element={<LogIn></LogIn>}></Route>
      <Route excut path='/SignUp' element={<SignUp/>}></Route>
      {/* <Route excut path='/SignUp' element={<UserDashboard/>}></Route> */}
     </Routes>
 
 <Footer/>
     </Router>
 
    </div>
  );
}

export default App;
