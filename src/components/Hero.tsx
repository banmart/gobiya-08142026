import Chip from "./Chip";
import LineField from "./LineField";
import Reveal from "./Reveal";
import { hero } from "@/lib/content";
import styles from "./Hero.module.css";

/** The four primary sources a forensic engagement reads. Not metrics — surfaces. */
const SURFACES = [
  { index: "01", name: "Server logs", note: "raw requests" },
  { index: "02", name: "Render output", note: "parity diff" },
  { index: "03", name: "Index coverage", note: "state history" },
  { index: "04", name: "AI citations", note: "answer surfaces" },
];

export default function Hero() {
  return (
    <section className={`band-void ${styles.hero}`}>
      <div className={styles.wash} aria-hidden="true" />
      <div className={styles.field} aria-hidden="true">
        <LineField variant="warp" accentAt={17} />
      </div>
      <div className="grain" aria-hidden="true" />

      <div className={`shell ${styles.grid}`}>
        <div className={styles.copy}>
          <Reveal>
            <span className={styles.status}>
              <span className={styles.dot} aria-hidden="true" />
              {hero.status}
            </span>
          </Reveal>

          <Reveal delay={60}>
            <h1 className={styles.headline}>
              {hero.headlineLead}{" "}
              <span className="dim">{hero.headlineTrail}</span>
            </h1>
          </Reveal>

          <Reveal delay={120}>
            <p className={styles.lede}>{hero.lede}</p>
          </Reveal>

          <Reveal delay={180} className={styles.ctas}>
            <Chip href={hero.primaryCta.href} variant="onVoidSolid">
              {hero.primaryCta.label}
            </Chip>
            <Chip href={hero.secondaryCta.href} variant="onVoid">
              {hero.secondaryCta.label}
            </Chip>
          </Reveal>
        </div>

        <Reveal delay={240} className={styles.proof}>
          <figure className={styles.art}>
            <LineField variant="crest" accentAt={12} />
            <figcaption className={styles.artCaption}>
              <span className="label">Displacement field</span>
              <span className="label tnum">{hero.stamp}</span>
            </figcaption>
          </figure>

          <div className={styles.panel}>
            <div className={styles.panelHead}>
              <span className="label">What we read</span>
            </div>
            <ul>
              {SURFACES.map((surface) => (
                <li key={surface.index} className={styles.row}>
                  <span className={`${styles.rowIndex} tnum`}>{surface.index}</span>
                  <span>{surface.name}</span>
                  <span className={styles.rowNote}>{surface.note}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
