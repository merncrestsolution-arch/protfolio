import { motion } from 'framer-motion';
import { staggerContainer, fadeInLeft, fadeInRight, fadeInUp, scaleIn } from '../../animations/variants';
import { timeline } from '../../data/timeline';
import { useCardTilt } from '../../hooks/useCardTilt';
import { Award, Briefcase, Users, Star, Orbit } from 'lucide-react';
import { HeroScene } from '../3d/HeroScene';

export function AboutSection() {
  const { ref: bioRef, onMouseMove: onBioMove, onMouseLeave: onBioLeave } = useCardTilt(5);

  return (
    <section id="about" className="relative py-20 md:py-32 overflow-hidden bg-bg">
      {/* Background Orbs */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
        >
          {/* Section Header */}
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-black mb-4">
              About <span className="text-primary text-glow">Me</span>
            </h2>
            <div className="h-1 w-20 bg-primary mx-auto rounded-full mb-4" />
          </motion.div>

          {/* Bento Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* Main Bio Card (Spans 8 columns on large screens) */}
            <motion.div 
              variants={fadeInLeft} 
              className="lg:col-span-8 group relative"
            >
              <div 
                ref={bioRef}
                onMouseMove={onBioMove}
                onMouseLeave={onBioLeave}
                className="glass h-full p-8 md:p-12 rounded-3xl border border-white/10 hover:border-primary/40 transition-colors duration-500 overflow-hidden relative tilt-card"
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Glow Effect */}
                <div className="absolute -right-20 -top-20 w-64 h-64 bg-primary/20 blur-[80px] rounded-full group-hover:bg-primary/30 transition-colors duration-500" />
                
                <div className="flex flex-col md:flex-row gap-8 items-center relative z-10" style={{ transform: 'translateZ(30px)' }}>
                  <div className="relative shrink-0">
                    <div className="absolute inset-0 bg-primary rounded-full blur-xl opacity-20" />
                    <img 
                      src="/images/about-profile.png" 
                      alt="Mohamed Shakkir" 
                      className="w-48 h-48 md:w-56 md:h-56 object-cover rounded-full border-2 border-primary/50 shadow-[0_0_30px_rgba(0,229,255,0.3)] relative z-10"
                    />
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="font-display text-3xl font-bold mb-4">
                      Hi, I'm <span className="text-primary">Mohamed Shakkir</span>
                    </h3>
                    <p className="text-muted text-base md:text-lg leading-relaxed mb-6">
                      I'm a passionate full-stack developer and entrepreneur with a mission to build world-class SaaS web solutions. I thrive on turning complex problems into elegant, scalable cloud architectures. With an eye for pixel-perfect design and robust backend systems, I bridge the gap between vision and reality.
                    </p>
                    <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                      <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-mono text-primary">Problem Solver</span>
                      <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-mono text-accent">Tech Enthusiast</span>
                      <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-mono text-secondary">Innovator</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Stats Column (Spans 4 columns) */}
            <motion.div 
              variants={fadeInRight}
              className="lg:col-span-4 flex flex-col gap-6"
            >
              {/* Stat 1 */}
              <div className="glass flex-1 p-6 rounded-3xl border border-white/10 hover:border-primary/30 transition-all duration-300 flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
                  <Briefcase className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="text-3xl font-black text-white font-mono mb-1">5+</h4>
                  <p className="text-sm text-muted uppercase tracking-wider font-semibold">Years Experience</p>
                </div>
              </div>

              {/* Stat 2 */}
              <div className="glass flex-1 p-6 rounded-3xl border border-white/10 hover:border-secondary/30 transition-all duration-300 flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary group-hover:scale-110 transition-transform duration-300">
                  <Award className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="text-3xl font-black text-white font-mono mb-1">50+</h4>
                  <p className="text-sm text-muted uppercase tracking-wider font-semibold">Projects Delivered</p>
                </div>
              </div>

              {/* Stat 3 */}
              <div className="glass flex-1 p-6 rounded-3xl border border-white/10 hover:border-accent/30 transition-all duration-300 flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center text-accent group-hover:scale-110 transition-transform duration-300">
                  <Star className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="text-3xl font-black text-white font-mono mb-1">100%</h4>
                  <p className="text-sm text-muted uppercase tracking-wider font-semibold">Client Satisfaction</p>
                </div>
              </div>
            </motion.div>

            {/* Timeline Row (Spans full 12 columns) */}
            <motion.div 
              variants={fadeInUp}
              className="lg:col-span-12 glass p-8 md:p-12 rounded-3xl border border-white/10 mt-6"
            >
              <h3 className="font-display text-2xl font-bold mb-8 flex items-center gap-3">
                <Users className="text-primary w-6 h-6" />
                Professional Journey
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {timeline.map((event, i) => (
                  <motion.div 
                    key={i}
                    variants={scaleIn}
                    className="relative p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-primary/5 hover:border-primary/20 transition-all duration-300 group"
                  >
                    <div className="absolute top-0 left-6 w-12 h-1 bg-gradient-to-r from-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <h4 className="font-display font-bold text-white text-lg mb-2">{event.title}</h4>
                    <p className="text-muted text-sm leading-relaxed">{event.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* 3D Scene Row (Spans full 12 columns) */}
            <motion.div 
              variants={fadeInUp}
              className="lg:col-span-12 glass p-6 md:p-8 rounded-3xl border border-white/10 mt-6 relative overflow-hidden h-[500px] md:h-[600px] flex flex-col"
            >
              <div className="flex items-center justify-between mb-4 relative z-10">
                <h3 className="font-display text-2xl font-bold flex items-center gap-3">
                  <Orbit className="text-primary w-6 h-6" />
                  Tech Ecosystem Orbit
                </h3>
                <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-mono border border-primary/20">
                  Interactive 3D
                </span>
              </div>
              <div className="flex-1 w-full h-full relative z-0 -mt-10">
                <HeroScene />
              </div>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
