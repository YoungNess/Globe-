// global.d.ts

declare global {
    namespace JSX {
      interface IntrinsicElements {
        // Déclare l'élément <model-viewer>
        'model-viewer': React.DetailedHTMLProps<
          React.HTMLAttributes<HTMLElement>,
          HTMLElement
        >;
      }
    }
  }