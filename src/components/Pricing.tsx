import Chip from "./Chip";
import LineField from "./LineField";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";
import { plans } from "@/lib/content";
import styles from "./Pricing.module.css";

function Tick() {
  return (
    <svg
      className={styles.tick}
      viewBox="0 0 12 12"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      aria-hidden="true"
    >
      <path d="M2 6.4 4.7 9 10 3.2" strokeLinecap="square" />
    </svg>
  );
}

/**
 * PENDING — `price` values in content.ts are placeholders (`0,000`). Replace
 * them with the real offer before this page goes live.
 */
export default function Pricing() {
  return (
    <section className={styles.section} aria-labelledby="pricing-title">
      <div className="shell">
        <SectionHead
          id="pricing-title"
          lead="Three ways in, priced up front."
          trail="No discovery call required to see a number."
        />

        <div className={styles.grid}>
          {plans.map((plan, i) => (
            <Reveal
              key={plan.name}
              delay={i * 80}
              className={`${styles.plan} ${plan.featured ? styles.featured : ""}`}
            >
              {plan.featured ? (
                <div className={styles.art} aria-hidden="true">
                  <LineField variant="crest" accentAt={11} />
                </div>
              ) : null}

              <div className={styles.top}>
                <h3 className={styles.name}>{plan.name}</h3>
                <p className={styles.summary}>{plan.summary}</p>
              </div>

              <p className={styles.priceRow}>
                <span className={`${styles.price} tnum`}>${plan.price}</span>
                <span className={styles.cadence}>{plan.cadence}</span>
              </p>

              <ul className={styles.includes}>
                {plan.includes.map((item) => (
                  <li key={item} className={styles.include}>
                    <Tick />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className={styles.action}>
                <Chip
                  href="/contact"
                  variant={plan.featured ? "onVoidSolid" : "outline"}
                >
                  {plan.cta}
                </Chip>
              </div>
            </Reveal>
          ))}
        </div>

        <p className={styles.note}>
          Placeholder figures — replace before launch
        </p>
      </div>
    </section>
  );
}
