import React, { useState } from "react";
import activityimg from "../images/activity.png";
import sportsimg from "../images/sports.png";
import healthimg from "../images/health.png";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      title: "Sports",
      description:
        "From fitness studios to sports academies, Rmax empowers sports businesses.",
      image: sportsimg,
    },
    {
      title: "Healthcare & Wellness",
      description:
        "Health and wellness service providers—from yoga instructors to gyms.",
      image: healthimg,
    },
    {
      title: "Learning Activities",
      description:
        "Tutors, educators, and learning centers—from music schools to art studios.",
      image: activityimg,
    },
    {
      title: "Arts & Crafts",
      description: "Empower creativity with art and craft workshops for all ages.",
      image: sportsimg,
    },
    {
      title: "Fitness Training",
      description:
        "Strengthen your body and mind with top-tier fitness programs and classes.",
      image: healthimg,
    },
  ];

  const visibleSlides = window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1;

  // Handle Next Button
  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - visibleSlides ? 0 : prevIndex + 1
    );
  };

  // Handle Previous Button
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - visibleSlides : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full max-w-[1254px] mx-auto overflow-hidden">
      {/* Previous Button */}
      <button
        onClick={handlePrev}
        className="absolute inset-y-0 left-4 z-10 flex items-center justify-center w-12 h-full text-white  rounded-full  focus:outline-none"
      >      
        <span className="font-extrabold hover:bg-gray-300 bg-black w-8 h-8 rounded-full  ">{"<"}</span>
      </button>

      {/* Slides */}
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{
          transform: `translateX(-${(currentIndex * 100) / visibleSlides}%)`,
        }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`flex-shrink-0 px-4`}
            style={{ width: `${100 / visibleSlides}%` }}
          >
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-[300px] object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{slide.title}</h3>
                <p className="text-gray-600">{slide.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Next Button */}
      <button
        onClick={handleNext}
        className="absolute inset-y-0 right-4 z-10 flex items-center justify-center w-12 h-full  text-white  rounded-r-md  focus:outline-none">
                <span className="font-extrabold hover:bg-gray-300 bg-black w-8 h-8 rounded-full  ">{">"}</span>
      </button>
    </div>
  );
};

export default Carousel;
