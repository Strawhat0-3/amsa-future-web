
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const HeroSection: React.FC = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-20 pb-10 px-4 md:px-6 lg:px-8 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/2 space-y-8 lg:pr-8">
            <h1 
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight"
              style={{opacity: 0, animation: "fade-in 0.8s ease-out 0.2s forwards"}}
            >
              <span className="text-gradient">Innovation</span> et{" "}
              <span className="text-gradient">Technologie</span> pour l'avenir
            </h1>
            
            <p 
              className="text-lg md:text-xl text-foreground/80 max-w-xl"
              style={{opacity: 0, animation: "fade-in 0.8s ease-out 0.4s forwards"}}
            >
              AMSA Solutions transforme votre vision en solutions technologiques 
              innovantes. Notre expertise en ingénierie logicielle propulse votre 
              entreprise vers l'avenir numérique.
            </p>
            
            <div 
              className="flex flex-wrap gap-4"
              style={{opacity: 0, animation: "fade-in 0.8s ease-out 0.6s forwards"}}
            >
              <Button 
                size="lg" 
                className="bg-amsa-purple hover:bg-amsa-purple/90 text-white"
                onClick={() => document.getElementById("contact")?.scrollIntoView()}
              >
                Démarrer un projet
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => document.getElementById("services")?.scrollIntoView()}
              >
                Découvrir nos services
              </Button>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 mt-12 lg:mt-0" style={{opacity: 0, animation: "fade-in 0.8s ease-out 0.8s forwards"}}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-radial from-amsa-purple/30 to-transparent rounded-full blur-3xl"></div>
              <div className="animate-float relative">
                <svg className="w-full h-auto" viewBox="0 0 500 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="250" cy="200" r="100" fill="#1A1F2C" stroke="#9b87f5" strokeWidth="2" />
                  <circle cx="250" cy="200" r="150" stroke="#9b87f5" strokeWidth="1" strokeDasharray="10 5" className="animate-spin-slow" strokeOpacity="0.6" />
                  <circle cx="250" cy="200" r="180" stroke="#1EAEDB" strokeWidth="1" strokeDasharray="15 10" className="animate-spin-slow" style={{animationDirection: "reverse"}} strokeOpacity="0.4" />
                  
                  <path d="M250 100 L250 300" stroke="#9b87f5" strokeWidth="2" strokeDasharray="5 5" />
                  <path d="M150 200 L350 200" stroke="#9b87f5" strokeWidth="2" strokeDasharray="5 5" />
                  
                  <circle cx="250" cy="200" r="40" fill="url(#purpleGradient)" />
                  <circle cx="250" cy="200" r="40" fill="url(#purpleGradient)" className="animate-pulse-glow" />
                  
                  <text x="180" y="205" fill="white" fontSize="22" fontWeight="bold">AMSA</text>
                  
                  <defs>
                    <linearGradient id="purpleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#9b87f5" />
                      <stop offset="100%" stopColor="#1EAEDB" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => document.getElementById("about")?.scrollIntoView()}
          >
            <ArrowDown className="h-6 w-6 text-foreground/60" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
