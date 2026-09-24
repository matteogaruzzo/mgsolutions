// Punto di innesto del futuro assistente AI (concierge), in basso a destra.
//
// Oggi è un contenitore vuoto: nessuna dimensione, nessun elemento visibile, non
// intercetta i click (pointer-events: none). Per attivare il concierge:
//   - montare il widget come figlio di questo componente (o via portal su
//     #agria-concierge-root) e dare pointer-events: auto al solo widget;
//   - z-index 40: sotto header (50), menu mobile e velo dei pannelli (45),
//     sopra il contenuto;
//   - il banner cookie occupa il fondo pagina finché non viene chiuso: il widget
//     deve evitarne l'area o comparire dopo il consenso (lib/consent.js).
// Vedi docs/agria/09-interazioni.md.
export default function ConciergeSlot({ children = null }) {
  return (
    <div
      id="agria-concierge-root"
      data-concierge-slot=""
      className="pointer-events-none fixed bottom-4 right-4 z-40 sm:bottom-6 sm:right-6"
    >
      {children}
    </div>
  );
}
