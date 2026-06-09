import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react';

// Image asset imports
import caseImg from '../assets/images/ChatGPT Image Jun 2, 2026, 09_38_05 AM.png';
import heroImg from '../assets/images/Gemini_Generated_Image_p51agbp51agbp51a.png';
import prod1Img from '../assets/images/ChatGPT Image Jun 2, 2026, 09_01_04 AM.png';
import prod2Img from '../assets/images/ChatGPT Image Jun 2, 2026, 09_22_14 AM.png';

interface Slide {
  brandPrefix: string;
  brandTitle: string;
  subtitle: string;
  specText: string;
  image: string;
  imageAlt: string;
  accentBg: string;
}

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  const slides: Slide[] = [
    {
      brandPrefix: 'kyz',
      brandTitle: 'Sound Pro Case',
      subtitle: 'Your style, your pace',
      specText: 'Up to 40-hour total playback and wireless rapid-charge.',
      image: caseImg,
      imageAlt: 'KYZ Sound Pro sleek opened charging case and earbud',
      accentBg: 'bg-brand/25',
    },
    {
      brandPrefix: 'kyz',
      brandTitle: 'Studio Drivers',
      subtitle: 'Active silence, complete focus',
      specText: 'Hi-Res certified bio-diaphragm audio core.',
      image: heroImg,
      imageAlt: 'KYZ Sound Pro titanium metallic earbud head close-up',
      accentBg: 'bg-brand/35',
    },
    {
      brandPrefix: 'kyz',
      brandTitle: 'Absolute ANC',
      subtitle: 'Dynamic voice-cancelation',
      specText: 'Advanced tri-mic digital noise isolation systems (-48dB).',
      image: prod1Img,
      imageAlt: 'KYZ Sound Pro sleek premium acoustic active driver design',
      accentBg: 'bg-brand/20',
    },
    {
      brandPrefix: 'kyz',
      brandTitle: 'Horizon Stereo',
      subtitle: 'Premium acoustic comfort',
      specText: 'Ergonomic shape designed for rich high-fidelity audio.',
      image: prod2Img,
      imageAlt: 'KYZ Sound Pro design details and acoustic profile',
      accentBg: 'bg-brand/15',
    },
  ];

  const nextSlide = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const setSlideIndex = (index: number) => {
    setDirection(index > current ? 1 : -1);
    setCurrent(index);
  };

  // Pre-fetch/auto-rotate to keep landing page active
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 8500);
    return () => clearInterval(timer);
  }, [current]);

  // Framer motion variants for smooth slide swapping
  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 120 : -120,
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: 'spring', stiffness: 300, damping: 28 },
        opacity: { duration: 0.4 },
        scale: { duration: 0.4 },
      },
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 120 : -120,
      opacity: 0,
      scale: 0.95,
      transition: {
        x: { type: 'spring', stiffness: 300, damping: 28 },
        opacity: { duration: 0.3 },
        scale: { duration: 0.3 },
      },
    }),
  };

  const activeSlide = slides[current];

  return (
    <section
      id="hero-section"
      className="relative min-h-[92vh] flex flex-col items-center justify-center pt-24 pb-16 overflow-hidden bg-[#121315]"
    >
      {/* Background Image Layer */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${prod1Img})` }}
      />

      {/* Elegant dark overlay system that guarantees typography legibility while preserving sunset colors */}
      <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/90 via-neutral-950/65 to-neutral-900/40 mix-blend-multiply z-0" />
      <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-neutral-950/35 z-0" />

      {/* Texture Overlay matching the user's uploaded concrete/slate texture exactly */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.05] mix-blend-overlay z-10" 
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }} 
      />

      {/* Background Soft Layer Blurs backing the premium aesthetic */}
      <div className="absolute inset-x-0 top-0 h-full w-full pointer-events-none z-0 overflow-hidden">
        {/* Soft radial overlay mimicking the glowing dynamic background */}
        <div className="absolute top-[20%] right-[10%] w-[45vw] h-[45vw] bg-brand/15 rounded-full blur-[140px] opacity-40 transition-all duration-1000 animate-pulse" />
        <div className="absolute bottom-[10%] left-[5%] w-[30vw] h-[30vw] bg-brand/5 rounded-full blur-[110px] opacity-25" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-20 my-auto">
        
        {/* Left Side: Editorial Typography Column */}
        <div className="lg:col-span-5 text-left flex flex-col justify-center space-y-7 md:pr-4">
          <div className="space-y-4">
            {/* Title with distinct lowercase prefix & impact styling */}
            <div className="overflow-hidden">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={current}
                  custom={direction}
                  initial={{ y: 25, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -25, opacity: 0 }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                  className="font-display leading-none tracking-tight text-white uppercase"
                >
                  <span className="text-brand lowercase font-black text-4.5xl md:text-6xl mr-2 underline decoration-white/10">
                    {activeSlide.brandPrefix}
                  </span>
                  <span className="font-black text-4.5xl md:text-6xl text-white leading-[0.9]">
                    {activeSlide.brandTitle}
                  </span>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Elegant medium subheader */}
            <AnimatePresence mode="wait">
              <motion.h2
                key={current}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                transition={{ duration: 0.35, delay: 0.1 }}
                className="font-sans text-xl md:text-2xl font-bold text-slate-100 mt-2"
              >
                {activeSlide.subtitle}
              </motion.h2>
            </AnimatePresence>

            {/* Spec Highlight in clean gray */}
            <AnimatePresence mode="wait">
              <motion.p
                key={current}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3, delay: 0.15 }}
                className="font-sans text-sm md:text-base text-slate-300 leading-relaxed font-medium"
              >
                {activeSlide.specText}
              </motion.p>
            </AnimatePresence>
          </div>

          {/* Action Trigger Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#reserve"
              className="px-7 py-3 md:px-8 md:py-3.5 rounded-full bg-brand hover:bg-white text-ink hover:text-ink font-bold text-xs uppercase tracking-widest transition-all duration-300 shadow-md hover:shadow-brand/20 active:scale-95 inline-flex items-center gap-2"
            >
              Learn More
              <ArrowUpRight size={14} />
            </a>
            <a
              href="#showcase"
              className="px-6 py-3 rounded-full hover:bg-white/10 text-white font-bold text-xs uppercase tracking-widest transition-all border border-white/20 hover:border-white"
            >
              Specs
            </a>
          </div>
        </div>

        {/* Right Side: Showcase Carousel Container portraying multiple items dynamically to match Xiaomi Smart Band */}
        <div className="lg:col-span-7 flex flex-col items-center justify-center relative min-h-[400px] md:min-h-[500px]">
          {/* Main Visual Display Wrapper */}
          <div className="relative w-full max-w-lg aspect-square flex items-center justify-center">
            
            {/* Absolute Backing Glow Layer */}
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.6 }}
                className={`absolute w-72 h-72 rounded-full ${activeSlide.accentBg} blur-[60px] opacity-80`}
              />
            </AnimatePresence>

            {/* Smooth transition model rendering */}
            <div className="relative w-full h-[95%] overflow-visible flex items-center justify-center group/panel">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={current}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="absolute w-full h-full flex items-center justify-center pointer-events-auto"
                >
                  {/* Studio Luminous Backdrop Card that dynamically blends with the product's white background */}
                  <div className="absolute w-[280px] h-[280px] md:w-[340px] md:h-[340px] rounded-3xl bg-gradient-to-tr from-white/95 via-white to-slate-150/95 shadow-[0_25px_55px_-12px_rgba(0,0,0,0.55),inset_0_2px_4px_rgba(255,255,255,1)] flex items-center justify-center overflow-hidden border border-white/25 -z-10 transition-transform duration-500 rotate-1 group-hover/panel:rotate-0">
                    {/* Soft inside accent glow matching active state */}
                    <div className="absolute inset-0 bg-brand/5 pointer-events-none mix-blend-color" />
                    
                    <img
                      src={activeSlide.image}
                      alt={activeSlide.imageAlt}
                      referrerPolicy="no-referrer"
                      className="max-w-[85%] max-h-[85%] object-contain mix-blend-multiply transition-all duration-500 hover:scale-[1.08] filter brightness-[1.01] contrast-[1.02]"
                      id={`carousel-slide-img-${current}`}
                    />
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Symmetrical Action Arrows (Inside circles on left and right borders of layout) */}
          <button
            onClick={prevSlide}
            className="absolute left-0 md:left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 flex items-center justify-center text-white hover:text-brand shadow-sm transition-all z-30 backdrop-blur-xs"
            aria-label="Previous Slide"
          >
            <ChevronLeft size={18} strokeWidth={2.5} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 md:right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 flex items-center justify-center text-white hover:text-brand shadow-sm transition-all z-30 backdrop-blur-xs"
            aria-label="Next Slide"
          >
            <ChevronRight size={18} strokeWidth={2.5} />
          </button>
        </div>

      </div>

      {/* Footer Navigation Index Indicator Bar (Matches Xiaomi Smart Band 9 bottom lines perfectly) */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-20">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setSlideIndex(idx)}
            className="group relative py-2 px-1 focus:outline-none"
            aria-label={`Go to slide ${idx + 1}`}
          >
            <div
              className={`h-1.5 rounded-full transition-all duration-500 ${
                current === idx ? 'w-10 bg-brand' : 'w-5 bg-white/20 hover:bg-white/40'
              }`}
            />
          </button>
        ))}
      </div>
    </section>
  );
}
