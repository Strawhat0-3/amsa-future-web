
import React from "react";

const AnimatedBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="grid-pattern"></div>
      <div 
        className="blob w-[800px] h-[800px] -top-[400px] -left-[200px]"
        style={{ animation: "float 20s infinite alternate" }}
      ></div>
      <div 
        className="blob w-[600px] h-[600px] top-[30%] -right-[300px] bg-amsa-blue"
        style={{ animation: "float 15s infinite alternate-reverse" }}
      ></div>
      <div 
        className="blob w-[500px] h-[500px] -bottom-[200px] left-[20%]"
        style={{ animation: "float 25s infinite alternate" }}
      ></div>
    </div>
  );
};

export default AnimatedBackground;
