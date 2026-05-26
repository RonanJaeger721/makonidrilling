import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Navigation, Droplet, Star, Tag, Layers, Compass, Calendar, Search } from 'lucide-react';
import { PROJECTS_DATA, COVERAGE_AREAS } from '../data/boreholeData';
import { ProjectItem } from '../types';

export default function ProjectsAndCoverage() {
  const [filter, setFilter] = useState<string>('all');

  const filteredProjects = filter === 'all'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter(p => p.type === filter);

  return (
    <div id="projects-coverage-wrapper">
      
      {/* Completed Work Project Portfolio */}
      <section id="projects" className="py-20 bg-slate-50/50 border-t border-slate-100 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="text-left max-w-xl">
              <span className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-2 block">
                Field Evidence
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
                Our Completed Boreholes & Installations
              </h2>
              <p className="text-slate-600 text-sm">
                Each completed contract demonstrates professional geological casing, clean flushing, robust water yields, and clean solar or electric pump wiring.
              </p>
            </div>
            
            {/* Filter Buttons */}
            <div id="portfolio-filters" className="flex flex-wrap gap-2 text-left self-start">
              {[
                { tag: 'all', name: 'All Completed' },
                { tag: 'residential', name: 'Domestic' },
                { tag: 'agricultural', name: 'Agricultural' },
                { tag: 'commercial', name: 'Commercial' }
              ].map((btn) => (
                <button
                  key={btn.tag}
                  id={`filter-${btn.tag}`}
                  onClick={() => setFilter(btn.tag)}
                  className={`px-4.5 py-2 rounded-xl text-xs sm:text-sm font-bold border transition-all cursor-pointer ${
                    filter === btn.tag
                      ? 'bg-blue-605 border-blue-600 text-white shadow-md'
                      : 'bg-white border-slate-205 text-slate-700 hover:border-slate-305'
                  }`}
                >
                  {btn.name}
                </button>
              ))}
            </div>
          </div>

          {/* Grid Layout of Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, idx) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  key={project.id}
                  id={`project-card-${project.id}`}
                  className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden flex flex-col justify-between text-left hover:shadow-lg transition-all"
                >
                  
                  {/* Card Header Info */}
                  <div className="p-6 pb-4">
                    <div className="flex items-center justify-between mb-4">
                      {/* Suburb Code / City */}
                      <div className="flex items-center gap-1.5 text-blue-600">
                        <MapPin className="w-4 h-4" />
                        <span className="font-bold text-xs uppercase tracking-wide">{project.location}</span>
                      </div>
                      
                      {/* Date */}
                      <span className="text-[10px] font-semibold text-slate-450 uppercase font-mono">{project.date}</span>
                    </div>

                    <h3 className="text-base sm:text-lg font-black text-slate-900 leading-snug mb-3">
                      {project.title}
                    </h3>
                    
                    <p className="text-xs text-slate-550 leading-relaxed min-h-[72px] line-clamp-3">
                      {project.description}
                    </p>
                  </div>

                  {/* Technical Specifications Overlay Panel */}
                  <div id="tech-specs-overlay" className="bg-slate-50 border-t border-slate-100/80 p-5 grid grid-cols-2 gap-3.5 text-xs text-slate-700 self-end w-full">
                    <div className="flex flex-col">
                      <span className="text-[10px] uppercase font-bold text-slate-400">Drilled Depth</span>
                      <span className="font-bold text-slate-800 tracking-tight mt-0.5">{project.depth} Meters</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[10px] uppercase font-bold text-slate-400">Measured Yield</span>
                      <span className="font-bold text-slate-800 tracking-tight mt-0.5 flex items-center gap-1">
                        <Droplet className="w-3 h-3 text-cyan-500 fill-cyan-105" />
                        {project.yield}
                      </span>
                    </div>
                    <div className="flex flex-col col-span-2 pt-2 border-t border-slate-200/50">
                      <span className="text-[10px] uppercase font-bold text-slate-450">Installed Pumping Setup</span>
                      <span className="font-semibold text-slate-700 mt-0.5 block leading-tight">{project.powerSource}</span>
                    </div>
                  </div>

                </motion.div>
              ))}
            </AnimatePresence>
          </div>

        </div>
      </section>

      {/* Coverage Areas Section */}
      <section id="coverage" className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            
            {/* Left Block Coverage Regions Copy */}
            <div id="coverage-areas-info" className="lg:col-span-7 text-left space-y-8">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-2 block">
                  Service Zones
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight leading-tight">
                  Providing Reliable Borehole Drilling Across Kwekwe & Gweru
                </h2>
                <p className="text-slate-600 text-sm sm:text-base mt-4">
                  Makoni Drilling is strategically situated in Kwekwe (Que Que), Zimbabwe. To serve our community efficiently, we dispatch field crews daily across Gweru and all secondary Midlands agricultural hubs.
                </p>
              </div>

              {/* Multi Location Panels */}
              <div id="location-zones" className="space-y-4">
                {COVERAGE_AREAS.map((area, idx) => (
                  <div
                    key={area.city}
                    id={`coverage-zone-${idx}`}
                    className="p-5 rounded-2xl bg-slate-50 border border-slate-100/80 space-y-3"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                      <span className="font-extrabold text-slate-900 text-base">{area.city}</span>
                      <span className="text-[10px] font-bold text-blue-600 bg-blue-50 px-2.5 py-0.5 rounded-full uppercase tracking-wider block w-fit">
                        {area.type}
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 leading-relaxed font-semibold">
                      Serving: {area.regions.join(', ')}
                    </p>
                    <div className="text-[11px] text-slate-500 flex items-center gap-1.5 pt-1 font-medium italic border-t border-slate-200/50">
                      <Navigation className="w-3.5 h-3.5 text-slate-400 rotate-45 shrink-0" />
                      <span>{area.note}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Block Mock Interactive Map Visualizer (5 cols) */}
            <div id="coverage-blueprint-map" className="lg:col-span-5 relative">
              <div className="absolute inset-0 bg-blue-50 rounded-3xl rotate-2 pointer-events-none" />
              <div className="relative bg-slate-950 text-white rounded-3xl p-6 sm:p-8 text-left shadow-xl border border-slate-800">
                <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-[10px] font-bold tracking-wider font-mono">
                  <span className="w-2.5 h-2.5 rounded-full bg-blue-400 animate-ping absolute" />
                  <span className="w-2.5 h-2.5 rounded-full bg-blue-400" />
                  GPS ACTIVE
                </div>

                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-6">
                  MIDLANDS WATER LOG DEPTH BLUEPRINT
                </h3>

                {/* Suburbs Grid Map simulation */}
                <div id="suburbs-matrix" className="space-y-4 font-mono select-none">
                  {[
                    { loc: 'Kwekwe (Chicago, Newtown)', depth: '45m - 55m Profile', aquifer: 'HIGH YIELD AQUIFER' },
                    { loc: 'Gweru (Lundi Park, Ascot)', depth: '50m - 60m Profile', aquifer: 'EXCELLENT STABILITY' },
                    { loc: 'Redcliff / Torwood Area', depth: '55m - 65m Profile', aquifer: 'HARD ROCK DRILL' },
                    { loc: 'Shurugwi Farming Plots', depth: '60m - 80m Profile', aquifer: 'VARIED DEEP GRANITE' }
                  ].map((matrix, mIdx) => (
                    <div
                      key={matrix.loc}
                      id={`matrix-item-${mIdx}`}
                      className="p-3 bg-white/5 border border-white/5 hover:border-blue-500/30 rounded-xl flex items-center justify-between text-xs transition-colors"
                    >
                      <div>
                        <p className="font-bold text-slate-100">{matrix.loc}</p>
                        <p className="text-[10px] text-slate-400 mt-1">{matrix.depth}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-[10px] font-extrabold text-blue-400 uppercase tracking-widest">{matrix.aquifer}</p>
                        <div className="w-12 h-1 bg-white/20 rounded-full overflow-hidden mt-1.5 ml-auto">
                          <div className="w-4/5 h-full bg-blue-500" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Guarantee label at bottom */}
                <div className="mt-8 pt-5 border-t border-white/10 text-xs text-slate-400">
                  <p className="leading-relaxed">
                    * Our geological teams maintain extensive underground sand and granite mapping coordinates to help size and locate aquifer tables immediately with extreme accuracy.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
