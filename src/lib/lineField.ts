/**
 * The geometry behind LineField, split out so the paths can be computed once
 * per variant at build time and shared by every instance on the page.
 *
 * Inlining them per instance cost 204KB of duplicated path data on the
 * homepage alone — the same four fields, redrawn eleven times.
 */

export type LineFieldVariant = 'warp' | 'ridge' | 'trough' | 'crest';

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

export const W = 1200;
export const H = 800;

/** 26 sample points still reads as a smooth curve — these wells are gentle,
 *  and the field renders at a fraction of the viewBox size in every slot. */
const STEPS = 26;

const VARIANTS: Record<LineFieldVariant, { lines: number; wells: Well[] }> = {
  // Hero — one deep well, off-centre right, plus a shallow counter-lift
  warp: {
    lines: 34,
    wells: [
      { cx: 0.63, cy: 0.46, amp: -132, sx: 0.19, sy: 0.3 },
      { cx: 0.24, cy: 0.68, amp: 54, sx: 0.16, sy: 0.26 },
    ],
  },
  // Card art — a single tight ridge pushing up from below
  ridge: {
    lines: 26,
    wells: [{ cx: 0.5, cy: 0.72, amp: 96, sx: 0.26, sy: 0.3 }],
  },
  // Card art — a broad shallow depression, left-weighted
  trough: {
    lines: 26,
    wells: [
      { cx: 0.34, cy: 0.44, amp: -88, sx: 0.24, sy: 0.34 },
      { cx: 0.82, cy: 0.62, amp: 34, sx: 0.14, sy: 0.2 },
    ],
  },
  // Card art — twin crests, tight falloff
  crest: {
    lines: 26,
    wells: [
      { cx: 0.32, cy: 0.6, amp: 72, sx: 0.13, sy: 0.24 },
      { cx: 0.68, cy: 0.4, amp: -72, sx: 0.13, sy: 0.24 },
    ],
  },
};

export const VARIANT_NAMES = Object.keys(VARIANTS) as LineFieldVariant[];

function displace(x: number, y: number, wells: Well[]) {
  let d = 0;
  for (const w of wells) {
    const dx = x / W - w.cx;
    const dy = y / H - w.cy;
    d += w.amp * Math.exp(-0.5 * ((dx / w.sx) ** 2 + (dy / w.sy) ** 2));
  }
  return d;
}

export type FieldLine = { d: string; opacity: string };

const cache = new Map<LineFieldVariant, FieldLine[]>();

/** Deterministic — no RNG — and memoised, so a variant is only ever built once. */
export function buildField(variant: LineFieldVariant): FieldLine[] {
  const cached = cache.get(variant);
  if (cached) return cached;

  const { lines, wells } = VARIANTS[variant];
  const gap = H / (lines - 1);
  const mid = Math.floor(lines / 2);

  const built = Array.from({ length: lines }, (_, i) => {
    const baseY = i * gap;
    let d = '';
    for (let s = 0; s <= STEPS; s++) {
      const x = (s / STEPS) * W;
      const y = baseY + displace(x, baseY, wells);
      // x lands on a regular grid, so integers cost nothing visually; y keeps
      // one decimal because that is where the displacement actually shows.
      d += `${s === 0 ? 'M' : 'L'}${Math.round(x)} ${y.toFixed(1)}`;
    }
    // fade the field out toward the top and bottom edges
    const t = Math.abs(i - mid) / mid;
    return { d, opacity: (1 - t * t * 0.72).toFixed(2) };
  });

  cache.set(variant, built);
  return built;
}

/** The single line an instance may draw in accent, on top of the shared field. */
export function accentPath(variant: LineFieldVariant, index: number): string | undefined {
  return buildField(variant)[index]?.d;
}
