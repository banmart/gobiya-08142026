import Reveal from "./Reveal";
import { positioning } from "@/lib/content";
import styles from "./Positioning.module.css";

export default function Positioning() {
  return (
    <section className={styles.section} aria-labelledby="positioning-title">
      {/* gate 54 — the left column is empty void, NOT a label gutter. The
          reference puts an eyebrow here; that hanging-header pattern is the
          templated-editorial tell, so the space stays silent. */}
      <div className={`shell ${styles.grid}`}>
        <div>
          <Reveal>
            <h2 className={styles.statement} id="positioning-title">
              {positioning.lead}
              <span className="dim">{positioning.trail}</span>
            </h2>
          </Reveal>

          <div className={styles.columns}>
            {positioning.columns.map((column, i) => (
              <Reveal key={column.title} delay={80 + i * 80} className={styles.column}>
                <h3 className={styles.columnTitle}>{column.title}</h3>
                <p className={styles.columnBody}>{column.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
