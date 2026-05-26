import { motion } from 'motion/react';
import { MessageSquare, Calculator, Flame, CheckCircle, Droplet, Fuel, Compass } from 'lucide-react';
import { HERO_RESOURCES } from '../data/boreholeData';

interface HeroProps {
  onNavigate: (sectionId: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  const stats = [
    { label: 'Boreholes Completed', value: '180+' },
    { label: 'Midlands Coverage', value: '100%' },
    { label: 'Water Access Rates', value: '99%' },
    { label: 'Rapid Turnaround', value: '48hr' },
  ];

  return (
    <section
      id="home"
      className="relative min-h-[calc(100vh-65px)] pt-24 sm:pt-28 flex items-center bg-radial from-slate-50 via-white to-sky-50/20 overflow-hidden"
    >
      {/* Dynamic Background Accents */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-b from-blue-50/40 to-transparent rounded-bl-[100px] pointer-events-none z-0" />
      <div className="absolute -left-48 bottom-12 w-96 h-96 bg-cyan-100/30 rounded-full blur-3xl pointer-events-none z-0" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-16 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero Copy (7 cols on Desktop) */}
          <div id="hero-copy-container" className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Trusted Badge */}
            <motion.div
              id="hero-badge"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-50 border border-blue-200 text-blue-700 rounded-full text-xs font-semibold uppercase tracking-wider mb-6"
            >
              <CheckCircle className="w-3.5 h-3.5" />
              <span>Zimbabwe's Trusted Drillers</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              id="hero-headline"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-tight sm:leading-tight mb-6"
            >
              Professional Borehole <br className="hidden sm:inline" />
              Drilling Services in <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-sky-600 to-cyan-500">
                Kwekwe & Midlands
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              id="hero-subheadline"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed mb-10"
            >
              Makoni Drilling Kwekwe provides reliable borehole drilling and water access solutions for homes, residential properties, and communities across Gweru, Kwekwe, and the Midlands region.
            </motion.p>

            {/* Actions Cta */}
            <motion.div
              id="hero-actions"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-12"
            >
              <a
                id="hero-whatsapp-cta"
                href="https://wa.me/263776731708?text=Hello%20Makoni%20Drilling%20Kwekwe.%20I%20am%20looking%20for%20a%20borehole%20drilling%20quote%20for%20my%20property."
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2.5 px-8 py-4 bg-[#25d366] hover:bg-[#20ba5a] text-white rounded-2xl font-bold shadow-lg shadow-[#25d366]/25 hover:shadow-[#25d366]/40 hover:-translate-y-0.5 transition-all cursor-pointer"
              >
                <MessageSquare className="w-5 h-5 fill-white" />
                <span>WhatsApp Us</span>
              </a>
              <button
                id="hero-estimate-cta"
                onClick={() => onNavigate('estimator')}
                className="flex items-center justify-center gap-2.5 px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white rounded-2xl font-bold border border-slate-900 shadow-md hover:-translate-y-0.5 transition-all cursor-pointer"
              >
                <Calculator className="w-5 h-5 animate-pulse" />
                <span>Request a Quote</span>
              </button>
            </motion.div>

            {/* Rapid Trust Highlights */}
            <motion.div
              id="hero-highlights"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-3 gap-6 pt-6 border-t border-slate-100 w-full max-w-lg"
            >
              <div className="flex flex-col items-start text-left">
                <div className="flex items-center gap-1.5 text-blue-600 font-bold text-sm">
                  <Compass className="w-4 h-4" />
                  <span>Siting Survey</span>
                </div>
                <span className="text-xs text-slate-500 mt-1">Siting Included</span>
              </div>
              <div className="flex flex-col items-start text-left">
                <div className="flex items-center gap-1.5 text-blue-600 font-bold text-sm">
                  <Droplet className="w-4 h-4 text-cyan-500" />
                  <span>Clean Yield</span>
                </div>
                <span className="text-xs text-slate-500 mt-1">Flushed Clear</span>
              </div>
              <div className="flex flex-col items-start text-left">
                <div className="flex items-center gap-1.5 text-blue-600 font-bold text-sm">
                  <Fuel className="w-4 h-4 text-amber-500" />
                  <span>Solar Setups</span>
                </div>
                <span className="text-xs text-slate-550 mt-1">Off-Grid Focus</span>
              </div>
            </motion.div>
          </div>

          {/* Hero Visual Block (5 cols on Desktop) */}
          <div id="hero-visual-container" className="lg:col-span-5 relative">
            <motion.div
              id="hero-image-wrapper"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100"
            >
              <img
                id="hero-drilling-image"
                src={HERO_RESOURCES.heroImage}
                alt="Makoni Drilling Rig Operating in Zimbabwe"
                referrerPolicy="no-referrer"
                className="w-full h-[360px] sm:h-[440px] lg:h-[480px] object-cover hover:scale-103 transition-transform duration-700"
              />

              {/* Water Overlay Badge */}
              <div
                id="hero-badge-overlay"
                className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-white/40 flex items-center gap-3.5"
              >
                <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white shrink-0">
                  <Droplet className="w-6.5 h-6.5 fill-blue-100" />
                </div>
                <div className="text-left">
                  <p className="text-[10px] font-bold text-blue-600 uppercase tracking-widest leading-none mb-1">
                    Hydro-Geology Siting
                  </p>
                  <p className="text-sm font-bold text-slate-800 leading-tight">
                    Reliable Water Yields across Midlands rock profiles
                  </p>
                </div>
              </div>

              {/* Floating Silver Accent Card */}
              <div
                id="hero-floating-card"
                className="absolute -top-4 -right-4 bg-gradient-to-r from-teal-500 to-blue-600 text-white font-bold text-xs py-2 px-4 rounded-xl shadow-lg uppercase tracking-wider hidden sm:block animate-pulse"
              >
                No Dry Wells!
              </div>
            </motion.div>
          </div>
          
        </div>

        {/* Counters Grid Panel */}
        <motion.div
          id="hero-counters"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-12 sm:mt-16 p-6 sm:p-8 bg-white border border-slate-100 shadow-xl rounded-3xl grid grid-cols-2 lg:grid-cols-4 gap-6 text-center"
        >
          {stats.map((stat, idx) => (
            <div
              key={stat.label}
              id={`hero-stat-${idx}`}
              className="flex flex-col items-center justify-center p-3 lg:border-r last:border-0 border-slate-100 last:border-none"
            >
              <span className="text-2xl sm:text-3xl font-extrabold text-blue-600 tracking-tight mb-1">
                {stat.value}
              </span>
              <span className="text-[10px] sm:text-xs font-semibold text-slate-450 uppercase tracking-widest">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
