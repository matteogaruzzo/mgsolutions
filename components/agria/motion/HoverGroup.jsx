// Gruppo di elementi: al passaggio del cursore su uno, gli altri si attenuano
// leggermente (vedi .agria-hover-group in globals.css). Solo CSS: funziona senza
// JavaScript. Attivo solo su dispositivi con cursore; a tastiera nessun
// elemento viene attenuato, così il contrasto resta pieno.
export default function HoverGroup({ as: Tag = 'div', className = '', children, ...props }) {
  return (
    <Tag className={`agria-hover-group ${className}`} {...props}>
      {children}
    </Tag>
  );
}
