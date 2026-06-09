import { Github, Twitter, Instagram, Headphones } from 'lucide-react';
import Logo from './Logo';

export default function Footer() {
  const hashtags = [
    '#KYZ',
    '#KYZSoundPro',
    '#HearWhatMatters',
    '#SoundWithoutLimits',
    '#WirelessAudio',
    '#NoiseCancellation',
    '#AudioReimagined',
  ];

  return (
    <footer className="bg-ink text-white border-t border-glass-border">
      {/* Hashtag band over the footer */}
      <div className="bg-charcoal border-b border-white/5 py-6">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-wrap gap-2.5 justify-center">
          {hashtags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-mono text-gray-400 hover:text-brand border border-white/5 rounded-full px-4 py-1.5 transition-colors cursor-pointer capitalize"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
        {/* Left Column Brand */}
        <div className="md:col-span-5 space-y-4 text-left">
          <Logo lightMode={false} />
          <p className="text-xs text-gray-400 max-w-sm leading-relaxed">
            Leading advanced acoustic studies since 2018. The KYZ Sound Pro campaign is formulated to empower high-end, responsive personal environments.
          </p>
        </div>

        {/* Right Column Coordinates */}
        <div className="md:col-span-7 flex flex-col sm:flex-row justify-between gap-8 items-start sm:items-center">
          {/* Document Links */}
          <div className="flex flex-wrap gap-x-8 gap-y-3 text-xs font-mono uppercase tracking-widest text-gray-400">
            <a href="#" className="hover:text-brand transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-brand transition-colors">
              Terms of Use
            </a>
            <a href="#" className="hover:text-brand transition-colors">
              Press Pack
            </a>
            <a href="#" className="hover:text-brand transition-colors">
              Contact Center
            </a>
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-4">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-white/10 hover:border-brand flex items-center justify-center text-gray-300 hover:text-brand transition-all"
              aria-label="Follow us on Twitter"
            >
              <Twitter size={15} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-white/10 hover:border-brand flex items-center justify-center text-gray-300 hover:text-brand transition-all"
              aria-label="Follow us on Instagram"
            >
              <Instagram size={15} />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-white/10 hover:border-brand flex items-center justify-center text-gray-300 hover:text-brand transition-all"
              aria-label="Follow us on GitHub"
            >
              <Github size={15} />
            </a>
          </div>
        </div>
      </div>

      {/* Baseline Bottom border credits */}
      <div className="border-t border-white/5 py-6 font-mono text-[10px] text-gray-500 uppercase tracking-widest">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col sm:flex-row justify-between items-center gap-3">
          <span>© 2026 KYZ AUDIO GROUP. ALL RIGHTS SECURED.</span>
          <span className="flex items-center gap-1">
            CRISP LIGHT MODE CAMPAIGN FOR
            <Headphones size={12} className="text-brand shrink-0" />
            SOUND PRO
          </span>
        </div>
      </div>
    </footer>
  );
}
