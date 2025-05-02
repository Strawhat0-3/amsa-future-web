
import React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, Code, Laptop, Link } from "lucide-react";

const ProjectsSection: React.FC = () => {
  const projects = [
    {
      title: "Plateforme FinTech Analytics",
      description:
        "Solution d'analyse financière en temps réel pour grandes institutions bancaires, utilisant l'IA pour la détection de fraudes et l'analyse de risques.",
      technologies: ["React", "Node.js", "AWS", "Machine Learning"],
      icon: <Building className="h-10 w-10" />,
      color: "purple",
    },
    {
      title: "Système IoT Industriel",
      description:
        "Infrastructure complète pour la gestion de dispositifs IoT dans le secteur industriel, avec tableau de bord en temps réel et maintenance prédictive.",
      technologies: ["Python", "Docker", "MongoDB", "Azure IoT"],
      icon: <Laptop className="h-10 w-10" />,
      color: "blue",
    },
    {
      title: "App Santé Connectée",
      description:
        "Application mobile pour le suivi médical avec synchronisation des objets connectés et analyses personnalisées par intelligence artificielle.",
      technologies: ["Flutter", "Firebase", "TensorFlow", "GraphQL"],
      icon: <Code className="h-10 w-10" />,
      color: "light",
    },
  ];

  return (
    <section id="projects" className="section">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">Nos Projets</h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-foreground/80">
            Découvrez comment nous avons transformé les défis de nos clients en opportunités numériques
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="border border-border/50 bg-card/50 backdrop-blur-sm h-full flex flex-col card-hover glow"
            >
              <CardContent className="p-6 flex-grow">
                <div className={`w-16 h-16 rounded-full bg-amsa-${project.color}/20 flex items-center justify-center mb-4`}>
                  {React.cloneElement(project.icon, { className: `text-amsa-${project.color}` })}
                </div>
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-foreground/70 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="outline" className="bg-background/40">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="px-6 py-4 border-t border-border/30">
                <a 
                  href="#contact" 
                  className="text-amsa-purple hover:text-amsa-blue transition-colors flex items-center text-sm"
                >
                  <span>Détails du projet</span>
                  <Link className="ml-1 h-3.5 w-3.5" />
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-foreground/80">
            Ces cas d'étude représentent une sélection de nos projets récents.
            <br />
            Contactez-nous pour découvrir comment nous pouvons vous aider dans votre transformation numérique.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
