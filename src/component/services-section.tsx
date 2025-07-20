export default function ServicesSection() {
  const services = [
    {
      title: "Housekeeping Excellence",
      image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=240",
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21h18M3 10h18M3 7l9-4 9 4M4 10v11M20 10v11M8 14v3M12 14v3M16 14v3" />
        </svg>
      ),
      description: "Professional housekeeping staff trained in luxury standards, ensuring immaculate rooms and exceptional guest experiences with meticulous attention to detail.",
      roles: [
        "Housekeeping Room Attendant",
        "Housekeeping Supervisor", 
        "Housekeeping Coordinator",
        "Linen & Luggage Porter"
      ]
    },
    {
      title: "Culinary Professionals",
      image: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=240",
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      description: "Experienced chefs and culinary professionals dedicated to delivering exceptional dining experiences across all hospitality venues and service levels.",
      roles: [
        "Executive Chef",
        "Sous Chef",
        "Line Cook", 
        "Kitchen Porter"
      ]
    },
    {
      title: "Front of House Service",
      image: "https://images.unsplash.com/photo-1559329007-40df8a9345d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=240",
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      description: "Skilled service professionals who create memorable dining and guest experiences through exceptional customer service and attention to detail.",
      roles: [
        "Waitress/Waiter",
        "Front Desk Staff",
        "Host/Hostess",
        "Guest Relations"
      ]
    },
    {
      title: "Barista & Beverage Services", 
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=240",
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      ),
      description: "Skilled baristas trained in specialty coffee preparation and beverage service, providing premium hospitality experiences for hotels and restaurants.",
      roles: [
        "Specialty Coffee Barista",
        "Latte Art Specialist", 
        "Beverage Service Expert",
        "Coffee Equipment Specialist"
      ]
    }
  ];

  return (
    <section id="services" className="py-14 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Our Premium Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive staffing solutions for the hospitality industry with specialized expertise in key roles
          </p>
        </div>
        
        {/* Service Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group relative bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-200"
              style={{ minHeight: '420px' }}
            >
              <div className="relative overflow-hidden rounded-t-xl">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-110" 
                />
                <div 
                  className="absolute top-3 right-3 w-11 h-11 rounded-full flex items-center justify-center"
                  style={{
                    background: 'linear-gradient(135deg, hsl(142, 76%, 36%) 0%, hsl(142, 86%, 28%) 100%)'
                  }}
                >
                  {service.icon}
                </div>
              </div>
              
              <div className="p-5">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{service.description}</p>
                
                <div className="space-y-2">
                  {service.roles.map((role, roleIndex) => (
                    <div key={roleIndex} className="flex items-center text-sm text-gray-600">
                      <div 
                        className="w-2 h-2 rounded-full mr-3 flex-shrink-0"
                        style={{ backgroundColor: 'hsl(142, 76%, 36%)' }}
                      ></div>
                      {role}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
