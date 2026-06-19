import { motion } from 'framer-motion';
import { NeonButton } from '../ui/NeonButton';
import { staggerContainer, fadeInLeft, fadeInRight, fadeInUp } from '../../animations/variants';
import { CheckCircle } from 'lucide-react';

const CORE_SERVICES = [
  'Custom Web Application Development',
  'Cloud Infrastructure & DevOps',
  'API Development & Integration',
  'Database Design & Optimization',
  'Mobile Application Development',
  'Technical Consulting & Support',
];

const TECH_STACK = [
  'React', 'Node.js', 'MongoDB', 'PostgreSQL', 'AWS', 'Docker',
  'Next.js', 'TypeScript', 'GraphQL', 'Redis', 'Nginx', 'PM2',
];

export function CompanySection() {
  return (
    <section id="company" className="relative py-20 md:py-32 overflow-hidden bg-surface/5">
      {/* Parallax Background */}
      <div className="parallax-bg absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full bg-secondary/5 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
        >
          {/* Header */}
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-black mb-4">
              <span className="text-primary text-glow">MernCrest</span> Solutions
            </h2>
            <div className="h-1 w-20 bg-primary mx-auto rounded-full mb-4" />
            <p className="text-muted max-w-2xl mx-auto text-base">
              Enterprise application development agency based in Sri Lanka.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column: Logo + Mission + Vision + CTA */}
            <motion.div variants={fadeInLeft} className="space-y-6">
              <div className="glass p-6 md:p-8 hover:border-primary/20 transition-all duration-300">
                <h3 className="font-display text-xl font-bold mb-3 text-white border-l-2 border-primary pl-2">Our Mission</h3>
                <p className="text-muted text-sm leading-relaxed mb-6">
                  To deliver world-class web systems that empower businesses globally. We blend technical engineering with product vision to deliver scalable architectures.
                </p>

                <h3 className="font-display text-xl font-bold mb-3 text-white border-l-2 border-primary pl-2">Our Vision</h3>
                <p className="text-muted text-sm leading-relaxed mb-8">
                  To be the primary tech agency in the region, recognized for quality, performance-optimized delivery, and business scalability.
                </p>

                <NeonButton 
                  href="https://merncrest.lk" 
                  target="_blank"
                  className="w-full sm:w-auto"
                >
                  Visit MernCrest.lk →
                </NeonButton>
              </div>
            </motion.div>

            {/* Right Column: Core services + Tech stack */}
            <motion.div variants={fadeInRight} className="space-y-6">

              {/* Core Services list */}
              <div className="glass p-6 hover:border-primary/20 transition-all duration-300">
                <h3 className="font-display text-lg font-bold mb-4 text-white">Core Services</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {CORE_SERVICES.map((service) => (
                    <div key={service} className="flex items-start gap-2.5">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted text-xs leading-normal">{service}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack badges */}
              <div className="glass p-6 hover:border-primary/20 transition-all duration-300">
                <h3 className="font-display text-lg font-bold mb-4 text-white">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {TECH_STACK.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-mono border border-primary/30 text-primary/80 bg-primary/5 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
