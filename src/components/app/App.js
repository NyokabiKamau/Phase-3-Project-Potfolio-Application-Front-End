import './App.css';
import { Routes, Route} from 'react-router-dom';

import Home from "../home/home";
import Profile from "../project/project";
import Header from '../navbar/header';
function App() {
  return (
    <div>
      <Header/>
      <div className='mt-5'>
      </div>
      <main>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/projects" element={<Profile />} />
        </Routes>
      </main>
    </div>
  )
}

export default App;
