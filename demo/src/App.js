import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from './layout/Navbar';
import HomePage from './pages/HomePage';
import{BrowserRouter as Router, Routes, Route} from "react-router-dom";
import AddUser from './users/AddUser';
import EditUser from './users/EditUser';
import ViewUser from './users/ViewUser';



function App() {
  return (
    <div className="App">
     
      <Router>
      <Navbar/>
        <Routes>
          <Route excut path='/' element={<HomePage/>}></Route>
          <Route excut path='/add' element={<AddUser/>}></Route>
          <Route excut path='edit/:id' element={<EditUser/>}></Route>
          <Route excut path='view/:id' element={<ViewUser/>}></Route>
        </Routes>
      
  
      </Router>
     
    </div>
  );
}

export default App;
