import { faCircleArrowUp, faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function Hero() {
  return (
    <section className="hero-height  bg-secondary relative">
      <div className="absolute-right-colored absolute right-0 w-[33%] bg-accent rounded-s-[3rem]   h-[415px] lg:max-h-[375px]  top-[50px] md:hidden"></div>

      <div className="absolute-right-bottom absolute right-0 max-  w-fit px-5 bg-primary border-l-4 border-l-accent border-t-4 border-t-accent rounded-ss-[3rem]  h-1/6 bottom-0 flex justify-center items-center gap-4 cursor-pointer md:hidden">
        <span className="text-xl lg:text-lg">Get your 7-day free trail</span>
        <FontAwesomeIcon
          className="rotate-45 text-3xl"
          icon={faCircleArrowUp}
        />
      </div>

      <div className="hero-container width h-full flex justify-between items-center gap-5">
        <div className="hero-container__left w-3/5 h-full flex flex-col items-start  md:items-center md:w-full md:text-center justify-center">
          {/**-- --------------------------------------------------------*/}

          <div className="bg-primary p-1 rounded-lg text-orange-400">
            #1 Online Arabic Learning Platform.
          </div>

          {/**-- --------------------------------------------------------*/}

          <h1 className="text-4xl leading-[1.6] my-5 lg:text-3xl md:text-2xl">
            GET{" "}
            <div className="inline-flex items-end  h-fit ">
              W
              <span className="text-8xl leading-[15px]  h-10 lg:h-14 md:h-12 lg:text-7xl md:text-6xl ">
                ة
              </span>
              RLD
            </div>{" "}
            CLASS COURSES FROM WORLD CLASS MENTORS.
          </h1>

          {/**-- --------------------------------------------------------*/}

          <h2 className="text-xl lg:text-lg md:text-lg font-body opacity-80 border-l-4 border-l-accent pl-3 rounded md:border-l-0">
            Interactive lessons, quizzes, and progress tracking to accelerate
            your language learning journey.
          </h2>

          {/**-- --------------------------------------------------------*/}

          <div className="cta flex justify-start md:justify-center items-center gap-10 md:gap-6  my-10">
            <button className="sign-in"> Join Now</button>

            <div className="flex justify-start items-center gap-3 cursor-pointer">
              <div className="play-btn  bg-orange-400 border-4 border-primary  w-12 h-12 md:w-8 md:h-8 rounded-full flex justify-center items-center cursor-pointer  pl-1 md:pl-[2px]">
                <FontAwesomeIcon
                  className="text-primary text-xl md:text-sm"
                  icon={faPlay}
                />
              </div>
              <p className="text-orange-400 md:text-sm">WATCH DEMO</p>
            </div>
          </div>

          {/**-- --------------------------------------------------------*/}

          <div className="hero-details flex justify-start md:justify-center items-center gap-10">
            <div>
              <h4 className="font-bold text-2xl lg:text-lg">2k+</h4>
              <h3 className="opacity-80  mt-2 lg:text-sm">Total Courses</h3>
            </div>
            <div>
              <h4 className="font-bold text-2xl lg:text-lg">200+</h4>
              <h3 className="opacity-80  mt-2 lg:text-sm">Expert Mentors</h3>
            </div>
            <div>
              <h4 className="font-bold text-2xl lg:text-lg">8k+</h4>
              <h3 className="opacity-80  mt-2 lg:text-sm">Students Globally</h3>
            </div>
          </div>
        </div>

        <div className="hero-container__right w-2/5 h-full flex  justify-start items-start pt-24 md:hidden">
          <div className="video-placeholder bg-primary max-w-[500px] w-[500px] max-h-80 rounded-[3rem] relative overflow-hidden shadow-md cursor-pointer">
            <img
              className="object-cover w-full h-full"
              src="../assets/video-cover.jpg"
              alt=""
            />
            <div className="play-btn absolute right-1/2 bottom-1/2 translate-x-1/2 translate-y-1/2 bg-orange-400 border-4 border-primary  w-20 h-20 rounded-full flex justify-center items-center cursor-pointer duration-200 hover:scale-110 pl-1">
              <FontAwesomeIcon
                className="text-primary text-4xl"
                icon={faPlay}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
