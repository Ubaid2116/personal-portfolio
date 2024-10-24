import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const ProjectsCard = ({ imageUrl, title, description, gitUrl, previewUrl }) => {
  return (
    <div className="relative group rounded-xl overflow-hidden shadow-lg bg-[#181818]">
      {/* Image Container */}
      <div
        className="h-48 md:h-64 lg:h-72 rounded-t-xl relative bg-cover bg-center"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-[#181818] bg-opacity-60 group-hover:bg-opacity-80 flex items-center justify-center transition-opacity duration-300">
          <div className="flex space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Link
              href={gitUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center h-12 w-12 border-2 rounded-full border-[#ADB7BE] hover:border-white"
            >
              <CodeBracketIcon className="h-8 w-8 text-[#ADB7BE] hover:text-white transition-colors duration-300" />
            </Link>
            <Link
              href={previewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center h-12 w-12 border-2 rounded-full border-[#ADB7BE] hover:border-white"
            >
              <EyeIcon className="h-8 w-8 text-[#ADB7BE] hover:text-white transition-colors duration-300" />
            </Link>
          </div>
        </div>
      </div>
      {/* Text Content */}
      <div className="text-white rounded-b-xl mt-3 bg-[#181818] py-4 px-4">
        <h5 className="text-lg md:text-xl font-semibold mb-2">{title}</h5>
        <p className="text-[#ADB7BE] text-sm md:text-base">{description}</p>
        <Link href={previewUrl} className="inline-block mt-2 text-purple-500 hover:text-purple-900 transition-colors duration-300">
          <CodeBracketIcon className="h-5 w-5 text-white inline-block mr-1" />
          View Project
        </Link>
      </div>
    </div>
  );
};

export default ProjectsCard;
