import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    name: 'Priya Nair',
    role: 'Mother of Class 10 Student',
    avatar: '👩',
    rating: 5,
    text: 'Edapt completely transformed how my daughter approaches studies. Her confidence has skyrocketed and her scores jumped from 70% to 92% in just one semester. The one-to-one attention made all the difference!',
    subject: 'Mathematics & Science',
  },
  {
    id: 2,
    name: 'Arjun Menon',
    role: 'Class 12 Student',
    avatar: '👨‍🎓',
    rating: 5,
    text: 'I was always afraid to ask questions in big coaching centers. At Edapt, my teacher knows exactly where I\'m struggling. The small batch size means I never fall behind — I actually look forward to classes now!',
    subject: 'Physics & Chemistry',
  },
  {
    id: 3,
    name: 'Suresh Kumar',
    role: 'Father of Twin Students',
    avatar: '👨',
    rating: 5,
    text: 'Both my kids have different learning styles. Edapt handled each of them uniquely — one needed visual learning, the other needed problem-drills. The personalized approach is outstanding value for money.',
    subject: 'Multiple Subjects',
  },
  {
    id: 4,
    name: 'Ananya Krishnan',
    role: 'Class 9 Student',
    avatar: '👧',
    rating: 5,
    text: 'The weekly progress reports helped me identify my weak areas. My teacher on Edapt makes complex topics so simple. I\'ve improved in every subject and I\'m finally enjoying studying!',
    subject: 'Biology & English',
  },
];

function StarRating({ rating }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className={`text-sm ${i < rating ? 'text-yellow-400' : 'text-slate-600'}`}>★</span>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  // Auto-slide
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="testimonials" className="py-28 relative overflow-hidden" style={{ background: '#07111f' }}>
      {/* Decorative */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-blue-600/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/30 text-yellow-300 text-sm font-medium mb-6">
            ⭐ Testimonials
          </div>
          <h2 className="font-['Outfit'] font-black text-4xl md:text-5xl mb-4">
            Loved By{' '}
            <span className="gradient-text">Students & Parents</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Don't just take our word for it — hear from the families who've experienced the Edapt difference.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/images/testimonials.png"
                alt="Happy students and parents celebrating EdTech success"
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050d1a]/60 to-transparent rounded-3xl" />
            </div>
            {/* Rating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.5, type: 'spring' }}
              className="absolute -bottom-6 left-8 glass border border-yellow-400/30 rounded-2xl px-5 py-4 shadow-xl"
            >
              <div className="flex items-center gap-3">
                <div className="text-3xl">⭐</div>
                <div>
                  <div className="font-['Outfit'] font-black text-2xl text-white">4.9/5</div>
                  <div className="text-slate-400 text-xs">Based on 200+ reviews</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Carousel */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative overflow-hidden min-h-[320px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  initial={{ opacity: 0, x: 60 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -60 }}
                  transition={{ duration: 0.5, ease: 'easeInOut' }}
                  className="glass rounded-3xl p-8 border border-blue-500/20 shadow-xl"
                >
                  {/* Quote mark */}
                  <div className="text-5xl text-blue-500/30 font-serif leading-none mb-4">"</div>

                  <p className="text-slate-200 text-lg leading-relaxed mb-6">
                    {testimonials[current].text}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 glass rounded-full flex items-center justify-center text-2xl border border-blue-500/20">
                        {testimonials[current].avatar}
                      </div>
                      <div>
                        <div className="font-semibold text-white">{testimonials[current].name}</div>
                        <div className="text-slate-400 text-sm">{testimonials[current].role}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <StarRating rating={testimonials[current].rating} />
                      <div className="text-blue-400 text-xs mt-1">{testimonials[current].subject}</div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Dots & Controls */}
            <div className="flex items-center justify-between mt-6">
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`rounded-full transition-all duration-300 ${
                      i === current ? 'w-8 h-2.5 bg-blue-500' : 'w-2.5 h-2.5 bg-slate-700 hover:bg-slate-500'
                    }`}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>
              <div className="flex gap-3">
                <button
                  onClick={() => setCurrent((current - 1 + testimonials.length) % testimonials.length)}
                  id="testimonial-prev"
                  className="w-10 h-10 glass rounded-full flex items-center justify-center border border-blue-500/20 hover:border-blue-500/50 text-blue-300 hover:text-white transition-all"
                  aria-label="Previous testimonial"
                >
                  ←
                </button>
                <button
                  onClick={() => setCurrent((current + 1) % testimonials.length)}
                  id="testimonial-next"
                  className="w-10 h-10 glass rounded-full flex items-center justify-center border border-blue-500/20 hover:border-blue-500/50 text-blue-300 hover:text-white transition-all"
                  aria-label="Next testimonial"
                >
                  →
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
