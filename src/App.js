import './App.css';
import Posts from "./components/Posts.jsx";
import PostIndex from "./components/PostIndex.jsx";
import Navbar from "./components/Navbar.jsx";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom'; 

function App() {
  return (
    <div className="App">
      <div className="banner">
        <img className="banner-img" src="assets/images/Icons/GameIcon.jpeg"/>
        <h1 className="App-header">Olive's Game Blog</h1>
        <img className="banner-img" src="assets/images/Icons/GameIcon.jpeg"/>
      </div>

      <Router>
        <div className="nav">
          <ul className="nav-container">
            <li>
              <Link className="nav-link" to="/">Latest Posts</Link>
            </li>
            <li>
              <Link className="nav-link" to="/posts-index">Posts Index</Link>
            </li>
          </ul>
        </div>
        <Routes>
          <Route exact path='/' element={< Posts />}></Route>
          <Route exact path='/posts-index' element={< PostIndex />}></Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
