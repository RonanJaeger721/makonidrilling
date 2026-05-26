import { useState } from 'react';
import { motion } from 'motion/react';
import { Hammer, Home, Wrench, Droplet, Zap, ShieldCheck, ArrowRight, Check } from 'lucide-react';
import { SERVICES_DATA } from '../data/boreholeData';
import { ServiceItem } from '../types';

export default function Services() {
  const [activeTab, setActiveTab] = useState<string>('drilling');

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Hammer': return Hammer;
      case 'Home': return Home;
      case 'Wrench': return Wrench;
      case 'Droplet': return Droplet;
      case 'Radio': return Zap; // smart electric setups mapped to Zap
      case 'ShieldCheck': return ShieldCheck;
      default: return Droplet;
    }
  };

  const selectedService = SERVICES_DATA.find(s => s.id === activeTab) || SERVICES_DATA[0];

  return (
    <section id="services" className="py-20 bg-slate-50/50 border-t border-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header content */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-2 block">
            Our Specialties
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
            Professional Water Solutions Tailored to Your Property
          </h2>
          <p className="text-slate-650 text-sm sm:text-base">
            From initial geophysical surveys to final pipes and solar integrations, we cover every phase to provide a clean water source that fits your volume needs.
          </p>
        </div>

        {/* Tab-like Grid Layout for Desktop, detailed cards for Mobile */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Services Left Navigator (5 cols) */}
          <div id="services-tabs" className="lg:col-span-5 space-y-3.5 text-left">
            {SERVICES_DATA.map((service) => {
              const IconComponent = getIcon(service.icon);
              const isSelected = activeTab === service.id;
              
              return (
                <button
                  key={service.id}
                  id={`service-tab-${service.id}`}
                  onClick={() => setActiveTab(service.id)}
                  className={`w-full p-4.5 rounded-2xl border text-left flex items-start gap-4 transition-all duration-300 cursor-pointer ${
                    isSelected
                      ? 'bg-white border-blue-600 shadow-md ring-4 ring-blue-50'
                      : 'bg-white/60 border-slate-100 hover:border-slate-300 hover:bg-white shadow-xs'
                  }`}
                >
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                    isSelected ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-600 group-hover:bg-slate-200'
                  }`}>
                    <IconComponent className="w-5.2 h-5.2" />
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                      {service.title}
                    </h3>
                    <p className="text-xs text-slate-500 mt-1 line-clamp-1 block leading-normal">
                      {service.description}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Detail Display Right (7 cols) */}
          <div id="services-details-container" className="lg:col-span-7 bg-white p-6 sm:p-10 rounded-3xl border border-slate-100 shadow-xl text-left relative min-h-[440px] flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-24 h-24 bg-linear-to-bl from-blue-50/50 to-transparent rounded-tr-3xl rounded-bl-[50px]" />
            
            <div id="service-details-body">
              {/* Service Hero Info */}
              <div className="flex items-center gap-3.5 mb-6">
                <span className="p-3 bg-blue-105 text-blue-600 rounded-2xl flex items-center justify-center">
                  {(() => {
                    const DynIcon = getIcon(selectedService.icon);
                    return <DynIcon className="w-6.5 h-6.5" />;
                  })()}
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-950 tracking-tight">
                  {selectedService.title}
                </h3>
              </div>

              {/* Main Description */}
              <p className="text-slate-650 text-base leading-relaxed mb-8">
                {selectedService.description}
              </p>

              {/* Specific deliverables bullet list */}
              <div id="service-bullets" className="border-t border-slate-100 pt-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-450 mb-4">
                  What is Included in This Service:
                </h4>
                <div className="grid sm:grid-cols-2 gap-3">
                  {selectedService.details.map((detail, index) => (
                    <div
                      key={detail}
                      id={`detail-bullet-${index}`}
                      className="flex items-start gap-2.5 text-sm text-slate-750"
                    >
                      <div className="w-4.5 h-4.5 bg-sky-50 text-sky-650 border border-sky-100 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                      <span className="leading-snug">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Direct Service specific Call to Action */}
            <div id="service-cta" className="mt-10 pt-6 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="text-left">
                <p className="text-xs text-slate-500 font-mono">Service Code: MKN-{selectedService.id.toUpperCase()}</p>
                <p className="text-[10px] font-semibold text-blue-600 uppercase tracking-widest mt-0.5">Turnkey Midlands Execution</p>
              </div>
              
              <a
                id={`service-inquire-${selectedService.id}`}
                href={`https://wa.me/263776731708?text=Hello%20Makoni%20Drilling%20Kwekwe.%20I%20would%20like%20to%20inquire%20specifically%20about%20your%20%22${encodeURIComponent(selectedService.title)}%22%2520service%20for%20my%20property.`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#25d366] hover:bg-[#20ba5a] text-white font-bold rounded-xl shadow-md transition-all cursor-pointer"
              >
                <span>Inquire on WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
