import { Button } from "@/components/ui/button.tsx";

export default function FlexForceSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      className="py-12"
      style={{
        background: 'linear-gradient(135deg, hsl(142, 76%, 36%) 0%, hsl(142, 86%, 28%) 100%)'
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Content */}
          <div className="text-white">
            <div className="inline-flex items-center bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
              Emergency Staffing Solution
            </div>
            
            <h2 className="text-2xl md:text-3xl font-bold mb-5">
              FlexForce 24hr Emergency Support
            </h2>
            
            <p className="text-base mb-5 text-white/90">
              When your regular staff can't make it to work, our FlexForce team provides immediate experienced replacements within hours. Never let staffing emergencies disrupt your operations.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-white/90">Experienced hospitality professionals on standby 24/7</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-white/90">Rapid deployment within hours of your call</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-white/90">All roles covered: housekeeping, kitchen, front of house</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-white/90">Pre-vetted staff ready to maintain your service standards</p>
              </div>
            </div>
            
            <Button 
              onClick={() => scrollToSection('contact')}
              className="px-8 py-3 text-lg hover:shadow-lg transition-all transform hover:scale-105 h-auto"
              style={{
                backgroundColor: 'white',
                color: 'hsl(142, 76%, 36%)',
                fontWeight: '600'
              }}
            >
              <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call FlexForce Now
            </Button>
          </div>
          
          {/* Visual Element */}
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="text-center">
                <div className="w-24 h-24 mx-auto bg-white/20 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Available 24/7</h3>
                <p className="text-white/90 mb-6">Emergency staffing hotline ready when you need us most</p>
                
                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-2">2 hrs</div>
                    <div className="text-sm text-white/80">Average Response</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-2">100%</div>
                    <div className="text-sm text-white/80">Coverage Rate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
