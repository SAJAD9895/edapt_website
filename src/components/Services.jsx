import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const services = [
  {
    id: 'one-to-one',
    icon: '👤',
    title: 'One-to-One Tuition',
    desc: 'Complete teacher focus on a single student. Lessons adapt in real-time to the student\'s pace, strengths, and learning style.',
    features: ['Personalized study plan', 'Flexible scheduling', 'Instant doubt clearing', 'Monthly parent meetings'],
    badge: 'Most Popular',
    badgeColor: 'from-blue-600 to-violet-600',
    borderColor: 'border-blue-500/30',
    glowColor: 'rgba(59,130,246,0.3)',
  },
  {
    id: 'small-batch',
    icon: '👥',
    title: 'Small Batch Learning',
    desc: 'Intimate groups of 5–10 students experience the energy of a classroom with near-personal attention from the teacher.',
    features: ['5–10 students per class', 'Peer learning benefits', 'Collaborative problem-solving', 'Weekly assessments'],
    badge: 'Best Value',
    badgeColor: 'from-green-600 to-teal-600',
    borderColor: 'border-green-500/30',
    glowColor: 'rgba(34,197,94,0.3)',
  },
  {
    id: 'performance',
    icon: '📈',
    title: 'Performance Tracking',
    desc: 'Data-driven insights showing exactly where your child stands, what\'s improving, and what needs attention.',
    features: ['Weekly progress reports', 'Topic-wise analysis', 'Exam readiness scores', 'Parent dashboard access'],
    badge: 'Included Free',
    badgeColor: 'from-orange-600 to-red-600',
    borderColor: 'border-orange-500/30',
    glowColor: 'rgba(249,115,22,0.3)',
  },
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const imgRef = useRef(null);
  const imgInView = useInView(imgRef, { once: true, margin: '-80px' });

  return (
    <section id="services" className="py-28 relative overflow-hidden" style={{ background: '#07111f' }}>
      {/* bg orb */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-violet-800/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          ref={ref}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 text-sm font-medium mb-6">
            🎓 Our Services
          </div>
          <h2 className="font-['Outfit'] font-black text-4xl md:text-5xl mb-4">
            Learning Plans Built <span className="gradient-text">For You</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Choose the format that best fits your learning style. Every plan includes dedicated teacher support and progress tracking.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {services.map((s, i) => (
            <motion.div
              key={s.id}
              id={`service-card-${s.id}`}
              initial={{ opacity: 0, y: 60, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ delay: 0.2 + i * 0.15, duration: 0.7, ease: 'easeOut' }}
              whileHover={{ y: -8, boxShadow: `0 20px 60px ${s.glowColor}` }}
              className={`glass rounded-3xl p-8 border ${s.borderColor} hover:border-opacity-60 transition-all duration-400 cursor-default group relative overflow-hidden`}
            >
              {/* Badge */}
              <div className={`absolute top-5 right-5 px-3 py-1 text-xs font-bold text-white rounded-full bg-gradient-to-r ${s.badgeColor}`}>
                {s.badge}
              </div>

              {/* Icon */}
              <motion.div
                whileHover={{ scale: 1.15, rotate: 5 }}
                className="w-16 h-16 rounded-2xl glass border border-white/10 flex items-center justify-center text-3xl mb-6 group-hover:shadow-lg transition-all duration-300"
              >
                {s.icon}
              </motion.div>

              <h3 className="font-['Outfit'] font-bold text-xl text-white mb-3">{s.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">{s.desc}</p>

              <ul className="space-y-2">
                {s.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-slate-300 text-sm">
                    <span className="w-4 h-4 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 text-xs flex-shrink-0">✓</span>
                    {f}
                  </li>
                ))}
              </ul>

              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className={`mt-8 w-full py-3 bg-gradient-to-r ${s.badgeColor} text-white font-semibold rounded-xl text-sm hover:opacity-90 transition-opacity`}
              >
                Get Started →
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* Image showcase */}
        <motion.div
          ref={imgRef}
          initial={{ opacity: 0, y: 50 }}
          animate={imgInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9 }}
          className="relative rounded-3xl overflow-hidden shadow-2xl"
        >
          <img
            src="/images/services.png"
            alt="Small batch online learning session on laptop"
            className="w-full h-64 md:h-80 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050d1a]/80 via-[#050d1a]/40 to-transparent flex items-center">
            <div className="px-10">
              <div className="text-blue-300 font-semibold text-sm mb-2">🎓 Small Batch Classes</div>
              <h3 className="font-['Outfit'] font-black text-3xl text-white mb-4">Every Student. Every Topic. Covered.</h3>
              <motion.button
                whileHover={{ scale: 1.05 }}
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-6 py-3 bg-white/10 backdrop-blur border border-white/20 text-white font-semibold rounded-xl hover:bg-white/20 transition-all"
              >
                Book Your Spot
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
