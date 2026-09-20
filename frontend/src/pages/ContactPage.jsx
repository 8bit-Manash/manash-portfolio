import PageLayout from "../components/PageLayout";
import { Contact } from "../sections/Sections";

export default function ContactPage() {
  return (
    <PageLayout tag="07 — Contact" title="LET'S CONNECT" accent="HELLO">
      <Contact hideSectionHeader />
    </PageLayout>
  );
}
