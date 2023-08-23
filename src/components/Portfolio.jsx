import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { AiOutlineArrowRight } from "react-icons/ai";
import { AiOutlineArrowLeft } from "react-icons/ai";
import Container from "./Container";
import portfolioImage1 from "../assets/imgs/portfolioImage1.png";
import portfolioImage2 from "../assets/imgs/portfolioImage2.png";
import portfolioImage3 from "../assets/imgs/portfolioImage3.png";
import portfolioImage4 from "../assets/imgs/portfolioImage4.png";
import portfolioImage5 from "../assets/imgs/portfolioImage5.png";
import portfolioImage6 from "../assets/imgs/portfolioImage6.png";
import portfolioImage7 from "../assets/imgs/portfolioImage7.png";
import portfolioImage8 from "../assets/imgs/portfolioImage8.png";
import portfolioImage9 from "../assets/imgs/portfolioImage9.png";
import portfolioImage10 from "../assets/imgs/portfolioImage10.png";
import portfolioImage11 from "../assets/imgs/portfolioImage11.png";
import portfolioImage12 from "../assets/imgs/portfolioImage12.png";
import portfolioImage13 from "../assets/imgs/portfolioImage13.png";

export default function Portfolio() {
  const projectData = [
    {
        image: portfolioImage1,
        crop: { x: 0, y: 100},
      },
      {
        image: portfolioImage2,
        crop: { x: 0, y: 100},
      },
      {
        image: portfolioImage3,
        crop: { x: 0, y: 100},
      },
      {
        image: portfolioImage4,
        crop: { x: 0, y: 100},
      },
      {
        image: portfolioImage5,
        crop: { x: 0, y: 100},
      },
      {
        image: portfolioImage6,
        crop: { x: 0, y: 100},
      },
      {
        image: portfolioImage7,
        crop: { x: 0, y: 100},
      },
      {
        image: portfolioImage8,
        crop: { x: 0, y: 100},
      },
      {
        image: portfolioImage9,
        crop: { x: 0, y: 100},
      },
      {
        image: portfolioImage10,
        crop: { x: 0, y: 100},
      },
      {
        image: portfolioImage11,
        crop: { x: 0, y: 100},
      },
      {
        image: portfolioImage12,
        crop: { x: 0, y: 100},
      },
      {
        image: portfolioImage13,
        crop: { x: 0, y: 100},
      },
  ];

  return (
    <div className="py-10">
      <Container>
        <div className="text-6xl text-center font-bold">
          <p className="text-color-one">I create websites</p>
          <p className="text-color-two">that drags user's attention</p>
        </div>
        <div className="text-5xl font-semibold py-10 text-center">
          <p className="text-color-two">
            My <span className="text-color-one">Works</span>
          </p>
          <Carousel
            renderArrowPrev={(clickHandler, hasPrev) => {
              return (
                <div
                  className={`${
                    hasPrev ? "absolute" : "hidden"
                  } top-0 bottom-0 left-0 flex justify-center items-center p-3 opacity-100 hover:opacity-30 cursor-pointer z-20`}
                  onClick={clickHandler}
                >
                  <AiOutlineArrowLeft className="w-9 h-9 text-white" />
                </div>
              );
            }}
            renderArrowNext={(clickHandler, hasNext) => {
              return (
                <div
                  className={`${
                    hasNext ? "absolute" : "hidden"
                  } top-0 bottom-0 right-0 flex justify-center items-center p-3 opacity-100 hover:opacity-30 cursor-pointer z-20`}
                  onClick={clickHandler}
                >
                  <AiOutlineArrowRight className="w-9 h-9 text-white" />
                </div>
              );
            }}
            swipeable={true}
            className="px-1 sm:px-10"
          >
            {projectData.map((currEle, index) => {
              return (
                <div className="mt-10" key={index} style={{ overflow: "hidden", width: "100%", height: "100%" }}>
                  <img
                    src={currEle.image}
                    alt={`portfolioImage-${index}`}
                    style={{
                      objectFit: "cover",
                      width: "80%",
                      height: "100%",
                      transform: `translate(-${currEle.crop.x}px, -${currEle.crop.y}px)`,
                    }}
                  />
                </div>
              );
            })}
          </Carousel>
        </div>
      </Container>
    </div>
  );
}
