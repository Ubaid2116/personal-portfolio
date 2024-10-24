"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import ProjectsCard from "@/app/components/projects-card";
import "../style/ProjectsSection.css";
import ProjectTag from "@/app/components/project-tag";

const projectsData = [
  {
    id: 1,
    title: "MarkSheet Generator",
    description:
      "An application designed to generate digital mark sheets efficiently. Users can input student data and scores, and the system generates formatted mark sheets for easy distribution and record-keeping.",
    image: "/images/1.png",
    tag: ["All", "Frontend"],
    gitUrl: "https://github.com/Ubaid2116",
    previewUrl: "https://github.com/Ubaid2116",
  },
  {
    id: 2,
    title: "Facebook Clone",
    description:
      "A clone of the Facebook platform, replicating its core features such as user profiles, friend requests, messaging, and news feeds. Built to demonstrate front-end development skills and understanding of social media dynamics.",
    image: "/images/2.png",
    tag: ["All", "Frontend"],
    gitUrl: "https://github.com/Ubaid2116",
    previewUrl: "https://github.com/Ubaid2116",
  },
  {
    id: 3,
    title: "Contact Us Form",
    description:
      "A responsive 'Contact Us' form created to collect user queries and feedback. Includes form validation and backend integration for seamless communication with website administrators.",
    image: "/images/3.png",
    tag: ["All", "Frontend"],
    gitUrl: "https://github.com/Ubaid2116",
    previewUrl: "https://github.com/Ubaid2116",
  },
  {
    id: 4,
    title: "TypeScript 45-Assignments",
    description:
      "A collection of 45 TypeScript assignments designed to enhance proficiency in TypeScript. These assignments cover a wide range of topics and complexity levels to ensure thorough understanding and hands-on experience.",
    image: "/images/4.png",
    tag: ["All", "Full Stack"],
    gitUrl: "https://github.com/Ubaid2116/TypeScript_45-Assignments",
    previewUrl: "https://github.com/Ubaid2116",
  },
  {
    id: 5,
    title: "TypeScript CLI Projects",
    description:
      "Projects created using TypeScript for command-line interfaces (CLI). These projects focus on leveraging TypeScript for backend development, including scripts and tools to automate various tasks.",
    image: "/images/5.png",
    tag: ["All", "Full Stack"],
    gitUrl: "https://github.com/Ubaid2116",
    previewUrl: "https://github.com/Ubaid2116",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");

  const handleTagChange = (newTag) => {
    if (tag === newTag) return;
    setTag(newTag);
  };

  const filteredProjects =
    tag === "All"
      ? projectsData
      : projectsData.filter((project) => project.tag.includes(tag));

  return (
    <motion.div
      id="projects-section"
      className="p-24 px-4 md:px-8 bg-[#101010]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }} // Slowed down the fade-in
    >
      <motion.h2
        className="projects-heading"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }} // Slowed down the heading animation
      >
        My Projects
      </motion.h2>
      <div className="text-white flex flex-wrap justify-center gap-4 py-6">
        {["All", "Frontend", "Full Stack"].map((tagName) => (
          <motion.div
            key={tagName}
            initial={{ scale: 0.9, opacity: 0.5 }}
            animate={{ scale: tag === tagName ? 1.1 : 1, opacity: tag === tagName ? 1 : 0.8 }}
            transition={{ duration: 0.6 }} // Slowed down the tag scale effect
          >
            <ProjectTag
              onClick={() => handleTagChange(tagName)}
              name={tagName}
              isSelected={tag === tagName}
            />
          </motion.div>
        ))}
      </div>
      <motion.ul
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }} // Slowed down the list fade-in
      >
        {filteredProjects.map((project, index) => (
          <motion.li
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.4 }} // Sequential entrance with delay
          >
            <ProjectsCard
              title={project.title}
              description={project.description}
              imageUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </motion.ul>
      <div className="full-width-line mt-12"></div>
    </motion.div>
  );
};

export default ProjectsSection;

