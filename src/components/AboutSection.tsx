import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Code, Rocket, Shield, Target, Users, Award, TrendingUp } from "lucide-react";

const AboutSection: React.FC = () => {
  const features = [
    {
      icon: <Code className="h-12 w-12 text-amsa-purple" />,
      title: "Développement Innovant",
      description:
        "Notre équipe utilise les technologies les plus récentes pour créer des solutions logicielles sur mesure qui répondent précisément à vos besoins.",
      highlight: "Technologies de pointe"
    },
    {
      icon: <Rocket className="h-12 w-12 text-amsa-blue" />,
      title: "Solutions Évolutives",
      description:
        "Nous concevons des systèmes qui grandissent avec votre entreprise, en anticipant vos besoins futurs et en créant des architectures adaptables.",
      highlight: "Croissance durable"
    },
    {
      icon: <Shield className="h-12 w-12 text-amsa-light" />,
      title: "Sécurité Intégrée",
      description:
        "La protection de vos données est notre priorité. Nous intégrons des mesures de sécurité robustes à chaque étape du développement.",
      highlight: "Protection maximale"
    }
  ];

  const visionPoints = [
    {
      icon: <Target className="h-6 w-6 text-amsa-purple" />,
      text: "Excellence technique et innovation continue"
    },
    {
      icon: <Users className="h-6 w-6 text-amsa-blue" />,
      text: "Partenariat durable avec nos clients"
    },
    {
      icon: <Award className="h-6 w-6 text-amsa-light" />,
      text: "Qualité et fiabilité reconnues"
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-amsa-purple" />,
      text: "Impact positif sur votre croissance"
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
              <Card key={index} className="border border-border/50 bg-card/50 backdrop-blur-sm card-hover glow group">
                <CardContent className="p-6 flex flex-col items-center text-center relative overflow-hidden">
                  <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-xs bg-amsa-purple/20 text-amsa-purple px-2 py-1 rounded-full">
                      {feature.highlight}
                    </span>
                  </div>
                  <div className="mb-4 p-3 rounded-full bg-gradient-to-br from-card to-amsa-dark/30 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-amsa-blue transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-foreground/70">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Section Vision améliorée */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-amsa-purple/10 via-transparent to-amsa-blue/10 rounded-2xl"></div>
          <div className="relative bg-card/30 backdrop-blur-sm border border-border/50 rounded-2xl p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl md:text-4xl font-bold mb-6">
                  Notre <span className="text-gradient">Vision</span>
                </h3>
                <p className="text-foreground/80 mb-6 text-lg leading-relaxed">
                  Nous aspirons à être le partenaire technologique privilégié des entreprises 
                  visionnaires qui cherchent à se démarquer par l'innovation numérique.
                </p>
                <p className="text-foreground/80 mb-8 leading-relaxed">
                  Notre objectif est de créer des solutions qui non seulement résolvent les défis 
                  d'aujourd'hui, mais anticipent également ceux de demain. En combinant expertise 
                  technique, créativité et compréhension profonde des enjeux business, nous développons 
                  des logiciels qui constituent de véritables avantages compétitifs.
                </p>
                
                {/* Statistiques */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-amsa-purple">5+</div>
                    <div className="text-sm text-foreground/60">Années d'expérience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-amsa-blue">50+</div>
                    <div className="text-sm text-foreground/60">Projets réalisés</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-amsa-light">100%</div>
                    <div className="text-sm text-foreground/60">Satisfaction client</div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <h4 className="text-xl font-semibold mb-6 text-center lg:text-left">
                  Nos <span className="text-gradient">Engagements</span>
                </h4>
                <div className="space-y-4">
                  {visionPoints.map((point, index) => (
                    <div 
                      key={index} 
                      className="flex items-center gap-4 p-4 rounded-lg bg-card/50 backdrop-blur-sm border border-border/30 hover:border-amsa-purple/50 transition-all duration-300 group"
                    >
                      <div className="flex-shrink-0 p-2 rounded-full bg-amsa-dark/50 group-hover:bg-amsa-purple/20 transition-colors duration-300">
                        {point.icon}
                      </div>
                      <span className="text-foreground/80 group-hover:text-foreground transition-colors duration-300">
                        {point.text}
                      </span>
                    </div>
                  ))}
                </div>
                
                {/* Call to action */}
                <div className="mt-8 p-6 rounded-lg bg-gradient-to-r from-amsa-purple/20 to-amsa-blue/20 border border-amsa-purple/30">
                  <h5 className="font-semibold mb-2 text-amsa-purple">Prêt à innover ?</h5>
                  <p className="text-sm text-foreground/70 mb-3">
                    Discutons de votre projet et découvrons ensemble comment nous pouvons transformer vos idées en solutions digitales performantes.
                  </p>
                  <button 
                    onClick={() => document.getElementById("contact")?.scrollIntoView()}
                    className="text-sm bg-amsa-purple hover:bg-amsa-purple/90 text-white px-4 py-2 rounded-lg transition-colors duration-300"
                  >
                    Commencer maintenant
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;