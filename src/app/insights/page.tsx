import type { Metadata } from "next";
import PageIntro from "@/components/PageIntro";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Field notes on crawl behaviour, render parity, AI answer surfaces, and Core Web Vitals field data.",
};

export default function InsightsPage() {
  return (
    <PageIntro
      variant="ridge"
      title="Field notes, not thought leadership."
      lede="What we found, how we found it, and what it means for anyone running a site at scale."
      note="This route is scaffolded and styled but not yet wired to a content source. It is the natural place to mount MDX or a headless CMS collection."
    />
  );
}
