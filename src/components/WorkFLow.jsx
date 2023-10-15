import workFlowImage from "../assets/svgs/workFlow.svg";
import workFlowImageMobile from "../assets/svgs/workFLowMobile.svg";
import Container from "./Container";

export default function WorkFlow() {
  return (
    <div className="my-10">
      <Container>
        <p className="text-3xl md:text-7xl font-semibold text-center text-color-one my-10">My WorkFlow Process</p>
        <div className="w-10/12 mx-auto">
          <img className="w-full hidden md:flex" src={workFlowImage} alt="workFLowImage" />
          <img className="w-full md:hidden" src={workFlowImageMobile} alt="workFLowImage" />
        </div>
      </Container>
    </div>
  );
}
