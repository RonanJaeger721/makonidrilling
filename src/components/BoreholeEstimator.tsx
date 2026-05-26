import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calculator, MessageSquare, ShieldCheck, HelpCircle, AlertCircle, RefreshCw, Layers, Zap, Container, Compass, Droplet, ArrowRight } from 'lucide-react';
import { EstimateState } from '../types';
import { MIDLANDS_PRICING_CONFIG } from '../data/boreholeData';

export default function BoreholeEstimator() {
  const [estimate, setEstimate] = useState<EstimateState>({
    location: 'Kwekwe',
    soilType: 'medium',
    targetDepth: 40,
    casingType: 'class9',
    powerSetup: 'solar',
    tankSize: '5000',
    tankStand: '4.5m',
    filtration: 'basic',
  });

  const locations = [
    { name: 'Kwekwe (Home Hub)', tag: 'Kwekwe', surcharge: 0 },
    { name: 'Gweru Core Area', tag: 'Gweru', surcharge: 0 },
    { name: 'Redcliff / Torwood', tag: 'Redcliff', surcharge: 0 },
    { name: 'Shurugwi Plots', tag: 'Shurugwi', surcharge: 150 },
    { name: 'Zhombe / Rural Zones', tag: 'Zhombe', surcharge: 220 },
  ];

  const casings = [
    { id: 'class9', name: 'Standard Class 9 PVC', desc: 'Thick high-grade PVC casing. Suited for solid rock profiles.', price: 0 },
    { id: 'class12', name: 'Heavy-Duty Class 12 PVC', desc: 'Added wall thickness. Recommended for soft, sandy, or deeper wells.', price: MIDLANDS_PRICING_CONFIG.casingPricing.class12 },
    { id: 'steel', name: 'Reinforced Steel Sleeving', desc: 'Ultimate strength. Demanded in active collapsing river and gravel sands.', price: MIDLANDS_PRICING_CONFIG.casingPricing.steel },
  ];

  const pumps = [
    { id: 'none', name: 'Drilling & Casing Only', desc: 'No pump equipment included. Shaft is sealed with head cover.', price: 0 },
    { id: 'solar', name: 'Premium Solar Pump System', desc: 'Includes DC brushless pump, 3 high-grade solar panels in steel framework & automatic smart dry-run controller. Off-grid security!', price: MIDLANDS_PRICING_CONFIG.pumpPricing.solar },
    { id: 'electric', name: 'AC Electric Pump System', desc: 'Includes heavy submersible pump, surge control panel, and electrical grid line coupling.', price: MIDLANDS_PRICING_CONFIG.pumpPricing.electric },
    { id: 'hand', name: 'Lever Hand Pump', desc: 'Heavy galvanized manual pump for farms, local community, or backup security.', price: MIDLANDS_PRICING_CONFIG.pumpPricing.hand },
  ];

  const tanks = [
    { id: 'none', name: 'No Storage Tank', desc: 'Water connects directly to household main line (requires constant pumping).', price: 0 },
    { id: '2500', name: '2500L Durable Storage Tank', desc: 'Suited for smaller domestic properties or low-volume backup.', price: MIDLANDS_PRICING_CONFIG.tankPricing['2500'] },
    { id: '5000', name: '5000L Premium Family Tank', desc: 'Highly recommended! Perfect size to shield a family of 5 from water cuts.', price: MIDLANDS_PRICING_CONFIG.tankPricing['5000'] },
  ];

  const stands = [
    { id: 'none', name: 'Ground / Concrete Slab Mount', desc: 'Placed on ground. Requires separate booster pressure pump.', price: 0 },
    { id: '3m', name: '3-Meter Structural Steel Stand', desc: 'Elevated stand. Delivers standard gravity faucet pressures.', price: MIDLANDS_PRICING_CONFIG.standPricing['3m'] },
    { id: '4.5m', name: '4.5-Meter Optimal Pressure Stand', desc: 'Outstanding gravity delivery. Easily supplies multi-story taps.', price: MIDLANDS_PRICING_CONFIG.standPricing['4.5m'] },
    { id: '6m', name: '6-Meter Commercial/Farm Stand', desc: 'Extra heavy-duty steel structure. Long-distance gravity flow.', price: MIDLANDS_PRICING_CONFIG.standPricing['6m'] },
  ];

  const filters = [
    { id: 'none', name: 'No Extra Filtration', desc: 'Standard sand strainer. Straight aquifer irrigation water.', price: 0 },
    { id: 'basic', name: 'Basic Sand & Carbon Inline', desc: 'Bypasses sediment and filters chemical odor/chlorine taste.', price: MIDLANDS_PRICING_CONFIG.filtrationPricing.basic },
    { id: 'complete', name: 'Complete UV Sterilization Kit', desc: 'Chlorine dispenser + sediment trap + ultraviolet treatment. Medical-grade drinking safety.', price: MIDLANDS_PRICING_CONFIG.filtrationPricing.complete },
  ];

  // Calculations
  const basePrice = MIDLANDS_PRICING_CONFIG.baseDrillingCost;
  
  // Surcharge for extra depth over 40m
  const extraDepth = Math.max(0, estimate.targetDepth - 40);
  const extraDepthCost = extraDepth * MIDLANDS_PRICING_CONFIG.costPerMeterExtra;
  
  // Find Selected Prices
  const locSurcharge = locations.find(l => l.tag === estimate.location)?.surcharge || 0;
  const casingCost = casings.find(c => c.id === estimate.casingType)?.price || 0;
  const pumpCost = pumps.find(p => p.id === estimate.powerSetup)?.price || 0;
  
  // If no tank is selected, stand cannot be added (force stand price to 0)
  const isTankSelected = estimate.tankSize !== 'none';
  const tankCost = isTankSelected ? (tanks.find(t => t.id === estimate.tankSize)?.price || 0) : 0;
  const standCost = isTankSelected ? (stands.find(s => s.id === estimate.tankStand)?.price || 0) : 0;
  const filterCost = filters.find(f => f.id === estimate.filtration)?.price || 0;

  const subtotal = basePrice + extraDepthCost + locSurcharge + casingCost + pumpCost + tankCost + standCost + filterCost;

  const handleReset = () => {
    setEstimate({
      location: 'Kwekwe',
      soilType: 'medium',
      targetDepth: 40,
      casingType: 'class9',
      powerSetup: 'solar',
      tankSize: '5000',
      tankStand: '4.5m',
      filtration: 'basic',
    });
  };

  const generateWhatsAppMessage = () => {
    const locName = locations.find(l => l.tag === estimate.location)?.name || estimate.location;
    const casingName = casings.find(c => c.id === estimate.casingType)?.name || '';
    const pumpName = pumps.find(p => p.id === estimate.powerSetup)?.name || '';
    const tankName = tanks.find(t => t.id === estimate.tankSize)?.name || '';
    const standName = isTankSelected ? (stands.find(s => s.id === estimate.tankStand)?.name || '') : 'None';
    const filterName = filters.find(f => f.id === estimate.filtration)?.name || '';

    const msg = `Hello Makoni Drilling Kwekwe! 💧 

I have just used your online interactive cost estimator tool and put together a customized borehole specification for my property. I would like to get a final formal assessment and book the site visit.

My borehole specifications:
📍 Siting Location: ${locName}
📏 Target Drilling Depth: ${estimate.targetDepth} meters (${estimate.targetDepth === 40 ? 'Standard 40m Core' : `Standard 40m + ${extraDepth}m additional depth`})
🛡️ Casing Selected: ${casingName}
⚡ Power/Pump Setup: ${pumpName}
🛢️ Jojo Water Tank Storage: ${tankName}
🏗️ Elevated Structural Stand: ${standName}
🫧 Water Purification/Filter: ${filterName}

-------------------------------
💵 Ballpark Estimated Subtotal: $${subtotal.toLocaleString()} USD
-------------------------------

Included Free Services: 
- Detailed Geological Siting / Hydrology Survey Checks
- Sanitary Concrete Surface Sealing
- Proper Clear-Flushing & Output Aquifer Yield Testing
- 48-Hour Installation Guarantee

Please contact me to arrange the geological field surveying team!`;

    const encoded = encodeURIComponent(msg);
    return `https://wa.me/263776731708?text=${encoded}`;
  };

  return (
    <section id="estimator" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title Group */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-2 block">
            Estimate Your Borehole
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
            Interactive Borehole Configurator & Cost Estimator
          </h2>
          <p className="text-slate-605 text-sm sm:text-base">
            Customize your water security setup step-by-step. Get immediate realistic cost estimations that cover transport, depth, casings, storage and filtration. <strong>Zero hidden charges.</strong>
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 items-start">
          
          {/* Main Wizard Form Selector (7 cols) */}
          <div id="calculator-form" className="lg:col-span-7 bg-slate-50/50 rounded-3xl border border-slate-100 p-6 sm:p-9 text-left space-y-8">
            
            {/* 1. Location Selection */}
            <div id="step-location" className="space-y-4">
              <div className="flex items-center gap-2">
                <Compass className="w-5 h-5 text-blue-600 shrink-0" />
                <h3 className="text-base font-bold text-slate-900">
                  Step 1: Property Location & Geological Zone
                </h3>
              </div>
              <p className="text-xs text-slate-500">
                Transport and base mobilisation are zero-rated for Kwekwe and Gweru core hubs. Extended plots involve standard regional transfer surcharges.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {locations.map((loc) => (
                  <button
                    key={loc.tag}
                    id={`btn-loc-${loc.tag}`}
                    onClick={() => setEstimate({ ...estimate, location: loc.tag })}
                    className={`p-3.5 text-left rounded-xl border text-sm font-semibold transition-all cursor-pointer ${
                      estimate.location === loc.tag
                        ? 'bg-white border-blue-600 text-blue-700 shadow-xs ring-2 ring-blue-50'
                        : 'bg-white/60 border-slate-205 text-slate-700 hover:border-slate-305'
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <span>{loc.name}</span>
                      {loc.surcharge > 0 && (
                        <span className="text-[10px] font-mono text-cyan-600 bg-cyan-50 px-1.5 py-0.5 rounded font-bold">
                          +${loc.surcharge}
                        </span>
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Target Drilling Depth */}
            <div id="step-depth" className="space-y-4 pt-6 border-t border-slate-200/60">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Droplet className="w-5 h-5 text-sky-650 shrink-0" />
                  <h3 className="text-base font-bold text-slate-900">
                    Step 2: Anticipated Drilling Depth
                  </h3>
                </div>
                <span className="text-sm font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full font-mono">
                  {estimate.targetDepth} Meters
                </span>
              </div>
              <p className="text-xs text-slate-500">
                Aqua-levels are generally achieved at 40m - 60m across Gweru/Kwekwe. Depth past 40m requires heavy compressors billed at $45 per extra meter.
              </p>
              
              <div className="grid grid-cols-4 gap-3">
                {[40, 60, 80, 100].map((depth) => (
                  <button
                    key={depth}
                    id={`btn-depth-${depth}`}
                    onClick={() => setEstimate({ ...estimate, targetDepth: depth })}
                    className={`py-3 rounded-xl border text-sm font-bold transition-all text-center cursor-pointer ${
                      estimate.targetDepth === depth
                        ? 'bg-blue-600 border-blue-600 text-white shadow-md'
                        : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300'
                    }`}
                  >
                    {depth}m
                    <span className="block text-[9px] font-normal font-mono opacity-80">
                      {depth === 40 ? 'Base Core' : `+$${(depth - 40) * 45}`}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* 3. PVC Casing selection */}
            <div id="step-casing" className="space-y-4 pt-6 border-t border-slate-200/60">
              <div className="flex items-center gap-2">
                <Layers className="w-5 h-5 text-indigo-500 shrink-0" />
                <h3 className="text-base font-bold text-slate-900">
                  Step 3: Borehole Shaft Casing Type
                </h3>
              </div>
              <p className="text-xs text-slate-550">
                Heavy casing guards the drilling shaft walls from pressure collapsed sands. We only use high diameter SANS certified PVC.
              </p>
              <div className="space-y-3">
                {casings.map((casing) => (
                  <button
                    key={casing.id}
                    id={`btn-casing-${casing.id}`}
                    onClick={() => setEstimate({ ...estimate, casingType: casing.id as any })}
                    className={`w-full p-3.5 text-left rounded-xl border flex justify-between items-start gap-4 transition-all cursor-pointer ${
                      estimate.casingType === casing.id
                        ? 'bg-white border-blue-600 shadow-xs ring-2 ring-blue-50'
                        : 'bg-white/60 border-slate-200'
                    }`}
                  >
                    <div className="text-left flex-1">
                      <span className="text-sm font-bold block text-slate-900">{casing.name}</span>
                      <span className="text-[11px] text-slate-500 mt-0.5 block leading-relaxed">{casing.desc}</span>
                    </div>
                    <span className="text-xs font-bold font-mono text-slate-600 shrink-0 bg-slate-100 px-2 py-0.5 rounded">
                      {casing.price === 0 ? 'Included' : `+$${casing.price}`}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* 4. Power & Pump System */}
            <div id="step-pump" className="space-y-4 pt-6 border-t border-slate-200/60">
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-amber-500 shrink-0" />
                <h3 className="text-base font-bold text-slate-900">
                  Step 4: Submersible Water Pump Setup
                </h3>
              </div>
              <p className="text-xs text-slate-500">
                <strong>Solar Pumping is highly recommended!</strong> Operates free from ZESA power cuts. AC Electrical couples direct to home grids.
              </p>
              <div className="space-y-3">
                {pumps.map((pump) => (
                  <button
                    key={pump.id}
                    id={`btn-pump-${pump.id}`}
                    onClick={() => setEstimate({ ...estimate, powerSetup: pump.id as any })}
                    className={`w-full p-4 text-left rounded-xl border flex justify-between items-start gap-4 transition-all cursor-pointer ${
                      estimate.powerSetup === pump.id
                        ? 'bg-white border-blue-600 shadow-xs ring-2 ring-blue-50'
                        : 'bg-white/60 border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <div className="text-left flex-1">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-bold text-slate-900">{pump.name}</span>
                        {pump.id === 'solar' && (
                          <span className="text-[8px] bg-amber-100 text-amber-800 font-extrabold px-1.5 py-0.5 rounded uppercase font-mono tracking-wider animate-pulse">POPULAR</span>
                        )}
                      </div>
                      <span className="text-[11.5px] text-slate-500 mt-1 block leading-relaxed">{pump.desc}</span>
                    </div>
                    <span className="text-xs font-bold font-mono text-slate-600 shrink-0 bg-slate-100 px-2 py-0.5 rounded leading-none">
                      {pump.price === 0 ? 'No Charge' : `+$${pump.price}`}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* 5. Jojo Water Storage and Steel Supports */}
            <div id="step-storage" className="space-y-4 pt-6 border-t border-slate-200/60">
              <div className="flex items-center gap-2">
                <Container className="w-5 h-5 text-teal-600 shrink-0" />
                <h3 className="text-base font-bold text-slate-900">
                  Step 5: Water Tank Storage Size
                </h3>
              </div>
              <p className="text-xs text-slate-500">
                Storing borehole water allows you to have a secure buffer reserve. Tap gravity pressures rely on the steel stand elevation.
              </p>
              
              {/* Storage options */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {tanks.map((tank) => (
                  <button
                    key={tank.id}
                    id={`btn-tank-${tank.id}`}
                    onClick={() => setEstimate({ ...estimate, tankSize: tank.id as any })}
                    className={`p-3.5 text-left rounded-xl border text-sm font-bold transition-all flex flex-col justify-between cursor-pointer ${
                      estimate.tankSize === tank.id
                        ? 'bg-white border-blue-600 text-blue-700 shadow-xs ring-2 ring-blue-50'
                        : 'bg-white/60 border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <div className="text-left mb-3">
                      <span className="block text-slate-900 text-xs sm:text-sm">{tank.name}</span>
                    </div>
                    <span className="text-xs font-mono font-bold text-slate-600 bg-slate-100 px-1.5 py-0.5 rounded w-fit self-end">
                      {tank.price === 0 ? 'None' : `+$${tank.price}`}
                    </span>
                  </button>
                ))}
              </div>

              {/* Elevated steel stand logic (Only enabled if storage tank exists) */}
              {isTankSelected ? (
                <div id="elevated-stands-subpanel" className="space-y-3.5 pt-4 bg-sky-50/40 p-4 rounded-xl border border-sky-100 mt-2">
                  <span className="text-xs font-bold text-sky-800 uppercase tracking-wide block">Select Elevated Stand height for gravity flow:</span>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                    {stands.map((stand) => (
                      <button
                        key={stand.id}
                        id={`btn-stand-${stand.id}`}
                        onClick={() => setEstimate({ ...estimate, tankStand: stand.id as any })}
                        className={`py-2 p-2.5 text-xs font-bold rounded-lg border transition-all cursor-pointer ${
                          estimate.tankStand === stand.id
                            ? 'bg-blue-600 border-blue-600 text-white shadow-sm'
                            : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300'
                        }`}
                      >
                        {stand.id === 'none' ? 'No Stand' : `${stand.id} Steel`}
                        <span className="block text-[8px] font-normal font-mono opacity-80 mt-0.5">
                          {stand.price === 0 ? 'Slab Mount' : `+$${stand.price}`}
                        </span>
                      </button>
                    ))}
                  </div>
                  <p className="text-[10px] text-sky-700 max-w-full italic leading-tight">
                    * Stands elevate Jojo tanks to provide standard gravity feed straight to kitchen, showers and garden pipe works without electricity limits.
                  </p>
                </div>
              ) : (
                <div className="p-3 bg-slate-100 rounded-lg text-slate-500 text-[11px] font-semibold flex items-center gap-2">
                  <AlertCircle className="w-3.5 h-3.5 text-slate-450" />
                  <span>Elevated structural steel stands are unlocked when a water storage tank size is selected.</span>
                </div>
              )}
            </div>

            {/* 6. Medical Filter option */}
            <div id="step-filtration" className="space-y-4 pt-6 border-t border-slate-200/60">
              <div className="flex items-center gap-2">
                <Droplet className="w-5 h-5 text-blue-650 shrink-0" />
                <h3 className="text-base font-bold text-slate-900">
                  Step 6: Water Filtration & Purification Setup
                </h3>
              </div>
              <p className="text-xs text-slate-500">
                Ensure safety. Raw groundwater can contain trace sand or regional hardness. Filtration guarantees crisp drinking supplies.
              </p>
              <div className="space-y-2.5">
                {filters.map((filter) => (
                  <button
                    key={filter.id}
                    id={`btn-filter-${filter.id}`}
                    onClick={() => setEstimate({ ...estimate, filtration: filter.id as any })}
                    className={`w-full p-3 text-left rounded-xl border flex justify-between items-start gap-4 transition-all cursor-pointer ${
                      estimate.filtration === filter.id
                        ? 'bg-white border-blue-600 shadow-xs ring-2 ring-blue-50'
                        : 'bg-white/60 border-slate-200'
                    }`}
                  >
                    <div className="text-left flex-1">
                      <span className="text-xs sm:text-sm font-bold block text-slate-900">{filter.name}</span>
                      <span className="text-[11px] text-slate-500 mt-0.5 block leading-relaxed">{filter.desc}</span>
                    </div>
                    <span className="text-xs font-bold font-mono text-slate-600 shrink-0 bg-slate-100 px-2 py-0.5 rounded mt-0.5">
                      {filter.price === 0 ? 'None' : `+$${filter.price}`}
                    </span>
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Pricing Checkout Slip Right Block (5 cols) */}
          <div id="calculator-checkout-container" className="lg:col-span-5 lg:sticky lg:top-24 space-y-6">
            <div id="pricing-slip-card" className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 text-left shadow-2xl border border-slate-800 relative z-10 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />
              
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <Calculator className="w-5 h-5 text-blue-400" />
                  <span className="text-sm font-bold uppercase tracking-wider text-slate-300">Quote Breakdown</span>
                </div>
                <button
                  id="reset-estimator-btn"
                  onClick={handleReset}
                  className="text-[10px] text-slate-400 hover:text-white flex items-center gap-1 font-bold tracking-wide uppercase transition-colors"
                >
                  <RefreshCw className="w-3 h-3" />
                  Reset
                </button>
              </div>

              {/* Subtotal Display */}
              <div className="text-center bg-white/5 py-5 rounded-2xl border border-white/5 mb-6">
                <span className="text-xs text-slate-400 block font-bold uppercase tracking-widest leading-none mb-2">Estimated Balance</span>
                <span className="text-3xl sm:text-4xl font-extrabold text-blue-400 tracking-tight leading-none font-mono">
                  ${subtotal.toLocaleString()}
                </span>
                <span className="text-[10px] font-mono tracking-wider font-semibold text-slate-500 uppercase block mt-2">USD CURRENCY • ZERO VAT</span>
              </div>

              {/* Specifications Receipts */}
              <div className="space-y-3 text-xs leading-normal">
                
                {/* Location */}
                <div className="flex justify-between items-start text-slate-200">
                  <span className="text-slate-400 font-medium">📍 Siting Region:</span>
                  <span className="font-bold text-right">
                    {locations.find(l => l.tag === estimate.location)?.name}
                  </span>
                </div>

                {/* Base drilled */}
                <div className="flex justify-between items-start text-slate-200">
                  <span className="text-slate-400 font-medium">📏 Drilling Core (40m):</span>
                  <span className="font-mono font-bold">${basePrice}</span>
                </div>

                {/* Extra drilled */}
                {extraDepth > 0 && (
                  <div className="flex justify-between items-start text-slate-200 animate-fadeIn">
                    <span className="text-slate-400 font-medium">📏 Extra Depth (+{extraDepth}m):</span>
                    <span className="font-mono font-bold text-blue-400">+${extraDepthCost}</span>
                  </div>
                )}

                {/* Casing */}
                <div className="flex justify-between items-start text-slate-200">
                  <span className="text-slate-400 font-medium">🛡️ Shaft Lining Casing:</span>
                  <span className="font-mono font-bold">
                    {casingCost === 0 ? 'Class 9 Incl.' : `+$${casingCost}`}
                  </span>
                </div>

                {/* Pump */}
                <div className="flex justify-between items-start text-slate-205">
                  <span className="text-slate-400 font-medium font-bold text-blue-400">⚡ Submersible Pump:</span>
                  <span className="font-mono font-bold">
                    {pumpCost === 0 ? 'None' : `+$${pumpCost}`}
                  </span>
                </div>

                {/* Storage tank */}
                {isTankSelected && (
                  <>
                    <div className="flex justify-between items-start text-slate-201 animate-fadeIn">
                      <span className="text-slate-400 font-medium">🛢️ Water Storage (Jojo):</span>
                      <span className="font-mono font-bold">+${tankCost}</span>
                    </div>
                    {estimate.tankStand !== 'none' && (
                      <div className="flex justify-between items-start text-slate-201 animate-fadeIn">
                        <span className="text-slate-400 font-medium">🏗️ Elevated Steel Stand:</span>
                        <span className="font-mono font-bold">+${standCost}</span>
                      </div>
                    )}
                  </>
                )}

                {/* Filtration */}
                <div className="flex justify-between items-start text-slate-201 pb-4 border-b border-white/5">
                  <span className="text-slate-400 font-medium">🫧 Water Purification:</span>
                  <span className="font-mono font-bold">
                    {filterCost === 0 ? 'None' : `+$${filterCost}`}
                  </span>
                </div>

              </div>

              {/* Total Breakdown Cta */}
              <div className="pt-5 text-left">
                <a
                  id="checkout-whatsapp-btn"
                  href={generateWhatsAppMessage()}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full flex items-center justify-center gap-2 px-5 py-4 bg-[#25d366] hover:bg-[#20ba5a] text-white font-black text-center text-sm rounded-xl shadow-lg transition-all"
                >
                  <MessageSquare className="w-5 h-5 fill-white" />
                  <span>Send Estimate to WhatsApp</span>
                  <ArrowRight className="w-4 h-4 text-white" />
                </a>
                <p className="text-[10px] text-slate-450 text-center mt-3 leading-snug">
                  * Submission sends your specifications instantly over encrypted WhatsApp. We will confirm accessibility and schedule our hydro-geologist on-site visit.
                </p>
              </div>

            </div>

            {/* Quick Trust Highlights box */}
            <div id="checkout-trust-box" className="p-5.5 bg-blue-50/70 rounded-3xl border border-blue-100 text-left space-y-3">
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-blue-700 block">⚡ Automatic Free Extras Included:</span>
              
              <div className="space-y-2 text-xs text-slate-700">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-blue-600 shrink-0" />
                  <span><strong>Geological Hydrology Siting</strong> Survey ($300 value)</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-blue-600 shrink-0" />
                  <span><strong>Clearness Flushing</strong> & Aquifer Yield Testing ($150 value)</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-blue-600 shrink-0" />
                  <span><strong>Surface Sanitary Concrete Apron</strong> Shield ($100 value)</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-blue-600 shrink-0" />
                  <span><strong>Standard 12-Month Structural Guarantee</strong></span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
