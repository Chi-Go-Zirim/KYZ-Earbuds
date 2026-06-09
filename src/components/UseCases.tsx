import { useState } from 'react';
import { motion } from 'motion/react';
import { Briefcase, BookOpen, Plane, Gamepad2, Headphones, Activity } from 'lucide-react';
import { UseCaseItem } from '../types';
import lifestyleImg from '../assets/images/ChatGPT Image Jun 2, 2026, 09_01_04 AM.png';

export default function UseCases() {
  const [activeCase, setActiveCase] = useState<string>('work');

  const useCasesList: UseCaseItem[] = [
    {
      id: 'work',
      emoji: '💼',
      name: 'Professional Deep Work',
      description: 'Isolate chaotic office chimes or home noise. Active call gating emphasizes your voice clearly on video calls, eliminating surrounding din.',
      iconName: 'Briefcase',
    },
    {
      id: 'study',
      emoji: '📚',
      name: 'Quiet Focus Study Sessions',
      description: 'Slip into a serene academic headspace in busy libraries or coffee shops. Retain more information by completely locking out background clatter.',
      iconName: 'BookOpen',
    },
    {
      id: 'travel',
      emoji: '✈️',
      name: 'High-Altitude Commutes',
      description: 'Drown out heavy hum of plane turbine rotors, train tracks, or traffic horns. Drift peacefully into your private relaxation bubble.',
      iconName: 'Plane',
    },
    {
      id: 'gaming',
      emoji: '🎮',
      name: 'Ultra Low-Latency Gaming',
      description: 'Synchronous audio with minimal 35ms latency codec guarantees you hear game signals, atmospheric footsteps, and updates in absolute real-time.',
      iconName: 'Gamepad2',
    },
    {
      id: 'music',
      emoji: '🎧',
      name: 'Acoustic Soundstage',
      description: 'Re-invent classic music catalogs. Premium LHDC 24-bit audio formats render exquisite string quartets and raw electronic synths accurately.',
      iconName: 'Headphones',
    },
  ];

  const getIcon = (name: string, active: boolean) => {
    const cls = `w-5 h-5 transition-colors ${active ? 'text-ink' : 'text-muted-grey'}`;
    switch (name) {
      case 'Briefcase': return <Briefcase className={cls} />;
      case 'BookOpen': return <BookOpen className={cls} />;
      case 'Plane': return <Plane className={cls} />;
      case 'Gamepad2': return <Gamepad2 className={cls} />;
      case 'Headphones': return <Headphones className={cls} />;
      default: return <Activity className={cls} />;
    }
  };

  const selectedCaseData = useCasesList.find((item) => item.id === activeCase) || useCasesList[0];

  return (
    <section id="usecases" className="py-24 md:py-32 bg-white relative overflow-hidden">
      
      {/* Visual background details */}
      <div className="absolute top-1/2 left-0 w-80 h-96 bg-brand-light/20 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header content block */}
        <div className="max-w-3xl text-left mb-16 md:mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand/10 border border-brand/20">
            <span className="font-mono text-[10px] font-bold text-gray-700 uppercase tracking-widest">
              Engineered for Every Scenario
            </span>
          </div>
          <h2 className="font-display font-black text-4xl md:text-6xl text-ink tracking-tight leading-none">
            Designed for the <br />
            <span className="text-gray-400">rhythm of your life.</span>
          </h2>
          <p className="text-muted-grey text-base md:text-lg max-w-xl font-normal leading-relaxed">
            Your environment updates constantly, and so does the KYZ Sound Pro. Discover custom-adjusted profiles tailored for daily focus, play, and exploration.
          </p>
        </div>

        {/* Double block responsive grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Interactive items selection list */}
          <div className="lg:col-span-5 space-y-3">
            {useCasesList.map((item) => {
              const active = item.id === activeCase;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveCase(item.id)}
                  className={`w-full text-left p-5 rounded-2xl border transition-all flex items-center gap-4 ${
                    active
                      ? 'bg-ink border-ink text-white shadow-lg shadow-black/10'
                      : 'bg-light-bg border-glass-border text-ink hover:bg-white hover:border-brand/40'
                  }`}
                  id={`btn-usecase-${item.id}`}
                >
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                    active ? 'bg-brand' : 'bg-white border border-glass-border'
                  }`}>
                    {getIcon(item.iconName, active)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className={`font-display font-bold text-sm tracking-tight ${active ? 'text-white' : 'text-ink'}`}>
                      {item.name}
                    </p>
                    <p className={`text-[11px] font-mono mt-0.5 uppercase tracking-wider ${active ? 'text-brand' : 'text-muted-grey'}`}>
                      Scenario Gated Profile
                    </p>
                  </div>
                  <span className="text-xl shrink-0">{item.emoji}</span>
                </button>
              );
            })}
          </div>

          {/* Right Column: Giant details card displaying the generated lifestyle photo */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            <div className="bg-light-bg border border-glass-border rounded-3xl p-6 md:p-8 flex flex-col md:flex-row gap-8 items-center shadow-xs">
              
              {/* Responsive Lifestyle Picture */}
              <div className="w-full md:w-1/2 aspect-square md:aspect-auto md:h-80 rounded-2xl overflow-hidden border border-black/5 relative shadow-md shrink-0">
                <img
                  src={lifestyleImg}
                  alt="KYZ Sound Pro Lifestyle Focus"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                  id="usecase-lifestyle-image"
                />
                
                {/* Visual glass overlay to make it incredibly sleek */}
                <div className="absolute inset-0 bg-linear-to-t from-black/50 via-black/10 to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 font-mono text-[9px] uppercase font-bold tracking-widest text-white/90 bg-black/40 backdrop-blur-xs px-2.5 py-1 rounded-full">
                  Real-World Active Testing
                </div>
              </div>

              {/* Context Copy details */}
              <div className="space-y-4 text-left flex-1">
                <div className="inline-flex items-center gap-1.5 font-mono text-[10px] font-bold text-gray-800 bg-brand/35 px-2 py-0.5 rounded uppercase tracking-widest">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
                  Profile Active
                </div>
                <h3 className="font-display font-bold text-2xl text-ink leading-tight">
                  {selectedCaseData.name}
                </h3>
                <p className="text-sm text-muted-grey leading-relaxed">
                  {selectedCaseData.description}
                </p>
                
                {/* Micro tech metrics */}
                <div className="pt-4 border-t border-glass-border flex gap-6 text-[11px] font-mono uppercase tracking-wider text-muted-grey">
                  <div>
                    <span className="font-extrabold text-ink block">Latency</span>
                    <span>35ms Auto</span>
                  </div>
                  <div>
                    <span className="font-extrabold text-ink block">Profile</span>
                    <span>Adaptive EQ</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
