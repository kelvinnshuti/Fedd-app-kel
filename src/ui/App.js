import Home from './pages/home/home';
import Career from './pages/career/career';
import Blog from './pages/blog/blog';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Signin from './pages/signin/signin';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Career' element={<Career/>}/>
        <Route path='/Blog' element={<Blog/>}/>
        <Route path='/Signin' element={<Signin/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
