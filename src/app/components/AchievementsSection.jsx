"use client";
import React from "react";
import dynamic from "next/dynamic";

const AnimatedNumbers = dynamic(() => import("react-animated-numbers"), {
  ssr: false,
});

const achievementsList = [
  {
    metric: "Projects",
    value: "10",
    postfix: "+",
  },
  {
    metric: "Daily Learning Hours",
    value: "7",
    postfix: "h",
  },
  {
    metric: "TypeScript Q1 Score",
    value: "78.57",
    postfix: "%",
  },
];

const AchievementsSection = () => {
  return (
    <div className="py-12 px-4 sm:py-14 sm:px-6 md:py-16 md:px-10 lg:px-20">
      <div className="border-[#33353F] border rounded-lg py-8 px-4 flex flex-wrap gap-8 justify-center items-center">
        {achievementsList.map((achievement, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center w-full sm:w-1/2 md:w-1/3 lg:w-1/4 transform transition-transform hover:scale-105"
          >
            <h2 className="text-white text-4xl sm:text-5xl md:text-6xl font-extrabold flex flex-row items-baseline">
              <AnimatedNumbers
                includeComma
                animateToNumber={parseFloat(achievement.value)}
                locale="en-US"
                className="text-white font-extrabold"
                configs={(_, index) => ({
                  mass: 1,
                  friction: 100,
                  tension: 140 * (index + 1),
                  precision: 0,
                })}
                style={{ fontSize: "inherit" }}
              />
              <span className="text-2xl sm:text-3xl md:text-4xl ml-2">
                {achievement.postfix}
              </span>
            </h2>
            <p className="text-[#ADB7BE] text-base sm:text-lg md:text-xl mt-3 text-center">
              {achievement.metric}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AchievementsSection;
