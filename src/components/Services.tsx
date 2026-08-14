"use client";

import { useEffect, useRef, useState } from "react";
import LineField from "./LineField";
import SectionHead from "./SectionHead";
import { services } from "@/lib/content";
import styles from "./Services.module.css";

export default function Services() {
  const listRef = useRef<HTMLUListElement>(null);
  const [active, setActive] = useState(0);
  const [scrubbing, setScrubbing] = useState(false);

  useEffect(() => {
    const list = listRef.current;
    if (!list) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    // mobile scroll has its own physics; scroll-linked state fights it
    if (!window.matchMedia("(min-width: 60rem)").matches) return;

    setScrubbing(true);
    const items = Array.from(list.querySelectorAll<HTMLLIElement>("[data-index]"));

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const index = Number((entry.target as HTMLElement).dataset.index);
          if (!Number.isNaN(index)) setActive(index);
        }
      },
      // a thin band across the viewport's centre line
      { rootMargin: "-48% 0px -48% 0px", threshold: 0 },
    );

    for (const item of items) observer.observe(item);
    return () => observer.disconnect();
  }, []);

  return (
    <section className={`band-void ${styles.section}`} aria-labelledby="services-title">
      <div className={styles.field} aria-hidden="true">
        <LineField variant="trough" />
      </div>
      <div className="grain" aria-hidden="true" />

      <div className="shell">
        <SectionHead
          id="services-title"
          lead="Five disciplines."
          trail="One evidence trail running through all of them."
          lede="We do not sell these separately because they are not separate problems. A render fault is a crawl problem is a citation problem."
        />
      </div>

      <ul className={styles.list} ref={listRef}>
        {services.map((service, i) => (
          <li
            key={service.title}
            className={styles.item}
            data-index={i}
            /* `active` inverts the row into a light bar; `open` only reveals
               the body. Without JS, on mobile, or under reduced motion every
               row is open and none is inverted — the list still reads. */
            data-active={scrubbing && active === i ? "true" : "false"}
            data-open={!scrubbing || active === i ? "true" : "false"}
          >
            <div className={styles.inner}>
              <div className={styles.head}>
                <span className={`${styles.index} tnum`}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className={styles.title}>{service.title}</h3>
              </div>
              <div className={styles.bodyWrap}>
                <div className={styles.body}>
                  <p>{service.body}</p>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
