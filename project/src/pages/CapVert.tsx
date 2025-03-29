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
							La Cimboa
						</h1>
						<p className="text-bg text-gray-600 font-abc-sans">
							Faites tourner l'objet
						</p>
					</div>
					{/* Modèle 3D - Sans aspect-square */}
					<div className="w-full h-[600px] bg-gray-100 rounded-md flex items-center justify-center">
						<model-viewer
							src="public/models/Cimboa.glb"
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
							L'héritage musical du Cap-Vert : La Cimboa
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
										Vous connaissez sûrement Cesaria Evora,
										figure internationale de la Morna, ou
										encore Ronisia, star actuelle
										Cap-Verdienne, rayonnant en France. Et
										si nous revenons à la case départ de la
										musique du Cap-Vert, ainsi que du rôle
										de la cimboa dans l'histoire ?
									</h3>
									<p className="mb-4">
										Cet instrument fut auparavant
										emblématique, bien que peu connu. Née au
										16ème siècle, elle est fabriquée à
										partir de calebasses, ou encore de noix
										de cocos. Ce violon monocorde fait à
										partir de poils de chevaux ou d'ânes, et
										également joué avec un archet, était
										utilisé pour jouer des musiques, tel que
										le batuque, apparu à cette même période.
									</p>
									<p className="mb-4">
										Ce style musical, qui est un symbole
										fort de la culture cap-verdienne,
										représente l’héritage de la résistance
										des esclaves, lors de l'occupation
										portugaise, commencé en 1460. Musique
										composé de chants improvisés, et parlant
										généralement du quotidien ou encore des
										aléas de la vie, elle est
										traditionnellement joué par les femmes
										utilisant des pagnes ainsi que la
										cimboa. Ces chansons sont
										majoritairement joués lors des fêtes
										religieuses et familiales.
									</p>
									<p className="mb-4">
										Au vu de ses tonalités, la cimboa est
										bien moins mentionnée aujourd'hui dû à
										son remplacement "logique" dans la
										musique et fut remplacée par des
										instruments plus modernes. Elle
										représente dorénavant l'héritage musical
										du pays, et devint un objet désormais
										décoratif.
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
