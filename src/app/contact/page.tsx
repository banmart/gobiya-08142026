import type { Metadata } from "next";
import PageIntro from "@/components/PageIntro";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Send the URL and what changed. We will tell you whether it is worth a diagnostic before you pay for one.",
};

export default function ContactPage() {
  return (
    <PageIntro
      variant="trough"
      title="Send the URL and what changed."
      lede="We will tell you whether it is worth a diagnostic before you pay for one. If it is not, we will say so."
      note="This route is scaffolded and styled but has no form wired up yet. Until a form handler exists, the email link in the footer is the working path — deliberately, rather than shipping a form that silently drops submissions."
    />
  );
}
