import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Pages
import P1 from './pages/P1.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<P1 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
