import PageLayout from "../components/PageLayout";
import { Projects } from "../sections/Sections";

export default function ProjectsPage() {
  return (
    <PageLayout tag="02 — Projects" title="WHAT I'VE BUILT" accent="WORK">
      <Projects hideSectionHeader />
    </PageLayout>
  );
}
