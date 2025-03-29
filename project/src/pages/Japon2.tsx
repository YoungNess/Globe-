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
				<div className="w-full md:w-1/2 lg:w-1/3">
					{" "}
					{/* Augmente la taille */}
					<div className="flex flex-col items-start mb-6">
						<h1 className="text-3xl font-bold uppercase tracking-wide font-neutral-face">
							Le shamisen
						</h1>
						<p className="text-bg text-gray-600 font-abc-sans">
							Faites tourner l'objet
						</p>
					</div>
					{/* Modèle 3D - Sans aspect-square */}
					<div className="w-full h-[600px] bg-gray-100 rounded-md flex items-center justify-center">
						<model-viewer
							src="public/models/shamisen.glb"
							alt="Calebasse mandingue"
							camera-controls
							auto-rotate
							ar
							shadow-intensity="1"
							className="w-full h-full"
							camera-orbit="auto auto 2m"
							min-camera-orbit="auto auto 150%"
							max-camera-orbit="auto auto 300%"
						></model-viewer>
					</div>
				</div>

				{/* Section droite - déplacée plus à droite */}
				<div className="w-full md:w-1/2 lg:w-7/12 xl:w-1/2">
					<div className="rounded-2xl bg-white p-8 md:p-10 shadow-md h-[500px] flex flex-col">
						<h2 className="mb-6 text-2xl font-bold uppercase font-neutral-face">
							Le shamisen : Voyage à travers l’histoire d’un
							instrument emblématique du Japon
						</h2>

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
									<h3 className="mb-4 text-xl font-bold font-neutral-face">
										Né du sanxian en chine, le shamisen est
										un instrument à trois cordes
										traditionnel du pays du soleil levant
										qui a su être une figure emblématique de
										la culture japonaise.
									</h3>
									<p className="mb-4">
										Le sanxian a été introduit au Japon dans
										le Royaume de Ryūkyū, un archipel
										indépendant dont l’île principale est
										Okinawa et a évolué pour devenir un
										symbole de l’identité culturelle
										japonaise.
									</p>
									<p className="mb-4">
										Utilisé dès l’époque Edo (1603-1868)
										dans le théâtre japonais qu’est le
										Kabuki, le Bunraku et par les Geishas,
										il accompagnait les récits épiques et
										les performances artistiques, ancrant
										profondément sa présence dans les arts
										traditionnels. Son jeu percussif, obtenu
										grâce au Bachi, un large plectre, lui
										confère un son unique et expressif.
									</p>
									<p className="mb-4">
										Avec l’ouverture de l’occident à l’ère
										Meiji (1868-1912), Le shamisen a perdu
										en popularité face aux instruments
										européen comme le piano et le violon.
										Pourtant, il a su s'adapter, notamment
										avec le Tsugaru-jamisen, un style
										dynamique mêlant tradition et modernité.
										Aujourd’hui, des artistes comme The
										Yoshida Brothers l'intègrent dans des
										genres contemporains comme le rock et
										l’électro. À la fois témoin du passé et
										acteur du présent, le Shamisen continue
										de transcender les époques, préservant
										son essence tout en s’adaptant à son
										époque.
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
