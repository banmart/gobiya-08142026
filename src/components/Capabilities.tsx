import Chip from "./Chip";
import LineField, { type LineFieldVariant } from "./LineField";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";
import { capabilities } from "@/lib/content";
import styles from "./Capabilities.module.css";

const ART: LineFieldVariant[] = ["trough", "crest", "ridge"];

export default function Capabilities() {
  return (
    <section className={styles.section} aria-labelledby="capabilities-title">
      <div className="shell">
        <SectionHead
          id="capabilities-title"
          lead="Three places we go deeper than an audit tool can."
          trail="Each one starts from primary evidence."
        />

        <div className={styles.grid}>
          {capabilities.map((item, i) => (
            <Reveal key={item.index} delay={i * 90} className={styles.card}>
              <div className={styles.art}>
                <LineField variant={ART[i]} accentAt={i === 1 ? 13 : undefined} />
                <span className={styles.artIndex}>{item.index}</span>
              </div>

              <div className={styles.body}>
                <h3 className={styles.title}>{item.title}</h3>
                <p className={styles.summary}>{item.summary}</p>
                <ul className={styles.tags}>
                  {item.tags.map((tag) => (
                    <li key={tag} className={styles.tag}>
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className={styles.foot}>
          <Chip href="/services">All services</Chip>
        </Reveal>
      </div>
    </section>
  );
}
