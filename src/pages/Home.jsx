import AboutMe from "../components/AboutMe";
import Banner from "../components/Banner";
import Clients from "../components/Clients";
import ContactMe from "../components/ContactMe";
import LetsBuild from "../components/LetsBuild";
import MyServices from "../components/Myservices";
import Portfolio from "../components/Portfolio";
import SkillsMarquee from "../components/SkillsMarquee";
import SkillsSection from "../components/SkillsSection";

export default function Home(){
    return(
        <div>
            <Banner />
            <SkillsMarquee />
            <AboutMe />
            <SkillsSection />
            <MyServices/>
            <Portfolio />
            <Clients/>
            <LetsBuild />
            <ContactMe/>
        </div>
    )
}