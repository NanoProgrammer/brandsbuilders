import { useState, useEffect } from 'react';

interface FormDataShape {
  name: string;
  email: string;
  company: string;   // opcional
  website: string;   // opcional
  industry: string;
  goal: string;
  budget: string;
  timeline: string;
  consent: boolean;
}

interface FormErrors {
  [key: string]: string;
}

export default function IntakeForm() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState<FormDataShape>({
    name: '',
    email: '',
    company: '',
    website: '',
    industry: '',
    goal: '',
    budget: '',
    timeline: '',
    consent: false,
  });
  const [errors, setErrors] = useState<FormErrors>({});

  // VISIBILIDAD (igual que tu lógica original)
  useEffect(() => {
    const checkVisibility = () => {
      const stateEl = document.getElementById('section-state');
      const activeSection = stateEl?.getAttribute('data-active-section');
      if (!activeSection || activeSection === 'intake') setIsVisible(true);
      else setIsVisible(false);
    };
    checkVisibility();
    const stateEl = document.getElementById('section-state');
    const observer = new MutationObserver(checkVisibility);
    if (stateEl) observer.observe(stateEl, { attributes: true });
    return () => observer.disconnect();
  }, []);

  // Validación: todo requerido excepto company y website
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Please enter your name.';
    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Enter a valid email address.';
    }
    if (!formData.industry) newErrors.industry = 'Please select your industry.';
    if (!formData.goal.trim()) newErrors.goal = 'Please describe your main goal.';
    if (!formData.budget) newErrors.budget = 'Please select a budget range.';
    if (!formData.timeline) newErrors.timeline = 'Please select a timeline.';
    if (!formData.consent) newErrors.consent = 'Consent is required.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  // IMPORTANTE: si la validación falla, prevenimos el submit.
  // Si pasa, NO prevenimos y dejamos que Netlify procese y redirija a /thank-you.
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    if (!validateForm()) {
      e.preventDefault();
      return;
    }
    // sin preventDefault -> Netlify Forms procesa y redirige (action="/thank-you")
  };

  if (!isVisible) {
    return <div id="intake-section" className="py-16 bg-gradient-to-b from-gray-950 to-gray-900" />;
  }

  return (
    <section id="intake-section" className="py-16 bg-gradient-to-b from-gray-950 to-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-white">
            Tell us about
            <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
              {' '}your project
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Share some details about your business and goals. We’ll follow up shortly.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <form
            name="intake"
            method="POST"
            action="/thank-you"
            data-netlify="true"
            netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
            className="bg-gray-900/50 border border-gray-800 backdrop-blur-sm rounded-3xl p-8"
            noValidate
          >
            {/* Netlify hidden marker */}
            <input type="hidden" name="form-name" value="intake" />
            {/* Honeypot anti-spam */}
            <p className="hidden">
              <label>
                Don’t fill this out if you’re human: <input name="bot-field" />
              </label>
            </p>
            {/* Honeypot adicional (si decides validar en el server) */}
            <input type="text" name="website_url" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* Name (required) */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-colors"
                  placeholder="Your full name"
                />
                {errors.name && <div className="text-red-400 text-sm mt-1" role="alert">{errors.name}</div>}
              </div>

              {/* Email (required) */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-colors"
                  placeholder="your@email.com"
                />
                {errors.email && <div className="text-red-400 text-sm mt-1" role="alert">{errors.email}</div>}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* Company (optional) */}
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">Company (optional)</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-colors"
                  placeholder="Your company name"
                />
              </div>

              {/* Website (optional) */}
              <div>
                <label htmlFor="website" className="block text-sm font-medium text-gray-300 mb-2">Website (optional)</label>
                <input
                  type="url"
                  id="website"
                  name="website"
                  value={formData.website}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-colors"
                  placeholder="https://yourwebsite.com"
                />
              </div>
            </div>

            {/* Industry (required) */}
            <div className="mb-6">
              <label htmlFor="industry" className="block text-sm font-medium text-gray-300 mb-2">Industry *</label>
              <select
                id="industry"
                name="industry"
                required
                value={formData.industry}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-colors"
              >
                <option value="">Select your industry</option>
                <option value="med-spa">Med-spa</option>
                <option value="dental">Dental</option>
                <option value="hvac">HVAC</option>
                <option value="home-services">Home Services</option>
                <option value="other">Other</option>
              </select>
              {errors.industry && <div className="text-red-400 text-sm mt-1" role="alert">{errors.industry}</div>}
            </div>

            {/* Main Goal (required) */}
            <div className="mb-6">
              <label htmlFor="goal" className="block text-sm font-medium text-gray-300 mb-2">Main goal *</label>
              <textarea
                id="goal"
                name="goal"
                required
                rows={3}
                value={formData.goal}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-colors resize-none"
                placeholder="What's your main goal for this project?"
              />
              {errors.goal && <div className="text-red-400 text-sm mt-1" role="alert">{errors.goal}</div>}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* Budget (required) */}
              <div>
                <label htmlFor="budget" className="block text-sm font-medium text-gray-300 mb-2">Budget *</label>
                <select
                  id="budget"
                  name="budget"
                  required
                  value={formData.budget}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-colors"
                >
                  <option value="">Select budget range</option>
                  <option value="under-2k">Under $2,000</option>
                  <option value="2k-4k">$2,000 - $4,000</option>
                  <option value="4k-8k">$4,000 - $8,000</option>
                  <option value="8k-plus">$8,000+</option>
                </select>
                {errors.budget && <div className="text-red-400 text-sm mt-1" role="alert">{errors.budget}</div>}
              </div>

              {/* Timeline (required) */}
              <div>
                <label htmlFor="timeline" className="block text-sm font-medium text-gray-300 mb-2">Timeline *</label>
                <select
                  id="timeline"
                  name="timeline"
                  required
                  value={formData.timeline}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-colors"
                >
                  <option value="">Select timeline</option>
                  <option value="asap">ASAP</option>
                  <option value="1-2-months">1-2 months</option>
                  <option value="3-6-months">3-6 months</option>
                  <option value="not-sure">Not sure yet</option>
                </select>
                {errors.timeline && <div className="text-red-400 text-sm mt-1" role="alert">{errors.timeline}</div>}
              </div>
            </div>

            {/* Consent (required) */}
            <div className="mb-8">
              <label className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="consent"
                  name="consent"
                  required
                  checked={formData.consent}
                  onChange={handleInputChange}
                  className="mt-1 w-4 h-4 text-violet-600 border-gray-600 rounded focus:ring-violet-500 focus:ring-2 bg-gray-800"
                />
                <span className="text-sm text-gray-400 leading-relaxed">
                  I agree to be contacted by BrandsBuilders Agency via email, phone, or text regarding my inquiry.
                  I understand I can unsubscribe at any time. By submitting this form, I consent to the collection,
                  use, and disclosure of my personal information in accordance with applicable privacy laws. *
                </span>
              </label>
              {errors.consent && <div className="text-red-400 text-sm mt-1" role="alert">{errors.consent}</div>}
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white font-bold py-4 px-8 rounded-xl hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-violet-500/25 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Send My Project Details
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
