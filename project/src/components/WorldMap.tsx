import { useRef, useState } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import { OrbitControls, Html, Stars } from "@react-three/drei";
import * as THREE from "three";

// Fonction pour convertir des coordonnées géographiques (latitude, longitude) en coordonnées 3D (x, y, z)
function latLonToXYZ(
	lat: number,
	lon: number,
	radius: number = 1.01
): [number, number, number] {
	const phi = (90 - lat) * (Math.PI / 180); // Convertit la latitude en angle polaire
	const theta = (lon + 180) * (Math.PI / 180); // Convertit la longitude en angle azimutal

	// Calcul des coordonnées cartésiennes
	const x = -radius * Math.sin(phi) * Math.cos(theta);
	const z = radius * Math.sin(phi) * Math.sin(theta);
	const y = radius * Math.cos(phi);

	return [x, y, z]; // Retourne les coordonnées [x, y, z]
}

// Interface pour définir la structure des données des lieux
interface Location {
	name: string; // Nom du lieu
	position: [number, number, number]; // Position en coordonnées 3D
	description: string; // Description du lieu
	image: string; // URL de l'image associée
	url: string;
}

// Tableau contenant les données des lieux à afficher sur le globe
const locations: Location[] = [
	{
		name: "Cap-Vert",
		position: latLonToXYZ(16.5388, -23.0418),
		description: "Un archipel volcanique dans l'océan Atlantique.",
		image: "https://images.unsplash.com/photo-1570968915860-54d151529688?auto=format&fit=crop&q=80&w=500",
		url: "/cap-vert",
	},
	{
		name: "Égypte",
		position: latLonToXYZ(26.8206, 30.8025),
		description: "Pays des pharaons et des pyramides.",
		image: "https://images.unsplash.com/photo-1600526744374-e76b75c6de16?auto=format&fit=crop&q=80&w=500",
		url: "/egypte",
	},
	{
		name: "Japon",
		position: latLonToXYZ(36.2048, 138.2529),
		description: "Traditions millénaires et technologies de pointe.",
		image: "https://images.unsplash.com/photo-1576086213369-97a306d36512?auto=format&fit=crop&q=80&w=500",
		url: "/Japon",
	},
	{
		name: "Japon 2",
		position: latLonToXYZ(40.6895, 140.767),
		description: "Le Mont Fuji, symbole du Japon.",
		image: "https://images.unsplash.com/photo-1586484111143-7e3e9f7dfb5e?auto=format&fit=crop&q=80&w=500",
		url: "/Japon2",
	},
	{
		name: "Chili",
		position: latLonToXYZ(-35.6751, -71.543),
		description: "Le Chili, terre de contrastes.",
		image: "https://images.unsplash.com/photo-1591986472235-c1eeb2c504a2?auto=format&fit=crop&q=80&w=500",
		url: "https://fr.wikipedia.org/wiki/Chili",
	},
	{
		name: "Mali",
		position: latLonToXYZ(17.5707, -3.9962),
		description:
			"La Calebasse, symbole de tradition et de savoir-faire ancestral dans la culture Mandingue. La calebasse, incarne plus qu’un fruit dans la culture Mandingue. Une fois sec, ce fruit devient un objet indispensable dans la culture Mandingue servant d’objet du quotidien utilisé comme un récipient pour transporter des aliments ou de l’eau mais pas seulement.Durant l’Empire du Mali (XIIIᵉ - XVIᵉ siècle), sous le règne de Soundiata Keïta. Les Griots figures centrales dans les sociétés d’Afrique de l’Ouest. Ils sont à la fois historiens, conteurs, musiciens, poètes et médiateurs. C’est pour cela qu’ils ont du réinventé l’utilisation de la Calebasse pour les accompagner partout  que ce soit en tant qu’instrument de musique avec le kora et le n’goni, qui amplifie les sons enrichissant la musique et ajoutant une profondeur qui capte l'attention du public. Ou encore comme support de parole car oui la. Lorsqu’un griot raconte une histoire où chante une épopée, il frappe la calebasse pour marquer le rythme de ses paroles. Ce geste symbolise l'interconnexion entre la musique et la parole La Calebasse devient un  objet de transmission décorée de motifs qui racontent des histoires ou des lignées familiales, elle est un véritable porte-voix de l’histoire. À travers son utilisation dans la musique, la parole et la transmission des récits, elle incarne le rôle essentiel des griots dans la préservation de l’histoire et de la sagesse du peuple mandingue.",
		image: "https://images.unsplash.com/photo-1590490360183-21691ef1fddc?auto=format&fit=crop&q=80&w=500",
		url: "/Mali",
	},
];
// Ajoutez d'autres lieux ici...

