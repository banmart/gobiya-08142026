import type { Metadata } from "next";
import PageIntro from "@/components/PageIntro";

export const metadata: Metadata = {
  title: "About",
  description:
    "Why Gobiya works from primary evidence rather than dashboard summaries, and who does the work.",
};

export default function AboutPage() {
  return (
    <PageIntro
      variant="warp"
      title="Evidence beats opinion, every time."
      lede="Gobiya exists because most search advice is asserted rather than demonstrated. We work from logs, headers, and render output instead."
      note="This route is scaffolded and styled but not yet written. It will hold the practice's operating principles, the people doing the work, and how engagements are staffed."
    />
  );
}
