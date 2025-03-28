declare global {
  namespace JSX {
    interface IntrinsicElements {
      "model-viewer": any;
    }
  }
}

"use client"

import { useState } from "react"
import "@google/model-viewer"; 
export default function Modelisation() {
  const [activeTab, setActiveTab] = useState("texte1")

  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-white p-8">
      <div className="flex w-full max-w-[1920px] flex-col md:flex-row items-start justify-between gap-8 md:gap-36 lg:gap-48 xl:gap-64">
        {/* Section gauche - plus d'espace pour le modèle 3D */}
        <div className="w-full md:w-1/3 lg:w-1/4">
          <div className="flex flex-col items-start mb-6">
            <h1 className="text-3xl font-bold uppercase tracking-wide font-neutral-face">Modélisation</h1>
            <p className="text-bg text-gray-600 font-abc-sans">Faites tourner l'objet</p>
          </div>
          <model-viewer
            src="public/models/model.glb"
            alt="Calebasse mandingue"
            camera-controls
            auto-rotate
            ar
            shadow-intensity="1"
            className="w-full h-[500px] bg-gray-100 rounded-md"
          >
            <button slot="ar-button" className="bg-blue-500 text-white px-4 py-2 rounded-md">
              Activer AR
            </button>
          </model-viewer>
          {/* Placeholder pour le modèle 3D - agrandi */}
          <div className="aspect-square bg-gray-100 rounded-md flex items-center justify-center w-full">
            <p className="text-gray-400 font-abc-sans">Modèle 3D</p>
          </div>
        </div>

        {/* Section droite - déplacée plus à droite */}
        <div className="w-full md:w-1/2 lg:w-7/12 xl:w-1/2">
          <div className="rounded-2xl bg-white p-8 md:p-10 shadow-md h-[500px] flex flex-col">
            <h2 className="mb-6 text-2xl font-bold uppercase font-neutral-face">À propos de {"{NOM DE L'OBJET}"}</h2>

            {/* Onglets */}
            <div className="mb-6 flex space-x-2">
              <button
                onClick={() => setActiveTab("texte1")}
                className={`rounded-full px-6 py-2 text-sm font-abc-sans ${
                  activeTab === "texte1" ? "bg-white text-black shadow-sm" : "bg-gray-100 text-gray-500"
                }`}
              >
                Texte1
              </button>
              <button
                onClick={() => setActiveTab("texte2")}
                className={`rounded-full px-6 py-2 text-sm font-abc-sans ${
                  activeTab === "texte2" ? "bg-white text-black shadow-sm" : "bg-gray-100 text-gray-500"
                }`}
              >
                Texte 2
              </button>
            </div>

            {/* Contenu des onglets avec défilement */}
            <div className="max-h-100 overflow-y-auto p-12 
                [&::-webkit-scrollbar]:w-2
                [&::-webkit-scrollbar-track]:rounded-full
                [&::-webkit-scrollbar-thumb]:rounded-full
                [&::-webkit-scrollbar-thumb]:bg-gray-300">
              {activeTab === "texte1" && (
                <div className="text-base md:text-lg leading-relaxed text-gray-700 font-abc-sans">
                  <p className="mb-4">
                    "La Calebasse, symbole de tradition et de savoir-faire ancestral dans la culture Mandingue. La
                    calebasse, incarne plus qu'un fruit dans la culture Mandingue. Une fois sec, ce fruit devient un
                    objet indispensable dans la culture Mandingue servant d'objet du quotidien utilisé comme un
                    récipient pour transporter des aliments ou de l'eau mais pas seulement.
                  </p>
                  <p className="mb-4">
                    Durant l'Empire du Mali (XIIIᵉ - XVIᵉ siècle), sous le règne de Soundiata Keïta. Les Griots figures
                    centrales dans les sociétés d'Afrique de l'Ouest. Ils sont à la fois historiens, conteurs,
                    musiciens, poètes et médiateurs. C'est pour cela qu'ils ont du réinventé l'utilisation de la
                    Calebasse pour les accompagner partout que ce soit en tant qu'instrument de musique avec le kora et
                    le n'goni, qui amplifie les sons enrichissant la musique et ajoutant une profondeur qui capte
                    l'attention du public.
                  </p>
                  <p className="mb-4">
                    Ou encore comme support de parole car oui la. Lorsqu'un griot raconte une histoire où chante une
                    épopée, il frappe la calebasse pour marquer le rythme de ses paroles. Ce geste symbolise
                    l'interconnexion entre la musique et la parole La Calebasse devient un objet de transmission décorée
                    de motifs qui racontent des histoires ou des lignées familiales, elle est un véritable porte-voix de
                    l'histoire. À travers son utilisation dans la musique, la parole et la transmission des récits, elle
                    incarne le rôle essentiel des griots dans la préservation de l'histoire et de la sagesse du peuple
                    mandingue."
                  </p>
                  <p className="mb-4">
                    La calebasse est également un symbole de fertilité et d'abondance dans la culture mandingue. Sa
                    forme arrondie évoque le ventre maternel, et sa capacité à contenir de la nourriture ou de l'eau en
                    fait un symbole de prospérité. Dans certaines cérémonies, elle est utilisée pour les offrandes aux
                    ancêtres, créant ainsi un lien entre le monde des vivants et celui des esprits.
                  </p>
                  <p>
                    Aujourd'hui encore, malgré la modernisation, la calebasse reste un élément culturel important. Les
                    artisans continuent de les décorer avec des motifs traditionnels, perpétuant ainsi un savoir-faire
                    ancestral. Dans les performances contemporaines de musique mandingue, la calebasse garde sa place
                    d'honneur, témoignant de la résilience et de l'adaptabilité de cette culture millénaire.
                  </p>
                </div>
              )}

              {activeTab === "texte2" && (
                <div className="text-base md:text-lg leading-relaxed text-gray-700 font-abc-sans">
                  <p className="mb-4">
                    Contenu du deuxième onglet. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.
                    Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur aliquet quam id dui posuere
                    blandit.
                  </p>
                  <p className="mb-4">
                    Nulla porttitor accumsan tincidunt. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                    posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.
                    Proin eget tortor risus. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.
                  </p>
                  <p>
                    Pellentesque in ipsum id orci porta dapibus. Vivamus suscipit tortor eget felis porttitor volutpat.
                    Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Donec rutrum congue leo eget
                    malesuada. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
    
  )
}