// Composant principal pour le globe interactif
function Globe() {
	const earthRef = useRef<THREE.Mesh>(null); // Référence pour manipuler le globe
	const [selectedLocation, setSelectedLocation] = useState<Location | null>(
		null
	); // État pour suivre le lieu sélectionné
	const [hovered, setHovered] = useState<string | null>(null); // État pour suivre le lieu survolé

	// Charge la texture de la Terre
	const [earthMap] = useLoader(TextureLoader, [
		"https://unpkg.com/three-globe@2.30.0/example/img/earth-blue-marble.jpg",
	]);

	// Fait tourner le globe à chaque frame
	useFrame(() => {
		if (earthRef.current) {
			earthRef.current.rotation.y += 0.001; // Rotation autour de l'axe Y
		}
	});

	return (
		<>
			{/* Ajoute un fond d'étoiles */}
			<Stars
				radius={300}
				depth={60}
				count={20000}
				factor={7}
				saturation={0}
				fade
				speed={1}
			/>

			{/* Ajoute des sources de lumière */}
			<ambientLight intensity={0.4} />
			<pointLight position={[10, 10, 10]} intensity={1.5} />
			<pointLight
				position={[-10, -10, -10]}
				intensity={0.5}
				color="#2266cc"
			/>
			<directionalLight position={[5, 3, 5]} intensity={1.5} />

			{/* Globe terrestre */}
			<mesh ref={earthRef}>
				{/* Géométrie sphérique */}
				<sphereGeometry args={[1, 64, 64]} />
				{/* Matériau réaliste avec texture */}
				<meshPhysicalMaterial
					map={earthMap}
					roughness={0.7}
					metalness={0.3}
					clearcoat={0.4}
					clearcoatRoughness={0.4}
					emissive="#112244"
					emissiveIntensity={0.1}
				/>

				{/* Affiche les points pour chaque lieu */}
				{locations.map((location, index) => (
					<group key={index} position={location.position}>
						{/* Point cliquable */}
						<mesh
							onClick={() => window.open(location.url, "_blank")} // Ouvre la page dans un nouvel onglet
							onPointerOver={() => {
								document.body.style.cursor = "pointer";
								setHovered(location.name);
							}}
							onPointerOut={() => {
								document.body.style.cursor = "default";
								setHovered(null);
							}}
						>
							{/* Géométrie du point */}
							<sphereGeometry args={[0.03, 16, 16]} />
							{/* Matériau du point */}
							<meshBasicMaterial
								color={
									hovered === location.name
										? "#ffff00"
										: "#ff69b4"
								}
								transparent
								opacity={hovered === location.name ? 1 : 0.5}
							/>
						</mesh>

						{/* Popup HTML affichée lorsqu'un lieu est sélectionné */}
						{selectedLocation === location && (
							<Html position={[0, 0.1, 0]}>
								<div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-2xl p-8 w-[600px] transform -translate-x-1/2">
									{/* Bouton pour fermer la popup */}
									<button
										onClick={(e) => {
											e.stopPropagation(); // Empêche la propagation du clic
											setSelectedLocation(null); // Ferme la popup
										}}
										className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl font-light"
									>
										×
									</button>
									{/* Image du lieu */}
									<img
										src={location.image}
										alt={location.name}
										className="w-full h-72 object-cover rounded-lg mb-6 shadow-lg"
									/>
									{/* Titre du lieu */}
									<h3 className="text-3xl font-bold text-gray-800 mb-4">
										{location.name}
									</h3>
									{/* Description du lieu */}
									<p className="text-lg text-gray-600 leading-relaxed">
										{location.description}
									</p>
								</div>
							</Html>
						)}
					</group>
				))}
			</mesh>
		</>
	);
}

// Composant principal de l'application
export default function WorldMap() {
	return (
		<div className="h-screen w-full">
			{/* Canvas React Three Fiber */}
			<Canvas camera={{ position: [0, 0, 2.5], fov: 45 }}>
				{/* Fond noir */}
				<color attach="background" args={["#000"]} />
				{/* Composant Globe */}
				<Globe />
				{/* Contrôles d'orbite */}
				<OrbitControls
					enableZoom={true}
					enablePan={true}
					enableRotate={true}
					minDistance={1.5}
					maxDistance={4}
				/>
			</Canvas>
		</div>
	);
}
