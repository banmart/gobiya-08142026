import Link from "next/link";
import LineField from "./LineField";
import Reveal from "./Reveal";
import { brand, footerLinks } from "@/lib/content";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={`band-void ${styles.footer}`}>
      <div className={styles.field} aria-hidden="true">
        <LineField variant="ridge" />
      </div>
      <div className="grain" aria-hidden="true" />

      <div className="shell">
        <div className={styles.top}>
          <Reveal className={styles.statement}>
            <p className={styles.prompt}>
              Send the URL and what changed. We&rsquo;ll tell you whether it&rsquo;s
              worth a diagnostic before you pay for one.
            </p>
            <a className={styles.email} href={`mailto:${brand.email}`}>
              {brand.email}
            </a>
          </Reveal>

          <div className={styles.columns}>
            {footerLinks.map((group) => (
              <nav key={group.heading} className={styles.column} aria-label={group.heading}>
                <h2 className={styles.columnHead}>{group.heading}</h2>
                {group.links.map((link) => (
                  <Link key={link.href} href={link.href} className={styles.link}>
                    {link.label}
                  </Link>
                ))}
              </nav>
            ))}
          </div>
        </div>

        <div className={styles.meta}>
          <span>{brand.hours}</span>
          <span>{brand.location}</span>
          <a href={`tel:${brand.phone.replace(/[^+\d]/g, "")}`} className={styles.link}>
            {brand.phone}
          </a>
        </div>

        <p className={styles.wordmark} aria-hidden="true">
          {brand.name}
        </p>

        <div className={styles.legal}>
          <span>
            &copy; {new Date().getFullYear()} {brand.name}. All rights reserved.
          </span>
          <span>
            <Link href="/privacy" className={styles.link}>
              Privacy
            </Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
