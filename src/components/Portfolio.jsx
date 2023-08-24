import React from "react";
import Container from "./Container";
import portfolioImage1 from "../assets/imgs/biAcademyImage.png";
import portfolioImage2 from "../assets/imgs/tryRabbitImage.png";
import portfolioImage3 from "../assets/imgs/akshayPortfolioImage.png";
import portfolioImage4 from "../assets/imgs/sharavariPortfolioImage.png";
import circleImage from "../assets/svgs/circle.svg";
import { Slide } from "react-awesome-reveal";

export default function Portfolio() {
  const projectData = [
    {
      image: portfolioImage1,
      title: "Bi Academy",
      description:
        "It is Half LMS and Course Landing Page , which have E-books and mock tests included.Here they sell various courses and career assistance services and mocket tests.Complete Branding ,Content writing , Design , Development(front-end and Back-end) , Deployment has been done.I have implemented both payment and whatsapp integration as well.",
      toolsUsed: [
        "Figma",
        "React JS",
        "Node JS",
        "Mongo DB",
        "Cloudinary",
        "Razorpay",
        "Twilio",
        "TailwindCSS",
      ],
    },
    {
      image: portfolioImage2,
      title: "TryRabbit",
      description:
        "TryRabbit is Ai tools Listing Platform and provide various services on pricing plan , I have also implement blog page here.As client gave me the FIgma Design , I have taken care of the entire website development",
      toolsUsed: [
        "React JS",
        "Node JS",
        "Mongo DB",
        "Cloudinary",
        "TailwindCSS",
      ],
    },
    {
      title: "Akshay Portfolio Website",
      image: portfolioImage3,
      description:
        "TryRabbit is Ai tools Listing Platform and provide various services on pricing plan , I have also implement blog page here.As client gave me the FIgma Design , I have taken care of the entire website development",
      toolsUsed: [
        "React JS",
        "Node JS",
        "Mongo DB",
        "Cloudinary",
        "TailwindCSS",
      ],
    },
    {
      title: "Sharavari Portfolio Website",
      image: portfolioImage4,
      description:
        "TryRabbit is Ai tools Listing Platform and provide various services on pricing plan , I have also implement blog page here.As client gave me the FIgma Design , I have taken care of the entire website development",
      toolsUsed: [
        "React JS",
        "Node JS",
        "Mongo DB",
        "Cloudinary",
        "TailwindCSS",
      ],
    },
  ];

  return (
    <div className="py-5 md:py-10" id="portfolio">
      <Container>
        <div className="text-2xl md:text-5xl font-semibold py-5 md:py-10 text-center">
          <p className="text-color-two pb-2 md:pb-10">
            My <span className="text-color-one">Works</span>
          </p>
          <div className="flex flex-col w-full gap-y-10 mt-10">
            {projectData.map((currEle, index) => {
              return (
                <Slide duration={1500}>
                  <div className="bg-[#19191D] w-10/12 border border-[#FF8E5E] flex flex-col md:flex-row py-10 px-5 mx-auto rounded-2xl transition-transform transform-gpu hover:scale-105 cursor-pointer">
                    <div className="basis-1/2 md:h-[300px] md:w-[400px] my-auto">
                      <img
                        className="w-full h-full my-auto"
                        src={currEle.image}
                        alt={currEle.image}
                      />
                    </div>
                    <div className="basis-1/2">
                      <p className="text-xl mt-2 md:mt-0 md:text-4xl font-semibold text-color-one">
                        {currEle.title}
                      </p>
                      <p className="text-xs md:text-sm font-normal text-color-two text-left mt-2 md:mt-10 px-3 md:px-10">
                        {currEle.description}
                      </p>
                      <p className="text-color-one text-xs md:text-xl font-bold text-left px-5 md:px-10 pt-5">
                        Tools And Technologies Used:
                      </p>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-x-5 md:gap-x-10 gap-y-6 md:gap-y-5 mt-5 text-color-two px-3 md:px-10 py-2 md:py-1">
                        {currEle.toolsUsed.map((element) => {
                          return (
                            <div className="h-2 md:h-3 flex flex-row gap-2 smd:gap-5 text-xs">
                              <img
                                className="h-2 md:h-3"
                                src={circleImage}
                                alt="circleImage"
                              />
                              <p>{element}</p>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </Slide>
              );
            })}
          </div>
        </div>
      </Container>
    </div>
  );
}
