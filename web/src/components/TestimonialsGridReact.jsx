'use client'
import React, { useState } from 'react';


const TestimonialsGridReact = () => {
  const [visibleCount, setVisibleCount] = useState(6);
  const [isLoading, setIsLoading] = useState(false);

  const allTestimonials = [
    {
      id: 1,
      rating: 5,
      date: '2 weeks ago',
      text: "Exceptional service and results! Our website traffic increased by 300% and we're getting quality leads daily.",
      author: 'Lisa Brown',
      position: 'Founder, Brown & Associates',
      initials: 'LB',
      borderColor: 'border-violet-500/20 hover:border-violet-400/40',
      bgGradient: 'from-violet-500 to-purple-500'
    },
    {
      id: 2,
      rating: 5,
      date: '1 month ago',
      text: "The team understood our vision perfectly. Our new brand identity has received incredible feedback from customers.",
      author: 'Tom Chen',
      position: 'Director, Chen Architecture',
      initials: 'TC',
      borderColor: 'border-fuchsia-500/20 hover:border-fuchsia-400/40',
      bgGradient: 'from-fuchsia-500 to-pink-500'
    },
    {
      id: 3,
      rating: 5,
      date: '3 weeks ago',
      text: "Professional, creative, and results-driven. They delivered beyond our expectations and on time.",
      author: 'Sarah Green',
      position: 'CEO, GreenTech Solutions',
      initials: 'SG',
      borderColor: 'border-indigo-500/20 hover:border-indigo-400/40',
      bgGradient: 'from-indigo-500 to-blue-500'
    },
    {
      id: 4,
      rating: 5,
      date: '1 week ago',
      text: "Our online sales tripled after the website redesign. The SEO optimization was exactly what we needed.",
      author: 'Michael Johnson',
      position: 'Owner, Johnson Automotive',
      initials: 'MJ',
      borderColor: 'border-emerald-500/20 hover:border-emerald-400/40',
      bgGradient: 'from-emerald-500 to-teal-500'
    },
    {
      id: 5,
      rating: 5,
      date: '2 months ago',
      text: "They transformed our outdated brand into something modern and compelling. Customer engagement is up 250%.",
      author: 'Rachel Williams',
      position: 'Marketing Director, Williams Corp',
      initials: 'RW',
      borderColor: 'border-orange-500/20 hover:border-orange-400/40',
      bgGradient: 'from-orange-500 to-red-500'
    },
    {
      id: 6,
      rating: 5,
      date: '5 days ago',
      text: "Best investment we've made for our business. The ROI was immediate and continues to grow every month.",
      author: 'Kevin Lee',
      position: 'Founder, Lee Consulting',
      initials: 'KL',
      borderColor: 'border-cyan-500/20 hover:border-cyan-400/40',
      bgGradient: 'from-cyan-500 to-blue-500'
    },
    {
      id: 7,
      rating: 5,
      date: '3 days ago',
      text: "Outstanding work! Our conversion rate doubled and customer feedback has been phenomenal.",
      author: 'Amanda Foster',
      position: 'CEO, Foster Digital',
      initials: 'AF',
      borderColor: 'border-purple-500/20 hover:border-purple-400/40',
      bgGradient: 'from-purple-500 to-violet-500'
    },
    {
      id: 8,
      rating: 5,
      date: '1 month ago',
      text: "The attention to detail is incredible. Every aspect of our digital presence now reflects our brand perfectly.",
      author: 'Robert Martinez',
      position: 'Owner, Martinez Construction',
      initials: 'RM',
      borderColor: 'border-rose-500/20 hover:border-rose-400/40',
      bgGradient: 'from-rose-500 to-pink-500'
    },
    {
      id: 9,
      rating: 5,
      date: '2 weeks ago',
      text: "Their strategic approach to our digital marketing campaign resulted in 400% more qualified leads.",
      author: 'Jennifer Walsh',
      position: 'Director, Walsh Consulting',
      initials: 'JW',
      borderColor: 'border-teal-500/20 hover:border-teal-400/40',
      bgGradient: 'from-teal-500 to-emerald-500'
    },
    {
      id: 10,
      rating: 5,
      date: '4 days ago',
      text: "Incredible team to work with. They understood our goals and delivered results that exceeded expectations.",
      author: 'David Thompson',
      position: 'Founder, Thompson Analytics',
      initials: 'DT',
      borderColor: 'border-blue-500/20 hover:border-blue-400/40',
      bgGradient: 'from-blue-500 to-indigo-500'
    },
    {
      id: 11,
      rating: 5,
      date: '1 week ago',
      text: "The website redesign was flawless. Load times improved by 60% and user engagement is through the roof.",
      author: 'Nicole Parker',
      position: 'CEO, Parker Solutions',
      initials: 'NP',
      borderColor: 'border-amber-500/20 hover:border-amber-400/40',
      bgGradient: 'from-amber-500 to-orange-500'
    },
    {
      id: 12,
      rating: 5,
      date: '6 days ago',
      text: "Professional, responsive, and results-oriented. Our brand now stands out in a crowded market.",
      author: 'Mark Rodriguez',
      position: 'Owner, Rodriguez Fitness',
      initials: 'MR',
      borderColor: 'border-lime-500/20 hover:border-lime-400/40',
      bgGradient: 'from-lime-500 to-green-500'
    }
  ];

  const handleLoadMore = () => {
    setIsLoading(true);
    // Simular carga de datos
    setTimeout(() => {
      setVisibleCount(prev => Math.min(prev + 6, allTestimonials.length));
      setIsLoading(false);
    }, 800);
  };

  const visibleTestimonials = allTestimonials.slice(0, visibleCount);
  const hasMore = visibleCount < allTestimonials.length;

  return (
    <section className="py-24 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-violet-600 to-purple-600 rounded-full mix-blend-multiply filter blur-xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-br from-fuchsia-600 to-pink-600 rounded-full mix-blend-multiply filter blur-xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            What Our Clients Say
          </h2>
          <p className="text-slate-400 text-xl max-w-2xl mx-auto">
            Authentic feedback from businesses across Alberta
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {visibleTestimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-2xl p-6 border ${testimonial.borderColor} transition-all duration-500 hover:-translate-y-2`}
              style={{
                animationDelay: `${(index % 6) * 100}ms`,
                animation: index >= visibleCount - 6 ? 'fadeInUp 0.6s ease-out forwards' : 'none'
              }}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="text-yellow-400 text-lg">
                  {'★'.repeat(testimonial.rating)}
                </div>
                <div className="text-slate-400 text-sm">{testimonial.date}</div>
              </div>
              <blockquote className="text-slate-200 leading-relaxed mb-6">
                {testimonial.text}
              </blockquote>
              <div className="flex items-center space-x-3">
                <div className={`w-10 h-10 bg-gradient-to-br ${testimonial.bgGradient} rounded-full flex items-center justify-center text-white font-bold text-sm`}>
                  {testimonial.initials}
                </div>
                <div>
                  <div className="text-white font-semibold">{testimonial.author}</div>
                  <div className="text-slate-400 text-sm">{testimonial.position}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {hasMore && (
          <div className="text-center mt-12">
            <button
              onClick={handleLoadMore}
              disabled={isLoading}
              className="group relative btn btn-primary disabled:cursor-not-allowed disabled:transform-none"
            >
              <span className="relative z-10 flex items-center space-x-2">
                {isLoading ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>Loading...</span>
                  </>
                ) : (
                  <>
                    <span>View More Reviews</span>
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </>
                )}
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-violet-400 to-fuchsia-400 rounded-full opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300"></div>
            </button>
          </div>
        )}

        {/* Reviews Counter */}
        <div className="text-center mt-8">
          <p className="text-slate-400 text-sm">
            Showing {visibleCount} of {allTestimonials.length} reviews
            {!hasMore && (
              <span className="text-violet-400 ml-2">• All reviews loaded</span>
            )}
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default TestimonialsGridReact;