import Container from "./Container";
import whyMe from "../assets/svgs/WhyChooseME.svg"
import whyMeMobile from "../assets/svgs/WhyChooseMeMobile.svg"
export default function SkillsSection() {
  
  return (
      <div className="my-20" id="skillSection">
        <Container>
          <div className="py-5 px-10">
            <p className="text-2xl md:text-6xl font-semibold text-color-two text-center mb-20">
              Why Choose <span className="text-color-one">Me</span>
            </p>
            <img className="hidden md:flex" src={whyMe} alt="whyMe"/>
            <img className="md:hidden" src={whyMeMobile} alt="whyMe"/>
          </div>
        </Container>
      </div>
  )
}
