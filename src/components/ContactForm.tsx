import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, MessageSquare, MapPin, Clock, Send, ShieldCheck, Mail, CheckCircle2 } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    location: '',
    propertyType: 'Residential',
    message: '',
  });
  
  const [isSubmitSuccess, setIsSubmitSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    
    // Auto compile to WhatsApp for conversion
    const compiledMsg = `Hello Makoni Drilling Kwekwe! 💧 

I am interested in requesting an official site inspection or borehole drilling proposal. Here are my preliminary contact details:

- Name: ${formData.name}
- Phone Number: ${formData.phone}
- Property Location: ${formData.location}
- Property Profile: ${formData.propertyType}
- Specific Details: ${formData.message || 'No additional message.'}

Please let me know how soon we can coordinate the geological siting survey!`;

    const encoded = encodeURIComponent(compiledMsg);
    const waUrl = `https://wa.me/263776731708?text=${encoded}`;
    
    // Open in new tab
    window.open(waUrl, '_blank');
    
    // Show local success flow
    setIsSubmitSuccess(true);
  };

  const handleResetForm = () => {
    setFormData({
      name: '',
      phone: '',
      location: '',
      propertyType: 'Residential',
      message: '',
    });
    setIsSubmitSuccess(false);
  };

  return (
    <section id="contact" className="py-20 bg-white relative">
      <div className="absolute top-0 left-0 w-full h-24 bg-linear-to-b from-slate-50 to-white" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-stretch">
          
          {/* Information Block on Left (5 columns) */}
          <div id="contact-info-panel" className="lg:col-span-5 text-left flex flex-col justify-between space-y-10">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-2 block font-mono">
                Start Today
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-5">
                Need Reliable Water at Your Property?
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Contact Makoni Drilling Kwekwe today for professional borehole drilling and water solutions across Kwekwe, Gweru, and the wider Midlands province. Let us secure a life-long source of pure, reliable water for your home, plot, farm, garden, or business.
              </p>
            </div>

            {/* Structured Info Card list */}
            <div id="contact-details-cards" className="space-y-5">
              
              {/* Phone / WA */}
              <div className="flex items-center gap-4.5 p-4 bg-slate-50 border border-slate-100 rounded-2xl">
                <div className="w-11 h-11 bg-emerald-50 border border-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center shrink-0">
                  <MessageSquare className="w-5.2 h-5.2 fill-emerald-100" />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold text-slate-400 font-mono">Phone / WhatsApp</p>
                  <a
                    href="https://wa.me/263776731708"
                    target="_blank"
                    rel="noreferrer"
                    className="text-base font-extrabold text-slate-900 hover:text-blue-600 transition-colors block"
                  >
                    0776 731708
                  </a>
                </div>
              </div>

              {/* Physical Location */}
              <div className="flex items-center gap-4.5 p-4 bg-slate-50 border border-slate-100 rounded-2xl">
                <div className="w-11 h-11 bg-blue-101 border border-blue-105 text-blue-600 rounded-xl flex items-center justify-center shrink-0">
                  <MapPin className="w-5.2 h-5.2" />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold text-slate-400 font-mono">Our Head Office</p>
                  <p className="text-sm font-extrabold text-slate-900">
                    Nehanda, Que Que (Kwekwe), Zimbabwe
                  </p>
                </div>
              </div>

              {/* Business Hours */}
              <div className="flex items-center gap-4.5 p-4 bg-slate-50 border border-slate-100 rounded-2xl">
                <div className="w-11 h-11 bg-cyan-50 border border-cyan-100 text-cyan-600 rounded-xl flex items-center justify-center shrink-0">
                  <Clock className="w-5.2 h-5.2" />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold text-slate-400 font-mono">Operations Hours</p>
                  <p className="text-sm font-extrabold text-slate-800">
                    Monday – Saturday: 7:00 AM – 6:00 PM <br className="sm:hidden" />
                    <span className="text-[11px] font-medium text-slate-400">(Emergency support active)</span>
                  </p>
                </div>
              </div>

            </div>

            {/* Direct Instant Action Row */}
            <div id="contact-action-trigger" className="pt-4 border-t border-slate-100 grid grid-cols-2 gap-3 pb-2 w-full">
              <a
                id="contact-call-now"
                href="tel:0776731708"
                className="flex items-center justify-center gap-2.5 px-6 py-4 bg-slate-900 hover:bg-slate-800 text-white rounded-xl font-bold shadow-md hover:-translate-y-0.5 transition-all text-center"
              >
                <Phone className="w-4 h-4 text-white fill-white" />
                <span>Call Now</span>
              </a>
              <a
                id="contact-wa-chat"
                href="https://wa.me/263776731708?text=Hello%20Makoni%20Drilling%20Kwekwe.%20I%20am%20looking%20for%20assistance%20on%20installing%20a%20borehole."
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2.5 px-6 py-4 bg-[#25d366] hover:bg-[#20ba5a] text-white rounded-xl font-bold shadow-lg shadow-[#25d366]/15 hover:-translate-y-0.5 transition-all text-center"
              >
                <MessageSquare className="w-4 h-4 fill-white" />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>

          {/* Form container on Right (7 columns) */}
          <div id="contact-form-block" className="lg:col-span-7 bg-slate-50/50 rounded-3xl border border-slate-100 p-6 sm:p-10 text-left flex flex-col justify-between">
            <AnimatePresence mode="wait">
              {!isSubmitSuccess ? (
                <motion.form
                  key="contact-form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >
                  <span className="text-xs font-bold text-blue-600 block uppercase tracking-widest font-mono">Quick Lead Portal</span>
                  <h3 className="text-lg font-black text-slate-900 leading-snug">
                    Schedule Siting Survey & Quotation Check
                  </h3>
                  <p className="text-xs text-slate-500 leading-normal mb-2">
                    Fill out your preliminary plans. Submitting opens a direct WhatsApp channel instantly pre-formatted with these details.
                  </p>

                  {/* Name */}
                  <div className="space-y-1.5 flex flex-col">
                    <label htmlFor="input-name" className="text-xs font-bold text-slate-700">Full Name</label>
                    <input
                      id="input-name"
                      type="text"
                      required
                      placeholder="e.g., Tatenda Makoni"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3.2 bg-white rounded-xl border border-slate-201 outline-hidden focus:border-blue-600 focus:ring-4 focus:ring-blue-50 text-sm placeholder-slate-400 font-semibold text-slate-900"
                    />
                  </div>

                  {/* Phone */}
                  <div className="space-y-1.5 flex flex-col">
                    <label htmlFor="input-phone" className="text-xs font-bold text-slate-700">Direct Contact Number</label>
                    <input
                      id="input-phone"
                      type="tel"
                      required
                      placeholder="e.g., 0776 731708"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3.2 bg-white rounded-xl border border-slate-201 outline-hidden focus:border-blue-600 focus:ring-4 focus:ring-blue-50 text-sm placeholder-slate-400 font-semibold text-slate-900"
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    {/* Location target */}
                    <div className="space-y-1.5 flex flex-col">
                      <label htmlFor="input-location" className="text-xs font-bold text-slate-700">Sub-Region / Location</label>
                      <input
                        id="input-location"
                        type="text"
                        placeholder="e.g., Chicago, Gweru Ascot"
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        className="w-full px-4 py-3.2 bg-white rounded-xl border border-slate-201 outline-hidden focus:border-blue-600 focus:ring-4 focus:ring-blue-50 text-sm placeholder-slate-400 font-semibold text-slate-900"
                      />
                    </div>

                    {/* Property Profile */}
                    <div className="space-y-1.5 flex flex-col">
                      <label htmlFor="input-property" className="text-xs font-bold text-slate-700">Property Category</label>
                      <select
                        id="input-property"
                        value={formData.propertyType}
                        onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                        className="w-full px-4 py-3.2 bg-white rounded-xl border border-slate-201 outline-hidden focus:border-blue-600 focus:ring-4 focus:ring-blue-50 text-sm text-slate-900 font-semibold h-[46px] select-none decoration-none"
                      >
                        <option value="Residential">Residential / Home</option>
                        <option value="Agricultural">Agricultural / Plot</option>
                        <option value="Commercial">Commercial / Factory</option>
                        <option value="Institutional">School / Clinic / Church</option>
                      </select>
                    </div>
                  </div>

                  {/* Message details */}
                  <div className="space-y-1.5 flex flex-col">
                    <label htmlFor="input-message" className="text-xs font-bold text-slate-700">Scope Details / Notes (Optional)</label>
                    <textarea
                      id="input-message"
                      rows={3}
                      placeholder="e.g., I have a sand issue near Shurugwi road and want depth specs, or I want a solar storage tank stand."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3.2 bg-white rounded-xl border border-slate-201 outline-hidden focus:border-blue-600 focus:ring-4 focus:ring-blue-50 text-sm placeholder-slate-400 font-semibold text-slate-900 resize-none font-sans"
                    />
                  </div>

                  {/* Submit trigger button */}
                  <button
                    id="submit-contact-btn"
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold transition-all shadow-md mt-6 cursor-pointer"
                  >
                    <Send className="w-4 h-4 text-white" />
                    <span>Submit & Open WhatsApp</span>
                  </button>

                  <div className="text-[10px] text-slate-450 text-center leading-normal mt-2 italic">
                    * Submitting uses WhatsApp redirect. Direct calls are immediate. No credit cards needed.
                  </div>

                </motion.form>
              ) : (
                <motion.div
                  key="submit-success-block"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  className="p-8 text-center bg-white border border-slate-100 rounded-3xl shadow-md min-h-[350px] flex flex-col justify-center items-center"
                >
                  <div className="w-16 h-16 bg-blue-101 border border-blue-200 text-blue-600 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-9 h-9 fill-blue-50 animate-bounce" />
                  </div>
                  <h3 className="text-xl font-black text-slate-900 mb-2 leading-snug">
                    Specifications Forwarded Successfully!
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 max-w-sm leading-relaxed mb-6">
                    Your preliminary water solutions request has been successfully pre-formatted. If WhatsApp did not open automatically, look up our number at <strong className="text-slate-800">0776 731708</strong>!
                  </p>
                  
                  <button
                    id="reset-form-btn"
                    onClick={handleResetForm}
                    className="px-6 py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs rounded-xl"
                  >
                    Reset Form
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
