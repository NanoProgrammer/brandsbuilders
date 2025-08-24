import { useState } from 'react';

export default function ContactHero() {
  const [activeSection, setActiveSection] = useState<'booking' | 'intake' | null>(null);

  const updateSectionState = (section: 'booking' | 'intake' | null) => {
    setActiveSection(section);
    const stateElement = document.getElementById('section-state');
    if (stateElement) {
      stateElement.setAttribute('data-active-section', section || '');
    }
  };

  const showBooking = () => {
    updateSectionState('booking');
    // Scroll to booking section after a small delay
    setTimeout(() => {
      const bookingSection = document.getElementById('booking-section');
      if (bookingSection) {
        bookingSection.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'start' 
        });
      }
    }, 100);
  };

  const showIntake = () => {
    updateSectionState('intake');
    // Scroll to intake section after a small delay
    setTimeout(() => {
      const intakeSection = document.getElementById('intake-section');
      if (intakeSection) {
        intakeSection.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'start' 
        });
      }
    }, 100);
  };

  return (
    <section className="relative flex items-center justify-center overflow-hidden px-4 sm:px-8 lg:px-16 xl:px-24 py-14 lg:pt-8 lg:pb-12 bg-gradient-to-br from-gray-950 via-gray-900 to-slate-900">
  {/* Subtle animated elements */}
  <div className="absolute inset-0 opacity-10 pointer-events-none">
    <div className="absolute top-1/4 left-1/6 w-28 h-28 sm:w-40 sm:h-40 lg:w-56 lg:h-56 bg-violet-600 rounded-full blur-3xl animate-pulse"></div>
    <div 
      className="absolute bottom-1/3 right-1/5 w-20 h-20 sm:w-32 sm:h-32 lg:w-44 lg:h-44 bg-fuchsia-600 rounded-full blur-3xl animate-pulse" 
      style={{ animationDelay: '3s' }}
    ></div>
  </div>

  <div className="container mx-auto px-6 relative z-10 text-center">
    <div className="inline-block px-3 py-1.5 bg-gray-800/50 border border-gray-700/50 rounded-full text-xs sm:text-sm text-violet-400 font-medium mb-6">
      Let's Start Your Project
    </div>

    <h1 className="text-3xl sm:text-4xl lg:text-6xl font-black mb-6 leading-snug text-white">
      Let's grow your business
      <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent block">
        the right way
      </span>
    </h1>

    <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed mb-10">
      Book a 15-minute discovery call or tell me about your project. No sales pitch — we assess fit, goals, and timeline.
    </p>

    <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
      <button 
        onClick={showBooking}
        className={`flex-1 font-bold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg ${
          activeSection === 'booking'
            ? 'bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white scale-105 shadow-violet-500/25'
            : 'bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white hover:scale-105 hover:shadow-violet-500/25'
        }`}
      >
        Book a 15-min Discovery Call
      </button>
      <button 
        onClick={showIntake}
        className={`flex-1 font-semibold py-3 px-6 rounded-xl transition-all duration-300 ${
          activeSection === 'intake'
            ? 'bg-gray-700/70 border-2 border-violet-500/50 text-white scale-105'
            : 'bg-gray-800/50 border border-gray-700/50 text-white hover:border-violet-500/50 hover:bg-gray-800/70'
        }`}
      >
        Tell me about your project
      </button>
    </div>
  </div>
</section>

  );
}