import './App.css';
import 'leaflet/dist/leaflet.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';

import Map1 from './pages/Map1';
import Map2 from './pages/Map2';
import Map3 from './pages/Map3';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
  
          <Route index path = '/'  element={<Map1 />} />

          <Route path='map2' element={<Map2 />} />
          <Route path='map3' element={<Map3 />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
