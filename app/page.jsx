import HeroSection from "@/app/components/hero";
import TechnologiesUsedSection from "@/app/components/technologiesUsed";
import SelectedWork from "@/app/components/selectedWork";
import WorkExperienceSection from "./components/workExperience";
import AboutSection from "./components/aboutme";
import ContactMeSection from "@/app/components/contactMe";
import Footer from "@/app/components/footer";
import Banner from "@/app/components/banner";
import Navigation from "@/app/components/navigation";
import Conatiner from "@/app/components/conatainer";

export default function Home() {
  return (
    <div className="bg-[#000000] text-[#fff] min-h-screen">
      <Conatiner>
        <Navigation />
        <HeroSection />
        <TechnologiesUsedSection />
        <Banner />
        <SelectedWork />
        <WorkExperienceSection />
        <Banner />
        <AboutSection />
        <ContactMeSection />
        <Banner />
        <Footer />
      </Conatiner>
    </div>
  );
}
