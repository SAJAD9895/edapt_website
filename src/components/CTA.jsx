import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function CTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="cta" className="py-28 relative overflow-hidden" style={{ background: 'radial-gradient(ellipse at 50% 50%, #0c1e4a 0%, #050d1a 70%)' }}>
      {/* Orbs */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-blue-700/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-violet-700/20 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, x: -40 }}
            animate={isInView ? { opacity: 1, scale: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className="relative"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl glow-blue">
                <img
                  src="/images/cta.png"
                  alt="Student celebrating academic achievement and success"
                  className="w-full object-cover h-96"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent rounded-3xl" />
              </div>
            </motion.div>

            {/* Success metrics */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.7 }}
              className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-4/5 glass border border-blue-400/30 rounded-2xl px-6 py-5 shadow-2xl"
            >
              <div className="grid grid-cols-3 gap-4 text-center">
                {[
                  { val: '98%', lab: 'Score Improvement' },
                  { val: '3mo', lab: 'Avg. Turnaround' },
                  { val: '100%', lab: 'Parent Satisfaction' },
                ].map(s => (
                  <div key={s.lab}>
                    <div className="font-['Outfit'] font-black text-xl gradient-text">{s.val}</div>
                    <div className="text-slate-400 text-xs">{s.lab}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right content */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.2 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 text-sm font-medium mb-8">
              🚀 Start Today
            </div>
            <h2 className="font-['Outfit'] font-black text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
              Start Your{' '}
              <span className="gradient-text">Learning Journey</span>{' '}
              Today
            </h2>
            <p className="text-slate-400 text-xl leading-relaxed mb-10">
              Join hundreds of students who've transformed their academic performance with Edapt's personalized approach. Your first session is on us — no commitments.
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <motion.button
                whileHover={{ scale: 1.08, boxShadow: '0 0 50px rgba(59,130,246,0.7)' }}
                whileTap={{ scale: 0.96 }}
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                id="cta-book-btn"
                animate={{ boxShadow: ['0 0 20px rgba(59,130,246,0.4)', '0 0 40px rgba(59,130,246,0.7)', '0 0 20px rgba(59,130,246,0.4)'] }}
                transition={{ boxShadow: { duration: 2, repeat: Infinity } }}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-violet-600 text-white font-bold text-lg rounded-2xl shadow-xl"
              >
                🎓 Book Your Free Demo
              </motion.button>
              <motion.a
                href="tel:+917893422232"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="px-8 py-4 glass border border-blue-500/30 text-blue-300 font-semibold text-lg rounded-2xl hover:border-blue-400/60 transition-all flex items-center gap-2"
              >
                📞 Call Now
              </motion.a>
            </div>

            {/* Trust signals */}
            <div className="flex flex-wrap gap-4">
              {['✅ No Credit Card', '✅ Free First Session', '✅ Cancel Anytime'].map((t) => (
                <span key={t} className="text-slate-400 text-sm">{t}</span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
