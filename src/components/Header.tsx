import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-primary text-primary-foreground sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
              <span className="text-2xl font-bold text-primary">C</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold">COOPEC IKIRENGA</span>
              <span className="text-xs opacity-90">Excellence in Service</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <Button
              variant="ghost"
              className={`text-primary-foreground hover:bg-primary-foreground/10 ${isActive("/") ? "bg-primary-foreground/10" : ""}`}
              asChild
            >
              <Link to="/">Home</Link>
            </Button>
            <Button
              variant="ghost"
              className={`text-primary-foreground hover:bg-primary-foreground/10 ${isActive("/about") ? "bg-primary-foreground/10" : ""}`}
              asChild
            >
              <Link to="/about">About us</Link>
            </Button>
            <Button
              variant="ghost"
              className={`text-primary-foreground hover:bg-primary-foreground/10 ${isActive("/structure") ? "bg-primary-foreground/10" : ""}`}
              asChild
            >
              <Link to="/structure">Structure</Link>
            </Button>
            <Button
              variant="ghost"
              className={`text-primary-foreground hover:bg-primary-foreground/10 ${isActive("/products") ? "bg-primary-foreground/10" : ""}`}
              asChild
            >
              <Link to="/products">Products</Link>
            </Button>
            <Button
              variant="ghost"
              className={`text-primary-foreground hover:bg-primary-foreground/10 ${isActive("/news") ? "bg-primary-foreground/10" : ""}`}
              asChild
            >
              <Link to="/news">News</Link>
            </Button>
            <Button
              variant="ghost"
              className={`text-primary-foreground hover:bg-primary-foreground/10 ${isActive("/contact") ? "bg-primary-foreground/10" : ""}`}
              asChild
            >
              <Link to="/contact">Contact us</Link>
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
            <Button
              variant="ghost"
              className="text-primary-foreground hover:bg-primary-foreground/10 justify-start"
              asChild
            >
              <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
            </Button>
            <Button
              variant="ghost"
              className="text-primary-foreground hover:bg-primary-foreground/10 justify-start"
              asChild
            >
              <Link to="/about" onClick={() => setIsMenuOpen(false)}>About us</Link>
            </Button>
            <Button
              variant="ghost"
              className="text-primary-foreground hover:bg-primary-foreground/10 justify-start"
              asChild
            >
              <Link to="/structure" onClick={() => setIsMenuOpen(false)}>Structure</Link>
            </Button>
            <Button
              variant="ghost"
              className="text-primary-foreground hover:bg-primary-foreground/10 justify-start"
              asChild
            >
              <Link to="/products" onClick={() => setIsMenuOpen(false)}>Products</Link>
            </Button>
            <Button
              variant="ghost"
              className="text-primary-foreground hover:bg-primary-foreground/10 justify-start"
              asChild
            >
              <Link to="/news" onClick={() => setIsMenuOpen(false)}>News</Link>
            </Button>
            <Button
              variant="ghost"
              className="text-primary-foreground hover:bg-primary-foreground/10 justify-start"
              asChild
            >
              <Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact us</Link>
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
};
