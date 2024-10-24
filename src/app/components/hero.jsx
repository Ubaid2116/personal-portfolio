"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="col-span-8 place-self-center text-center sm:text-left"
        >
          {/* Gradient Line */}
          <div className="w-full h-1 mb-6 bg-gradient-to-r from-pink-500 via-blue-500 to-purple-500"></div>

          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-7xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              Hello, I'm{" "}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                "Muhammad Ubaid Hussain",
                1000,
                "Frontend Developer",
                1000,
                "Backend Developer",
                1000,
                "Full Stack Developer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            I am a dedicated Full-Stack Web Developer specializing in HTML5,
            CSS3, TypeScript, JavaScript, Tailwind CSS, React.js, and Next.js.
            My focus is on building dynamic and user-centric web applications. I
            am passionate about integrating the latest technologies, including
            Cloud Computing and Generative AI, to create scalable and efficient
            solutions that meet business needs. Lifelong learning and innovation
            are at the core of my work, and I am eager to further explore Cloud
            Computing and Generative AI in the future.
          </p>
          <div>
            <a
              href="https://www.upwork.com/freelancers/~01ed989882e782e4c4?mp_source=share"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="px-6 py-3 w-full rounded-full sm:w-fit mr-4 bg-gradient-to-br from-blue-500 via-primary-500 to-secondary-500 hover:bg-slate-200 text-white">
                Hire Me
              </button>
            </a>
            <a
              href="https://drive.google.com/file/d/17dad48afQBVrn254HDVhfFHpGHJwhK0-/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3">
                <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                  Download CV
                </span>
              </button>
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0 flex justify-center lg:justify-end"
        >
           <div className="relative bg-purple-800 w-[300px] h-[300px] sm:w-[300px] sm:h-[300px] lg:w-[300px] lg:h-[300px] rounded-full flex items-center justify-center md:ml-7">
            <Image
              src="/images/my-pic.png"
              alt="hero image"
              className="object-cover rounded-full"
              width={300}
              height={300}
            />
          </div>
        </motion.div>
      </div>
      <div className="mt-12">
        {/* Gradient Line */}
        <div className="w-full h-1 bg-gradient-to-r from-indigo-500 via-pink-500 to-purple-500 rounded-full"></div>
      </div>
    </section>
  );
};

export default HeroSection;
