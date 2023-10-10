import AboutMe from "../components/AboutMe";
import Banner from "../components/Banner";
import Benifit from "../components/Benifit";
import Clients from "../components/Clients";
import ContactMe from "../components/ContactMe";
import Footer from "../components/Footer";
import MyServices from "../components/Myservices";
import Portfolio from "../components/Portfolio";
import SkillsMarquee from "../components/SkillsMarquee";
import SkillsSection from "../components/SkillsSection";
import WorkFlow from "../components/WorkFLow";

export default function Home() {
  return (
    <div>
      <Banner />
      <div className="bg-[#CE9FFC]">
        <SkillsMarquee />
        <AboutMe />
      </div>
      <SkillsSection />
      <WorkFlow />
      <MyServices />
      <Benifit/>
      <div className="bg-[#CE9FFC] mt-10">
        <Portfolio />
        <Clients />
      </div>
      <ContactMe />
      <Footer/>
    </div>
  );
}
