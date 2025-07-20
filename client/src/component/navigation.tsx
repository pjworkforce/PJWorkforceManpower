import { useState } from "react";
import { Button } from "./ui/button";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div 
              className="w-12 h-12 rounded-lg flex items-center justify-center shadow-lg"
              style={{
                background: 'linear-gradient(135deg, hsl(142, 76%, 36%) 0%, hsl(142, 86%, 28%) 100%)',
                minWidth: '48px',
                minHeight: '48px'
              }}
            >
              <span 
                className="font-bold text-lg"
                style={{
                  color: 'white',
                  fontSize: '18px',
                  fontWeight: '700'
                }}
              >
                PJ
              </span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">WORKFORCE</h1>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('services')}
              className="text-gray-700 hover:text-leaf-green-600 font-medium transition-colors"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('why-choose')}
              className="text-gray-700 hover:text-leaf-green-600 font-medium transition-colors"
            >
              Why Choose Us
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-leaf-green-600 font-medium transition-colors"
            >
              Contact
            </button>
            <Button 
              onClick={() => scrollToSection('quote')}
              className="bg-gradient-to-r from-leaf-green-500 to-leaf-green-600 text-white hover:shadow-lg transition-all transform hover:scale-105"
            >
              Get Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-700 hover:text-leaf-green-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('services')}
                className="text-left text-gray-700 hover:text-leaf-green-600 font-medium transition-colors"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('why-choose')}
                className="text-left text-gray-700 hover:text-leaf-green-600 font-medium transition-colors"
              >
                Why Choose Us
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-left text-gray-700 hover:text-leaf-green-600 font-medium transition-colors"
              >
                Contact
              </button>
              <Button 
                onClick={() => scrollToSection('quote')}
                className="bg-gradient-to-r from-leaf-green-500 to-leaf-green-600 text-white w-full"
              >
                Get Quote
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
