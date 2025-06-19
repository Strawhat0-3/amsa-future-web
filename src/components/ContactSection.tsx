import React from "react";
import { Button } from "@/components/ui/button";
import { Mail, MessageSquare, Building } from "lucide-react";
import ContactForm from "./ContactForm";

const ContactSection: React.FC = () => {
  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      title: "Email",
      value: "codaxe@gmail.com",
      link: "mailto:codaxe@gmail.com"
    },
    {
      icon: <MessageSquare className="h-5 w-5" />,
      title: "Téléphone",
      value: "+33 1 23 45 67 89",
      link: "tel:+33123456789"
    },
    {
      icon: <Building className="h-5 w-5" />,
      title: "Bureau",
      value: "Dakar, Senegal",
      link: "#"
    }
  ];

  return (
    <section id="contact" className="section">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">Contactez-Nous</h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-foreground/80">
            Prêt à transformer votre idée en réalité ? Parlons de votre projet.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <ContactForm />
          </div>

          <div className="flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-6">
                Discutons de votre <span className="text-gradient">Vision</span>
              </h3>
              <p className="text-foreground/80 mb-8">
                Que vous ayez une idée précise ou que vous cherchiez des conseils pour 
                votre transformation numérique, notre équipe est prête à vous accompagner. 
                Nous croyons en la création de partenariats durables basés sur la confiance 
                et les résultats.
              </p>

              <div className="space-y-4 mb-8">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-amsa-purple/20 flex items-center justify-center mr-4">
                      {React.cloneElement(item.icon, { className: "text-amsa-purple" })}
                    </div>
                    <div>
                      <p className="text-sm text-foreground/70">{item.title}</p>
                      <a 
                        href={item.link} 
                        className="font-medium hover:text-amsa-purple transition-colors"
                      >
                        {item.value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;