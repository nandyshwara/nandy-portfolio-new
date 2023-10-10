import Container from "./Container";
import whyMe from "../assets/svgs/WhyChooseME.svg"
export default function SkillsSection() {
  
  return (
      <div className="my-20" id="skillSection">
        <Container>
          <div className="py-5 px-10">
            <p className="text-2xl md:text-6xl font-semibold text-color-two text-center mb-20">
              Why Choose <span className="text-color-one">Me</span>
            </p>
            <img src={whyMe} alt="whyMe"/>
          </div>
        </Container>
      </div>
  )
}
