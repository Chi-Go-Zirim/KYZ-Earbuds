/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Features from './components/Features';
import Showcase from './components/Showcase';
import UseCases from './components/UseCases';
import Quote from './components/Quote';
import EarlyAccessForm from './components/EarlyAccessForm';
import Footer from './components/Footer';

export default function App() {
  useEffect(() => {
    // Elegant tab branding console logger
    console.log(
      '%c🧬 KYZ Sound Pro %c Campaign Site Loaded Successfully %c',
      'background:#C5FF00;color:#08080F;padding:4px 6px;border-radius:4px;font-weight:bold;',
      'color:#C5FF00;font-weight:medium;',
      ''
    );
  }, []);

  return (
    <div className="relative min-h-screen bg-light-bg text-ink overflow-x-hidden selection:bg-brand selection:text-ink">
      {/* 1. Interactive Navigation Header */}
      <Navbar />

      {/* 2. Hero Presentation with High-Res Product Shot */}
      <Hero />

      {/* 3. Rolling Slogans Tape Marquee */}
      <Marquee />

      {/* 4. Modular Bento Card Grid of Key Features */}
      <Features />

      {/* 5. Detailed Product Spec or ANC Audio Tester (Using Detail Image) */}
      <Showcase />

      {/* 6. Dynamic Scenarios with Sunlit Lifestyle Backdrop */}
      <UseCases />

      {/* 7. Oversized Display Quote Section */}
      <Quote />

      {/* 8. Registration Queue Waitlist Form */}
      <EarlyAccessForm />

      {/* 9. Baseline Credits and hashtag band Footer */}
      <Footer />
    </div>
  );
}
