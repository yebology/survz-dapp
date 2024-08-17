import React, { useEffect, useRef } from "react";
import Slider from "react-slick";
import { SurveyCard } from "../card/SurveyCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { RecommendationSectionProps } from "../../utils/interface";

export const RecommendedSection: React.FC<RecommendationSectionProps> = ({
  data,
}) => {
  const type = "Recommendation";
  let sliderRef = useRef<Slider | null>(null);
  const playAnimation = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPlay();
    }
  };

  const settings = {
    dots: false,
    className: "center",
    focusOnSelect: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    centerMode: true,
    swipeToSlide: true,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  useEffect(() => {
    playAnimation();
  }, []);

  return (
    <section id="recommended" className="mb-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="transition duration-500 ease-in-out transform scale-100 translate-x-0 translate-y-0 opacity-100">
          <div className="mb-12 space-y-5 md:mb-12 text-center">
            <div className="inline-block font-poppins px-3 py-1 text-sm font-semibold text-indigo-100 rounded-lg text-center text-cn bg-[#202c47] bg-opacity-60 hover:cursor-pointer hover:bg-opacity-40">
              Last Call !
            </div>
            <h1 className="mb-5 text-3xl font-poppins font-semibold text-white text-center md:text-5xl">
              <span
                style={{
                  background:
                    "linear-gradient(45deg, #2c1a54, #542cac, #8575e0)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Seize
              </span>{" "}
              This Opportunity!
            </h1>
            <p className="text-xl text-gray-100 font-poppins font-normal text-center md:text-2xl">
              Make sure to join these{" "}
              <span
                style={{
                  background:
                    "linear-gradient(45deg, #2c1a54, #542cac, #8575e0)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {" "}
                surveys
              </span>{" "}
              before they{" "}
              <span
                style={{
                  background:
                    "linear-gradient(45deg, #2c1a54, #542cac, #8575e0)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                end.
              </span>
            </p>
          </div>
        </div>
        <div className="slider-container">
          <Slider ref={sliderRef} {...settings}>
            {data.map((survey) => (
              <SurveyCard key={survey.id} survey={survey} type={type} />
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};
