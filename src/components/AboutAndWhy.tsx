import { motion } from 'motion/react';
import { Shield, Sparkles, MapPin, Wrench, Award, Clock, ThumbsUp, Check, Droplet, UserCheck } from 'lucide-react';
import { HERO_RESOURCES } from '../data/boreholeData';

interface AboutAndWhyProps {
  onNavigate: (sectionId: string) => void;
}

export default function AboutAndWhy({ onNavigate }: AboutAndWhyProps) {
  const whyChooseUs = [
    {
      title: 'Professional Drilling Expertise',
      desc: 'Formidable geophysics & geology partners ensuring precise siting before any drills touch your property core.',
      icon: Award,
      color: 'text-blue-600 bg-blue-50'
    },
    {
      title: 'Reliable Service Delivery',
      desc: 'Transparent workflows, upfront fair pricing, and clear reporting on depth, casings, and water yield statistics.',
      icon: Shield,
      color: 'text-cyan-600 bg-cyan-55'
    },
    {
      title: 'Full Midlands Province Coverage',
      desc: 'Dedicated local service fleets stationed in Kwekwe and Gweru, ensuring ultra-fast mobilization. No massive transport bills.',
      icon: MapPin,
      color: 'text-emerald-600 bg-emerald-50'
    },
    {
      title: 'Residential & Domestic Solutions',
      desc: 'Bespoke systems tailored for households, integrating solar storage, booster pumps, and automatic water switches seamlessly.',
      icon: UserCheck,
      color: 'text-purple-600 bg-purple-50'
    },
    {
      title: 'Modern Drilling Equipment',
      desc: 'Highly maintained heavy rotary pneumatic drills capable of cutting through solid basalt, quartz veins, and deep granite profiles.',
      icon: Wrench,
      color: 'text-amber-600 bg-amber-50'
    },
    {
      title: 'Trusted Local Service',
      desc: 'We are a member of the Zimbabwean community. We work closely with local builders, schools, and civic projects.',
      icon: ThumbsUp,
      color: 'text-rose-600 bg-rose-50'
    },
    {
      title: 'Fast Response Times',
      desc: 'Get answers quickly over WhatsApp, on-site survey bookings within 24 hours, and standard drill times under 1 day.',
      icon: Clock,
      color: 'text-indigo-600 bg-indigo-50'
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Consultation & Site Visit',
      desc: 'We discuss your household water volume needs. Our professional hydro-geologist performs electrical resistivity testing to site the most reliable aquifer site.'
    },
    {
      step: '02',
      title: 'Borehole Drilling',
      desc: 'Our specialized heavy-duty drilling rig arrives on site. We drill down to water levels, lining the shaft with high-durability Class 9 or 12 PVC casings.'
    },
    {
      step: '03',
      title: 'Water Testing',
      desc: 'We flush the borehole until the water is clear and pure. We measure the aquifer yield curve (litres per hour) to size your pump system correctly.'
    },
    {
      step: '04',
      title: 'Pump Installation & Setup',
      desc: 'We install the high-grade solar or electrical submersible pump, position your storage tank, build a concrete protection seal, and test the faucet supply.'
    }
  ];

  return (
    <div id="about-parent-wrapper">
      
      {/* About Section */}
      <section id="about" className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Visual Left Block */}
            <div id="about-visuals" className="relative">
              <div className="absolute inset-0 bg-blue-100 rounded-3xl -rotate-2" />
              <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-slate-50">
                <img
                  id="about-water-image"
                  src={HERO_RESOURCES.waterGush}
                  alt="Pure Borehole Water Flow in Zimbabwe"
                  referrerPolicy="no-referrer"
                  className="w-full h-[400px] sm:h-[450px] object-cover"
                />
                
                {/* Embedded Local Status */}
                <div className="absolute bottom-6 right-6 bg-slate-900/90 backdrop-blur-xs text-white p-5 rounded-2xl max-w-xs text-left shadow-lg border border-slate-800">
                  <p className="text-xl font-black text-cyan-400 mb-1">99% Success</p>
                  <p className="text-xs font-semibold text-slate-300">
                    We drill utilizing scientific geological sensing to bypass dry fractures.
                  </p>
                </div>
              </div>
            </div>

            {/* About Copy Right Block */}
            <div id="about-copy" className="text-left flex flex-col justify-center">
              <span className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-2 block">
                Committed to Water Security
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight leading-tight mb-6">
                Bringing Safe, Non-Stop Water Access Directly to Your Home
              </h2>
              <p className="text-slate-650 text-base leading-relaxed mb-6">
                At <strong>Makoni Drilling Kwekwe</strong>, we believe that access to clean, reliable water shouldn't be a luxury. Frequent municipal water rationing, low pressure, and outages shouldn't dictate your household's health or hygiene.
              </p>
              <p className="text-slate-650 text-base leading-relaxed mb-8">
                Based in Nehanda, Kwekwe, we provide turn-key borehole drilling, Class 9 & Class 12 casing, solar pump setups, and structural storage tanks across the entire Midlands Province, including Gweru and surrounding areas. We stand for reliability, professional workmanship, and lifetime support.
              </p>

              {/* Direct Bullet Points */}
              <div className="grid sm:grid-cols-2 gap-4 mb-10 text-left">
                {[
                  '100% Siting Survey Guard',
                  'Clean Water Clearance Flushing',
                  'Load-Shedding Immune Solar Pumps',
                  'Class 9 & 12 Durable PVCS',
                  'Concrete Sanitary Apron Installation',
                  '8+ Years Field Experience'
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2.5 text-sm font-semibold text-slate-800">
                    <span className="w-5 h-5 rounded-full bg-blue-105 flex items-center justify-center text-blue-600 text-xs shrink-0 font-black">✓</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* CTA trigger */}
              <div className="flex gap-4">
                <button
                  id="about-quote-cta"
                  onClick={() => onNavigate('estimator')}
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all shadow-md cursor-pointer"
                >
                  Estimate Drill Cost
                </button>
                <a
                  id="about-call-cta"
                  href="tel:0776731708"
                  className="px-6 py-3 bg-slate-100 hover:bg-slate-200 text-slate-805 font-bold rounded-xl transition-all flex items-center gap-2"
                >
                  <span>Call 0776 731708</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-us" className="py-20 bg-slate-50 border-y border-slate-100 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-2 block">
              The Makoni Standard
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
              Why Homeowners and Farmers Choose Makoni Drilling
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              We understand the local Midlands geology — from hard quartzites in Kwekwe to clay profiles in Ascot and sand layers in Shurugwi. We build systems that last.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 text-left">
            {whyChooseUs.map((item, index) => {
              const IconComp = item.icon;
              return (
                <motion.div
                  key={item.title}
                  id={`why-card-${index}`}
                  whileHover={{ y: -6 }}
                  className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg transition-all"
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 shrink-0 ${item.color}`}>
                    <IconComp className="w-6.5 h-6.5 text-blue-650" />
                  </div>
                  <h3 className="text-base font-bold text-slate-950 mb-2 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-2 block">
              Our Process
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
              How We Bring Water to Your Property
            </h2>
            <p className="text-slate-550 text-sm">
              We handle everything from geological surveying to plumbing setup, making the entire installation process smooth and stress-free.
            </p>
          </div>

          {/* Process Timeline */}
          <div className="relative">
            {/* Horizontal progress bar for desktop */}
            <div className="hidden lg:block absolute top-[50px] left-[10%] right-[10%] h-0.5 bg-slate-100 pointer-events-none" />
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10 text-left">
              {processSteps.map((step, idx) => (
                <div
                  key={step.step}
                  id={`process-step-${idx}`}
                  className="bg-slate-50/50 p-6 sm:p-7 rounded-2xl border border-slate-100/70 hover:bg-blue-50/30 transition-colors duration-300 relative"
                >
                  {/* Step Code */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-xs font-extrabold text-blue-600 bg-blue-50/60 w-11 h-11 flex items-center justify-center rounded-xl font-mono text-base border border-blue-100 shadow-xs">
                      {step.step}
                    </span>
                    <div className="hidden lg:block w-3.5 h-3.5 bg-white border-2 border-blue-600 rounded-full" />
                  </div>
                  
                  <h3 className="text-base font-bold text-slate-900 mb-2 leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-550 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
