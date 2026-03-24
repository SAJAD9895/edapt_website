import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const problems = [
  { icon: '😓', title: 'Zero Individual Attention', desc: '40+ students, one teacher. Your child gets lost in the crowd.' },
  { icon: '🐢', title: 'One-Size-Fits-All Pace', desc: 'Syllabus moves too fast or too slow — never calibrated to your child.' },
  { icon: '😶', title: 'Fear to Ask Questions', desc: 'Students hesitate to ask doubts, leaving gaps that compound over time.' },
  { icon: '📉', title: 'No Progress Visibility', desc: 'Parents receive zero real insight into how their child is performing.' },
];

export default function Problem() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="problem" className="py-28 relative overflow-hidden" style={{ background: '#07111f' }}>
      {/* Decorative line */}
      <div className="absolute inset-y-0 left-1/2 w-px bg-gradient-to-b from-transparent via-blue-800/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-sm font-medium mb-6">
              ⚠️ The Problem
            </div>
            <h2 className="font-['Outfit'] font-black text-4xl md:text-5xl leading-tight mb-6">
              Traditional Tuition is{' '}
              <span className="text-red-400">Broken</span>
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              Overcrowded classrooms and cookie-cutter teaching have failed millions of students. 
              Your child deserves better than being just another face in the crowd.
            </p>

            {/* Problem cards */}
            <div className="grid grid-cols-1 gap-4">
              {problems.map((p, i) => (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, x: -40 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.2 + i * 0.15, duration: 0.6 }}
                  className="flex items-start gap-4 glass rounded-2xl p-4 border border-red-500/10 hover:border-red-500/30 transition-all duration-300 group"
                >
                  <span className="text-2xl group-hover:scale-110 transition-transform duration-200">{p.icon}</span>
                  <div>
                    <div className="font-semibold text-white text-sm mb-1">{p.title}</div>
                    <div className="text-slate-400 text-sm">{p.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: 'easeOut', delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              {/* Red overlay effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-900/30 to-transparent rounded-3xl z-10" />
              <img
                src="/images/problem.png"
                alt="Overcrowded classroom with frustrated student"
                className="w-full rounded-3xl shadow-2xl object-cover"
                style={{ filter: 'saturate(0.85) contrast(1.1)' }}
              />
              {/* Overlay caption */}
              <div className="absolute bottom-6 left-6 right-6 z-20 glass rounded-2xl px-5 py-4 border border-red-500/20">
                <div className="text-red-300 font-semibold text-sm mb-1">😮 Did you know?</div>
                <div className="text-white text-sm leading-snug">
                  In a class of 40 students, each child gets less than <strong className="text-red-400">2 minutes</strong> of teacher attention per hour.
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
