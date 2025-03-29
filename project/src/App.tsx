import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WorldMap from "./components/WorldMap"; // Composant du globe
import CapVertPage from "./pages/CapVert"; // Page personnalisée pour Cap-Vert
import EgyptePage from "./pages/egypte"; // Page personnalisée pour l'Egypte
import MaliPage from "./pages/Mali"; // Page personnalisée pour le Mali
import JaponPage from "./pages/Japon"; // Page personnalisée pour le Japon
import Japon2Page from "./pages/Japon2"; // Page personnalisée pour le Japon

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
					<Route path="/egypte" element={<EgyptePage />} />
					<Route path="/Mali" element={<MaliPage />} />
					<Route path="/Japon" element={<JaponPage />} />
					<Route path="/Japon2" element={<Japon2Page />} />

					{/* Ajoutez d'autres routes ici */}
				</Routes>
			</div>
		</Router>
	);
}

export default App;
