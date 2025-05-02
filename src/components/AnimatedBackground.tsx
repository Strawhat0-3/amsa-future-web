
import React, { useEffect, useState } from "react";

interface Star {
  id: number;
  size: number;
  top: string;
  left: string;
  animationDelay: string;
  animationDuration: string;
}

interface ShootingStar {
  id: number;
  width: number;
  top: string;
  left: string;
  delay: number;
  duration: number;
}

const AnimatedBackground: React.FC = () => {
  const [stars, setStars] = useState<Star[]>([]);
  const [shootingStars, setShootingStars] = useState<ShootingStar[]>([]);

  useEffect(() => {
    // Generate random stars
    const generateStars = () => {
      const starCount = Math.floor(window.innerWidth / 8); // Responsive star count
      const newStars: Star[] = [];
      
      for (let i = 0; i < starCount; i++) {
        newStars.push({
          id: i,
          size: Math.random() * 2 + 1,
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 5}s`,
          animationDuration: `${2 + Math.random() * 3}s`,
        });
      }
      
      setStars(newStars);
    };
    
    // Generate shooting stars
    const generateShootingStars = () => {
      const shootingStarCount = 5;
      const newShootingStars: ShootingStar[] = [];
      
      for (let i = 0; i < shootingStarCount; i++) {
        newShootingStars.push({
          id: i,
          width: Math.random() * 100 + 50,
          top: `${Math.random() * 60}%`,
          left: `${Math.random() * 100}%`,
          delay: Math.random() * 20,
          duration: Math.random() * 3 + 1,
        });
      }
      
      setShootingStars(newShootingStars);
    };

    generateStars();
    generateShootingStars();

    const handleResize = () => {
      generateStars();
      generateShootingStars();
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="space-background"></div>
      <div className="grid-pattern"></div>
      
      {/* Stars */}
      {stars.map((star) => (
        <div
          key={star.id}
          className="star"
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            top: star.top,
            left: star.left,
            opacity: Math.random() * 0.7 + 0.3,
            animationDelay: star.animationDelay,
            animation: `twinkle ${star.animationDuration} ease-in-out infinite`,
          }}
        />
      ))}
      
      {/* Shooting stars */}
      {shootingStars.map((shootingStar) => (
        <div
          key={shootingStar.id}
          className="shooting-star"
          style={{
            width: `${shootingStar.width}px`,
            top: shootingStar.top,
            left: shootingStar.left,
            animation: `fade-in 0.5s ease-out ${shootingStar.delay}s forwards, fade-out 0.5s ease-in ${shootingStar.delay + shootingStar.duration}s forwards`,
          }}
        />
      ))}
      
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
