import Home from './pages/home/home';
import Career from './pages/career/career';
import Blog from './pages/blog/blog';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Career' element={<Career/>}/>
        <Route path='/Blog' element={<Blog/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
