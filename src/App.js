import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Pages
import P1 from './pages/P1.jsx';
import P2 from './pages/P2.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<P1 />} />
        <Route path='/p2' element={<P2 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
