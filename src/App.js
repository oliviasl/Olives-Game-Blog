import './App.css';
import Posts from "./components/Posts.jsx";
import PostIndex from "./components/PostIndex.jsx";
import PostDetails from "./components/PostDetails.jsx";
import gameIcon from "./assets/images/GameIcon.jpeg";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom'; 

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}

const allImages = importAll(require.context('./assets/images/', false, /\.(png|jpe?g|svg)$/));

function App() {

  return (
    <div className="App">
      <div className="banner">
        <img className="banner-img" src={gameIcon}/>
        <h1 className="App-header">Olive's Game Blog</h1>
        <img className="banner-img" src={gameIcon}/>
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
          <Route exact path='/' element={< Posts allImages={allImages}/>}></Route>
          <Route exact path='/post-details/:postid' element={< PostDetails allImages={allImages}/>}></Route>
          <Route exact path='/posts-index' element={< PostIndex allImages={allImages}/>}></Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
