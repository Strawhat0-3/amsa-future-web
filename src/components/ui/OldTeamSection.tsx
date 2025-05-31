
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Laptop, Link } from "lucide-react";

const OldTeamSection: React.FC = () => {
  const team = [
    {
      name: "Alex Martin",
      role: "PDG & Architecte Technique",
      image: "",
      bio: "Expert en architecture logicielle avec 15 ans d'expérience dans le développement de solutions d'entreprise.",
    },
    {
      name: "Sophie Aubry",
      role: "Directrice Produit",
      image: "",
      bio: "Passionnée par la création de produits centrés sur l'utilisateur et l'expérience client.",
    },
    {
      name: "Maxime Saidi",
      role: "Lead Développeur",
      image: "",
      bio: "Spécialiste en développement full-stack avec une expertise en architectures cloud modernes.",
    },
  ];

  return (
    <section id="team" className="section bg-amsa-dark/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">Notre Équipe</h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-foreground/80">
            Une équipe de passionnés dédiés à l'excellence technique et à l'innovation
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <Card 
              key={index} 
              className="border border-border/50 bg-card/50 backdrop-blur-sm overflow-hidden card-hover glow"
            >
              <CardContent className="p-0">
                <div className="p-6 flex flex-col items-center text-center">
                  <Avatar className="w-28 h-28 border-2 border-amsa-purple mb-4">
                    <AvatarFallback className="bg-amsa-dark text-2xl font-bold text-amsa-purple">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                    {member.image && <AvatarImage src={member.image} alt={member.name} />}
                  </Avatar>
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-sm text-primary mb-3">{member.role}</p>
                  <p className="text-foreground/70 text-sm">{member.bio}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block rounded-lg border border-border/50 bg-card/50 backdrop-blur-sm p-6 max-w-2xl">
            <Laptop className="h-10 w-10 text-amsa-purple mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Rejoignez Notre Équipe</h3>
            <p className="text-foreground/80 mb-4">
              Nous sommes toujours à la recherche de talents passionnés par la technologie et l'innovation.
              Découvrez nos opportunités de carrière.
            </p>
            <a 
              href="#contact" 
              className="inline-flex items-center text-amsa-purple hover:text-amsa-blue transition-colors"
            >
              <span>Voir nos offres</span>
              <Link className="ml-1 h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OldTeamSection;