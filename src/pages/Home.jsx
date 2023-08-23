import AboutMe from "../components/AboutMe";
import Banner from "../components/Banner";
import Clients from "../components/Clients";
import LetsBuild from "../components/LetsBuild";
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
            <Portfolio />
            <Clients/>
            <LetsBuild />
        </div>
    )
}