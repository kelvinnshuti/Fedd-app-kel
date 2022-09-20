import Home from './pages/home/home';
import Career from './pages/career/career';
import Blog from './pages/blog/blog';
// import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import About from './pages/about/about';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Career' element={<Career/>}/>
        <Route path='/Blog' element={<Blog/>}/>
        <Route path='/about' element={<About />}/>
      </Routes>
    </Router>
  );
}

export default App;
