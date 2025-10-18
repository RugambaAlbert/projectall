import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MapPin, Phone } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Contact */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold text-primary">C</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold">COOPEC IKIRENGA</span>
                <span className="text-xs opacity-90">Excellence in Service</span>
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <MapPin className="h-5 w-5 mt-1 flex-shrink-0" />
                <p className="text-sm">B.P 4053 Kigali, Rwanda</p>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-5 w-5 flex-shrink-0" />
                <p className="text-sm">+250 788 319 829</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Button variant="link" className="text-primary-foreground hover:text-secondary p-0 h-auto">
                  Tenders
                </Button>
              </li>
              <li>
                <Button variant="link" className="text-primary-foreground hover:text-secondary p-0 h-auto">
                  Announcement
                </Button>
              </li>
              <li>
                <Button variant="link" className="text-primary-foreground hover:text-secondary p-0 h-auto">
                  Products
                </Button>
              </li>
              <li>
                <Button variant="link" className="text-primary-foreground hover:text-secondary p-0 h-auto">
                  About Us
                </Button>
              </li>
            </ul>
          </div>

          {/* Subscribe */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Subscribe</h3>
            <p className="text-sm mb-4 opacity-90">Stay updated with our latest news and updates</p>
            <div className="flex space-x-2">
              <Input
                type="email"
                placeholder="Your Email Address"
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50"
              />
              <Button className="bg-secondary text-primary hover:bg-secondary/90 px-6">
                Go
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-primary-foreground/20 text-center">
          <p className="text-sm opacity-75">© 2025 COOPEC IKIRENGA. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
