import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, ChevronDown, CheckCircle2, Award, Quote, HelpCircle } from 'lucide-react';
import { TESTIMONIALS_DATA, FAQS_DATA } from '../data/boreholeData';
import { FaqItem } from '../types';

export default function TestimonialsAndFaq() {
  const [activeFaq, setActiveFaq] = useState<string | null>(null);
  const [faqFilter, setFaqFilter] = useState<string>('all');

  const handleFaqToggle = (id: string) => {
    setActiveFaq(activeFaq === id ? null : id);
  };

  const filteredFaqs = faqFilter === 'all'
    ? FAQS_DATA
    : FAQS_DATA.filter(faq => faq.category === faqFilter);

  const categories = [
    { tag: 'all', name: 'All Questions' },
    { tag: 'general', name: 'General' },
    { tag: 'drilling', name: 'Drilling Process' },
    { tag: 'pricing', name: 'Pricing & Solar' },
    { tag: 'maintenance', name: 'Maintenance & Support' }
  ];

  return (
    <div id="testimonials-faq-wrapper">
      
      {/* Testimonials Slider/Grid */}
      <section id="testimonials" className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-2 block">
              What Clients Say
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
              Trusted by Homesteads, Communities, & Businesses
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Nothing speaks louder than water flowing in families' gardens. Read testimonials from our local clients across Kwekwe and Gweru.
            </p>
          </div>

          {/* Testimonials Grid (2 columns on tablet, 3 on desktop) */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            {TESTIMONIALS_DATA.map((testimonial, idx) => (
              <div
                key={testimonial.id}
                id={`testimonial-${testimonial.id}`}
                className="bg-slate-50 p-6 sm:p-7 rounded-2xl border border-slate-100 flex flex-col justify-between hover:bg-white hover:shadow-xl transition-all duration-300 group"
              >
                <div>
                  {/* Quotes representation */}
                  <div className="flex justify-between items-center mb-5">
                    <div className="flex items-center gap-0.5" id={`rating-stars-${idx}`}>
                      {Array.from({ length: 5 }).map((_, sIdx) => (
                        <Star key={sIdx} className="w-4 h-4 fill-amber-400 text-amber-400 shrink-0" />
                      ))}
                    </div>
                    <Quote className="w-8 h-8 text-blue-200 group-hover:text-blue-500 transition-colors" />
                  </div>

                  <p className="text-xs sm:text-sm text-slate-650 leading-relaxed italic mb-6">
                    "{testimonial.text}"
                  </p>
                </div>

                {/* Profile detail */}
                <div className="pt-4 border-t border-slate-200/50 flex flex-col justify-end">
                  <div className="flex items-center gap-1.5">
                    <span className="font-extrabold text-slate-900 text-sm">{testimonial.name}</span>
                    {testimonial.verified && (
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 fill-blue-50 shrink-0" />
                    )}
                  </div>
                  <div className="flex items-center justify-between text-[11px] text-slate-450 mt-1">
                    <span className="font-semibold">{testimonial.role}</span>
                    <span className="font-bold text-blue-600">{testimonial.location}</span>
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* FAQs Collapsible Category Slider */}
      <section id="faq" className="py-20 bg-slate-50 border-t border-slate-100 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-2 block animate-pulse">
              Common Questions
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-605 text-sm sm:text-base max-w-xl mx-auto">
              Everything you need to know about water dowsing, drilling core casing depth parameters, and solar powered systems in Zimbabwe.
            </p>
          </div>

          {/* Filtering Slider */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10 text-xs sm:text-sm">
            {categories.map((cat) => (
              <button
                key={cat.tag}
                id={`faq-filter-${cat.tag}`}
                onClick={() => setFaqFilter(cat.tag)}
                className={`py-1.5 px-3.5 rounded-xl font-bold border transition-colors cursor-pointer ${
                  faqFilter === cat.tag
                    ? 'bg-blue-600 text-white border-blue-605 shadow-xs'
                    : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-100'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* FAQS Accordion list */}
          <div className="space-y-4 text-left">
            <AnimatePresence mode="popLayout animate-fadeIn">
              {filteredFaqs.map((faq, index) => {
                const isOpen = activeFaq === faq.id;
                return (
                  <motion.div
                    layout
                    key={faq.id}
                    id={`faq-item-${faq.id}`}
                    className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-xs"
                  >
                    <button
                      id={`faq-btn-${faq.id}`}
                      onClick={() => handleFaqToggle(faq.id)}
                      className="w-full p-5 flex items-center justify-between text-left gap-4 font-bold text-slate-900 hover:text-blue-600 focus:outline-none cursor-pointer"
                    >
                      <span className="text-sm sm:text-base pr-2 leading-snug">{faq.question}</span>
                      <ChevronDown className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          id={`faq-ans-${faq.id}`}
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                          className="overflow-hidden"
                        >
                          <div className="p-5 pt-0 border-t border-slate-50 text-xs sm:text-sm text-slate-600 leading-relaxed bg-slate-50/50">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </AnimatePresence>
            
            {filteredFaqs.length === 0 && (
              <div className="text-center p-8 bg-white border border-slate-150 rounded-2xl text-slate-500 font-semibold">
                No questions found under this category.
              </div>
            )}
          </div>

          {/* Quick contact suggestion */}
          <div className="mt-12 text-center bg-blue-50/40 p-6 rounded-2xl border border-blue-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-left font-sans">
            <div>
              <p className="font-bold text-slate-900 text-sm">Have a unique question about your soil or project?</p>
              <p className="text-xs text-slate-500 mt-0.5">Let our field specialists give you personalized answers over phone or WhatsApp.</p>
            </div>
            <a
              id="faq-help-whatsapp"
              href="https://wa.me/263776731708?text=Hello%20Makoni%20Drilling.%20I%2520have%20some%20questions%20regarding%20the%20borehole%20drilling%20process."
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl shadow-xs shrink-0 cursor-pointer"
            >
              Ask on WhatsApp
            </a>
          </div>

        </div>
      </section>

    </div>
  );
}
