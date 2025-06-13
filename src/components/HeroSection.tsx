import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown, Code, Zap, Rocket, Users } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import logo from "../assets/images/logo.png"

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
              CODAXE transforme votre vision en solutions technologiques 
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
              <div className="flex items-center gap-2 bg-amsa-dark/50 border border-amsa-blue/30 rounded-full py-2 px-4">
                <Users className="h-4 w-4 text-amsa-blue" />
                <span className="text-sm text-foreground/90">Collaboration agile</span>
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
            <div className="relative flex justify-center">
              <div className="absolute inset-0 bg-gradient-radial from-amsa-blue/30 to-transparent rounded-full blur-3xl"></div>
              <img src={logo} alt="logo" className="w-auto h-72 relative z-10"/>
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