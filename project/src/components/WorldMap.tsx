import { useRef, useState } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';
import { OrbitControls, Html, Stars } from '@react-three/drei';
import * as THREE from 'three';

function latLonToXYZ(lat: number, lon: number, radius: number = 1.01): [number, number, number] {
  const phi = (90 - lat) * (Math.PI / 180);  // latitude -> polar angle
  const theta = (lon + 180) * (Math.PI / 180);  // longitude -> azimuthal angle

  const x = -radius * Math.sin(phi) * Math.cos(theta);
  const z = radius * Math.sin(phi) * Math.sin(theta);
  const y = radius * Math.cos(phi);

  return [x, y, z];
}

interface Location {
  name: string;
  position: [number, number, number];
  description: string;
  image: string;
}

const locations: Location[] = [
 
  {
    name: "Cap-Vert",
    position: latLonToXYZ(16.5388, -23.0418),
    description: "Un archipel volcanique dans l'océan Atlantique.",
    image: "https://images.unsplash.com/photo-1570968915860-54d151529688?auto=format&fit=crop&q=80&w=500"
  },
  {
    name: "Égypte",
    position: latLonToXYZ(26.8206, 30.8025),
    description: "Pays des pharaons et des pyramides.",
    image: "https://images.unsplash.com/photo-1600526744374-e76b75c6de16?auto=format&fit=crop&q=80&w=500"
  },
  {
    name: "Nigéria",
    position: latLonToXYZ(9.0820, 8.6753),
    description: "Le pays le plus peuplé d'Afrique.",
    image: "https://images.unsplash.com/photo-1613758949587-fbd1cc86a1fa?auto=format&fit=crop&q=80&w=500"
  },
  {
    name: "Japon",
    position: latLonToXYZ(36.2048, 138.2529),
    description: "Traditions millénaires et technologies de pointe.",
    image: "https://images.unsplash.com/photo-1576086213369-97a306d36512?auto=format&fit=crop&q=80&w=500"
  },
  {
    name: "Chili",
    position: latLonToXYZ(-35.6751, -71.5430),
    description: "Le Chili, terre de contrastes.",
    image: "https://images.unsplash.com/photo-1591986472235-c1eeb2c504a2?auto=format&fit=crop&q=80&w=500"
  },
  {
    name: "Mali",
    position: latLonToXYZ(17.5707, -3.9962),
    description: "La Calebasse, symbole de tradition et de savoir-faire ancestral dans la culture Mandingue. La calebasse, incarne plus qu’un fruit dans la culture Mandingue. Une fois sec, ce fruit devient un objet indispensable dans la culture Mandingue servant d’objet du quotidien utilisé comme un récipient pour transporter des aliments ou de l’eau mais pas seulement.Durant l’Empire du Mali (XIIIᵉ - XVIᵉ siècle), sous le règne de Soundiata Keïta. Les Griots figures centrales dans les sociétés d’Afrique de l’Ouest. Ils sont à la fois historiens, conteurs, musiciens, poètes et médiateurs. C’est pour cela qu’ils ont du réinventé l’utilisation de la Calebasse pour les accompagner partout  que ce soit en tant qu’instrument de musique avec le kora et le n’goni, qui amplifie les sons enrichissant la musique et ajoutant une profondeur qui capte l'attention du public. Ou encore comme support de parole car oui la. Lorsqu’un griot raconte une histoire où chante une épopée, il frappe la calebasse pour marquer le rythme de ses paroles. Ce geste symbolise l'interconnexion entre la musique et la parole La Calebasse devient un  objet de transmission décorée de motifs qui racontent des histoires ou des lignées familiales, elle est un véritable porte-voix de l’histoire. À travers son utilisation dans la musique, la parole et la transmission des récits, elle incarne le rôle essentiel des griots dans la préservation de l’histoire et de la sagesse du peuple mandingue." ,
    image: "https://images.unsplash.com/photo-1590490360183-21691ef1fddc?auto=format&fit=crop&q=80&w=500"
  }
  
];

function Globe() {
  const earthRef = useRef<THREE.Mesh>(null);
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);
  const [hovered, setHovered] = useState<string | null>(null);

  const [earthMap] = useLoader(TextureLoader, [
    'https://unpkg.com/three-globe@2.30.0/example/img/earth-blue-marble.jpg'
  ]);

  useFrame(() => {
    if (earthRef.current) {
      earthRef.current.rotation.y += 0.001;
    }
  });

  return (
    <>
      <Stars radius={300} depth={60} count={20000} factor={7} saturation={0} fade speed={1} />

      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} intensity={1.5} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#2266cc" />
      <directionalLight position={[5, 3, 5]} intensity={1.5} />

      <mesh ref={earthRef}>
        <sphereGeometry args={[1, 64, 64]} />
        <meshPhysicalMaterial 
          map={earthMap}
          roughness={0.7}
          metalness={0.3}
          clearcoat={0.4}
          clearcoatRoughness={0.4}
          emissive="#112244"
          emissiveIntensity={0.1}
        />

        {locations.map((location, index) => (
          <group key={index} position={location.position}>
            <mesh
              onClick={() => setSelectedLocation(location)}
              onPointerOver={() => {
                document.body.style.cursor = 'pointer';
                setHovered(location.name);
              }}
              onPointerOut={() => {
                document.body.style.cursor = 'default';
                setHovered(null);
              }}
            >
              <sphereGeometry args={[0.03, 16, 16]} />
              <meshBasicMaterial 
                color={hovered === location.name ? "#ffff00" : "#ff4444"}
                transparent
                opacity={0.8}
              />
            </mesh>

            {selectedLocation === location && (
              <Html position={[0, 0.1, 0]}>
                <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-2xl p-8 w-[600px] transform -translate-x-1/2">
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedLocation(null);
                    }}
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl font-light"
                  >
                    ×
                  </button>
                  <img 
                    src={location.image} 
                    alt={location.name}
                    className="w-full h-72 object-cover rounded-lg mb-6 shadow-lg"
                  />
                  <h3 className="text-3xl font-bold text-gray-800 mb-4">{location.name}</h3>
                  <p className="text-lg text-gray-600 leading-relaxed">{location.description}</p>
                </div>
              </Html>
            )}
          </group>
        ))}
      </mesh>
    </>
  );
}

export default function WorldMap() {
  return (
    <div className="h-screen w-full">
      <Canvas camera={{ position: [0, 0, 2.5], fov: 45 }}>
        <color attach="background" args={['#000']} />
        <Globe />
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
