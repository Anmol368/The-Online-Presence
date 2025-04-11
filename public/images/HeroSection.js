// #0057ff

import { useEffect, useRef } from "react";
import Image from "next/image";
import Typed from "typed.js";

import heroRightImage from "../../../../public/heroRightImage.webp";
import heroRightImageMobile from "../../../../public/heroRightImageMobile.webp";

import Layout from "../../UI/Layout/Layout";
import HireUs from "../../HireUs/HireUs";
import HeroScrollDown from "../../HeroScrollDown/HeroScrollDown";
import { ArrowDiagonal } from "../../UI/Icons/Icons";


import FormHero from "../../Forms/FormHero";

const HeroSection = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Digital Marketing Services!",
        "Website Development!",
        "SEO Services!",
      ],
      typeSpeed: 70,
      backSpeed: 70,
      backDelay: 1000,
      loop: true,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <section className="relative bg-white max-w-screen max-h-screen flex items-center justify-center   bg-grid-black/[0.15]   md:h-screen">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black)]"></div>

      <Layout className="m-auto relative !pt-48 !pb-16      md:!pt-28 md:!pb-20 sm:!pt-32  ">
        <div className="flex items-center justify-between w-full   md:flex-col-reverse">
          <div className="relative w-1/2 h-full flex flex-col justify-center    lg:w-full md:items-center md:mt-10 sm:mt-8">
            <p className="uppercase underline w-fit text-sm font-medium tracking-widest text-[#7451bf] inline-block rounded-full   sm:text-xs xs:text-center">
              Welcome to The Online Presence
            </p>

            <div className="flex flex-col font-semibold mb-6 mt-5   sm:mb-6">
              <div className="w-full text-5xl font-semibold   xl:text-4xl lg:text-6xl md:text-4xl md:text-center sm:text-3xl xs:text-xl">
                <h1>Your Trusted Partner</h1>
              </div>

              <div className="w-full flex items-center justify-start gap-4 text-5xl font-semibold rounded-full p-1 my-5   xl:text-4xl lg:text-6xl md:text-4xl md:text-center md:justify-center sm:text-3xl sm:my-3 xs:text-2xl xs:my-2">
                <h1 className="md:text-center">In</h1>
                <span className="flex items-center justify-end bg-dark w-24 h-12 p-1 rounded-full sm:w-12 sm:h-8">
                  <ArrowDiagonal className="rotate cursor-pointer w-10 bg-white   sm:w-6" />
                </span>
              </div>

              <div className="text-[2.7rem] font-semibold   xl:text-4xl lg:text-5xl md:text-4xl md:text-center sm:text-[1.8rem] xs:text-xl">
                <span
                  ref={el}
                  className="w-full  whitespace-nowrap text-transparent bg-clip-text bg-gradient-to-r to-violet-500 from-[#0057ff]"
                ></span>
              </div>
            </div>

            <div className="w-full">
              <p className="text-gray-500 text-lg w-5/6   xl:text-lg lg:text-xl md:w-full md:text-sm md:text-center">
                The Online Presence is a professional digital marketing
                agency that specializes in creating impactful and 
                engaging online experiences for businesses.  
              </p>
            </div>

            <div className="w-full flex items-center justify-start mt-6">
              <FormHero />
            </div>
          </div>

          <div className="w-1/2   lg:hidden md:w-3/5 sm:w-3/4">
            <Image
              src={heroRightImage}
              alt="The Online Presence"
              className="w-full h-full mx-10   md:mx-0"
              // height={650}
              // width={650}
              priority
            />
          </div>
        </div>

        <div className="   lg:hidden sm:absolute sm:top-44 sm:-translate-x-1/2 sm:left-1/2 sm:z-[-1]">
          <h2 className="z-[-1] text-[11rem] text-center drop-shadow-lg text-transparent bg-clip-text bg-gradient-to-b from-gray-200 to-gray-600 font-semibold   lg:text-[12rem] md:text-[9rem] sm:text-[7rem] xs:text-[5.5rem]">
            digital
          </h2>
        </div>
      </Layout>

      {/* <HeroScrollDown /> */}
      <HireUs />
    </section>
  );
};

export default HeroSection;
