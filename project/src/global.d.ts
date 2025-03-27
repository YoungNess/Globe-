// global.d.ts

declare global {
	namespace JSX {
		interface IntrinsicElements {
			"model-viewer": any; // Vous pouvez définir des propriétés spécifiques ici si nécessaire
		}
	}
}
