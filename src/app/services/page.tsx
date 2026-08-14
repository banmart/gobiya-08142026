import type { Metadata } from "next";
import PageIntro from "@/components/PageIntro";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Forensic SEO, generative search, technical recovery, performance engineering, and measurement — five disciplines on one evidence trail.",
};

export default function ServicesPage() {
  return (
    <PageIntro
      variant="trough"
      title="Five disciplines, one evidence trail."
      lede="Forensic SEO, generative search, technical recovery, performance engineering, and measurement. We do not sell them separately because they are not separate problems."
      note="This route is scaffolded and styled but not yet written. It will hold the full scope, deliverable, and engagement shape for each discipline — including what evidence you receive and what we need from your team to run it."
    />
  );
}
