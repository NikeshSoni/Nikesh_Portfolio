/** Lightweight SVG stand-in for the 3D shape. Also the no-WebGL / reduced-motion fallback. */
export function StaticWireframe() {
  return (
    <svg viewBox="0 0 400 400" fill="none" stroke="currentColor" strokeWidth="1.5" className="size-full text-primary" aria-hidden="true" focusable="false">
      <polygon points="200,50 330,125 330,275 200,350 70,275 70,125" />
      <polygon points="200,110 278,155 278,245 200,290 122,245 122,155" className="text-link" />
      <path d="M200 50 L200 110 M330 125 L278 155 M330 275 L278 245 M200 350 L200 290 M70 275 L122 245 M70 125 L122 155" />
      <path d="M200 110 L278 245 L122 245 Z" className="text-link" />
    </svg>
  );
}
