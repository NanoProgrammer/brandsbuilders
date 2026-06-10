export default function BookingSection() {
  function gtagReportConversion() {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag('event', 'conversion', { send_to: 'AW-17710658719/wq67CJeHgskbEJ_pjP1B' });
    }
  }
  return (
    <section className="bg-white py-14 border-b border-gray-200">
      <div className="container mx-auto px-6 max-w-2xl text-center">
        <div className="bg-gray-50 border border-gray-200 rounded-xl px-8 py-8">
          <p className="text-gray-900 text-lg font-medium">Prefer to talk first?</p>
          <p className="text-gray-600 text-sm mt-2 max-w-md mx-auto">
            Book a short call. We'll check fit and see if the Revenue Efficiency System makes sense for your business.
          </p>
          <div className="mt-5 flex flex-col sm:flex-row gap-3 justify-center">
            <a href="https://cal.com/brandsbuilders/30-min" target="_blank" rel="noopener noreferrer" onClick={gtagReportConversion}
              className="inline-flex px-6 py-3 rounded-lg font-semibold text-white bg-orange-600 hover:bg-orange-700 transition">
              Book a Call →
            </a>
          </div>
          <p className="mt-3 text-xs text-gray-500">No pitch. Just a fit check.</p>
        </div>
      </div>
    </section>
  );
}