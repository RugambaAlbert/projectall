import { Button } from "@/components/ui/button";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import { useState } from "react";

type Language = "en" | "fr" | "rw";

export const TopBar = () => {
  const [language, setLanguage] = useState<Language>("en");

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
    // In a real app, this would trigger i18n language change
  };

  const socialLinks = {
    facebook: "https://facebook.com/coopecikirenga",
    twitter: "https://twitter.com/coopecikirenga",
    linkedin: "https://linkedin.com/company/coopecikirenga",
    instagram: "https://instagram.com/coopecikirenga",
  };

  return (
    <div className="bg-secondary text-primary py-2">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Language Selector */}
          <div className="flex items-center space-x-1 sm:space-x-4">
            <Button 
              variant="ghost" 
              size="sm" 
              className={`text-primary hover:bg-primary/10 h-8 text-xs transition-all duration-300 ${language === "en" ? "bg-primary/10 font-semibold" : ""}`}
              onClick={() => handleLanguageChange("en")}
            >
              English
            </Button>
            <Button 
              variant="ghost" 
              size="sm" 
              className={`text-primary hover:bg-primary/10 h-8 text-xs transition-all duration-300 ${language === "fr" ? "bg-primary/10 font-semibold" : ""}`}
              onClick={() => handleLanguageChange("fr")}
            >
              Français
            </Button>
            <Button 
              variant="ghost" 
              size="sm" 
              className={`text-primary hover:bg-primary/10 h-8 text-xs transition-all duration-300 ${language === "rw" ? "bg-primary/10 font-semibold" : ""}`}
              onClick={() => handleLanguageChange("rw")}
            >
              Kinyarwanda
            </Button>
          </div>

          {/* Social Icons */}
          <div className="flex items-center space-x-1 sm:space-x-2">
            <Button 
              variant="ghost" 
              size="icon" 
              className="text-primary hover:bg-primary/10 hover:scale-110 h-8 w-8 transition-all duration-300"
              onClick={() => window.open(socialLinks.facebook, "_blank")}
              aria-label="Facebook"
            >
              <Facebook className="h-4 w-4" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="text-primary hover:bg-primary/10 hover:scale-110 h-8 w-8 transition-all duration-300"
              onClick={() => window.open(socialLinks.twitter, "_blank")}
              aria-label="Twitter"
            >
              <Twitter className="h-4 w-4" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="text-primary hover:bg-primary/10 hover:scale-110 h-8 w-8 transition-all duration-300"
              onClick={() => window.open(socialLinks.linkedin, "_blank")}
              aria-label="LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="text-primary hover:bg-primary/10 hover:scale-110 h-8 w-8 transition-all duration-300"
              onClick={() => window.open(socialLinks.instagram, "_blank")}
              aria-label="Instagram"
            >
              <Instagram className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
