import { motion } from 'motion/react';
import { VolumeX, Music, Wifi, BatteryCharging, Sparkles, Sliders } from 'lucide-react';
import { FeatureItem } from '../types';
import fitnessImg from '../assets/images/ChatGPT Image Jun 2, 2026, 09_22_14 AM.png';

export default function Features() {
  const featuresList: FeatureItem[] = [
    {
      id: 'anc',
      number: '01',
      title: 'Powerful Noise Cancellation',
      description: 'Block out city roar, commutes, or constant office chatter. Engage the Smart Hybrid ANC chip to construct your absolute pocket of peace.',
      iconName: 'VolumeX',
    },
    {
      id: 'hifi',
      number: '02',
      title: 'Crystal Clear Audio',
      description: 'Experience balanced treble, pristine vocals, and a deep sub-bass vibration. Hear the intricate layers inside your favorite recordings.',
      iconName: 'Music',
    },
    {
      id: 'wireless',
      number: '03',
      title: 'Next-Gen Wireless Freedom',
      description: 'Harness high-efficiency Bluetooth 5.4 with smart dual-device connection syncing. Instant handover swaps audio seamlessly.',
      iconName: 'Wifi',
    },
    {
      id: 'battery',
      number: '04',
      title: 'Long-Lasting Battery',
      description: 'Get 8.5 hours of continuous ANC Listening on a single charge of the buds, stretching to over 40 hours inside the compact charging pod.',
      iconName: 'BatteryCharging',
    },
    {
      id: 'comfort',
      number: '05',
      title: 'Designed for Comfort',
      description: 'Formulated with organic premium silica gel ear tips. Enjoy weight-distributed ergonomics that rest comfortably inside your ears.',
      iconName: 'Sparkles',
    },
  ];

  const getIcon = (name: string) => {
    switch (name) {
      case 'VolumeX':
        return <VolumeX className="w-6 h-6 text-ink" />;
      case 'Music':
        return <Music className="w-6 h-6 text-ink" />;
      case 'Wifi':
        return <Wifi className="w-6 h-6 text-ink" />;
      case 'BatteryCharging':
        return <BatteryCharging className="w-6 h-6 text-ink" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-ink" />;
      default:
        return <Sliders className="w-6 h-6 text-ink" />;
    }
  };

  return (
    <section id="features" className="py-24 md:py-32 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-light/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header Row: Editorial Column with Athlete Visual block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20 md:mb-28">
          <div className="lg:col-span-7 text-left space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand/10 border border-brand/20">
              <span className="font-mono text-[10px] font-bold text-gray-700 uppercase tracking-widest">
                State of the Art Sound
              </span>
            </div>
            <h2 className="font-display font-black text-4xl md:text-6.5xl text-ink tracking-tight leading-none">
              Built for those who <br />
              <span className="text-gray-400">refuse to compromise.</span>
            </h2>
            <p className="text-muted-grey text-base md:text-lg max-w-2xl font-normal leading-relaxed">
              Every millimeter of the KYZ Sound Pro was crafted to deliver rich details of audio fidelity, letting you run your daily soundstage with absolute confidence.
            </p>
            
            {/* Embedded gym/workout performance bullet highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 max-w-xl">
              <div className="flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-brand shrink-0" />
                <span className="font-bold text-sm text-ink font-sans">Sweat & Water Resistant (IPX7)</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-brand shrink-0" />
                <span className="font-bold text-sm text-ink font-sans">Ultra-Secure Ergonomic Fit</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-brand shrink-0" />
                <span className="font-bold text-sm text-ink font-sans">Dynamic Audio EQ Profiling</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-brand shrink-0" />
                <span className="font-bold text-sm text-ink font-sans">Biometric Stability Lock</span>
              </div>
            </div>
          </div>

          {/* New Photo Showcase Card integrating the Gym/Workout Asset */}
          <div className="lg:col-span-5 flex justify-center w-full">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
              className="relative w-full max-w-[380px] aspect-[4/5] rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.18)] border border-neutral-100 bg-slate-900 group"
            >
              <img 
                src={fitnessImg} 
                alt="KYZ Sound Pro workout athletic performance" 
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Overlay with fitness branding */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#08080F]/90 via-[#08080F]/15 to-transparent flex flex-col justify-end p-6">
                <span className="text-[10px] uppercase font-mono font-bold tracking-widest text-[#C5FF00] mb-1">
                  Active Performance
                </span>
                <h4 className="text-white text-lg font-bold font-display leading-tight">
                  Zero compromise. No fallback.
                </h4>
                <p className="text-slate-300 text-xs font-sans mt-1 leading-relaxed">
                  Biometrically engineered lock stays perfectly intact through intensive weights, sweat, and movement.
                </p>
              </div>
              
              {/* Small glowing brand tag in top corner */}
              <div className="absolute top-4 right-4 px-3 py-1 bg-brand border border-[#C5FF00]/40 rounded-full shadow-md z-10">
                <span className="font-mono text-[9px] font-black text-[#08080F] tracking-widest uppercase">
                  IPX7 RATED
                </span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Features Responsive Bento Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {featuresList.map((feature, idx) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative bg-light-bg p-8 md:p-10 rounded-2xl border border-glass-border shadow-xs hover:shadow-xl hover:border-brand/40 hover:bg-white transition-all duration-300 flex flex-col justify-between overflow-hidden"
              id={`feature-card-${feature.id}`}
            >
              {/* Decorative Brand Accent Line */}
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-brand scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

              <div>
                {/* Upper row */}
                <div className="flex items-center justify-between mb-8">
                  <div className="w-12 h-12 rounded-xl bg-white border border-glass-border flex items-center justify-center group-hover:bg-brand group-hover:border-brand transition-colors duration-300 shadow-xs">
                    {getIcon(feature.iconName)}
                  </div>
                  <span className="font-display font-black text-4xl text-gray-200 group-hover:text-brand/20 transition-colors duration-300">
                    {feature.number}
                  </span>
                </div>

                {/* Text Content */}
                <h3 className="font-display font-bold text-lg md:text-xl text-ink group-hover:text-ink transition-colors mb-3">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-grey leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Read specifications button */}
              <div className="mt-8 flex items-center gap-1.5 font-mono text-[10px] font-bold text-gray-400 group-hover:text-brand transition-colors uppercase tracking-widest pt-4 border-t border-glass-border">
                Advanced Spec Guarded
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
