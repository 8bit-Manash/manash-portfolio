import PageLayout from "../components/PageLayout";
import { Travel } from "../sections/Sections";

export default function TravelPage() {
  return (
    <PageLayout tag="04 — Travel" title="EXPLORER MODE" accent="EXPLORE">
      <Travel hideSectionHeader />
    </PageLayout>
  );
}
