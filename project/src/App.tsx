import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WorldMap from './components/WorldMap'; // Composant du globe
import CapVertPage from './pages/CapVertPage'; // Page personnalisée pour Cap-Vert


function App() {
  return (
    <Router>
      <div className="w-full h-screen bg-black">
        {/* Définir les routes */}
        <Routes>
          {/* Route principale : affiche le globe */}
          <Route path="/" element={<WorldMap />} />
          {/* Routes pour les pages personnalisées */}
          <Route path="/cap-vert" element={<CapVertPage />} />

          {/* Ajoutez d'autres routes ici */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;