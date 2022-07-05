import logo from './logo.svg';
import './App.css';
import Posts from "./components/Posts.jsx";
import Navbar from "./components/Navbar.jsx"

function App() {
  return (
    <div className="App">
      <div className="banner">
        <img className="banner-img" src="assets/images/Icons/GameIcon.jpeg"/>
        <h1 className="App-header">Olive's Game Blog</h1>
        <img className="banner-img" src="assets/images/Icons/GameIcon.jpeg"/>
      </div>
      <Navbar />
      <Posts />
    </div>
  );
}

export default App;
