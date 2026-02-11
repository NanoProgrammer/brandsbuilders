export default function BookingSection() {

  function gtagReportConversion() {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag('event', 'conversion', {
        send_to: 'AW-17710658719/wq67CJeHgskbEJ_pjP1B'
      });
    }
  }

  return (
    <section className="bg-slate-950 py-20 border-b border-slate-800">
      <div className="container mx-auto px-6 max-w-5xl text-center reveal">

        <div className="inline-block px-10 py-6 rounded-2xl border border-slate-800 bg-slate-900/60">

          <p className="text-white text-lg font-medium">
            Prefer to talk first?
          </p>

          <p className="text-slate-400 text-sm mt-2 max-w-xl mx-auto">
            Book a short strategy call.  
            We’ll check fit, review your current website,
            and confirm if an upfront build makes sense for your business.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">

            <a
              href="https://cal.com/brandsbuilders/30-min"
              target="_blank"
              rel="noopener noreferrer"
              onClick={gtagReportConversion}
              className="inline-flex px-8 py-3 rounded-xl font-semibold
                         bg-gradient-to-r from-orange-500 via-pink-500 to-fuchsia-600
                         text-white hover:opacity-95 transition"
            >
              Book Strategy Call →
            </a>

            <a
              href="/apply"
              className="inline-flex px-8 py-3 rounded-xl font-semibold
                         border border-slate-600 text-slate-300
                         hover:text-white hover:border-slate-400 transition"
            >
              Apply Instead →
            </a>

          </div>

          <p className="mt-4 text-xs text-slate-500">
            No pitch. Just fit + scope check.
          </p>

        </div>

      </div>
    </section>
  );
}
