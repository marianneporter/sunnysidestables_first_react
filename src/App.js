import { BrowserRouter, Routes, Route} from "react-router-dom";

import About from './pages/About'
import Home from './pages/Home'
import HorseList from './pages/HorseList' 
import HorseDetail from "./pages/HorseDetail"

function App() { 

    return (
        <BrowserRouter>          
            <Routes>
                <Route index element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/horseList" element={<HorseList />} />
                <Route path="/horseDetail/:id" element={<HorseDetail />} />
            </Routes>            
        </BrowserRouter>
    );
}

export default App;