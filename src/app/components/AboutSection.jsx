"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import "./AboutSection.css"; // Import custom CSS

const TAB_DATA = [
  {
    title: "skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-4">
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
      <ul className="list-disc pl-4">
        <li>Cloud Applied Generative AI Engineer</li>
        <li>PIAIC</li>
      </ul>
    ),
  },
  {
    title: "certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-4">
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

  return (
    <section className="text-white py-8 px-4 md:px-8" id="about-section">
      <div className="md:grid md:grid-cols-2 gap-8 items-start">
        <div className="flex justify-center md:justify-start">
          <Image
            src="/images/about-image.png"
            alt="about image"
            width={400}
            height={400}
            className="object-cover rounded-lg"
          />
        </div>
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold mb-4 gradient-text">About Me</h2>
          <p className="text-base lg:text-lg mb-4">
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
          <div className="mb-4 gradient-line pt-4">
            {" "}
            {/* Thin gradient line */}
            <div className="flex flex-row justify-start md:justify-start gap-4">
              <TabButton
                selectTab={() => handleTabChange("skills")}
                active={tab === "skills"}
              >
                Skills
              </TabButton>
              <TabButton
                selectTab={() => handleTabChange("education")}
                active={tab === "education"}
              >
                Education
              </TabButton>
              <TabButton
                selectTab={() => handleTabChange("certifications")}
                active={tab === "certifications"}
              >
                Certifications
              </TabButton>
            </div>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
      <div className="mt-12">
        <div className="full-width-line"></div>
      </div>
    </section>
  );
};

export default AboutSection;
