import React from "react";
import { motion } from "framer-motion";

const varaints = {
  default: { width: 0 },
  active: { width: "calc(100% - 0.80rem)" },
  transition: { duration: 0.3, ease: "easeInOut" },
};

const TabButton = ({ active, selectTab, children }) => {
  const buttonClasses = active ? "text-white" : "text-[#ADB7BE]";
  return (
    <button onClick={selectTab}>
      <p className={`mr-3 font-semibold hover:text-white ${buttonClasses}`}>
        {children}
      </p>
      <motion.div
        animate={active ? "active" : "default"}
        variants={varaints}
        className="h-1 bg-primary-500 mt-2 mr-3"
      ></motion.div>
    </button>
  );
};

export default TabButton;
