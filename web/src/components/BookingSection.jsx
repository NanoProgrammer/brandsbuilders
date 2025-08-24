import { useEffect, useState } from 'react';

export default function BookingSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [calLoaded, setCalLoaded] = useState(false);
  const [calError, setCalError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const CALCOM_USERNAME = 'brandsbuilders';
  const EVENT_TYPE_SLUG = '15min';

  useEffect(() => {
    const checkVisibility = () => {
      const el = document.getElementById('section-state');
      const active = el?.getAttribute('data-active-section');
      if (active === 'booking') {
        setIsVisible(true);
        setIsLoading(true);
      } else {
        setIsVisible(false);
      }
    };

    // Check initially
    checkVisibility();

    // Watch for changes
    const el = document.getElementById('section-state');
    if (el) {
      const observer = new MutationObserver(checkVisibility);
      observer.observe(el, { attributes: true });
      return () => observer.disconnect();
    }
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const loadCalEmbed = async () => {
      try {
        // Check if Cal is already loaded
        if (window.Cal) {
          initializeCal();
          return;
        }

        // Check if script already exists
        const existingScript = document.querySelector('script[src*="cal.com"]');
        if (existingScript) {
          // Script exists, wait for Cal to be available
          const waitForCal = () => {
            if (window.Cal) {
              initializeCal();
            } else {
              setTimeout(waitForCal, 100);
            }
          };
          waitForCal();
          return;
        }

        // Load Cal.com script
        const script = document.createElement('script');
        script.src = 'https://app.cal.com/embed/embed.js';
        script.async = true;
        
        script.onload = () => {
          // Wait a bit for Cal to initialize
          setTimeout(() => {
            if (window.Cal) {
              initializeCal();
            } else {
              setCalError(true);
              setIsLoading(false);
            }
          }, 1000);
        };

        script.onerror = () => {
          console.error('Failed to load Cal.com script');
          setCalError(true);
          setIsLoading(false);
        };

        document.head.appendChild(script);

        // Timeout fallback
        setTimeout(() => {
          if (!calLoaded && !calError) {
            setCalError(true);
            setIsLoading(false);
          }
        }, 10000);

      } catch (error) {
        console.error('Error loading Cal.com:', error);
        setCalError(true);
        setIsLoading(false);
      }
    };

    const initializeCal = () => {
      try {
        // Initialize Cal
        window.Cal('init', { origin: 'https://app.cal.com' });

        const container = document.getElementById('cal-embed-container');
        if (container) {
          // Clear existing content
          container.innerHTML = '';
          
          // Create the embed
          window.Cal('inline', {
            elementOrSelector: '#cal-embed-container',
            calLink: `${CALCOM_USERNAME}/${EVENT_TYPE_SLUG}`,
            layout: 'month_view',
            config: {
              layout: 'month_view',
              theme: 'light'
            }
          });
          
          setCalLoaded(true);
          setIsLoading(false);
        }
      } catch (error) {
        console.error('Error initializing Cal.com embed:', error);
        setCalError(true);
        setIsLoading(false);
      }
    };

    loadCalEmbed();
  }, [isVisible]);

  const handleDirectBooking = () => {
    window.open(`https://cal.com/${CALCOM_USERNAME}/${EVENT_TYPE_SLUG}`, '_blank');
  };

  const handleEmailFallback = () => {
    const subject = encodeURIComponent('Discovery Call Request - BrandsBuilders Agency');
    const body = encodeURIComponent(`Hi there!

I'd like to schedule a 15-minute discovery call to discuss my project.

My preferred times are:
- [Please list 2-3 preferred time slots]

My project details:
- Business/Project: 
- Goals: 
- Timeline: 
- Budget range: 

Looking forward to hearing from you!

Best regards`);
    
    window.location.href = `mailto:hello@brandsbuilders.agency?subject=${subject}&body=${body}`;
  };

  if (!isVisible) {
    return <div id="booking-section" className="hidden" />;
  }

  return (
    <section id="booking-section" className="py-16 bg-slate-950">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-white">
            Schedule Your{' '}
            <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
              Discovery Call
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Choose a time that works for you. We'll discuss your goals, timeline, and how we can help grow your business.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-900/50 border border-gray-800 rounded-3xl p-4 sm:p-8">
            <div 
              id="cal-embed-container" 
              className="rounded-2xl overflow-hidden bg-white min-h-[650px] flex items-center justify-center"
            >
              {isLoading && !calLoaded && !calError && (
                <div className="p-8 text-center text-gray-700">
                  <div className="animate-spin w-16 h-16 border-4 border-violet-200 border-t-violet-600 rounded-full mx-auto mb-6"></div>
                  <h3 className="text-xl font-semibold mb-2">Loading booking calendar…</h3>
                  <p className="text-gray-600">Please wait while we connect to your calendar.</p>
                </div>
              )}
              
              {calError && (
                <div className="p-8 text-center text-gray-700 max-w-md">
                  <div className="w-16 h-16 bg-gradient-to-br from-violet-500 to-fuchsia-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-800">Let's schedule your call</h3>
                  <p className="text-gray-600 mb-6">Choose your preferred booking method:</p>
                  <div className="space-y-3">
                    <button 
                      onClick={handleDirectBooking}
                      className="w-full bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white font-semibold py-3 px-6 rounded-xl hover:scale-105 transition-transform duration-200"
                    >
                      Open Calendar in New Tab
                    </button>
                    <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=hello@brandsbuilders.agency&su=Discovery%20Call%20Request%20-%20BrandsBuilders%20Agency&body=Hi%20there!%0A%0AI'd%20like%20to%20schedule%20a%2015-minute%20discovery%20call%20to%20discuss%20my%20project.%0A%0AMy%20preferred%20times%20are:%0A-%20[Please%20list%202-3%20preferred%20time%20slots]%0A%0AMy%20project%20details:%0A-%20Business/Project:%0A-%20Goals:%0A-%20Timeline:%0A-%20Budget%20range:%0A%0ALooking%20forward%20to%20hearing%20from%20you!%0A%0ABest%20regards"
  target="_blank"
  rel="noopener noreferrer"
  className="w-full bg-gray-800 border border-gray-700 text-white font-semibold py-3 px-6 rounded-xl hover:bg-gray-700 transition-colors duration-200 text-center block"
>
  Schedule via Gmail
</a>

                  </div>
                </div>
              )}
            </div>
            
            <p className="text-center text-gray-500 text-sm mt-4">
              Timezone: America/Edmonton • 15-minute call • Auto Zoom link
            </p>
            <p className="text-center mt-2">
              <button 
                onClick={handleDirectBooking} 
                className="text-violet-400 hover:text-violet-300 text-sm underline"
              >
                Having trouble? Open in new tab
              </button>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}