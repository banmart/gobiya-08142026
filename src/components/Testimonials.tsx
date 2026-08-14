"use client";

import { useState } from "react";
import SectionHead from "./SectionHead";
import { testimonials } from "@/lib/content";
import styles from "./Testimonials.module.css";

function Caret({ dir }: { dir: "prev" | "next" }) {
  return (
    <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path
        d={dir === "next" ? "M2.5 6h7M6.5 3l3 3-3 3" : "M9.5 6h-7M5.5 3l-3 3 3 3"}
        strokeLinecap="square"
      />
    </svg>
  );
}

/**
 * PENDING — `testimonials` is intentionally empty in content.ts. Inventing a
 * client quote is both an AI tell and, in the US, an FTC violation. This
 * section renders nothing until real, attributed quotes exist; add them and
 * the carousel appears with working controls.
 */
export default function Testimonials() {
  const [index, setIndex] = useState(0);

  if (testimonials.length === 0) return null;

  const current = testimonials[index];
  const total = testimonials.length;

  return (
    <section className={styles.section} aria-labelledby="testimonials-title">
      <div className="shell">
        <SectionHead
          id="testimonials-title"
          lead="What the work looks like from the other side."
          trail="In their words, not ours."
        />

        <div className={styles.grid}>
          <figure className={styles.quote}>
            <blockquote className={styles.quoteText}>
              &ldquo;{current.quote}&rdquo;
            </blockquote>
            <figcaption className={styles.attribution}>
              <span className={styles.name}>{current.name}</span>
              <span className={styles.role}>{current.role}</span>
            </figcaption>
          </figure>

          <div className={styles.marginalia}>
            <span className={`${styles.counter} tnum`}>
              {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
            </span>
            <div className={styles.controls}>
              <button
                type="button"
                className={styles.control}
                onClick={() => setIndex((i) => Math.max(0, i - 1))}
                disabled={index === 0}
                aria-label="Previous testimonial"
              >
                <Caret dir="prev" />
              </button>
              <button
                type="button"
                className={styles.control}
                onClick={() => setIndex((i) => Math.min(total - 1, i + 1))}
                disabled={index === total - 1}
                aria-label="Next testimonial"
              >
                <Caret dir="next" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
