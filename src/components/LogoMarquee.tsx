import { clientLogos } from "@/lib/content";
import styles from "./LogoMarquee.module.css";

/**
 * PENDING — these are sector labels, not client wordmarks. No real company is
 * claimed as a client anywhere on this page. Swap `clientLogos` in content.ts
 * for real SVG marks (drop them in /public/logos) once permissions are cleared.
 */
export default function LogoMarquee() {
  const group = (
    <div className={styles.group} aria-hidden="true">
      {clientLogos.map((name) => (
        <span key={name} className={styles.item}>
          {name}
        </span>
      ))}
    </div>
  );

  return (
    <section className={styles.wall} aria-label="Sectors we work in">
      <div className="shell">
        <p className={`label ${styles.caption}`}>Sectors we work in</p>
      </div>
      <div className={styles.viewport}>
        <div className={styles.track}>
          {group}
          {group}
        </div>
      </div>
      {/* accessible equivalent of the duplicated visual track */}
      <ul className="sr-only">
        {clientLogos.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </section>
  );
}
