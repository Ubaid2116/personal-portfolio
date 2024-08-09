import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const ProjectsCard = ({ imageUrl, title, description, gitUrl, previewUrl }) => {
  return (
    <div className="relative group rounded-xl overflow-hidden shadow-lg">
      {/* Image Container */}
      <div
        className="h-52 md:h-72 rounded-t-xl relative"
        style={{
          background: `url(${imageUrl}) no-repeat center center`,
          backgroundSize: "cover",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-[#181818] bg-opacity-0 group-hover:bg-opacity-80 flex items-center justify-center transition-opacity duration-500">
          <div className="flex space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Link
              href={gitUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center h-14 w-14 border-2 rounded-full border-[#ADB7BE] hover:border-white"
            >
              <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] hover:text-white transition-colors duration-300" />
            </Link>
            <Link
              href={previewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center h-14 w-14 border-2 rounded-full border-[#ADB7BE] hover:border-white"
            >
              <EyeIcon className="h-10 w-10 text-[#ADB7BE] hover:text-white transition-colors duration-300" />
            </Link>
          </div>
        </div>
      </div>
      {/* Text Content */}
      <div className="text-white rounded-b-xl mt-3 bg-[#181818] py-6 px-4">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="text-[#ADB7BE]">{description}</p>
        <Link href="/projects" className="inline-block mt-2">
          <CodeBracketIcon className="h-6 w-6 text-white" />
        </Link>
      </div>
    </div>
  );
};

export default ProjectsCard;
