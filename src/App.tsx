import React, {Suspense} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GlobalStyle from './globalStyles';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Sprout from './pages/Sprout';
import Farm from './pages/Farm';
import Dashboard from './pages/Dashboard';
import CircularIcon from './components/Circularprogress';

function App() {
  return (
    <Router>
      <Suspense fallback={<CircularIcon />}>
      <GlobalStyle />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/sprout" element={<Sprout />}/> 
        <Route path="/farm" element={<Farm />}/>
        <Route path="/dashboard" element={<Dashboard />}/> 
      </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
