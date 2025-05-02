
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Mail, MessageSquare, Building } from "lucide-react";

const ContactSection: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would send the form data to a server
    alert("Merci pour votre message ! Nous vous contacterons rapidement.");
  };

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      title: "Email",
      value: "contact@amsa-solutions.com",
      link: "mailto:contact@amsa-solutions.com"
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
      value: "Paris, France",
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
            <Card className="border border-border/50 bg-card/50 backdrop-blur-sm h-full">
              <CardHeader>
                <CardTitle>Envoyez-nous un message</CardTitle>
                <CardDescription>
                  Complétez le formulaire ci-dessous et nous vous répondrons dans les plus brefs délais.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Nom
                      </label>
                      <Input
                        id="name"
                        placeholder="Votre nom"
                        required
                        className="bg-background/50"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="votre.email@exemple.com"
                        required
                        className="bg-background/50"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Sujet
                    </label>
                    <Input
                      id="subject"
                      placeholder="Sujet de votre message"
                      required
                      className="bg-background/50"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Détaillez votre projet ou votre demande..."
                      rows={5}
                      required
                      className="bg-background/50"
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full bg-amsa-purple hover:bg-amsa-purple/90"
                  >
                    Envoyer le message
                  </Button>
                </form>
              </CardContent>
            </Card>
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

            <div className="mt-auto">
              <div className="p-6 bg-amsa-purple/10 rounded-lg border border-amsa-purple/20">
                <h4 className="font-semibold mb-2">Consultation gratuite</h4>
                <p className="text-sm mb-4">
                  Réservez une session de consultation de 30 minutes avec nos experts pour 
                  discuter de votre projet et explorer les solutions possibles.
                </p>
                <Button variant="outline" className="w-full border-amsa-purple text-amsa-purple hover:bg-amsa-purple/20">
                  Réserver maintenant
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
