import { motion } from 'motion/react';

export default function Marquee() {
  const words = [
    'Smart Noise Cancellation',
    'Acoustic Precision',
    '3D Spatial Field',
    '40 Hours Playback',
    'Sleek Minimalist Shell',
    'Ergonomic Stability',
    'Instant Touch Controls',
    'High Fidelity Sound',
  ];

  // Repeat items to ensure it fills screen and scrolls seamlessly
  const doubledWords = [...words, ...words, ...words];

  return (
    <div className="relative w-full overflow-hidden bg-brand border-y border-glass-border py-4 md:py-5 z-20">
      <div className="flex whitespace-nowrap min-w-full">
        <motion.div
          className="flex gap-12 text-ink uppercase font-display font-black text-xs md:text-sm tracking-widest shrink-0"
          animate={{ x: [0, '-33.333%'] }}
          transition={{
            ease: 'linear',
            duration: 22,
            repeat: Infinity,
          }}
        >
          {doubledWords.map((word, idx) => (
            <div key={idx} className="flex items-center gap-6">
              <span className="shrink-0">{word}</span>
              <span className="w-2 h-2 rounded-full bg-ink shrink-0" />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
