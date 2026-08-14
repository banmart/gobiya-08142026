import type { ReactNode } from "react";
import Reveal from "./Reveal";
import styles from "./SectionHead.module.css";

/**
 * Two-tone heading is the reference's strongest typographic device: one
 * phrase at full ink, the continuation at ~40% — a single sentence that
 * states the claim and qualifies it in the same breath.
 */
export default function SectionHead({
  eyebrow,
  lead,
  trail,
  lede,
  id,
}: {
  /** Use sparingly — the page ships at most two of these in total. */
  eyebrow?: string;
  lead: string;
  trail?: string;
  lede?: ReactNode;
  id?: string;
}) {
  return (
    <div className={styles.head}>
      <Reveal className={styles.stack}>
        {eyebrow ? <span className="label">{eyebrow}</span> : null}
        <h2 className={styles.title} id={id}>
          {lead}
          {trail ? <span className="dim"> {trail}</span> : null}
        </h2>
        {lede ? <p className={styles.lede}>{lede}</p> : null}
      </Reveal>
    </div>
  );
}
