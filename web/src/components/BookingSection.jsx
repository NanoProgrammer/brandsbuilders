export default function BookingSection() {
  const CALCOM_USERNAME = "brandsbuilders";
  const EVENT_TYPE_SLUG = "15min";

  const handleDirectBooking = () => {
    window.open(`https://cal.com/${CALCOM_USERNAME}/${EVENT_TYPE_SLUG}`, "_blank");
  };

  return (
    <section
      id="booking-section"
      className="bg-slate-950 pt-20 pb-12 md:pt-28 md:pb-16"
      aria-labelledby="booking-title"
    >
      <div className="container mx-auto px-6">
        {/* Gradient card */}
        <div className="mx-auto max-w-3xl relative rounded-2xl p-[1px] bg-gradient-to-r from-violet-700/40 via-fuchsia-700/40 to-indigo-700/40">
          <div className="rounded-2xl bg-gray-950/80 border border-gray-800/70 backdrop-blur p-6 md:p-8">
            <div className="flex items-start md:items-center gap-5">
              {/* Icon */}
              <div className="shrink-0 h-12 w-12 rounded-xl bg-gradient-to-br from-violet-600 to-fuchsia-600 flex items-center justify-center shadow-[0_0_0_1px_rgba(255,255,255,0.06)]">
                <svg
                  className="h-6 w-6 text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>

              {/* Text & actions */}
              <div className="flex-1">
                <h2
                  id="booking-title"
                  className="text-white font-extrabold text-xl md:text-2xl tracking-tight"
                >
                  Book your{" "}
                  <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
                    15-min Discovery Call
                  </span>
                </h2>
                <p className="text-gray-400 text-sm md:text-base mt-1">
                  Pick a time that works best for you. We’ll review your goals, project scope, and timeline.
                </p>

                <div className="mt-5 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  <button
                    onClick={handleDirectBooking}
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 px-5 py-3 text-white font-semibold shadow-lg hover:scale-[1.02] transition-transform hover:shadow-violet-500/20"
                  >
                    Schedule now
                  </button>
                  <a
                    href={`https://mail.google.com/mail/?view=cm&fs=1&to=hello@brandsbuilders.agency&su=Discovery%20Call%20Request&body=Hi!%0A%0AI'd%20like%20to%20book%20a%2015-min%20discovery%20call.%0A%0APreferred%20times:%0A-%20%0A-%20%0A%0AProject%20quick%20notes:%0A-%20Business/Project:%0A-%20Goals:%0A-%20Timeline:%0A-%20Budget:%0A%0AThanks!`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-xl border border-slate-700 px-5 py-3 text-slate-200 hover:border-violet-500 hover:bg-violet-500/10 transition-colors"
                  >
                    Or email us
                  </a>
                </div>

                {/* Meta info */}
                <div className="mt-3 flex flex-wrap items-center gap-2 text-[12px] text-gray-500">
                  <span>Timezone: America/Edmonton</span>
                  <span className="hidden sm:inline">•</span>
                  <span>Zoom link auto-generated</span>
                  <span className="hidden sm:inline">•</span>
                  <span>Response within 24h</span>
                </div>
              </div>
            </div>
          </div>

          {/* Glow effect */}
          <div className="pointer-events-none absolute -inset-1 rounded-3xl blur-3xl opacity-20 bg-gradient-to-r from-violet-600/40 via-fuchsia-600/30 to-indigo-600/40" />
        </div>
      </div>
    </section>
  );
}
