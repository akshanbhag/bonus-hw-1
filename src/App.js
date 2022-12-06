import './App.css';
import Navbar from './components/navbar';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Home from './components/Home';
import Resume from './components/Resume';

function App() {
  return (
    <Router>
      {/* NAVBAR */}
      <Navbar />
        <Routes>
        <Route
          index // equivalent to path=""
          element={<Home/>} />
        <Route
          path="/resume" // path = '/' + 'resume'
          element={<Resume/>}
        />
        </Routes>
    </Router>
  );
}

export default App;
