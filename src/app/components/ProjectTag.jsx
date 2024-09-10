import React from "react";
import PropTypes from "prop-types";

const ProjectTag = ({ name, onClick, isSelected }) => {
  const buttonStyles = isSelected
    ? "bg-purple-600 text-white border-purple-600"
    : "bg-[#181818] text-[#ADB7BE] border-[#181818] hover:bg-[#101010] hover:text-white";

  return (
    <button
      className={`${buttonStyles} rounded-full border-2 px-6 py-2 text-lg md:text-xl cursor-pointer transition-all duration-300`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
};

// Adding PropTypes for type checking
ProjectTag.propTypes = {
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  isSelected: PropTypes.bool,
};

ProjectTag.defaultProps = {
  isSelected: false,
};

export default ProjectTag;
