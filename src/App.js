import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import Dashboard from './pages/Dashboard';
import Monitoring from './pages/Monitoring';
import Documents from './pages/Documents'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path='monitoring' element={<Monitoring />} />
          <Route path='documents' element={<Documents />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
