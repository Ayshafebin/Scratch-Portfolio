import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import About from './Components/About';
import Skills from './Components/Skills';
import Portfolio from './Components/Portfolio';
import ContactMe from './Components/ContactMe';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/Skills' element={<Skills/>}/>
        <Route path='/Portfolio' element={<Portfolio/>}/>
        <Route path='/ContactMe' element={<ContactMe/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
