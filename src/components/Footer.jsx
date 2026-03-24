import React from 'react';
import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#050d1a] pt-24 pb-12 relative overflow-hidden">
      {/* Decorative border */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center shadow-lg glow-blue-sm">
                <span className="text-white font-black text-lg font-['Outfit']">E</span>
              </div>
              <span className="text-xl font-bold font-['Outfit'] gradient-text tracking-wide">Edapt</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed pr-4">
              Pioneering personalized education through 1-on-1 mentoring and ultra-small study batches. Empowering every student to reach their full potential.
            </p>
            <div className="flex gap-4">
              {['facebook', 'twitter', 'instagram', 'linkedin'].map((social) => (
                <motion.a
                  key={social}
                  href={`#${social}`}
                  whileHover={{ y: -3, scale: 1.1 }}
                  className="w-10 h-10 rounded-xl glass border border-white/10 flex items-center justify-center text-xl hover:border-blue-500/50 hover:text-blue-400 transition-all cursor-pointer"
                  aria-label={social}
                >
                  <i className={`fab fa-${social}`}></i>
                  {/* Fallback icon representation */}
                  <span className="text-xs font-bold uppercase">{social[0]}</span>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Services Link */}
          <div>
            <h4 className="text-white font-['Outfit'] font-bold text-lg mb-8">Our Services</h4>
            <ul className="space-y-4">
              {['One-to-One Tuition', 'Small Batch Learning (5-10)', 'Performance Tracking', 'Doubt Clearing', 'Career Guidance'].map((item) => (
                <li key={item}>
                  <a href="#services" className="text-slate-400 text-sm hover:text-blue-400 transition-colors flex items-center gap-2 group">
                    <span className="w-1 h-1 rounded-full bg-blue-500 group-hover:w-2 transition-all opacity-0 group-hover:opacity-100" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-['Outfit'] font-bold text-lg mb-8">Quick Links</h4>
            <ul className="space-y-4">
              {['About Us', 'Our Methodology', 'Success Stories', 'Privacy Policy', 'Terms of Service'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase().replace(/ /g, '-')}`} className="text-slate-400 text-sm hover:text-blue-400 transition-colors flex items-center gap-2 group">
                    <span className="w-1 h-1 rounded-full bg-blue-500 group-hover:w-2 transition-all opacity-0 group-hover:opacity-100" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Trust Signals */}
          <div className="space-y-6">
            <h4 className="text-white font-['Outfit'] font-bold text-lg mb-8">Trust & Safety</h4>
            <div className="bg-white/5 rounded-2xl p-6 border border-white/10 space-y-4 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl -mr-8 -mt-8 group-hover:bg-blue-500/20 transition-all duration-500" />
              <div className="flex items-center gap-3">
                <span className="text-2xl">🔒</span>
                <div>
                  <div className="text-white text-sm font-semibold uppercase tracking-wider">Secure Payment</div>
                  <div className="text-slate-400 text-xs">100% risk-free transactions</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">⚡</span>
                <div>
                  <div className="text-white text-sm font-semibold uppercase tracking-wider">Instant Setup</div>
                  <div className="text-slate-400 text-xs">Get started within 24 hours</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-slate-500 text-sm">
             © {currentYear} Edapt Education Pvt Ltd. All rights reserved.
          </div>
          <div className="flex gap-8">
            <a href="#" className="text-slate-500 text-xs hover:text-blue-400 transition-colors uppercase tracking-widest font-medium">Privacy</a>
            <a href="#" className="text-slate-500 text-xs hover:text-blue-400 transition-colors uppercase tracking-widest font-medium">Terms</a>
            <a href="#" className="text-slate-500 text-xs hover:text-blue-400 transition-colors uppercase tracking-widest font-medium">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
