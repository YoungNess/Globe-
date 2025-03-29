declare global {
	namespace JSX {
		interface IntrinsicElements {
			"model-viewer": any;
		}
	}
}

("use client");

import { useState } from "react";
import "@google/model-viewer";
export default function Modelisation() {
	const [activeTab] = useState("texte1");

	return (
		<div className="flex min-h-screen w-full items-center justify-center bg-white p-8">
			<div className="flex w-full max-w-[1920px] flex-col md:flex-row items-start justify-between gap-8 md:gap-36 lg:gap-48 xl:gap-64">
				{/* Section gauche - plus d'espace pour le modèle 3D */}
				<div className="w-full md:w-1/3 lg:w-1/4">
					<div className="flex flex-col items-start mb-6">
						<h1 className="text-3xl font-bold uppercase tracking-wide font-neutral-face">
							Le khôl
						</h1>
						<p className="text-bg text-gray-600 font-abc-sans">
							Faites tourner l'objet{" "}
						</p>
					</div>

					{/* Placeholder pour le modèle 3D - agrandi */}
					<div className="aspect-square bg-gray-100 rounded-md flex items-center justify-center w-full">
						<p className="text-gray-400 font-abc-sans">
							{" "}
							<model-viewer
								src="/models/khol.glb"
								alt="Calebasse mandingue"
								camera-controls
								auto-rotate
								ar
								shadow-intensity="1"
								className="w-full h-[500px] bg-gray-100 rounded-md"
							>
								<button
									slot="ar-button"
									className="bg-blue-500 text-white px-4 py-2 rounded-md"
								>
									Activer AR
								</button>
							</model-viewer>
						</p>
					</div>
				</div>

				{/* Section droite - déplacée plus à droite */}
				<div className="w-full md:w-1/2 lg:w-7/12 xl:w-1/2">
					<div className="rounded-2xl bg-white p-8 md:p-10 shadow-md h-[500px] flex flex-col">
						<h2 className="mb-6 text-2xl font-bold uppercase font-neutral-face">
							Entre beauté, spiritualité et médecine
							traditionnelle: le khôl, un héritage aux multiples
							vertus
						</h2>

						{/* Onglets */}

						{/* Contenu des onglets avec défilement */}
						<div
							className="max-h-100 overflow-y-auto p-12
                  [&::-webkit-scrollbar]:w-2
                  [&::-webkit-scrollbar-track]:rounded-full
                  [&::-webkit-scrollbar-thumb]:rounded-full
                  [&::-webkit-scrollbar-thumb]:bg-gray-300"
						>
							{activeTab === "texte1" && (
								<div className="text-base md:text-lg leading-relaxed text-gray-700 font-abc-sans">
									<h3 className="text-lg font-semibold mb-2">
										Depuis des millénaires, le khôl ne se
										limite pas à sublimer le regard : il
										protège et soigne.
									</h3>
									<p className="mb-4">
										Le khôl était un produit utilisé par
										diverses populations, notamment au
										Moyen-Orient, au Maghreb, en Grèce, à
										Rome et en Asie du Sud.
									</p>
									<p className="mb-4">
										Symbole de beauté et de protection
										spirituelle, il servait également de
										marque de noblesse, notamment dans la
										Grèce antique. Il pouvait aussi être
										utilisé pour éloigner le mauvais œil ou
										comme protection divine. Ce produit
										était aussi réputé pour renforcer la vue
										et favoriser la pousse des cils, il
										était particulièrement recommandé en
										Islam pour ses bienfaits. Composé de
										suie, d’huile et de plantes médicinales,
										le khôl avait une texture poudreuse. Il
										s’appliquait sur la muqueuse de l’œil à
										l’aide d’un bâtonnet fin, appelé mirwed,
										fabriqué en os, bois ou métal, parfois
										enduit d’huile ou d’eau de rose. Le khôl
										se conservait dans des récipients
										décorés, appelés makhâl, fabriqués en
										bois, laiton, cuivre, ivoire ou argile,
										et parfois incrustés de pierres
										précieuses.
									</p>
									<p>
										Le design des contenants et applicateurs
										variait selon les régions et les
										époques. En Égypte ancienne, on
										retrouvait des flacons en pierre ou en
										verre, tandis qu’au Maghreb et au
										Moyen-Orient, les boîtes à khôl en
										laiton finement ciselé étaient très
										répandues.
									</p>
								</div>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
