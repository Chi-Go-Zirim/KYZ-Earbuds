import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Battery, ShieldCheck, Sun, Eye, VolumeX, Volume2, Cpu } from 'lucide-react';
import caseImage from '../assets/images/ChatGPT Image Jun 2, 2026, 09_38_05 AM.png';

export default function Showcase() {
  const [ancLevel, setAncLevel] = useState(80); // Slider value (0 to 100), where 100 is maximum silence (ANC On)
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeTab, setActiveTab] = useState<'specs' | 'acoustic'>('specs');

  // Specs lists
  const specifications = [
    { label: 'Battery Capacity', value: '450 mAh', description: 'Up to 40 hours with charging case' },
    { label: 'Driver Size', value: '11mm Driver', description: 'Dual-magnet dynamic coaxial design' },
    { label: 'ANC Depth', value: '-48dB ANC', description: 'Next-generation smart adaptive silence' },
    { label: 'Water Rating', value: 'IPX5 Rated', description: 'Complete sweat and splash protection' },
    { label: 'Dual Connect', value: 'BT 5.4 LE', description: 'Multi-device pairing over Bluetooth' },
    { label: 'Charge Speed', value: '10 Min Chg', description: 'Provides 2 hours of playback speed' },
  ];

  // Helper colors for sound waves
  // Low level = quiet, green. High level = loud, messy red.
  const getAncDescription = (val: number) => {
    if (val < 25) return { status: 'Ambient Pass-Through', desc: 'Voices and surrounding alerts are highlighted for complete awareness.', color: 'text-amber-700 font-bold', bg: 'bg-amber-500/10' };
    if (val < 70) return { status: 'Normal Mode', desc: 'Natural sound isolation for serene domestic environments.', color: 'text-gray-700 font-bold', bg: 'bg-gray-500/10' };
    return { status: 'Pure Active Noise Cancel (-48dB)', desc: 'Full city hum, jet-engines, and office chatter are actively silenced.', color: 'text-emerald-900 bg-brand/40 px-2 py-0.5 rounded-sm font-extrabold', bg: 'bg-brand-light/80' };
  };

  const selectedAncInfo = getAncDescription(ancLevel);

  return (
    <section id="showcase" className="py-24 md:py-32 bg-light-bg relative overflow-hidden border-y border-glass-border">
      
      {/* Decorative Blur Background Bullets */}
      <div className="absolute top-1/2 left-1/4 w-[450px] h-[450px] bg-brand-light/30 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Double Columns Grid structure */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Charging Pod high-res image visual detail */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center space-y-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white p-8 rounded-3xl border border-glass-border shadow-xl hover:shadow-2xl transition-shadow w-full max-w-sm relative"
            >
              {/* Floating detail tag */}
              <div className="absolute top-4 left-4 bg-ink text-white font-mono text-[9px] uppercase tracking-widest px-2.5 py-1 rounded-full font-bold">
                Organic Silicon Shell
              </div>

              {/* Charging case generated high-resolution photo */}
              <div className="rounded-2xl bg-light-bg p-4 flex items-center justify-center overflow-hidden border border-black/5 aspect-square relative group">
                <img
                  src={caseImage}
                  alt="KYZ Sound Pro Charging Case Open"
                  referrerPolicy="no-referrer"
                  className="max-h-[85%] object-contain drop-shadow-[0_15px_30px_rgba(12,13,20,0.06)] group-hover:scale-105 transition-transform duration-500"
                  id="showcase-detail-image"
                />
              </div>

              <div className="mt-6 space-y-2">
                <p className="font-display font-bold text-ink text-lg text-center">Open Charging Pod Model</p>
                <p className="text-muted-grey text-xs lg:text-sm text-center leading-relaxed">
                  Magnetic fast-snapping lid configuration designed with heavy zinc hinges. Engineered for an effortless click.
                </p>
              </div>
            </motion.div>

            {/* Quick specifications highlights */}
            <div className="flex gap-4 w-full max-w-sm">
              <div className="flex-1 bg-white p-4 rounded-xl border border-glass-border flex items-center gap-3">
                <Battery className="text-brand" size={24} />
                <div className="text-left">
                  <p className="font-display font-bold text-sm text-ink leading-none">40 Hrs</p>
                  <p className="text-[10px] text-muted-grey font-mono mt-0.5 uppercase">Full Battery Combo</p>
                </div>
              </div>
              <div className="flex-1 bg-white p-4 rounded-xl border border-glass-border flex items-center gap-3">
                <Cpu className="text-brand" size={24} />
                <div className="text-left">
                  <p className="font-display font-bold text-sm text-ink leading-none">Smart ANC</p>
                  <p className="text-[10px] text-muted-grey font-mono mt-0.5 uppercase">-48dB Decibel Guard</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Custom Interactive specs or dynamic acoustic canvas */}
          <div className="lg:col-span-7 space-y-8 text-left">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand/10 border border-brand/20">
                <span className="font-mono text-[10px] font-bold text-gray-700 uppercase tracking-widest">
                  Performance & Tech Specs
                </span>
              </div>
              <h2 className="font-display font-black text-4xl md:text-5xl lg:text-6xl tracking-tight leading-tight text-ink">
                Interact with the <br />
                <span className="px-4 py-1.5 bg-ink text-brand rounded-2xl inline-block mt-3 shadow-md">Sound Pro Ecosystem.</span>
              </h2>
            </div>

            {/* Selection Tabs */}
            <div className="flex p-1 bg-white rounded-xl border border-glass-border w-fit">
              <button
                onClick={() => setActiveTab('specs')}
                className={`px-5 py-2 rounded-lg font-display text-xs uppercase font-extrabold tracking-widest transition-all ${
                  activeTab === 'specs'
                    ? 'bg-ink text-white shadow-md'
                    : 'text-muted-grey hover:text-ink'
                }`}
                id="tab-specs"
              >
                Detailed Specifications
              </button>
              <button
                onClick={() => setActiveTab('acoustic')}
                className={`px-5 py-2 rounded-lg font-display text-xs uppercase font-extrabold tracking-widest transition-all ${
                  activeTab === 'acoustic'
                    ? 'bg-ink text-white shadow-md'
                    : 'text-muted-grey hover:text-ink'
                }`}
                id="tab-anc"
              >
                ANC Audio Isolation Tester
              </button>
            </div>

            {/* Tab content wrapper with smooth motion */}
            <AnimatePresence mode="wait">
              {activeTab === 'specs' ? (
                <motion.div
                  key="specs-tab"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="grid grid-cols-2 md:grid-cols-3 gap-4"
                >
                  {specifications.map((spec) => (
                    <div
                      key={spec.label}
                      className="bg-white p-5 rounded-2xl border border-glass-border shadow-xs hover:border-brand/40 hover:shadow-md transition-all group"
                    >
                      <p className="font-mono text-[10px] text-muted-grey font-bold uppercase tracking-wider group-hover:text-brand transition-colors">
                        {spec.label}
                      </p>
                      <p className="font-display font-black text-xl text-ink tracking-tight mt-1">
                        {spec.value}
                      </p>
                      <p className="text-xs text-muted-grey leading-normal mt-1">
                        {spec.description}
                      </p>
                    </div>
                  ))}
                </motion.div>
              ) : (
                <motion.div
                  key="acoustic-tab"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="bg-white p-6 md:p-8 rounded-2xl border border-glass-border shadow-md space-y-6"
                >
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <h3 className="font-display font-bold text-lg text-ink">Active Noise Isolation Demo</h3>
                      <button
                        onClick={() => setIsPlaying(!isPlaying)}
                        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border font-mono text-[10px] uppercase font-bold transition-all ${
                          isPlaying
                            ? 'bg-brand/20 border-brand/40 text-charcoal'
                            : 'bg-black text-white hover:bg-brand hover:text-ink hover:border-brand'
                        }`}
                        id="btn-play-sim"
                      >
                        {isPlaying ? '⏸ Stop Sim' : '▶ Play Noise Sim'}
                      </button>
                    </div>
                    <p className="text-xs text-muted-grey">
                      Drag the isolation slider below to see how our micro-processors actively counter ambient audio waves.
                    </p>
                  </div>

                  {/* Noise cancellation Wave visualizer */}
                  <div className="h-28 bg-ink rounded-xl relative overflow-hidden flex items-center justify-center p-4">
                    {/* Visual waves representing noise levels */}
                    <div className="flex items-center justify-center gap-[3px] w-full h-full">
                      {[...Array(40)].map((_, i) => {
                        // Max sound wave height is determined by the "noise level" (100 - ancLevel)
                        const noiseAmplitude = 100 - ancLevel;
                        // Some random variation
                        const baseHeight = 10 + (Math.sin(i * 0.4) + 1) * 35;
                        const modifier = isPlaying ? (Math.random() * 0.4 + 0.8) : 1;
                        const animatedHeight = (baseHeight * (noiseAmplitude / 100) + 4) * modifier;

                        // Color changes based on isolation level
                        const waveColor = ancLevel > 70 
                          ? 'bg-brand' 
                          : ancLevel > 30 
                            ? 'bg-sky-400' 
                            : 'bg-rose-500';

                        return (
                          <motion.div
                            key={i}
                            animate={isPlaying ? { height: [animatedHeight, animatedHeight * 0.6, animatedHeight] } : { height: animatedHeight }}
                            transition={{
                              repeat: Infinity,
                              duration: 0.5 + (i % 5) * 0.1,
                              ease: 'easeInOut',
                            }}
                            className={`w-[4px] rounded-full transition-colors duration-300 ${waveColor}`}
                            style={{ height: `${animatedHeight}px` }}
                          />
                        );
                      })}
                    </div>

                    {/* Left & Right dB status label overlay */}
                    <div className="absolute top-2 left-3 font-mono text-[9px] uppercase font-bold tracking-widest text-gray-500">
                      Input Wave
                    </div>
                    <div className="absolute bottom-2 right-3 font-mono text-[9px] uppercase font-bold tracking-widest text-brand">
                      System: -{Math.round(ancLevel * 0.48)}dB Guard
                    </div>
                  </div>

                  {/* Controller slider */}
                  <div className="space-y-4">
                    <div className="flex justify-between items-center font-mono text-[10px] uppercase font-bold text-muted-grey">
                      <span>Normal Environment (0% Isolation)</span>
                      <span>KYZ Pure Quiet (100% Isolation)</span>
                    </div>

                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={ancLevel}
                      onChange={(e) => setAncLevel(parseInt(e.target.value))}
                      className="w-full accent-ink bg-gray-200 h-2 rounded-lg cursor-pointer"
                      id="anc-slider"
                    />

                    {/* Live status badge block */}
                    <div className={`p-4 rounded-xl border border-glass-border transition-colors duration-300 ${selectedAncInfo.bg} text-left`}>
                      <span className={`font-mono text-xs font-bold uppercase tracking-wider ${selectedAncInfo.color}`}>
                        {selectedAncInfo.status}
                      </span>
                      <p className="text-xs text-charcoal font-normal mt-1 leading-relaxed">
                        {selectedAncInfo.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
