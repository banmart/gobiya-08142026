"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Chip from "./Chip";
import { brand, nav } from "@/lib/content";
import styles from "./Nav.module.css";

function Mark() {
  return (
    <svg className={styles.mark} viewBox="0 0 16 16" aria-hidden="true">
      <rect width="16" height="16" rx="4" fill="currentColor" opacity="0.16" />
      <circle cx="8" cy="8" r="3.25" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="8" cy="8" r="0.9" fill="var(--color-accent)" />
    </svg>
  );
}

export default function Nav() {
  const [frosted, setFrosted] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setFrosted(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // lock the page and wire Escape while the sheet is open
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const allLinks = [...nav.primary, ...nav.secondary];

  return (
    <>
      <header className={styles.nav} data-frosted={frosted ? "true" : "false"}>
        <div className={`shell ${styles.inner}`}>
          <Link href="/" className={styles.wordmark} aria-label={`${brand.name} — home`}>
            <Mark />
            {brand.name}
          </Link>

          <nav className={styles.cluster} aria-label="Primary">
            <div className={styles.column}>
              {nav.primary.map((item) => (
                <Link key={item.href} href={item.href} className={styles.link}>
                  {item.label}
                </Link>
              ))}
            </div>
            <div className={styles.column}>
              {nav.secondary.map((item) => (
                <Link key={item.href} href={item.href} className={styles.link}>
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>

          <div className={styles.actions}>
            <button
              type="button"
              className={styles.menuButton}
              onClick={() => setOpen(true)}
              aria-expanded={open}
              aria-controls="nav-sheet"
            >
              Menu
            </button>
            <span className={styles.desktopCta}>
              <Chip href={nav.cta.href} variant={frosted ? "solid" : "onVoidSolid"}>
                {nav.cta.label}
              </Chip>
            </span>
          </div>
        </div>
      </header>

      {open ? (
        <div className={styles.sheet} id="nav-sheet" role="dialog" aria-modal="true" aria-label="Menu">
          <div className={styles.sheetTop}>
            <span className={styles.wordmark}>
              <Mark />
              {brand.name}
            </span>
            <button type="button" className={styles.menuButton} onClick={() => setOpen(false)}>
              Close
            </button>
          </div>

          <div className={styles.sheetLinks}>
            {allLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={styles.sheetLink}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className={styles.sheetFoot}>
            <span className="label">Start here</span>
            <a href={`mailto:${brand.email}`} className={styles.sheetEmail}>
              {brand.email}
            </a>
            <Chip href={nav.cta.href} variant="onVoidSolid">
              {nav.cta.label}
            </Chip>
          </div>
        </div>
      ) : null}
    </>
  );
}
