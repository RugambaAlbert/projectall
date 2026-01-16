import { Button } from "@/components/ui/button";
import { Facebook, Twitter, Linkedin, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const SocialShare = () => {
  const { toast } = useToast();
  
  const currentUrl = typeof window !== "undefined" ? window.location.href : "";
  const shareText = "Check out COOPEC IKIRENGA - Excellence in Financial Services";

  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(shareText)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`,
    whatsapp: `https://wa.me/?text=${encodeURIComponent(shareText + " " + currentUrl)}`,
  };

  const handleShare = (platform: keyof typeof shareLinks, platformName: string) => {
    window.open(shareLinks[platform], "_blank", "width=600,height=400");
    toast({
      title: "Sharing",
      description: `Opening ${platformName} to share...`,
    });
  };

  return (
    <div className="flex items-center justify-center space-x-4 py-8">
      <span className="text-sm text-muted-foreground mr-2 hidden sm:inline">Share:</span>
      <Button
        variant="outline"
        className="rounded-full border-2 border-primary hover:bg-primary hover:text-primary-foreground hover:scale-110 transition-all duration-300"
        onClick={() => handleShare("facebook", "Facebook")}
        aria-label="Share on Facebook"
      >
        <Facebook className="h-5 w-5" />
      </Button>
      <Button
        variant="outline"
        className="rounded-full border-2 border-primary hover:bg-primary hover:text-primary-foreground hover:scale-110 transition-all duration-300"
        onClick={() => handleShare("twitter", "Twitter")}
        aria-label="Share on Twitter"
      >
        <Twitter className="h-5 w-5" />
      </Button>
      <Button
        variant="outline"
        className="rounded-full border-2 border-primary hover:bg-primary hover:text-primary-foreground hover:scale-110 transition-all duration-300"
        onClick={() => handleShare("linkedin", "LinkedIn")}
        aria-label="Share on LinkedIn"
      >
        <Linkedin className="h-5 w-5" />
      </Button>
      <Button
        variant="outline"
        className="rounded-full border-2 border-primary hover:bg-primary hover:text-primary-foreground hover:scale-110 transition-all duration-300"
        onClick={() => handleShare("whatsapp", "WhatsApp")}
        aria-label="Share on WhatsApp"
      >
        <MessageCircle className="h-5 w-5" />
      </Button>
    </div>
  );
};
