"use client"

import { useState } from "react"
import { ArrowLeft } from "lucide-react"

export default function CapVertPage() {
  const [activeTab, setActiveTab] = useState("texte1")
  const objectName = "Calebasse Mandingue"

  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-white p-8">
      {/* Back button */}
      <Link
        href="/"
        className="fixed top-6 left-6 flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
      >
        <ArrowLeft size={20} />
        <span>Retour au globe</span>
      </Link>

      <div className="flex w-full max-w-[1920px] flex-col md:flex-row items-start justify-between gap-8 md:gap-36 lg:gap-48 xl:gap-64">
        {/* Left section - more space for the 3D model */}
        <div className="w-full md:w-1/3 lg:w-1/4">
          <div className="flex flex-col items-start mb-6">
            <h1 className="text-3xl font-bold uppercase tracking-wide font-neutral-face">Modélisation</h1>
            <p className="text-base text-gray-600 font-abc-sans">Faites tourner l'objet</p>
          </div>

          {/* 3D Model with Google Model Viewer */}
          <div className="aspect-square rounded-md border border-gray-300 overflow-hidden">
            {/* @ts-ignore */}
            <model-viewer
              src="/models/calebasse.glb"
              alt="Modèle 3D de Calebasse"
              camera-controls
              ar
              auto-rotate
              background-color="#ffffff"
              className="w-full h-full"
            />
          </div>
        </div>

        {/* Right section - moved more to the right */}
        <div className="w-full md:w-1/2 lg:w-7/12 xl:w-1/2">
          <div className="rounded-2xl bg-white p-8 md:p-10 shadow-md h-[500px] flex flex-col">
            <h2 className="mb-6 text-2xl font-bold uppercase font-neutral-face">À propos de {objectName}</h2>

            {/* Tabs */}
            <div className="mb-6 flex space-x-2">
              <button
                onClick={() => setActiveTab("texte1")}
                className={`rounded-full px-6 py-2 text-sm font-abc-sans ${
                  activeTab === "texte1" ? "bg-white text-black shadow-sm" : "bg-gray-100 text-gray-500"
                }`}
              >
                Histoire
              </button>
              <button
                onClick={() => setActiveTab("texte2")}
                className={`rounded-full px-6 py-2 text-sm font-abc-sans ${
                  activeTab === "texte2" ? "bg-white text-black shadow-sm" : "bg-gray-100 text-gray-500"
                }`}
              >
                Utilisation
              </button>
            </div>

            {/* Tab content with scrolling */}
            <div
              className="max-h-100 overflow-y-auto p-12
              [&::-webkit-scrollbar]:w-2
              [&::-webkit-scrollbar-track]:rounded-full
              [&::-webkit-scrollbar-thumb]:rounded-full
              [&::-webkit-scrollbar-thumb]:bg-gray-300"
            >
              {activeTab === "texte1" && (
                <div className="text-base md:text-lg leading-relaxed text-gray-700 font-abc-sans">
                  <p className="mb-4">
                    La Calebasse, symbole de tradition et de savoir-faire ancestral dans la culture Mandingue. La
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
                    mandingue.
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
                    La calebasse est utilisée de multiples façons dans la culture mandingue. En tant qu'ustensile de
                    cuisine, elle sert à préparer, conserver et servir les aliments. Sa forme naturelle et sa légèreté
                    en font un récipient idéal pour le transport de l'eau et des céréales.
                  </p>
                  <p className="mb-4">
                    Dans le domaine musical, la calebasse est transformée en instrument de percussion. Retournée dans un
                    bassin d'eau, elle devient un tambour aquatique aux sonorités uniques. Coupée en deux et recouverte
                    de peau d'animal, elle se transforme en tambour traditionnel. Attachée au manche d'instruments à
                    cordes comme la kora ou le n'goni, elle sert de caisse de résonance.
                  </p>
                  <p className="mb-4">
                    Les artisans mandingues excellent dans l'art de décorer les calebasses. Ils y gravent des motifs
                    géométriques ou figuratifs qui racontent des histoires ou représentent des symboles culturels
                    importants. Ces décorations ne sont pas seulement esthétiques, elles transmettent des messages et
                    préservent la mémoire collective.
                  </p>
                  <p className="mb-4">
                    Dans les cérémonies rituelles, la calebasse occupe une place centrale. Elle peut contenir des
                    offrandes destinées aux ancêtres ou aux divinités. Lors des mariages traditionnels, elle est offerte
                    à la mariée comme symbole de fertilité et de prospérité pour le nouveau foyer.
                  </p>
                  <p>
                    Les guérisseurs traditionnels utilisent également des calebasses pour préparer et conserver leurs
                    remèdes à base de plantes. La forme naturelle de ce fruit, une fois séché, en fait un contenant
                    idéal pour les préparations médicinales, contribuant ainsi à la pharmacopée traditionnelle
                    mandingue.
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

