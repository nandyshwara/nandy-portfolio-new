import Container from "./Container";
import BannerImage from "../assets/imgs/bannerImage.png";
import { Link } from "react-scroll";

export default function Banner() {
  return (
    <div className="mt-14]">
      <Container>
        <div className="flex flex-row gap-[100px] p-10">
          <div className="text-3xl font-semibold text-color-two basis-1/2">
            <p className="text-[#FFFFFF80] text-xl">✋ Hello, my name is</p>
            <p className="text-4xl mt-2">NANDYSHWARA.</p>
            <p className="text-4xl text-color-one mt-10">
              WEBSITE DESIGNER AND DEVELOPER
            </p>
            <p className="text-lg mt-[2rem]">
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
              <div className="w-1/2">
                <button className="w-full bg-[#FF8E5E] rounded-3xl bg-[] text-2xl font-semibold px-5 py-1 mt-10">
                  Let’s Connect
                </button>
              </div>
            </Link>
          </div>
          <div className="basis-1/2">
            <img src={BannerImage} alt="bannerImage" />
          </div>
        </div>
      </Container>
    </div>
  );
}
