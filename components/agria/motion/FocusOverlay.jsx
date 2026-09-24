// Velo di messa a fuoco dietro un pannello aperto (mega menu e pannelli futuri):
// oscura leggermente la pagina, mentre ciò che sta sopra (z-index > 45: header,
// banner cookie) resta nitido. Un clic sul velo chiama onClose.
// Non blocca lo scorrimento e non riceve mai il focus (aria-hidden): la gestione
// del focus resta al pannello. Chiuso non intercetta i click; senza JavaScript
// resta chiuso. Con movimento ridotto compare senza transizione.
// scope: 'viewport' copre la finestra (fixed); 'container' copre solo l'antenato
// posizionato più vicino (absolute), per pannelli dentro una sezione o le demo.
export default function FocusOverlay({ open, onClose, scope = 'viewport', className = '' }) {
  const position = scope === 'container' ? 'absolute' : 'fixed';
  return (
    <div
      aria-hidden="true"
      data-focus-overlay=""
      onClick={open ? onClose : undefined}
      className={`${position} inset-0 z-[45] bg-agria-ink/30 transition-opacity duration-300 ease-out motion-reduce:transition-none ${
        open ? 'opacity-100' : 'pointer-events-none opacity-0'
      } ${className}`}
    />
  );
}
