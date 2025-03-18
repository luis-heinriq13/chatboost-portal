
import { useState, useEffect } from "react";
import { ButtonCustom } from "./ui/button-custom";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
        isScrolled
          ? "py-3 bg-white bg-opacity-80 backdrop-blur-lg shadow-sm"
          : "py-6 bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="#" className="flex items-center">
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-brand-700 to-brand-500">
                WhatsNeed
              </span>
              <span className="ml-1 text-xs font-medium text-slate-500 mt-1">CRM</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#benefits"
              className="text-sm font-medium text-slate-700 hover:text-brand-600 transition-colors duration-200"
            >
              Benefícios
            </a>
            <a
              href="#features"
              className="text-sm font-medium text-slate-700 hover:text-brand-600 transition-colors duration-200"
            >
              Recursos
            </a>
            <a
              href="#testimonials"
              className="text-sm font-medium text-slate-700 hover:text-brand-600 transition-colors duration-200"
            >
              Depoimentos
            </a>
            <a
              href="#pricing"
              className="text-sm font-medium text-slate-700 hover:text-brand-600 transition-colors duration-200"
            >
              Planos
            </a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <ButtonCustom variant="outline" size="sm">
              Login
            </ButtonCustom>
            <ButtonCustom variant="primary" size="sm" withArrow>
              Teste Grátis
            </ButtonCustom>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden flex items-center text-slate-700"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "md:hidden absolute top-full left-0 right-0 bg-white shadow-md transition-all duration-300 ease-in-out overflow-hidden",
          isMobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
          <a
            href="#benefits"
            className="py-2 text-sm font-medium text-slate-700 hover:text-brand-600 transition-colors duration-200"
            onClick={toggleMobileMenu}
          >
            Benefícios
          </a>
          <a
            href="#features"
            className="py-2 text-sm font-medium text-slate-700 hover:text-brand-600 transition-colors duration-200"
            onClick={toggleMobileMenu}
          >
            Recursos
          </a>
          <a
            href="#testimonials"
            className="py-2 text-sm font-medium text-slate-700 hover:text-brand-600 transition-colors duration-200"
            onClick={toggleMobileMenu}
          >
            Depoimentos
          </a>
          <a
            href="#pricing"
            className="py-2 text-sm font-medium text-slate-700 hover:text-brand-600 transition-colors duration-200"
            onClick={toggleMobileMenu}
          >
            Planos
          </a>
          <div className="flex flex-col space-y-3 pt-4 border-t">
            <ButtonCustom variant="outline" size="sm">
              Login
            </ButtonCustom>
            <ButtonCustom variant="primary" size="sm" withArrow>
              Teste Grátis
            </ButtonCustom>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
