import './App.css';
import HomePage from './Home_Page/HomePage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CreditReviewer from './Sr_CreditReviewer/CreditReviewer';


function App() {
  return (
    <div className="App">
      {/* <HomePage /> */}
    {/* <TaskTabels/> */}
    {/* <CreditReviewer/> */}
    <Router>
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/SRCreditReviewer" element={<CreditReviewer />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
