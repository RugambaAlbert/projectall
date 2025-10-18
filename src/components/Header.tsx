import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-primary text-primary-foreground sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
              <span className="text-2xl font-bold text-primary">C</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold">CORPORATE PLC</span>
              <span className="text-xs opacity-90">Excellence in Service</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <Button variant="ghost" className="text-primary-foreground hover:bg-primary-foreground/10">
              Home
            </Button>
            <Button variant="ghost" className="text-primary-foreground hover:bg-primary-foreground/10">
              About us
            </Button>
            <Button variant="ghost" className="text-primary-foreground hover:bg-primary-foreground/10">
              Structure
            </Button>
            <Button variant="ghost" className="text-primary-foreground hover:bg-primary-foreground/10">
              Products
            </Button>
            <Button variant="ghost" className="text-primary-foreground hover:bg-primary-foreground/10">
              News
            </Button>
            <Button variant="ghost" className="text-primary-foreground hover:bg-primary-foreground/10">
              Contact us
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-primary-foreground hover:bg-primary-foreground/10"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4 flex flex-col space-y-2">
            <Button variant="ghost" className="text-primary-foreground hover:bg-primary-foreground/10 justify-start">
              Home
            </Button>
            <Button variant="ghost" className="text-primary-foreground hover:bg-primary-foreground/10 justify-start">
              About us
            </Button>
            <Button variant="ghost" className="text-primary-foreground hover:bg-primary-foreground/10 justify-start">
              Structure
            </Button>
            <Button variant="ghost" className="text-primary-foreground hover:bg-primary-foreground/10 justify-start">
              Products
            </Button>
            <Button variant="ghost" className="text-primary-foreground hover:bg-primary-foreground/10 justify-start">
              News
            </Button>
            <Button variant="ghost" className="text-primary-foreground hover:bg-primary-foreground/10 justify-start">
              Contact us
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
};
