import { Button } from "@/components/ui/button";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export const TopBar = () => {
  return (
    <div className="bg-secondary text-primary py-2">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Language Selector */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="text-primary hover:bg-primary/10 h-8 text-xs">
              English
            </Button>
            <Button variant="ghost" size="sm" className="text-primary hover:bg-primary/10 h-8 text-xs">
              Français
            </Button>
            <Button variant="ghost" size="sm" className="text-primary hover:bg-primary/10 h-8 text-xs">
              Kinyarwanda
            </Button>
          </div>

          {/* Social Icons */}
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="icon" className="text-primary hover:bg-primary/10 h-8 w-8">
              <Facebook className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="text-primary hover:bg-primary/10 h-8 w-8">
              <Twitter className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="text-primary hover:bg-primary/10 h-8 w-8">
              <Linkedin className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="text-primary hover:bg-primary/10 h-8 w-8">
              <Instagram className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
