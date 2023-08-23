import Container from "./Container";
import aboutImage from "../assets/imgs/about.png";
import circleImage from "../assets/svgs/circle.svg"
export default function AboutMe() {

  const techincalSkills = [
    "HTML5",
    "CSS3",
    "REACT JS",
    "NODE JS",
    "PYTHON",
    "WEB SCRAPING"
  ]
  return (
    <div className="mt-[4rem]">
      <Container>
        <div className="flex flex-row gap-[100px] p-10">
          <div className="text-3xl font-semibold text-color-two basis-1/2">
            <p className="text-[#FFFFFF80] text-6xl text-color-one">About <span className="text-color-two">Me</span></p>
            <p className="text-lg mt-[5rem]">
              A creative professional with a strong portfolio in website design,
              including experience with front-end development,Back-end
              development. Experienced working from concept to production, and
              with stakeholders from multiple disciplines. A fluent user of
              popular design and development tools.
            </p>
            <p className="text-lg mt-10">Here are a few technologies I’ve been working with recently:</p>
            <div className="grid grid-cols-3 gap-x-10 gap-y-5 mt-5">
                {
                    techincalSkills.map(element => {
                        return(
                            <div className="h-5 flex flex-row gap-5 text-sm">
                                <img className="h-5" src={circleImage}  alt="circleImage"/>
                                <p>{element}</p>
                            </div>
                        )
                    })
                }

            </div>
          </div>
          <div className="basis-1/2">
            <img src={aboutImage} alt="bannerImage" />
          </div>
        </div>
      </Container>
    </div>
  );
}
