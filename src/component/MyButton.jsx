import React, { useState } from "react";

const MyButton = ({iconName}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ cursor: "pointer" }}
    >
      <box-icon
        name={iconName}
        type="solid"
        color="#a74ed0"
        animation={isHovered ? "tada" : ""}
        flip={isHovered ? "horizontal" : ""}
      ></box-icon>
    </div>
  );
};

export default MyButton;
