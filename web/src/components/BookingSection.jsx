export default function BookingSection() {
  return (
    <section className="bg-slate-950 py-20 border-b border-slate-800">
      <div className="container mx-auto px-6 max-w-5xl text-center reveal">

        <div className="inline-block px-8 py-4 rounded-xl border border-slate-800 bg-slate-900/60">
          <p className="text-slate-300">
            Already decided?
          </p>

          <p className="text-slate-500 text-sm mt-1">
            Skip the form and book directly.
          </p>

          <a
            href="https://cal.com/brandsbuilders/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex mt-4 px-8 py-3 rounded-xl font-semibold
                       border border-slate-600 text-white
                       hover:border-slate-400 transition"
          >
            Book Free Leak Scan →
          </a>
        </div>

      </div>
    </section>
  );
}
