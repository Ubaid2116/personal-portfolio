"use client";
import React, { useState } from "react";
import ProjectCard from "../components/ProjectsCard";
import "./ProjectsSection.css";
import ProjectTag from "../components/ProjectTag";

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
    <div id="projects-section">
      <section className="py-8 px-4 md:px-8">
        <h2 className="projects-heading">My Projects</h2>
        <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
          <ProjectTag
            onClick={() => handleTagChange("All")}
            name="All"
            isSelected={tag === "All"}
          />
          <ProjectTag
            onClick={() => handleTagChange("Frontend")}
            name="Frontend"
            isSelected={tag === "Frontend"}
          />
          <ProjectTag
            onClick={() => handleTagChange("Full Stack")}
            name="Full Stack"
            isSelected={tag === "Full Stack"}
          />
        </div>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <li key={project.id}>
              <ProjectCard
                title={project.title}
                description={project.description}
                imageUrl={project.image}
                gitUrl={project.gitUrl}
                previewUrl={project.previewUrl}
                tag={project.tag}
              />
            </li>
          ))}
        </ul>
        <div className="full-width-line mt-12"></div>
      </section>
    </div>
  );
};

export default ProjectsSection;
