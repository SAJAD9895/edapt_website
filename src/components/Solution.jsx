import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const benefits = [
  { icon: '🎯', label: 'Focused, Personalized Curriculum' },
  { icon: '💬', label: 'Ask Doubts Anytime, Fearlessly' },
  { icon: '📊', label: 'Weekly Progress Reports to Parents' },
  { icon: '🧠', label: 'Adaptive Teaching Pace' },
  { icon: '🏆', label: 'Competitive Exam Readiness' },
];

export default function Solution() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="solution" className="py-28 relative overflow-hidden" style={{ background: 'radial-gradient(ellipse at 30% 50%, #0a1f45 0%, #050d1a 55%)' }}>
      {/* Glow */}
      <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-blue-700/20 rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image left */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, x: -40 }}
            animate={isInView ? { opacity: 1, scale: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="relative order-2 lg:order-1"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/images/solution.png"
                  alt="Happy student in one-to-one online session"
                  className="w-full object-cover rounded-3xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent rounded-3xl" />
              </div>
            </motion.div>

            {/* Orbiting dot */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
              className="absolute -top-4 -right-4 w-24 h-24"
            >
              <div className="w-4 h-4 bg-blue-500 rounded-full shadow-lg glow-blue absolute top-0 right-0" />
            </motion.div>

            {/* Success badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="absolute -bottom-6 left-1/2 -translate-x-1/2 glass border border-green-500/30 rounded-2xl px-6 py-3 whitespace-nowrap shadow-xl"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center text-xl">✅</div>
                <div>
                  <div className="text-green-400 font-bold text-sm">Edapt Solution</div>
                  <div className="text-slate-300 text-xs">Personalized. Focused. Effective.</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right content */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: 'easeOut', delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/30 text-green-400 text-sm font-medium mb-6">
              ✨ The Solution
            </div>
            <h2 className="font-['Outfit'] font-black text-4xl md:text-5xl leading-tight mb-6">
              Meet <span className="gradient-text">Edapt</span> —<br />
              Where Every Student<br />
              <span className="text-green-400">Has One Teacher</span>
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              We reimagined education from the ground up. With one-to-one sessions and tiny batches (5–10 students), your child gets the teacher's complete focus — the way learning was always meant to be.
            </p>

            {/* Benefits list */}
            <ul className="space-y-3">
              {benefits.map((b, i) => (
                <motion.li
                  key={b.label}
                  initial={{ opacity: 0, x: 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
                  className="flex items-center gap-3 glass rounded-xl px-4 py-3 border border-blue-500/10 hover:border-blue-500/30 transition-all duration-300 group cursor-default"
                >
                  <span className="text-xl group-hover:scale-110 transition-transform">{b.icon}</span>
                  <span className="text-slate-200 font-medium text-sm">{b.label}</span>
                  <motion.div
                    className="ml-auto w-2 h-2 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                </motion.li>
              ))}
            </ul>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="mt-10 px-8 py-4 bg-gradient-to-r from-blue-600 to-violet-600 text-white font-bold text-lg rounded-2xl shadow-xl glow-blue transition-all duration-300"
            >
              Start Learning with Edapt →
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
