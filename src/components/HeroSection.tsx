
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown, Code, Zap, Rocket } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const HeroSection: React.FC = () => {
  const isMobile = useIsMobile();
  
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
            
            <div className="flex flex-wrap gap-3" style={{opacity: 0, animation: "fade-in 0.8s ease-out 0.6s forwards"}}>
              <div className="flex items-center gap-2 bg-amsa-dark/50 border border-amsa-blue/30 rounded-full py-2 px-4">
                <Zap className="h-4 w-4 text-amsa-blue" />
                <span className="text-sm text-foreground/90">Technologie de pointe</span>
              </div>
              <div className="flex items-center gap-2 bg-amsa-dark/50 border border-amsa-blue/30 rounded-full py-2 px-4">
                <Code className="h-4 w-4 text-amsa-blue" />
                <span className="text-sm text-foreground/90">Engineering d'excellence</span>
              </div>
              <div className="flex items-center gap-2 bg-amsa-dark/50 border border-amsa-blue/30 rounded-full py-2 px-4">
                <Rocket className="h-4 w-4 text-amsa-blue" />
                <span className="text-sm text-foreground/90">Innovation constante</span>
              </div>
            </div>
            
            <div 
              className="flex flex-col sm:flex-row gap-4"
              style={{opacity: 0, animation: "fade-in 0.8s ease-out 0.6s forwards"}}
            >
              <Button 
                size={isMobile ? "default" : "lg"} 
                className="w-full sm:w-auto bg-amsa-purple hover:bg-amsa-purple/90 text-white relative overflow-hidden group"
                onClick={() => document.getElementById("contact")?.scrollIntoView()}
              >
                <span className="relative z-10">Démarrer un projet</span>
                <span className="absolute inset-0 bg-gradient-to-r from-amsa-purple to-amsa-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </Button>
              <Button 
                size={isMobile ? "default" : "lg"} 
                variant="outline"
                className="w-full sm:w-auto border-amsa-blue/50 text-amsa-blue hover:bg-amsa-blue/10"
                onClick={() => document.getElementById("services")?.scrollIntoView()}
              >
                Découvrir nos services
              </Button>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 mt-12 lg:mt-0" style={{opacity: 0, animation: "fade-in 0.8s ease-out 0.8s forwards"}}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-radial from-amsa-blue/30 to-transparent rounded-full blur-3xl"></div>
              <div className="relative">
                <svg className="w-full h-auto" viewBox="0 0 500 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Outer orbital rings */}
                  <circle cx="250" cy="200" r="180" stroke="#33C3F0" strokeWidth="1" strokeDasharray="8 4" className="animate-spin-slow" style={{animationDuration: '30s'}} strokeOpacity="0.4" />
                  <circle cx="250" cy="200" r="150" stroke="#1EAEDB" strokeWidth="1" strokeDasharray="10 5" className="animate-spin-slow" style={{animationDuration: '25s', animationDirection: 'reverse'}} strokeOpacity="0.6" />
                  
                  {/* Inner structure */}
                  <circle cx="250" cy="200" r="110" stroke="#0FA0CE" strokeWidth="0.5" strokeDasharray="3 2" className="animate-spin-slow" style={{animationDuration: '20s'}} />
                  
                  {/* Core elements */}
                  <circle cx="250" cy="200" r="70" fill="#070818" stroke="#1EAEDB" strokeWidth="2" />
                  
                  {/* Grid lines */}
                  <line x1="250" y1="100" x2="250" y2="300" stroke="#1EAEDB" strokeWidth="1" strokeDasharray="5 5" />
                  <line x1="150" y1="200" x2="350" y2="200" stroke="#1EAEDB" strokeWidth="1" strokeDasharray="5 5" />
                  
                  {/* Core glow */}
                  <circle cx="250" cy="200" r="40" fill="url(#blueGradient)" className="animate-pulse-glow" />
                  
                  {/* Orbiting elements */}
                  <circle cx="320" cy="200" r="12" fill="#33C3F0" opacity="0.8" />
                  <circle cx="250" cy="130" r="8" fill="#1EAEDB" opacity="0.7" />
                  <circle cx="180" cy="200" r="6" fill="#0FA0CE" opacity="0.9" />
                  
                  {/* Futuristic text */}
                  <text x="220" y="205" fill="white" fontSize="24" fontFamily="Inter, sans-serif" fontWeight="bold">AMSA</text>
                  
                  {/* Small stars */}
                  <circle cx="350" cy="150" r="2" fill="white" className="animate-twinkle" />
                  <circle cx="150" cy="250" r="1.5" fill="white" className="animate-twinkle-delay" />
                  <circle cx="300" cy="100" r="1" fill="white" className="animate-twinkle-delay-2" />
                  <circle cx="200" cy="300" r="1.5" fill="white" className="animate-twinkle" />
                  
                  {/* Gradients definition */}
                  <defs>
                    <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#1EAEDB" />
                      <stop offset="100%" stopColor="#33C3F0" />
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
            className="text-amsa-blue hover:text-amsa-purple transition-colors"
          >
            <ArrowDown className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
