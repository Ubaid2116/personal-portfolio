"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-6 animate-fadeIn">
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>TypeScript</li>
        <li>React.js</li>
        <li>Next.js</li>
      </ul>
    ),
  },
  {
    title: "education",
    id: "education",
    content: (
      <ul className="list-disc pl-6 animate-fadeIn">
        <li>Cloud Applied Generative AI Engineer</li>
        <li>PIAIC</li>
      </ul>
    ),
  },
  {
    title: "certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-6 animate-fadeIn">
        <li>Freelancing Certificate from DigiSkills</li>
        <li>Search Engine Optimization Certificate from DigiSkills</li>
        <li>Google Soft Skills Program Certificate from Google and Pafla</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();
  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  const gradientTextStyle = {
    background: "linear-gradient(to right, #4f46e5, #d63a91, #a855f7)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
  };

  const fullWidthLineStyle = {
    width: "100%",
    height: "4px",
    background: "linear-gradient(to right, #4f46e5, #d63a91, #a855f7)",
    borderRadius: "2px",
  };

  return (
    <section className="text-white py-12 px-6 md:px-10" id="about-section">
      <div className="md:grid md:grid-cols-2 gap-8 items-start">
        <div className="flex justify-center md:justify-start mb-8 md:mb-0">
          <Image
            src="/images/about-image.png"
            alt="about image"
            width={400}
            height={400}
            className="object-cover rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-500"
          />
        </div>
        <div className="text-left flex flex-col h-full">
          <h2 className="text-5xl font-bold mb-4" style={gradientTextStyle}>
            About Me
          </h2>
          <p className="text-base lg:text-lg mb-6 leading-relaxed">
            I am Muhammad Ubaid Hussain, a passionate Full-Stack Web Developer
            with a solid background in both frontend and backend technologies.
            My journey in web development has equipped me with skills in HTML5,
            CSS3, TypeScript, Tailwind CSS, React.js, and Next.js. I am
            dedicated to creating efficient and user-friendly web applications,
            and I continuously seek opportunities to enhance my knowledge in
            emerging fields like Generative AI and Cloud Computing. My
            commitment to excellence drives me to deliver high-quality solutions
            and stay ahead in a constantly evolving tech landscape.
          </p>
          <div className="mb-4 pt-4">
            <div className="flex flex-row justify-start gap-6">
              {TAB_DATA.map(({ title, id }) => (
                <TabButton
                  key={id}
                  selectTab={() => handleTabChange(id)}
                  active={tab === id}
                >
                  {title.charAt(0).toUpperCase() + title.slice(1)}
                </TabButton>
              ))}
            </div>
          </div>
          <div className="mt-8 transition-opacity duration-500 ease-in-out">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
      <div className="mt-12">
        <div style={fullWidthLineStyle}></div>
      </div>
    </section>
  );
};

export default AboutSection;
