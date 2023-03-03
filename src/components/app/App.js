import Navbar from '../navbar/navbar';
import './App.css';
import { Routes, Route} from 'react-router-dom';

import Home from "../home/home";
import Profile from "../profile/profile";
function App() {
  return (
    <div>
      <Navbar/>
      <main>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </main>
    </div>
  )
}

export default App;
