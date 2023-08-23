import Container from "./Container";
import BannerImage from "../assets/imgs/bannerImage.png";
export default function Banner() {
  return (
    <div className="mt-[4rem]">
      <Container>
        <div className="flex flex-row gap-[100px] p-10">
          <div className="text-3xl font-semibold text-color-two basis-1/2">
            <p className="text-[#FFFFFF80] text-xl">✋ Hello, my name is</p>
            <p className="text-5xl mt-2">NANDYSHWARA.</p>
            <p className="text-5xl text-color-one mt-10">
              WEBSITE DESIGNER AND DEVELOPER
            </p>
            <p className="text-lg mt-[5rem]">
              I CREATE WEBSITES THAT ARE A PLEASURE TO USE. I DESIGN THEM WITH
              BEAUTIFUL TYPOGRAPHY, MEANINGFUL TRANSITIONS AND THOUGHTFUL
              INTERACTIONS THAT DELIGHT PEOPLE.AT LAST I DESIGN AND CREATE
              WEBSITES TO INCREASE SALES AND SO ON.
            </p>
            <button className="bg-[#FF8E5E] text-[#1D1E22] text-2xl px-10 py-2 rounded-3xl mt-10 cursor-pointer">
            Let’s Connect
            </button>
          </div>
          <div className="basis-1/2">
            <img src={BannerImage} alt="bannerImage" />
          </div>
        </div>
      </Container>
    </div>
  );
}
