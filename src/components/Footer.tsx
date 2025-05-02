
import React from "react";
import { Separator } from "@/components/ui/separator";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-amsa-dark/50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="text-2xl font-bold mb-4">
              <span className="text-gradient">AMSA</span> Solutions
            </div>
            <p className="text-foreground/70 max-w-md">
              Transformez votre entreprise avec nos solutions technologiques innovantes.
              Nous créons des logiciels qui propulsent votre succès dans l'ère numérique.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {[
                "Développement sur Mesure",
                "Applications Mobiles",
                "Cloud & DevOps",
                "Intelligence Artificielle",
                "Conseil Technologique",
                "Intégration Système",
              ].map((item, index) => (
                <li key={index}>
                  <a href="#services" className="text-foreground/70 hover:text-primary transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Liens Rapides</h3>
            <ul className="space-y-2">
              {[
                { label: "Accueil", href: "#home" },
                { label: "À propos", href: "#about" },
                { label: "Services", href: "#services" },
                { label: "Projets", href: "#projects" },
                { label: "Équipe", href: "#team" },
                { label: "Contact", href: "#contact" },
              ].map((item, index) => (
                <li key={index}>
                  <a 
                    href={item.href} 
                    className="text-foreground/70 hover:text-primary transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <Separator className="bg-border/30 my-6" />
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-foreground/60">
            &copy; {currentYear} AMSA Solutions. Tous droits réservés.
          </p>
          
          <div className="flex space-x-6">
            <a 
              href="#" 
              className="text-foreground/60 hover:text-primary transition-colors"
            >
              Politique de Confidentialité
            </a>
            <a 
              href="#" 
              className="text-foreground/60 hover:text-primary transition-colors"
            >
              Conditions d'Utilisation
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
