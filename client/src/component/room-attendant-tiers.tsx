import { Button } from "@/components/ui/button.tsx";

export default function RoomAttendantTiers() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const tiers = [
    {
      name: "Elite Cleaners",
      category: "5-Star Hotels",
      level: "Premium",
      icon: (
        <svg className="w-8 h-8 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ),
      features: [
        "Luxury service standards",
        "Advanced cleaning techniques",
        "Premium product knowledge",
        "VIP guest interaction training",
        "5+ years experience required"
      ],
      description: "Our most experienced room attendants for luxury 5-star establishments requiring exceptional standards."
    },
    {
      name: "Prestige Cleaners",
      category: "4-Star Hotels",
      level: "Professional",
      icon: (
        <svg className="w-8 h-8 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
      ),
      features: [
        "Professional service delivery",
        "Efficient cleaning methods",
        "Guest service focus",
        "Quality assurance trained",
        "2+ years experience required"
      ],
      description: "Skilled professionals perfect for 4-star hotels seeking reliable, high-quality housekeeping services."
    },
    {
      name: "Comfort Cleaners",
      category: "Apartment Hotels",
      level: "Essential",
      icon: (
        <svg className="w-8 h-8 text-green-500" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
      ),
      features: [
        "Thorough cleaning standards",
        "Extended stay expertise",
        "Apartment-style maintenance",
        "Guest privacy respect",
        "1+ years experience required"
      ],
      description: "Dedicated staff specialized in apartment hotel environments with extended stay guest needs."
    }
  ];

  return (
    <section className="py-14 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
            Room Attendant Service Tiers
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Specialized room attendant services tailored to different accommodation standards and guest expectations
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-6">
          {tiers.map((tier, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 border border-gray-200"
            >
              {/* Header */}
              <div className="text-center mb-5">
                <div className="w-14 h-14 mx-auto mb-3 bg-gray-50 rounded-full flex items-center justify-center">
                  {tier.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{tier.name}</h3>
                <div className="inline-block bg-leaf-green-100 text-leaf-green-700 px-3 py-1 rounded-full text-sm font-medium mb-2">
                  {tier.level}
                </div>
                <p className="text-gray-600 font-medium">{tier.category}</p>
              </div>
              
              {/* Description */}
              <p className="text-gray-600 text-center mb-5 leading-relaxed text-sm">
                {tier.description}
              </p>
              
              {/* Features */}
              <ul className="space-y-2 mb-6">
                {tier.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start space-x-3">
                    <div 
                      className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                      style={{ backgroundColor: 'hsl(142, 76%, 36%)' }}
                    ></div>
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              
              {/* CTA Button */}
              <Button 
                onClick={() => scrollToSection('quote')}
                className="w-full py-3 text-base transition-all hover:shadow-lg"
                style={{
                  backgroundColor: 'hsl(142, 76%, 36%)',
                  color: 'white'
                }}
              >
                Request {tier.name}
              </Button>
            </div>
          ))}
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Need help choosing the right service tier for your establishment?
          </p>
          <Button 
            onClick={() => scrollToSection('contact')}
            className="px-8 py-3 text-lg transition-all hover:shadow-lg"
            style={{
              backgroundColor: 'hsl(142, 76%, 36%)',
              color: 'white'
            }}
          >
            <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-3.582 8-8 8a8.959 8.959 0 01-4.316-1.102L3 20l1.102-5.684A8.959 8.959 0 013 12c0-4.418 3.582-8 8-8s8 3.582 8 8z" />
            </svg>
            Speak with Our Consultant
          </Button>
        </div>
      </div>
    </section>
  );
}
