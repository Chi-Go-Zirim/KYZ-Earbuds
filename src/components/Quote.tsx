import { motion } from 'motion/react';

export default function Quote() {
  return (
    <section id="quote" className="py-24 md:py-36 bg-ink relative overflow-hidden text-center">
      {/* Decorative radial lighting in background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(120,189,0,0.12)_0%,transparent_70%)] pointer-events-none animate-pulse" />

      <div className="max-w-5xl mx-auto px-6 relative z-10 space-y-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-brand font-display font-black text-6xl md:text-8xl leading-none select-none opacity-30"
        >
          “
        </motion.div>
        
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="font-display font-black text-3xl md:text-5xl lg:text-6xl text-white uppercase tracking-tight max-w-4xl mx-auto leading-tight"
        >
          Because great sound <br className="hidden sm:inline" />
          isn't just heard. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-lime-400 font-extrabold block mt-2">
            It's felt.
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xs md:text-sm font-mono text-gray-500 uppercase tracking-widest pt-4"
        >
          — THE KYZ RESEARCH GROUP, 2026
        </motion.p>
      </div>
    </section>
  );
}
