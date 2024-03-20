import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Pages
import Project1 from './pages/project_1/Project_1.jsx';
import Airbnb from './pages/project_2/Airbnb.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Project1 />} />
        <Route path='/airbnb' element={<Airbnb />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
