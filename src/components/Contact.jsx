import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const contactInfo = [
    { icon: '📧', label: 'Email Us', value: 'edapt.me@gmail.com', href: 'mailto:edapt.me@gmail.com' },
    { icon: '📞', label: 'Call Us', value: '+91 7893422232', href: 'tel:+917893422232' },
    { icon: '📍', label: 'Visit Us', value: 'HiLite Business Park, Calicut', href: 'https://maps.google.com/?q=HiLite+Business+Park,+Calicut' },
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden" style={{ background: '#050d1a' }}>
      {/* Decorative Orbs */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 text-sm font-medium mb-6">
            📬 Get In Touch
          </div>
          <h2 className="font-['Outfit'] font-black text-4xl md:text-5xl mb-4">
            Start Your <span className="gradient-text">Journey Now</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Have questions? We're here to help you choose the best learning path for your child.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-stretch">
          {/* Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col gap-6"
          >
            <div className="glass rounded-3xl p-8 border border-blue-500/20 flex-1 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <h3 className="font-['Outfit'] font-bold text-2xl mb-8 text-white relative">Contact Information</h3>
              
              <div className="space-y-8 relative">
                {contactInfo.map((info, idx) => (
                  <motion.a
                    key={info.label}
                    href={info.href}
                    target={info.label === 'Visit Us' ? '_blank' : '_self'}
                    rel="noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.4 + idx * 0.1 }}
                    className="flex items-start gap-5 p-4 rounded-2xl hover:bg-white/5 transition-colors group/item"
                  >
                    <div className="w-12 h-12 rounded-xl glass border border-blue-500/30 flex items-center justify-center text-2xl group-hover/item:scale-110 group-hover/item:border-blue-500/60 transition-all">
                      {info.icon}
                    </div>
                    <div>
                      <div className="text-slate-400 text-sm font-medium mb-1 uppercase tracking-wider">{info.label}</div>
                      <div className="text-white font-semibold text-lg">{info.value}</div>
                    </div>
                  </motion.a>
                ))}
              </div>

              <div className="mt-12 rounded-2xl overflow-hidden grayscale contrast-125 opacity-50 hover:opacity-100 hover:grayscale-0 transition-all duration-700 h-48">
                <img 
                  src="/images/contact.png" 
                  alt="Modern office workspace" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 1, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="glass rounded-3xl p-8 border border-blue-500/20 shadow-2xl relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-violet-500 rounded-3xl opacity-10 blur group-hover:opacity-20 transition duration-500" />
              
              <form className="relative space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-slate-300 text-sm font-medium ml-1">Parent's Name</label>
                    <input 
                      type="text" 
                      placeholder="John Doe"
                      className="w-full px-5 py-4 rounded-2xl bg-white/5 border border-white/10 text-white focus:border-blue-500/50 focus:outline-none focus:ring-4 focus:ring-blue-500/10 transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-slate-300 text-sm font-medium ml-1">Phone Number</label>
                    <input 
                      type="tel" 
                      placeholder="+91 00000 00000"
                      className="w-full px-5 py-4 rounded-2xl bg-white/5 border border-white/10 text-white focus:border-blue-500/50 focus:outline-none focus:ring-4 focus:ring-blue-500/10 transition-all"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-slate-300 text-sm font-medium ml-1">Student's Class/Grade</label>
                  <select className="w-full px-5 py-4 rounded-2xl bg-[#0a1526] border border-white/10 text-slate-300 focus:border-blue-500/50 focus:outline-none transition-all appearance-none cursor-pointer">
                    <option>Select Grade</option>
                    <option>Class 8</option>
                    <option>Class 9</option>
                    <option>Class 10</option>
                    <option>Class 11</option>
                    <option>Class 12</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-slate-300 text-sm font-medium ml-1">Message</label>
                  <textarea 
                    rows="4"
                    placeholder="Tell us about your child's requirements..."
                    className="w-full px-5 py-4 rounded-2xl bg-white/5 border border-white/10 text-white focus:border-blue-500/50 focus:outline-none focus:ring-4 focus:ring-blue-500/10 transition-all resize-none"
                  ></textarea>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(59,130,246,0.3)' }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-5 bg-gradient-to-r from-blue-600 to-violet-600 text-white font-bold text-lg rounded-2xl shadow-xl transition-all"
                >
                  Send Message
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
