'use client';

import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

interface HeaderProps {
  className?: string;
}

export const Header = ({ className }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Features", href: "#features" },
    { label: "How it Works", href: "#how-it-works" },
    { label: "Pricing", href: "#pricing" },
    { label: "Support", href: "#support" },
  ];

  return (
    <header className={`bg-background/95 backdrop-blur-sm border-b border-border/50 sticky top-0 z-50 ${className}`}>
      <div className="container mx-auto px-3 sm:px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18 lg:h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            <div className="relative w-8 h-8 sm:w-10 sm:h-10">
              {/* Creative layered logo */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-blue-600 to-indigo-700 rounded-xl shadow-lg transform rotate-6"></div>
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-400 to-blue-500 rounded-xl shadow-md transform -rotate-3"></div>
              <div className="relative w-full h-full bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center shadow-xl">
                <span className="text-white font-bold text-sm sm:text-lg font-lexend">P</span>
              </div>
              {/* Floating elements */}
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-yellow-400 rounded-full opacity-80 animate-pulse"></div>
              <div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-green-400 rounded-full opacity-70"></div>
            </div>
            <span className="text-lg sm:text-2xl font-bold text-foreground font-lexend tracking-tight">Payee</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-muted-foreground hover:text-foreground transition-colors duration-200 font-lexend font-medium text-sm xl:text-base"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Mobile CTA Buttons - Visible on mobile/tablet */}
          <div className="flex lg:hidden items-center space-x-2">
            <Button 
              variant="ghost" 
              size="sm" 
              className="font-lexend font-medium rounded-full px-3 sm:px-4 text-xs sm:text-sm hover:bg-gray-100 transition-all duration-200 py-2 sm:py-2.5"
            >
              Sign In
            </Button>
            <Button 
              variant="default" 
              size="sm" 
              className="font-lexend font-medium rounded-full px-4 sm:px-6 py-2 sm:py-2.5 text-xs sm:text-md bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-lg hover:shadow-xl transition-all duration-200"
            >
              Get Started
            </Button>
            {/* Mobile Menu Button */}
            <button
              className="p-1.5 sm:p-2 rounded-xl hover:bg-muted transition-colors ml-1"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-4 w-4 sm:h-5 sm:w-5" /> : <Menu className="h-4 w-4 sm:h-5 sm:w-5" />}
            </button>
          </div>

          {/* Desktop CTA - Hidden on mobile/tablet */}
          <div className="hidden lg:flex items-center space-x-3">
            <Button 
              variant="ghost" 
              size="sm" 
              className="font-lexend font-medium rounded-full px-4  py-6 xl:px-6 hover:bg-gray-100 transition-all duration-200"
            >
              Sign In
            </Button>
            <Button 
              variant="default" 
              size="sm" 
              className="font-lexend font-medium rounded-full px-6 xl:px-8 py-6 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-lg hover:shadow-xl transition-all duration-200"
            >
              Get Started
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu - Only navigation items */}
        {isMenuOpen && (
          <div className="lg:hidden py-3 sm:py-4 border-t border-border/50 bg-background/98 backdrop-blur-sm">
            <nav className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200 py-2 px-1 font-lexend font-medium text-sm sm:text-base"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};