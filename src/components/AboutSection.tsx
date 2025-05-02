
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Code, Rocket, Shield } from "lucide-react";

const AboutSection: React.FC = () => {
  const features = [
    {
      icon: <Code className="h-12 w-12 text-amsa-purple" />,
      title: "Développement Innovant",
      description:
        "Notre équipe utilise les technologies les plus récentes pour créer des solutions logicielles sur mesure qui répondent précisément à vos besoins."
    },
    {
      icon: <Rocket className="h-12 w-12 text-amsa-blue" />,
      title: "Solutions Évolutives",
      description:
        "Nous concevons des systèmes qui grandissent avec votre entreprise, en anticipant vos besoins futurs et en créant des architectures adaptables."
    },
    {
      icon: <Shield className="h-12 w-12 text-amsa-light" />,
      title: "Sécurité Intégrée",
      description:
        "La protection de vos données est notre priorité. Nous intégrons des mesures de sécurité robustes à chaque étape du développement."
    }
  ];

  return (
    <section id="about" className="section">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">À Propos de Nous</h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-foreground/80">
            Chez AMSA Solutions, nous sommes passionnés par la création de logiciels
            qui transforment la façon dont les entreprises fonctionnent dans l'ère numérique.
          </p>
        </div>

        <div className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border border-border/50 bg-card/50 backdrop-blur-sm card-hover glow">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="mb-4 p-3 rounded-full bg-card">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-foreground/70">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Notre <span className="text-gradient">Vision</span>
            </h3>
            <p className="text-foreground/80 mb-6">
              Nous aspirons à être le partenaire technologique privilégié des entreprises 
              visionnaires qui cherchent à se démarquer par l'innovation numérique. Notre 
              objectif est de créer des solutions qui non seulement résolvent les défis 
              d'aujourd'hui, mais anticipent également ceux de demain.
            </p>
            <p className="text-foreground/80">
              En combinant expertise technique, créativité et compréhension profonde des 
              enjeux business, nous développons des logiciels qui constituent de véritables 
              avantages compétitifs pour nos clients.
            </p>
          </div>
          
          <div id="services" className="">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Nos <span className="text-gradient">Services</span>
            </h3>
            <ul className="space-y-4">
              {[
                "Développement d'applications sur mesure",
                "Conseil en transformation digitale",
                "Intégration de systèmes complexes",
                "Développement d'applications mobiles",
                "Architecture cloud et DevOps",
                "Intelligence artificielle et analyse de données"
              ].map((service, index) => (
                <li key={index} className="flex items-start">
                  <div className="mr-2 mt-1 h-5 w-5 shrink-0 rounded-full bg-amsa-purple/20 flex items-center justify-center">
                    <div className="h-2.5 w-2.5 rounded-full bg-amsa-purple"></div>
                  </div>
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
