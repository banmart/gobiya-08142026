import Link from "next/link";
import styles from "./Chip.module.css";

type Variant = "outline" | "solid" | "onVoid" | "onVoidSolid";

const VARIANT_CLASS: Record<Variant, string | undefined> = {
  outline: undefined,
  solid: styles.solid,
  onVoid: styles.onVoid,
  onVoidSolid: styles.onVoidSolid,
};

function Arrow() {
  return (
    <span className={styles.arrow} aria-hidden="true">
      <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M2.5 6h7M6.5 3l3 3-3 3" strokeLinecap="square" />
      </svg>
    </span>
  );
}

export default function Chip({
  href,
  children,
  variant = "outline",
  className,
}: {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={[styles.chip, VARIANT_CLASS[variant], className]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
      <Arrow />
    </Link>
  );
}
