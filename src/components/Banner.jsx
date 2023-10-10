import Container from "./Container";
import BannerImage from "../assets/imgs/bannerImage.png";
import { Link } from "react-scroll";
export default function Banner() {
  return (
      <div>
        <Container>
          <p className="hidden md:flex mx-auto justify-items-center justify-center text-color-one text-3xl md:text-9xl text-center font-bold leading-8 drop-shadow-xl md:mt-[8rem] md:mb-[5rem]">NANDYSHWARA</p>
          <div className="w-11/12 mx-auto flex flex-col md:flex-row gap-5 md:gap-[100px] md:p-10">
            <div className="text-2xl md:text-3xl font-semibold text-color-two w-full md:basis-1/2">
              <p className="text-lg md:text-5xl text-color-one md:mt-10">
                WEBSITE DESIGNER AND DEVELOPER
              </p>
              <p className="text-sm md:text-2xl mt-[2rem]">
                I CREATE WEBSITES THAT ARE A PLEASURE TO USE. I DESIGN THEM WITH
                BEAUTIFUL TYPOGRAPHY, MEANINGFUL TRANSITIONS AND THOUGHTFUL
                INTERACTIONS THAT DELIGHT PEOPLE.AT LAST I DESIGN AND CREATE
                WEBSITES TO INCREASE SALES AND SO ON.
              </p>
              <Link
                to="contactMe"
                smooth={true}
                duration={1000}
                className="cursor-pointer transition-all ease-out"
              >
                <div className="w-full md:w-8/12">
                  <button className="w-full bg-[#CE9FFC] rounded-3xl text-3xl font-semibold px-5 py-2 mt-10 text-[#FFFFFF]">
                    Let’s Connect
                  </button>
                </div>
              </Link>
            </div>
            <div className="w-full md:basis-1/2">
              <img className="" src={BannerImage} alt="bannerImage" />
            </div>
          </div>
        </Container>
      </div>
  );
}
