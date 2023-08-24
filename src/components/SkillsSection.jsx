import Container from "./Container";
import leftReactangle from "../assets/imgs/leftRectangle.png";
import rightReactangle from "../assets/imgs/rightRectangle.png";
import middleRectangle from "../assets/imgs/middleRectangle.png";
import { Fade } from "react-awesome-reveal";

export default function SkillsSection() {
  const mySkills = [
    {
      title: "What can I do for you",
      description:
        "I believe that great design should be intuitive and user-friendly for everyone, including those who don't consider themselves 'designers.' It's my job to ensure that your audience can interact with your brand in a way that makes sense for them, whether they're on a laptop or a phone.",
      image: leftReactangle,
    },
    {
      title: "Applications I am fluent in",
      description:
        "Creating visual elements for your brand, including logos, icons, typography, and more. Developing interactive elements like websites, mobile apps and games. Creating marketing campaigns that get results.",
      image: middleRectangle,
    },
    {
      title: "What can you expect",
      description:
        "You can expect me to deliver high-quality work on time and within budget. You can also expect me to be honest with you about your project's needs, so that we can come up with an approach that works best for both of us.",
      image: rightReactangle,
    },
  ];
  return (
    <Fade duration={1500}>
      <div className="bg-[#19191D] text-color-two" id="skillSection">
        <Container>
          <div className="py-5 px-10">
            <p className="text-2xl md:text-6xl font-semibold text-color-two">
              My <span className="text-color-one">skills</span>
            </p>
            <div className="flex flex-col md:flex-row gap-y-10 md:gap-x-10 mt-5 md:mt-10">
              {mySkills.map((element) => {
                return (
                  <div className="basis-1/3 flex flex-row gap-5">
                    <img
                      className="h-[8rem] md:h-auto"
                      src={element.image}
                      alt="skillsImageSection"
                    />
                    <div>
                      <p className="text-lg md:text-2xl font-bold">
                        {element.title}
                      </p>
                      <p className="mt-5 md:mt-10 text-[8px] md:text-sm font-normal">
                        {element.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </div>
    </Fade>
  )
}
