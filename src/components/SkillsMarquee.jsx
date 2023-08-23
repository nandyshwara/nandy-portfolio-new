import Marquee from "react-fast-marquee";
import { skillsRoll } from "../services/skills";
import starImage from "../assets/svgs/star.svg";

export default function SkillsMarquee() {
  return (
    <div className="bg-white" style={slantedContainerStyle}>
      <Marquee>
        <div className="marquee-content my-auto">
          {skillsRoll.map((element) => (
            <p className="text-3xl font-bold flex flex-row py-5" key={element}>
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
  backgroundColor: "white",
  transform: "rotate(-0.991deg)",
  flexShrink: 0,
  overflow: "hidden",
};



