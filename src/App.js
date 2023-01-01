import './App.scss';
import Nav from './Nav'

import { BrowserRouter, Routes, Route } from "react-router-dom";

import About from './pages/About'
import Home from './pages/Home'
import HorseList from './pages/HorseList' 


function App() {
    return (
        <BrowserRouter>
            <div className="content">  
                    
                <Nav />
                <Routes>
                    <Route index element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/horseList" element={<HorseList />} />
                </Routes>        

                     
            </div>
        </BrowserRouter>
    );
}

export default App;