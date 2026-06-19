import { motion } from 'framer-motion';
import { Github, Linkedin, MessageCircle } from 'lucide-react';
import { ImagePlaceholder } from '../ui/ImagePlaceholder';
import { NeonButton } from '../ui/NeonButton';
import { letterStagger, letterVariant, fadeInUp } from '../../animations/variants';
import { CONTACT_INFO, STATS } from '../../utils/constants';
import { useEffect, useState } from 'react';

const TYPING_ROLES = [
  'Senior Full-Stack Developer',
  'MERN Stack Specialist',
  'AWS Cloud Engineer',
  'SaaS Platform Builder',
  'AI Integration Expert',
  'Technical Consultant',
];

export function HeroSection() {
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % TYPING_ROLES.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden pt-20 pb-12">
      {/* Parallax Depth Layers */}
      <div className="parallax-bg absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 rounded-full bg-secondary/5 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        {/* Layout: stacked on mobile, 50/50 split on desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column: Text Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={letterStagger}
            className="space-y-6 flex flex-col justify-center text-left"
          >
            <motion.p variants={fadeInUp} className="text-primary font-mono text-sm md:text-base tracking-wider font-bold">
              Founder & CEO — MernCrest Solutions (PVT) Ltd
            </motion.p>

            <motion.h1 variants={letterStagger} className="font-display text-4xl sm:text-5xl md:text-7xl font-black tracking-tight">
              {['Mohamed', ' ', 'Shakkir'].map((word, wordIndex) => (
                <span key={wordIndex} className="inline-block whitespace-nowrap">
                  {word === ' ' ? '\u00A0' : word.split('').map((char, charIndex) => (
                    <motion.span key={`${wordIndex}-${charIndex}`} variants={letterVariant} className="inline-block">
                      {char}
                    </motion.span>
                  ))}
                </span>
              ))}
            </motion.h1>

            <motion.div variants={fadeInUp} className="h-8">
              <p className="text-xl md:text-2xl text-accent font-medium font-mono">
                {TYPING_ROLES[currentRole]}
              </p>
            </motion.div>

            <motion.p variants={fadeInUp} className="text-muted text-base md:text-lg max-w-xl leading-relaxed">
              Building enterprise-grade web systems from Sri Lanka.
              25+ projects deployed. AWS Certified. MERN expert.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 w-full sm:w-auto">
              <NeonButton onClick={() => {
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }} className="w-full sm:w-auto">
                Hire Me →
              </NeonButton>
              <NeonButton onClick={() => {
                document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
              }} variant="secondary" className="w-full sm:w-auto">
                View Projects
              </NeonButton>
              <NeonButton href={CONTACT_INFO.whatsapp} target="_blank" variant="secondary" className="w-full sm:w-auto">
                Contact Me
              </NeonButton>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={fadeInUp} className="flex items-center gap-6 pt-2">
              <a
                href={CONTACT_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-primary transition-colors min-h-[48px] flex items-center"
                aria-label="GitHub"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href={CONTACT_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-primary transition-colors min-h-[48px] flex items-center"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href={CONTACT_INFO.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-primary transition-colors min-h-[48px] flex items-center"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-6 h-6" />
              </a>
            </motion.div>

            {/* Stats Row */}
            <motion.div variants={fadeInUp} className="flex items-center gap-6 pt-4 border-t border-white/5 max-w-md">
              <div className="text-center sm:text-left">
                <p className="font-display text-2xl font-black text-primary">{STATS.projects}</p>
                <p className="text-muted text-xs uppercase tracking-wider font-mono">Projects</p>
              </div>
              <div className="w-px h-8 bg-white/10" />
              <div className="text-center sm:text-left">
                <p className="font-display text-2xl font-black text-primary">{STATS.experience}</p>
                <p className="text-muted text-xs uppercase tracking-wider font-mono">Experience</p>
              </div>
              <div className="w-px h-8 bg-white/10" />
              <div className="text-center sm:text-left">
                <p className="font-display text-2xl font-black text-primary">{STATS.deployments}</p>
                <p className="text-muted text-xs uppercase tracking-wider font-mono">Deployments</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Hero Image Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="w-full flex justify-center items-center relative order-last lg:order-none"
          >
            <div className="relative group p-4 w-full max-w-sm md:max-w-md lg:max-w-lg mx-auto">
              {/* Glowing Background Ring */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-secondary/20 blur-2xl rounded-full group-hover:scale-110 transition-transform duration-700 z-0" />
              
              {/* The Image */}
              <div className="relative z-10 glass rounded-3xl overflow-hidden border border-white/10 group-hover:border-primary/40 transition-colors duration-500 tilt-card">
                <ImagePlaceholder
                  src="/images/hero-avatar.png"
                  alt="Mohamed Shakkir"
                  shape="rounded"
                  className="w-full aspect-[4/5] object-cover relative z-10 transform group-hover:scale-105 transition-transform duration-700"
                  placeholderLabel="hero-avatar.png"
                />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
