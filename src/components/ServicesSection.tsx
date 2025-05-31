import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Globe, Smartphone, Code, Monitor, Briefcase, ArrowRight } from "lucide-react";

const ServicesSection: React.FC = () => {
  const services = [
    {
      name: "Développement de plateforme web sur mesure",
      icon: <Code className="h-8 w-8" />,
      description: "Solutions web personnalisées adaptées à vos besoins spécifiques avec les technologies les plus récentes.",
    },
    {
      name: "Développement d'application mobile",
      icon: <Smartphone className="h-8 w-8" />,
      description: "Applications mobiles natives et hybrides pour iOS et Android avec une expérience utilisateur optimale.",
    },
    {
      name: "Sites WordPress",
      icon: <Globe className="h-8 w-8" />,
      description: "Sites web dynamiques et CMS personnalisés avec WordPress pour une gestion de contenu simplifiée.",
    },
    {
      name: "Sites vitrines",
      icon: <Monitor className="h-8 w-8" />,
      description: "Sites web élégants et professionnels pour présenter votre entreprise et vos services en ligne.",
    },
    {
      name: "Portfolio",
      icon: <Briefcase className="h-8 w-8" />,
      description: "Portfolios créatifs et interactifs pour mettre en valeur votre travail et vos réalisations.",
    },
  ];

  return (
    <section id="services" className="section bg-amsa-dark/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">Nos Services</h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-foreground/80">
            De la conception au déploiement pour tout types de besoins que vous soyez particulier, service publique ou une entreprise
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="border border-border/50 bg-card/50 backdrop-blur-sm overflow-hidden card-hover glow"
            >
              <CardContent className="p-0">
                <div className="p-6 flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-amsa-purple/20 border-2 border-amsa-purple flex items-center justify-center mb-4 text-amsa-purple">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{service.name}</h3>
                  <p className="text-foreground/70 text-sm">{service.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block rounded-lg border border-border/50 bg-card/50 backdrop-blur-sm p-6 max-w-2xl">
            <Code className="h-10 w-10 text-amsa-purple mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Démarrez Votre Projet</h3>
            <p className="text-foreground/80 mb-4">
              Prêt à transformer votre vision en réalité digitale ? 
              Contactez-nous pour discuter de votre projet et obtenir un devis personnalisé.
            </p>
            <a 
              href="#contact"
              className="inline-flex items-center text-amsa-purple hover:text-amsa-blue transition-colors"
            >
              <span>Contactez-nous</span>
              <ArrowRight className="ml-1 h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;