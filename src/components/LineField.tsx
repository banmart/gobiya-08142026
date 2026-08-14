/**
 * LineField — Tier-B hand-built SVG.
 *
 * A ruled field of hairlines displaced by one or two smooth Gaussian wells,
 * the way a contour map bends around a depression or an interference pattern
 * bends around a source. Deterministic (no RNG) so SSR and client agree.
 *
 * This is the page's only imagery. It is drawn, not generated, and it carries
 * meaning for a forensic practice: a regular field with a measurable anomaly
 * in it. Explicitly NOT a mesh-gradient blob.
 */

type Well = {
  /** centre, in 0–1 units of the viewBox */
  cx: number;
  cy: number;
  /** peak displacement in viewBox units */
  amp: number;
  /** falloff radii in 0–1 units */
  sx: number;
  sy: number;
};

export type LineFieldVariant = "warp" | "ridge" | "trough" | "crest";

const W = 1200;
const H = 800;

const VARIANTS: Record<
  LineFieldVariant,
  { lines: number; wells: Well[]; angle: number }
> = {
  // Hero — one deep well, off-centre right, plus a shallow counter-lift
  warp: {
    lines: 34,
    angle: 0,
    wells: [
      { cx: 0.63, cy: 0.46, amp: -132, sx: 0.19, sy: 0.3 },
      { cx: 0.24, cy: 0.68, amp: 54, sx: 0.16, sy: 0.26 },
    ],
  },
  // Card art — a single tight ridge pushing up from below
  ridge: {
    lines: 26,
    angle: 0,
    wells: [{ cx: 0.5, cy: 0.72, amp: 96, sx: 0.26, sy: 0.3 }],
  },
  // Card art — a broad shallow depression, left-weighted
  trough: {
    lines: 26,
    angle: 0,
    wells: [
      { cx: 0.34, cy: 0.44, amp: -88, sx: 0.24, sy: 0.34 },
      { cx: 0.82, cy: 0.62, amp: 34, sx: 0.14, sy: 0.2 },
    ],
  },
  // Card art — twin crests, tight falloff
  crest: {
    lines: 26,
    angle: 0,
    wells: [
      { cx: 0.32, cy: 0.6, amp: 72, sx: 0.13, sy: 0.24 },
      { cx: 0.68, cy: 0.4, amp: -72, sx: 0.13, sy: 0.24 },
    ],
  },
};

const STEPS = 52;

function displace(x: number, y: number, wells: Well[]) {
  let d = 0;
  for (const w of wells) {
    const dx = (x / W - w.cx) / w.sx;
    const dy = (y / H - w.cy) / w.sy;
    d += w.amp * Math.exp(-0.5 * (dx * dx + dy * dy));
  }
  return d;
}

function buildPaths(variant: LineFieldVariant) {
  const { lines, wells } = VARIANTS[variant];
  const gap = H / (lines - 1);
  const paths: string[] = [];

  for (let i = 0; i < lines; i++) {
    const baseY = i * gap;
    let d = "";
    for (let s = 0; s <= STEPS; s++) {
      const x = (s / STEPS) * W;
      const y = baseY + displace(x, baseY, wells);
      d += `${s === 0 ? "M" : "L"}${x.toFixed(1)} ${y.toFixed(1)}`;
    }
    paths.push(d);
  }
  return paths;
}

export default function LineField({
  variant = "warp",
  className,
  /** stroke colour token — pass a var() reference, never a raw value */
  stroke = "var(--color-void-rule)",
  accentAt,
}: {
  variant?: LineFieldVariant;
  className?: string;
  stroke?: string;
  /** index of the single line drawn in accent, if any */
  accentAt?: number;
}) {
  const paths = buildPaths(variant);
  const mid = Math.floor(paths.length / 2);

  return (
    <svg
      className={className}
      viewBox={`0 0 ${W} ${H}`}
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
      focusable="false"
    >
      <g fill="none" strokeWidth="1" vectorEffect="non-scaling-stroke">
        {paths.map((d, i) => {
          const isAccent = accentAt !== undefined && i === accentAt;
          // fade the field out toward the top and bottom edges
          const t = Math.abs(i - mid) / mid;
          const opacity = isAccent ? 1 : (1 - t * t * 0.72).toFixed(3);
          return (
            <path
              key={i}
              d={d}
              stroke={isAccent ? "var(--color-accent)" : stroke}
              opacity={opacity}
            />
          );
        })}
      </g>
    </svg>
  );
}
