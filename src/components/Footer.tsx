import { Droplet, MapPin, Phone, MessageSquare, ShieldCheck } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { name: 'Borehole Drilling', id: 'services' },
      { name: 'Solar Water Pumps', id: 'services' },
      { name: 'Casing & Lining', id: 'services' },
      { name: 'Jojo Tank Storage', id: 'services' },
      { name: 'Support & Rehab', id: 'services' }
    ],
    coverage: [
      { name: 'Kwekwe Chicago', id: 'coverage' },
      { name: 'Mbizo Suburbs', id: 'coverage' },
      { name: 'Gweru Core Ascot', id: 'coverage' },
      { name: 'Redcliff Sector', id: 'coverage' },
      { name: 'Shurugwi Farming', id: 'coverage' }
    ],
    company: [
      { name: 'About Siting', id: 'about' },
      { name: 'The Process', id: 'process' },
      { name: 'Our Standards', id: 'why-us' },
      { name: 'Completed Works', id: 'projects' },
      { name: 'Quote Wizard', id: 'estimator' }
    ]
  };

  return (
    <footer id="footer-section" className="bg-slate-900 text-slate-300 pt-16 pb-8 text-left relative overflow-hidden border-t border-slate-800">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-500" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-12 gap-8 mb-12">
          
          {/* Column 1 brand (4 width) */}
          <div className="col-span-2 lg:col-span-4 space-y-5">
            <div className="flex items-center gap-2.5 cursor-pointer" onClick={() => onNavigate('home')}>
              <div className="w-9 h-9 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
                <Droplet className="w-5 h-5" />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-base font-extrabold tracking-tight text-white leading-none">MAKONI</span>
                <span className="text-[9px] font-mono tracking-widest font-bold uppercase text-blue-450 mt-1">DRILLING KWEKWE</span>
              </div>
            </div>

            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              Midland's leading domestic and residential borehole specialists. Delivering reliable off-grid clean water access through precision geological surveying, heavy casing, and robust solar setups since 2018.
            </p>

            <div className="flex items-center gap-2 text-xs font-semibold text-slate-400">
              <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>Full compliance with Midlands water authority standards.</span>
            </div>
          </div>

          {/* Column 2 Services (2 width) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 font-mono">Our Services</h4>
            <ul className="space-y-2 text-xs text-slate-450">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => onNavigate(link.id)}
                    className="hover:text-blue-400 transition-colors text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 Support areas (2 width) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 font-mono">Core Fields</h4>
            <ul className="space-y-2 text-xs text-slate-450">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => onNavigate(link.id)}
                    className="hover:text-blue-400 transition-colors text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 Suburbs (2 width) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 font-mono">Service Zones</h4>
            <ul className="space-y-2 text-xs text-slate-455">
              {footerLinks.coverage.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => onNavigate(link.id)}
                    className="hover:text-blue-400 transition-colors text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5 Quick Contacts details (2 width) */}
          <div className="col-span-2 lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 font-mono">Support</h4>
            <div className="space-y-3 text-xs text-slate-450">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
                <span>Nehanda, Kwekwe, Zimbabwe</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-slate-500 shrink-0" />
                <a href="tel:0776731708" className="hover:text-white transition-colors">0776 731708</a>
              </p>
              <p className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-slate-500 shrink-0" />
                <a
                  href="https://wa.me/263776731708"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition-colors"
                >
                  WhatsApp Support
                </a>
              </p>
            </div>
          </div>

        </div>

        {/* Bottom copyright segment */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {currentYear} Makoni Drilling Kwekwe. All rights reserved.</p>
          <div className="flex gap-4">
            <p>Designed for water security, domestic safety, and agricultural yield.</p>
          </div>
        </div>

      </div>
    </footer>
  );
}
