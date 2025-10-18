import { Button } from "@/components/ui/button";
import { Facebook, Twitter, Linkedin, MessageCircle } from "lucide-react";

export const SocialShare = () => {
  return (
    <div className="flex items-center justify-center space-x-4 py-8">
      <Button
        variant="outline"
        className="rounded-full border-2 border-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
      >
        <Facebook className="h-5 w-5" />
      </Button>
      <Button
        variant="outline"
        className="rounded-full border-2 border-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
      >
        <Twitter className="h-5 w-5" />
      </Button>
      <Button
        variant="outline"
        className="rounded-full border-2 border-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
      >
        <Linkedin className="h-5 w-5" />
      </Button>
      <Button
        variant="outline"
        className="rounded-full border-2 border-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
      >
        <MessageCircle className="h-5 w-5" />
      </Button>
    </div>
  );
};
