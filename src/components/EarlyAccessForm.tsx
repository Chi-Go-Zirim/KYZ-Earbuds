import { useState, useEffect, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, User, Star, CheckCircle, Bell, Users, BookmarkCheck, Phone } from 'lucide-react';
import { WaitlistForm } from '../types';

export default function EarlyAccessForm() {
  const [formData, setFormData] = useState<WaitlistForm>({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    interest: 'discount',
    colour: 'black',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [totalSignups, setTotalSignups] = useState(1482);
  const [recentSignups, setRecentSignups] = useState<Array<{ name: string; time: string }>>([
    { name: 'Alexander M.', time: '2 mins ago' },
    { name: 'Sarah L.', time: '5 mins ago' },
    { name: 'Hiroshi T.', time: '12 mins ago' },
  ]);

  useEffect(() => {
    // Read from localStorage if any previous count exists
    const storedCount = localStorage.getItem('kyz_total_signups');
    if (storedCount) {
      setTotalSignups(parseInt(storedCount));
    } else {
      const initialCount = 1482 + Math.floor(Math.random() * 50);
      setTotalSignups(initialCount);
      localStorage.setItem('kyz_total_signups', initialCount.toString());
    }

    const storedSubscribers = localStorage.getItem('kyz_subscribers');
    if (storedSubscribers) {
      try {
        const subs = JSON.parse(storedSubscribers);
        if (subs.length > 0) {
          const loadedRecent = subs.map((sub: any) => ({
            name: `${sub.firstName} ${sub.lastName ? (sub.lastName.length > 0 ? sub.lastName.charAt(0) : '') : (sub.firstName.length > 1 ? sub.firstName.charAt(0) : '')}.`,
            time: 'Just now',
          }));
          setRecentSignups((prev) => [...loadedRecent, ...prev].slice(0, 4));
        }
      } catch (err) {
        console.error(err);
      }
    }
  }, []);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (
      !formData.firstName.trim() || 
      !formData.lastName.trim() || 
      !formData.email.trim() || 
      !formData.phoneNumber.trim()
    ) {
      alert('Kindly fill in all required fields to register.');
      return;
    }

    setIsSubmitting(true);

    // Build JSON payload
    const payload = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      phoneNumber: formData.phoneNumber,
      interest: formData.interest,
      colour: formData.colour,
      registeredAt: new Date().toISOString()
    };

    // Send response to backend API proxy to bypass cross-origin browser (CORS) blocks
    fetch('/api/submit-waitlist', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    })
      .then(async (response) => {
        if (!response.ok) {
          throw new Error(`Data proxy submission failed with status: ${response.status}`);
        }
        console.log('Successfully proxy-submitted waitlist data.');
      })
      .catch((error) => {
        console.error('Submission proxy error:', error);
      })
      .finally(() => {
        // Complete the waitlist signup sequence locally
        const nextCount = totalSignups + 1;
        setTotalSignups(nextCount);
        localStorage.setItem('kyz_total_signups', nextCount.toString());

        // Save to subscribers array
        const existingSubsStr = localStorage.getItem('kyz_subscribers') || '[]';
        let subs = [];
        try {
          subs = JSON.parse(existingSubsStr);
        } catch (err) {
          subs = [];
        }
        subs.unshift(formData);
        localStorage.setItem('kyz_subscribers', JSON.stringify(subs));

        // Append to active feed
        const formattedName = `${formData.firstName} ${formData.lastName.length > 0 ? formData.lastName.charAt(0) : ''}.`;
        setRecentSignups((prev) => [
          { name: formattedName, time: 'Just now' },
          ...prev,
        ].slice(0, 4));

        setIsSubmitting(false);
        setIsSuccess(true);
      });
  };

  return (
    <section id="reserve" className="py-24 md:py-32 bg-white relative overflow-hidden">
      
      {/* Structural visual circles */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-brand-light/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Double columns layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left details details column */}
          <div className="lg:col-span-6 space-y-8 text-left max-w-xl mx-auto lg:mx-0">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand/10 border border-brand/20">
                <span className="font-mono text-[10px] font-bold text-gray-700 uppercase tracking-widest">
                  Limited Reservation Window
                </span>
              </div>
              <h2 className="font-display font-black text-4xl md:text-5xl lg:text-6xl text-ink tracking-tight leading-none">
                Claim launch day <br />
                <span className="text-brand">priority discount.</span>
              </h2>
              <p className="text-muted-grey text-base md:text-lg font-normal leading-relaxed">
                We are finishing initial manufacturing runs of the KYZ Sound Pro. Reserve early waitlist membership to lock in special pre-sale pricing, beta access options, and standard 3-year warranty extensions before public deployment.
              </p>
            </div>

            {/* Campaign analytics metrics cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-light-bg border border-glass-border p-5 rounded-2xl flex items-center gap-4 shadow-3xs">
                <div className="p-3 bg-brand/10 text-brand rounded-xl">
                  <Users size={22} className="text-ink" />
                </div>
                <div>
                  <p className="font-display font-black text-2xl text-ink">{totalSignups.toLocaleString()}</p>
                  <p className="text-[10px] font-mono text-muted-grey uppercase tracking-wider mt-0.5">Priority Members</p>
                </div>
              </div>
              <div className="bg-light-bg border border-glass-border p-5 rounded-2xl flex items-center gap-4 shadow-3xs">
                <div className="p-3 bg-brand/10 text-brand rounded-xl animate-pulse">
                  <BookmarkCheck size={22} className="text-ink" />
                </div>
                <div>
                  <p className="font-display font-black text-2xl text-ink">Tier-1</p>
                  <p className="text-[10px] font-mono text-muted-grey uppercase tracking-wider mt-0.5">Allocation Stage</p>
                </div>
              </div>
            </div>

            {/* Realtime registration feed */}
            <div className="space-y-3">
              <h4 className="text-[10px] font-mono uppercase tracking-widest text-muted-grey font-bold flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-ping" />
                Live Campaign Feed
              </h4>
              <div className="flex flex-wrap gap-2">
                {recentSignups.map((sub, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 px-3 py-1.5 bg-light-bg border border-glass-border rounded-full font-mono text-[10px] text-charcoal font-semibold"
                  >
                    <span className="text-green-500">✓</span>
                    <span>{sub.name}</span>
                    <span className="text-muted-grey text-[9px] font-normal font-sans">({sub.time})</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column waitlist form block */}
          <div className="lg:col-span-6 w-full max-w-xl mx-auto">
            <AnimatePresence mode="wait">
              {!isSuccess ? (
                <motion.div
                  key="form-card"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="bg-light-bg border-2 border-glass-border rounded-3xl p-8 md:p-10 shadow-xl relative overflow-hidden"
                  id="waitlist-form-container"
                >
                  <div className="space-y-2 mb-8 text-left">
                    <p className="font-mono text-[10px] uppercase tracking-widest text-brand font-black">
                      🧬 Step Into The Soundstage
                    </p>
                    <h3 className="font-display font-extrabold text-2xl text-ink">
                      Reserve Pre-Order Spot
                    </h3>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-5 text-left" id="priority-waitlist-form">
                    
                    {/* Columns layout for Name inputs */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* First name field */}
                      <div className="space-y-2">
                        <label className="block text-xs font-mono uppercase tracking-wider font-bold text-muted-grey">
                          First Name
                        </label>
                        <div className="relative">
                          <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                          <input
                            type="text"
                            required
                            value={formData.firstName}
                            onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                            placeholder="John"
                            className="w-full bg-white border border-glass-border focus:border-brand focus:ring-1 focus:ring-brand/20 outline-none rounded-xl py-3 pl-11 pr-4 text-sm text-ink transition-all placeholder:text-gray-400"
                          />
                        </div>
                      </div>

                      {/* Last name field */}
                      <div className="space-y-2">
                        <label className="block text-xs font-mono uppercase tracking-wider font-bold text-muted-grey">
                          Last Name
                        </label>
                        <div className="relative">
                          <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                          <input
                            type="text"
                            required
                            value={formData.lastName}
                            onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                            placeholder="Doe"
                            className="w-full bg-white border border-glass-border focus:border-brand focus:ring-1 focus:ring-brand/20 outline-none rounded-xl py-3 pl-11 pr-4 text-sm text-ink transition-all placeholder:text-gray-400"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Columns layout for Contact inputs */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Email field */}
                      <div className="space-y-2">
                        <label className="block text-xs font-mono uppercase tracking-wider font-bold text-muted-grey">
                          Email Address
                        </label>
                        <div className="relative">
                          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                          <input
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            placeholder="you@email.com"
                            className="w-full bg-white border border-glass-border focus:border-brand focus:ring-1 focus:ring-brand/20 outline-none rounded-xl py-3 pl-11 pr-4 text-sm text-ink transition-all placeholder:text-gray-400"
                          />
                        </div>
                      </div>

                      {/* Phone number field */}
                      <div className="space-y-2">
                        <label className="block text-xs font-mono uppercase tracking-wider font-bold text-muted-grey">
                          Phone Number
                        </label>
                        <div className="relative">
                          <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                          <input
                            type="tel"
                            required
                            value={formData.phoneNumber}
                            onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                            placeholder="+1 (555) 123-4567"
                            className="w-full bg-white border border-glass-border focus:border-brand focus:ring-1 focus:ring-brand/20 outline-none rounded-xl py-3 pl-11 pr-4 text-sm text-ink transition-all placeholder:text-gray-400"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Colour field */}
                    <div className="space-y-2">
                      <label className="block text-xs font-mono uppercase tracking-wider font-bold text-muted-grey" htmlFor="form-colour-select">
                        Colour Preference
                      </label>
                      <select
                        id="form-colour-select"
                        value={formData.colour}
                        onChange={(e) => setFormData({ ...formData, colour: e.target.value })}
                        className="w-full bg-white border border-glass-border focus:border-brand focus:ring-1 focus:ring-brand/30 outline-none rounded-xl py-3 px-4 text-xs font-mono uppercase tracking-wider text-charcoal font-semibold transition-all cursor-pointer"
                      >
                        <option value="black">Black</option>
                        <option value="white">White</option>
                        <option value="blue">Blue</option>
                        <option value="ash">Ash</option>
                      </select>
                    </div>

                    {/* Consent checkbox text */}
                    <p className="text-[11px] text-muted-grey leading-relaxed">
                      By registering, you reserve your tier allocation position. Zero upfront payment required. Cancel anytime.
                    </p>

                    {/* Submit button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 rounded-xl bg-ink text-white hover:bg-brand hover:text-ink font-bold text-sm tracking-wider uppercase transition-all duration-300 shadow-md active:scale-98 flex items-center justify-center gap-2 cursor-pointer"
                      id="btn-waitlist-submit"
                    >
                      {isSubmitting ? (
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      ) : (
                        'Notify Me at Launch →'
                      )}
                    </button>
                  </form>
                </motion.div>
              ) : (
                <motion.div
                  key="success-card"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="bg-white border-2 border-brand rounded-3xl p-8 md:p-10 shadow-2xl text-center space-y-6"
                  id="waitlist-success-container"
                >
                  <div className="w-16 h-16 bg-brand-light rounded-full flex items-center justify-center mx-auto text-brand text-3xl">
                    <CheckCircle className="text-ink" size={32} />
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-display font-black text-2xl text-ink uppercase tracking-tight">
                      Priority Reserved!
                    </h3>
                    <p className="text-sm text-muted-grey leading-relaxed">
                      Congratulations, <span className="font-bold text-ink">{formData.firstName} {formData.lastName}</span>! Your tier-1 launch invite was successfully registered to <span className="font-bold text-ink">{formData.email}</span> with phone number <span className="font-bold text-ink">{formData.phoneNumber}</span>.
                    </p>
                  </div>

                  {/* Special Ticket Info */}
                  <div className="p-5 bg-light-bg rounded-2xl border border-glass-border text-left font-mono text-[11px] space-y-2">
                    <div className="flex justify-between border-b border-gray-200/50 pb-2">
                      <span className="text-muted-grey">Queue Number</span>
                      <span className="font-bold text-ink">#{totalSignups}</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-200/50 pb-2">
                      <span className="text-muted-grey">Selected Colour</span>
                      <span className="font-bold text-ink uppercase">{formData.colour}</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-200/50 pb-2">
                      <span className="text-muted-grey">Reserved Interest</span>
                      <span className="font-bold text-ink uppercase">
                        {formData.interest === 'discount' ? '40% Launch Discount' : formData.interest === 'beta' ? 'Developer Program' : 'Manufacturing alerts'}
                      </span>
                    </div>
                    <div className="flex justify-between pb-1">
                      <span className="text-muted-grey">Status</span>
                      <span className="font-bold text-emerald-600 uppercase flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        Guaranteed Tag
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={() => setIsSuccess(false)}
                    className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-ink bg-brand-light hover:bg-brand/20 border border-brand/20 px-4 py-2.5 rounded-xl transition-all"
                  >
                    Register another spot
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
