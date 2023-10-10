import Container from "./Container";
import aboutImage from "../assets/svgs/AboutMe.svg";
import circleImage from "../assets/svgs/circle.svg";
export default function AboutMe() {
  const techincalSkills = [
    "WEBSITE DESIGNING",
    "WEBSITE DEVELOPMENT",
    "UI/UX DESIGN",
    "SEO",
  ];
  return (
      <div className="py-10" id="aboutMe">
        <Container>
        <p className="text-white text-3xl md:text-7xl font-semibold text-center">
                About <span className="text-color-two">Me</span>
              </p>
          <div className="flex flex-col md:flex-row gap-[100px] md:p-10 mt-5 md:mt-10">
            <div className="text-3xl font-semibold text-[white] basis-1 md:basis-1/2">
              <p className="text-sm md:text-lg">
                A creative professional with a strong portfolio in website
                design, including experience with front-end development,Back-end
                development. Experienced working from concept to production, and
                with stakeholders from multiple disciplines. A fluent user of
                popular design and development tools.
              </p>
              <p className="text-sm md:text-lg mt-10">
                Here are a few technologies I’ve been working with recently:
              </p>
              <div className="grid grid-cols-2 gap-x-10 gap-y-10 md:gap-y-5 mt-5">
                {techincalSkills.map((element) => {
                  return (
                    <div className="h-2 md:h-5 flex flex-row gap-2  text-xs md:text-sm">
                      <img
                        className="h-2 md:h-5"
                        src={circleImage}
                        alt="circleImage"
                      />
                      <p>{element}</p>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="basis-1 md:basis-1/2">
              <img className="w-1/2 md:w-full mx-auto" src={aboutImage} alt="bannerImage" />
            </div>
          </div>
        </Container>
      </div>
  );
}
