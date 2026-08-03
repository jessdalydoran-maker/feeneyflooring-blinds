const COLS = 10;
const ROWS = 14;

export function HerringboneBackground() {
  const tiles = [];
  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      const flip = (r + c) % 2 === 0;
      tiles.push(
        <div
          key={`${r}-${c}`}
          className="absolute"
          style={{
            left: `${(c / COLS) * 100}%`,
            top: `${(r / ROWS) * 100}%`,
            width: `${100 / COLS}%`,
            height: `${100 / ROWS}%`,
            transform: `rotate(${flip ? 45 : -45}deg)`,
          }}
        >
          <div className="h-full w-full border border-gold" />
        </div>
      );
    }
  }

  return (
    <div
      aria-hidden
      className="herringbone-reveal pointer-events-none absolute inset-0 overflow-hidden opacity-0"
    >
      <div className="relative h-[140%] w-[140%] -translate-x-[10%] -translate-y-[10%]">
        {tiles}
      </div>
    </div>
  );
}
