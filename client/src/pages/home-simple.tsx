import { useState } from "react";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
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
                <p className="text-sm text-gray-600 -mt-1">Hospitality Staffing Solutions</p>
              </div>
            </div>

            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-leaf-green-600 transition-colors">Services</button>
              <button onClick={() => scrollToSection('why-choose')} className="text-gray-700 hover:text-leaf-green-600 transition-colors">Why Choose Us</button>
              <button onClick={() => scrollToSection('quote')} className="text-gray-700 hover:text-leaf-green-600 transition-colors">Get Quote</button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-leaf-green-600 transition-colors">Contact</button>
            </div>

            <button
              onClick={() => scrollToSection('quote')}
              className="bg-leaf-green-600 text-white px-6 py-2 rounded-lg hover:bg-leaf-green-700 transition-colors"
            >
              Get Quote
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-20 pb-16 lg:pt-28 lg:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center bg-leaf-green-50 text-leaf-green-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                UK's Premier Hospitality Staffing Solutions
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6" style={{ lineHeight: '1.1' }}>
                Exceptional{' '}
                <span className="text-leaf-green-600">Hospitality</span>
                <br />Staffing Solutions
              </h1>
              
              <p className="text-xl text-gray-600 mb-8">
                Premium workforce solutions for hotels, restaurants, and hospitality venues across the UK. 
                Professional, reliable, and experienced staff when you need them most.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button
                  onClick={() => scrollToSection('quote')}
                  className="bg-leaf-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-leaf-green-700 transition-colors"
                >
                  Get Custom Quote
                </button>
                <button
                  onClick={() => scrollToSection('services')}
                  className="border-2 border-leaf-green-600 text-leaf-green-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-leaf-green-50 transition-colors"
                >
                  View Services
                </button>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square w-full max-w-lg mx-auto bg-gradient-to-br from-leaf-green-100 to-leaf-green-200 rounded-2xl flex items-center justify-center">
                <div className="text-center text-leaf-green-800">
                  <svg className="w-32 h-32 mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                    <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                  </svg>
                  <h3 className="text-2xl font-bold">Professional Staff</h3>
                  <p className="text-lg">Ready When You Need Them</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Premium Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized hospitality roles with experienced professionals ready to maintain your service standards
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Housekeeping Room Attendant", icon: "🏨", desc: "Professional room cleaning and maintenance" },
              { title: "Housekeeping Supervisor", icon: "👥", desc: "Team leadership and quality control" },
              { title: "Chef", icon: "👨‍🍳", desc: "Culinary professionals for all kitchen roles" },
              { title: "Waitress/Waiter", icon: "🍽️", desc: "Front of house service excellence" },
              { title: "Barista", icon: "☕", desc: "Coffee and beverage specialists" },
              { title: "Linen & Luggage Porter", icon: "🧳", desc: "Guest services and logistics support" },
              { title: "Housekeeping Coordinator", icon: "📋", desc: "Operations management and scheduling" },
              { title: "Multiple Roles", icon: "⭐", desc: "Comprehensive staffing solutions" }
            ].map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-600">
              Ready to discuss your staffing needs? Contact us today.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="w-12 h-12 bg-leaf-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-leaf-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Phone</h3>
              <p className="text-gray-600">+44 7951 270411</p>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="w-12 h-12 bg-leaf-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-leaf-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Email</h3>
              <p className="text-gray-600">info@pjworkforce.co.uk</p>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="w-12 h-12 bg-leaf-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-leaf-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Location</h3>
              <p className="text-gray-600">United Kingdom</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section id="quote" className="py-20 bg-leaf-green-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Get Your Custom Quote
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Contact us today to discuss your staffing requirements
          </p>
          <button
            onClick={() => window.open('tel:+447951270411')}
            className="bg-leaf-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-leaf-green-700 transition-colors"
          >
            Call Now: +44 7951 270411
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div 
                  className="w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{
                    background: 'linear-gradient(135deg, hsl(142, 76%, 36%) 0%, hsl(142, 86%, 28%) 100%)'
                  }}
                >
                  <span className="font-bold text-white">PJ</span>
                </div>
                <span className="text-xl font-bold">WORKFORCE</span>
              </div>
              <p className="text-gray-400">
                Premier hospitality staffing solutions across the UK.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Housekeeping Staff</li>
                <li>Kitchen Staff</li>
                <li>Front of House</li>
                <li>Management Roles</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Phone: +44 7951 270411</li>
                <li>Email: info@pjworkforce.co.uk</li>
                <li>Location: United Kingdom</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 PJ Workforce. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
