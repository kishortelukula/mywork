import logo from './logo.svg';
import './App.css';
import Navbar from './Nav/Navbar';
import Home from './Home/Home';

function App() {
  return (
    <div className="App" style={{ height: '100vh' }}>
      <video autoPlay loop muted className="background-video" plays-inline="true">
    <source
      src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/82f375e7-244f-4c21-90ac-9abd7549ed05"
      type="video/mp4" />
  </video>
      <Navbar/>
      <Home/>
    </div>
  );
}

export default App;
