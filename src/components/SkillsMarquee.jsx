import Marquee from "react-fast-marquee";
import { skillsRoll } from "../services/skills";
import starImage from "../assets/svgs/star.svg";

export default function SkillsMarquee() {
  return (
    <div className="mt-5 md:mt-20" style={slantedContainerStyle}>
      <Marquee>
        <div className="marquee-content my-auto">
          {skillsRoll.map((element) => (
            <p className="text-lg md:text-6xl font-bold flex flex-row py-2 md:py-20 text-white" key={element}>
              <img className="mx-5" src={starImage} alt="starImage" />
              {element}
              <img className="mx-5" src={starImage} alt="starImage" />
            </p>
          ))}
        </div>
      </Marquee>
    </div>
  );
}

const slantedContainerStyle = {
  transform: "rotate(-0.991deg)",
  flexShrink: 0,
  overflow: "hidden",
  
};



