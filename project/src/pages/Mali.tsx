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
	const [activeTab, setActiveTab] = useState("texte1");

	return (
		<div className="flex min-h-screen w-full items-center justify-center bg-white p-8">
			<div className="flex w-full max-w-[1920px] flex-col md:flex-row items-start justify-between gap-8 md:gap-36 lg:gap-48 xl:gap-64">
				{/* Section gauche - plus d'espace pour le modèle 3D */}
				<div className="w-full md:w-1/3 lg:w-1/4">
					<div className="flex flex-col items-start mb-6">
						<h1 className="text-3xl font-bold uppercase tracking-wide font-neutral-face">
							La Calebasse
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
								src="/models/calebasse.glb"
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
							La calebasse : Un simple objet au centre de la
							transmission culturelle mandingue
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
										Imaginez un objet qui raconterait des
										histoires, transmettrait la sagesse des
										ancêtres et fedait battre le cœur de la
										musique traditionnelle dans le royaume
										du mandingue tout entier. En fait, cet
										objet existe : c’est la calebasse. C’est
										un trésor inhabituel de la culture
										mandingue.
									</h3>
									<p className="mb-4">
										Ces derniers sont pour la plupart
										consommables lorsqu'ils sont jeunes,
										mais l'usage premier de ce fruit est
										culturel et spirituel. L'objet trouve
										d'abord sa place dans la cuisine, sous
										forme de récipients, de louches, de bols
										ou de saladiers.
									</p>
									<p className="mb-4">
										ans la musique, la calebasse occupe une
										place très importante dans la culture
										africaine, notamment auprès des griots,
										Les griots sont des artistes
										traditionnels qui jouent un rôle
										important dans les sociétés mandingues ,
										notamment durant l'époque de Soundiata
										Keïta, fondateur de l'Empire du Mali au
										XIIIᵉ siècle.
									</p>
									<p>
										Ceux-ci transmettaient les contes
										culturels, l'éducation ou l'information
										à travers leur musique et leurs
										instruments fabriqués à l'aide de
										calebasses, comme le kora ou le gooni.
										De nos jours, elle est tout autant
										utilisée, et on la retrouve souvent dans
										les percussions, telles que les maracas
										ou les tambours.
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
