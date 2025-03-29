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
							Le naginata
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
								src="/models/naginata1.glb"
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
							Le naginata : une arme au service des guerriers du
							Japon.
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
										Vous connaissez sûrement les samouraïs
										et leur arme emblématique le katana
										cependant, ils ne se limitaient pas qu’a
										cette arme et utilisaient également
										d'autres armes adaptées aux besoins du
										combat. Parmi elles, le naginata occupe
										une place importante , notamment face
										aux cavaliers et dans les batailles
										rangées.
									</h3>
									<p className="mb-4">
										Arme iconique du japon médiéval ,le
										naginata est né durant l'ère Tengyō
										(938-947) au cours des conflits opposant
										les différents seigneurs féodaux aux
										empereurs qui tentaient de maintenir
										leur autorité. Cette arme, composée d'un
										long manche en bois ou en métal et d'une
										lame courbe, était utilisée aussi bien
										par les guerriers samouraïs que par les
										moines-soldats (sōhei) qui armés de
										cette lance, mais aussi d’arc et d’épées
										défendaient les intérêts de leurs
										temples contre les seigneurs féodaux
										,les samouraïs ou même contre d’autres
										sectes religieuses.
									</p>
									<p className="mb-4">
										Au fil des siècles, le naginata a connu
										plusieurs évolutions.Jusqu'à l'époque
										Époque Sengoku (1394-1570), il était
										largement utilisé. Cependant, avec
										l'arrivée des armes à feu au XVIᵉ
										siècle, son usage militaire a peu à peu
										été délaissé.
									</p>
									<p>
										Aujourd’hui, bien que son usage premier
										ait disparu, le naginata survit à
										travers le naginatajutsu,une discipline
										qui perpétue les techniques et
										l’héritage de cette arme historique.
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
