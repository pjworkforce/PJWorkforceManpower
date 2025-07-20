export default function Footer() {
  const quickLinks = [
    { name: "Our Services", href: "#services" },
    { name: "Why Choose Us", href: "#why-choose" },
    { name: "Contact Us", href: "#contact" },
    { name: "Careers", href: "#" },
  ];

  const services = [
    "Housekeeping Staff",
    "Culinary Professionals", 
    "Front of House",
    "Hotel Operations",
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div 
                className="w-10 h-10 rounded-lg flex items-center justify-center"
                style={{
                  background: 'linear-gradient(135deg, hsl(142, 76%, 36%) 0%, hsl(142, 86%, 28%) 100%)',
                  minWidth: '40px',
                  minHeight: '40px'
                }}
              >
                <span 
                  className="font-bold"
                  style={{
                    color: 'white',
                    fontSize: '14px',
                    fontWeight: '700'
                  }}
                >
                  PJ
                </span>
              </div>
              <div>
                <h3 className="text-lg font-bold">WORKFORCE</h3>
                <p className="text-xs text-gray-400">Hospitality Staffing Solutions</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              UK's premier Hospitality Staffing Solutions, connecting exceptional talent with leading venues across the United Kingdom.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  {link.href.startsWith('#') ? (
                    <button 
                      onClick={() => scrollToSection(link.href)}
                      className="hover:text-leaf-green-400 transition-colors text-left"
                    >
                      {link.name}
                    </button>
                  ) : (
                    <a 
                      href={link.href} 
                      className="hover:text-leaf-green-400 transition-colors"
                    >
                      {link.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              {services.map((service, index) => (
                <li key={index}>{service}</li>
              ))}
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contact Info</h3>
            <div className="space-y-2 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <svg className="w-4 h-4 text-leaf-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>contact@pjworkforce.info</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-4 h-4 text-leaf-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>07447854587</span>
              </div>
              <div className="flex items-start space-x-2">
                <svg className="w-4 h-4 text-leaf-green-400 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="leading-relaxed">
                  6 Dawson House, Peckham Road<br />
                  London, England SE5 8UR
                </span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            &copy; 2024 Workforce. All rights reserved. | Hospitality Staffing Solutions
          </p>
        </div>
      </div>
    </footer>
  );
}
