import type { Metadata } from "next";
import PageIntro from "@/components/PageIntro";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected forensic search engagements — the fault found, the repair shipped, and the evidence behind both.",
};

export default function WorkPage() {
  return (
    <PageIntro
      variant="crest"
      title="The fault, the repair, the evidence."
      lede="Case studies are written only where the client has approved publication and the numbers can be independently verified."
      note="This route is scaffolded and styled but not yet written. No case study will be published here without client sign-off and a verifiable measurement source — an unverifiable case study is marketing, not evidence."
    />
  );
}
