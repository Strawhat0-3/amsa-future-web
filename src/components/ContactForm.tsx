import React, { useState } from "react";
import emailjs from '@emailjs/browser';
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

const ContactForm: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  // Configuration EmailJS - Vos vraies valeurs
  const EMAILJS_SERVICE_ID = 'service_uxdktze'; // Votre Service ID
  const EMAILJS_TEMPLATE_ID = 'template_b7enfd6'; // À remplacer par votre Template ID
  const EMAILJS_PUBLIC_KEY = 'wRnlULgFoNNoRQeRM'; // À remplacer par votre Public Key

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Envoi de l'email via EmailJS
      const result = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_name: 'AMSA Future Web', // Votre nom/entreprise
        },
        EMAILJS_PUBLIC_KEY
      );

      console.log('Email envoyé avec succès:', result);
      alert("Merci pour votre message ! Nous vous contacterons rapidement.");
      
      // Réinitialiser le formulaire
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });

    } catch (error) {
      console.error('Erreur lors de l\'envoi:', error);
      alert("Une erreur s'est produite lors de l'envoi. Veuillez réessayer.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
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
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Votre nom"
                required
                className="bg-background/50"
                disabled={isLoading}
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">
                Email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="votre.email@exemple.com"
                required
                className="bg-background/50"
                disabled={isLoading}
              />
            </div>
          </div>
          <div className="space-y-2">
            <label htmlFor="subject" className="text-sm font-medium">
              Sujet
            </label>
            <Input
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
              placeholder="Sujet de votre message"
              required
              className="bg-background/50"
              disabled={isLoading}
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium">
              Message
            </label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Détaillez votre projet ou votre demande..."
              rows={5}
              required
              className="bg-background/50"
              disabled={isLoading}
            />
          </div>
          <Button 
            type="submit" 
            className="w-full bg-amsa-purple hover:bg-amsa-purple/90"
            disabled={isLoading}
          >
            {isLoading ? "Envoi en cours..." : "Envoyer le message"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default ContactForm;