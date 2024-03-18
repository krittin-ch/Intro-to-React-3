import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Pages
import Project1 from './pages/Project_1.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Project1 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
