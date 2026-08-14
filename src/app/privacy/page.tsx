import type { Metadata } from "next";
import PageIntro from "@/components/PageIntro";

export const metadata: Metadata = {
  title: "Privacy",
  description: "How Gobiya handles the data collected through this site.",
};

export default function PrivacyPage() {
  return (
    <PageIntro
      variant="ridge"
      title="How we handle your data."
      lede="Short version: we collect as little as possible and we do not sell any of it."
      note="This route is scaffolded and styled but requires real legal copy before launch. Do not publish placeholder text on a privacy page — have counsel review the final wording against the jurisdictions you operate in."
    />
  );
}
