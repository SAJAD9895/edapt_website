import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const reasons = [
  { icon: '🎯', title: 'Hyper-Personalized', desc: 'Every session is tailored to the individual student — no generic lesson plans.', percent: 98 },
  { icon: '🏫', title: 'Expert Teachers', desc: 'Carefully vetted educators with proven track records in their subject areas.', percent: 95 },
  { icon: '⚡', title: 'Lightning Doubt Clearing', desc: 'Questions answered within the session — no waiting, no backlogs.', percent: 100 },
  { icon: '📱', title: 'Anytime, Anywhere', desc: 'Learn from the comfort of home. Sessions are recorded for revision.', percent: 92 },
  { icon: '🔬', title: 'Progress Analytics', desc: 'Transparent, data-driven reports so parents always know how their child is improving.', percent: 97 },
  { icon: '🤝', title: 'Trial Session Free', desc: 'Experience Edapt risk-free before committing. We are that confident.', percent: 90 },
];

function ProgressBar({ percent, isInView, delay }) {
  return (
    <div className="w-full bg-slate-800 rounded-full h-1.5 mt-2 overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        animate={isInView ? { width: `${percent}%` } : {}}
        transition={{ delay, duration: 1.2, ease: 'easeOut' }}
        className="h-full bg-gradient-to-r from-blue-500 to-violet-500 rounded-full"
      />
    </div>
  );
}

export default function WhyUs() {
  const ref = useRef(null);
  const imgRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const imgInView = useInView(imgRef, { once: true, margin: '-80px' });

  return (
    <section id="why-us" className="py-28 relative overflow-hidden" style={{ background: 'radial-gradient(ellipse at 80% 50%, #0a1a3f 0%, #050d1a 60%)' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          {/* Left */}
          <div ref={ref}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/30 text-violet-300 text-sm font-medium mb-6">
                💡 Why Choose Edapt
              </div>
              <h2 className="font-['Outfit'] font-black text-4xl md:text-5xl leading-tight mb-4">
                What Makes Us{' '}
                <span className="gradient-text">Different</span>
              </h2>
              <p className="text-slate-400 text-lg mb-12">
                We didn't just improve traditional tuition — we rebuilt it from scratch around the student's success.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 gap-5">
              {reasons.map((r, i) => (
                <motion.div
                  key={r.title}
                  initial={{ opacity: 0, x: -40 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.2 + i * 0.1, duration: 0.6 }}
                  whileHover={{ x: 6 }}
                  className="glass rounded-2xl p-5 border border-violet-500/10 hover:border-violet-500/30 transition-all duration-300 group"
                >
                  <div className="flex items-start gap-4">
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      className="text-2xl mt-0.5 group-hover:scale-110 transition-transform"
                    >
                      {r.icon}
                    </motion.div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-semibold text-white text-sm">{r.title}</span>
                        <span className="text-blue-400 text-xs font-bold">{r.percent}%</span>
                      </div>
                      <p className="text-slate-400 text-xs leading-relaxed mb-2">{r.desc}</p>
                      <ProgressBar percent={r.percent} isInView={isInView} delay={0.5 + i * 0.1} />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right image + testimonial */}
          <div className="sticky top-24" ref={imgRef}>
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={imgInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.9, ease: 'easeOut' }}
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl mb-8">
                <img
                  src="/images/whyus.png"
                  alt="Personalized teacher guiding student with glowing connection"
                  className="w-full object-cover h-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050d1a]/70 to-transparent" />
              </div>

              {/* Stats grid */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: '200+', label: 'Happy Students', color: 'from-blue-600 to-cyan-600' },
                  { value: '50+', label: 'Expert Teachers', color: 'from-violet-600 to-pink-600' },
                  { value: '5 yrs', label: 'In Education', color: 'from-green-600 to-teal-600' },
                  { value: '4.9⭐', label: 'Average Rating', color: 'from-orange-600 to-yellow-600' },
                ].map((stat) => (
                  <motion.div
                    key={stat.label}
                    whileHover={{ y: -4 }}
                    className="glass rounded-2xl p-5 text-center border border-white/10 hover:border-white/20 transition-all"
                  >
                    <div className={`font-['Outfit'] font-black text-2xl bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                      {stat.value}
                    </div>
                    <div className="text-slate-400 text-xs mt-1">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
