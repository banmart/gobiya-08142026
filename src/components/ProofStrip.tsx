import LineField, { type LineFieldVariant } from "./LineField";
import Reveal from "./Reveal";
import { proofPoints } from "@/lib/content";
import styles from "./ProofStrip.module.css";

const ART: LineFieldVariant[] = ["ridge", "trough", "crest", "ridge"];

/**
 * PENDING — every `value` is an em-dash by design. A proof bar carrying
 * invented numbers ("120+ projects", "98% satisfaction") is the fastest way
 * to make the rest of the page untrustworthy. The number-shaped hole is
 * honest; fill it from real analytics in content.ts.
 */
export default function ProofStrip() {
  return (
    <section className={styles.strip} aria-label="Practice metrics">
      <div className={`shell ${styles.grid}`}>
        {proofPoints.map((point, i) => (
          <Reveal
            key={point.label}
            delay={i * 70}
            className={`${styles.cell} ${i % 2 === 1 ? styles.inverted : ""}`}
          >
            <div className={styles.art} aria-hidden="true">
              <LineField
                variant={ART[i]}
                stroke={i % 2 === 1 ? "var(--color-void-rule)" : "var(--color-rule)"}
              />
            </div>

            <p className={`${styles.value} tnum`} aria-label="Metric pending">
              {point.value}
            </p>

            <div className={styles.foot}>
              <p className={styles.label}>{point.label}</p>
              <p className={styles.note}>{point.note}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
