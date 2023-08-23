import AboutMe from "../components/AboutMe";
import Banner from "../components/Banner";
import LetsBuild from "../components/LetsBuild";
import SkillsMarquee from "../components/SkillsMarquee";
import SkillsSection from "../components/SkillsSection";

export default function Home(){
    return(
        <div>
            <Banner />
            <SkillsMarquee />
            <AboutMe />
            <SkillsSection />
            <LetsBuild />
        </div>
    )
}