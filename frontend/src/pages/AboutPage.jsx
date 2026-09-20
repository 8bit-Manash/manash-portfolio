import PageLayout from "../components/PageLayout";
import { About, Gaming, Travel, YouTube, Coding } from "../sections/Sections";

export default function AboutPage() {
  return (
    <PageLayout tag="01 — About" title="WHO I AM" accent="ABOUT">
      <About hideSectionHeader />
      <Gaming hideSectionHeader />
      <Travel hideSectionHeader />
      <YouTube hideSectionHeader />
      <Coding hideSectionHeader />
    </PageLayout>
  );
}