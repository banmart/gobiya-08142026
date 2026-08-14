import Chip from "./Chip";
import LineField, { type LineFieldVariant } from "./LineField";
import Reveal from "./Reveal";
import styles from "./PageIntro.module.css";

export default function PageIntro({
  title,
  lede,
  note,
  variant = "warp",
}: {
  title: string;
  lede: string;
  /** what this route will hold once it's written */
  note: string;
  variant?: LineFieldVariant;
}) {
  return (
    <>
      <section className={`band-void ${styles.intro}`}>
        <div className={styles.wash} aria-hidden="true" />
        <div className={styles.field} aria-hidden="true">
          <LineField variant={variant} accentAt={14} />
        </div>
        <div className="grain" aria-hidden="true" />

        <div className={`shell ${styles.grid}`}>
          <Reveal>
            <h1 className={styles.title}>{title}</h1>
          </Reveal>
          <Reveal delay={80}>
            <p className={styles.lede}>{lede}</p>
          </Reveal>
        </div>
      </section>

      <section className={styles.body}>
        <div className="shell">
          <Reveal>
            <p className={styles.note}>{note}</p>
          </Reveal>
          <Reveal delay={80} className={styles.actions}>
            <Chip href="/" variant="outline">
              Back to home
            </Chip>
            <Chip href="/contact" variant="solid">
              Book a call
            </Chip>
          </Reveal>
        </div>
      </section>
    </>
  );
}
