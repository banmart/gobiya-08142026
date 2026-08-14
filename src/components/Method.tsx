import Reveal from "./Reveal";
import SectionHead from "./SectionHead";
import { method } from "@/lib/content";
import styles from "./Method.module.css";

export default function Method() {
  return (
    <section className={styles.section} id="method" aria-labelledby="method-title">
      <div className="shell">
        <SectionHead
          id="method-title"
          lead="Every engagement runs the same three stages."
          trail="In that order, without exception."
        />

        <ol className={styles.grid}>
          {method.steps.map((step, i) => (
            <Reveal key={step.index} as="li" delay={i * 90} className={styles.step}>
              <span className={`${styles.index} tnum`}>{step.index}</span>
              <h3 className={styles.title}>{step.title}</h3>
              <p className={styles.body}>{step.body}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
