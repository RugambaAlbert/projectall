import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export const Footer = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Successfully Subscribed!",
        description: "Thank you for subscribing to our newsletter.",
      });
      setEmail("");
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Contact */}
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-6 group">
              <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                <span className="text-2xl font-bold text-primary">C</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold transition-colors duration-300 group-hover:text-secondary">COOPEC IKIRENGA</span>
                <span className="text-xs opacity-90">Excellence in Service</span>
              </div>
            </Link>
            <h3 className="text-xl font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <MapPin className="h-5 w-5 mt-1 flex-shrink-0" />
                <p className="text-sm">B.P 4053 Kigali, Rwanda</p>
              </div>
              <a 
                href="tel:+250788319829" 
                className="flex items-center space-x-2 hover:text-secondary transition-colors duration-300"
              >
                <Phone className="h-5 w-5 flex-shrink-0" />
                <p className="text-sm">+250 788 319 829</p>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/news" 
                  className="text-primary-foreground hover:text-secondary transition-colors duration-300 text-sm inline-block"
                >
                  Tenders
                </Link>
              </li>
              <li>
                <Link 
                  to="/news" 
                  className="text-primary-foreground hover:text-secondary transition-colors duration-300 text-sm inline-block"
                >
                  Announcement
                </Link>
              </li>
              <li>
                <Link 
                  to="/products" 
                  className="text-primary-foreground hover:text-secondary transition-colors duration-300 text-sm inline-block"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link 
                  to="/about" 
                  className="text-primary-foreground hover:text-secondary transition-colors duration-300 text-sm inline-block"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className="text-primary-foreground hover:text-secondary transition-colors duration-300 text-sm inline-block"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Subscribe */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Subscribe</h3>
            <p className="text-sm mb-4 opacity-90">Stay updated with our latest news and updates</p>
            <form onSubmit={handleSubscribe} className="flex space-x-2">
              <Input
                type="email"
                placeholder="Your Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50"
              />
              <Button 
                type="submit"
                className="bg-secondary text-primary hover:bg-secondary/90 hover:scale-105 px-6 transition-all duration-300"
              >
                Go
              </Button>
            </form>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-primary-foreground/20 text-center">
          <p className="text-sm opacity-75">© 2025 COOPEC IKIRENGA. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
