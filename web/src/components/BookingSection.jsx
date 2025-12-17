export default function BookingSection() {
  return (
    <section className="bg-slate-950 py-16">
      <div className="container mx-auto px-6 max-w-3xl text-slate-400">
        <p className="text-sm">
          If you already know you want to speak directly,
          you may optionally book a short call instead of applying.
        </p>

        <a
          href="https://cal.com/brandsbuilders/15min"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 border border-slate-700 px-5 py-2 text-white hover:border-slate-500 transition"
        >
          Book a 15-minute call →
        </a>
      </div>
    </section>
  );
}
