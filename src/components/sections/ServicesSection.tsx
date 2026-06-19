import { motion } from 'framer-motion';
import { ServiceCard } from '../ui/ServiceCard';
import { staggerContainer, fadeInUp } from '../../animations/variants';
import { services } from '../../data/services';

export function ServicesSection() {
  return (
    <section id="services" className="relative py-20 md:py-32 overflow-hidden bg-surface/20">
      {/* Parallax Background */}
      <div className="parallax-bg absolute inset-0 pointer-events-none z-0">
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
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
              Services <span className="text-primary text-glow">I Offer</span>
            </h2>
            <div className="h-1 w-20 bg-primary mx-auto rounded-full mb-4" />
            <p className="text-muted max-w-2xl mx-auto text-base">
              Comprehensive full-stack engineering and technical consulting tailored for startups and enterprises.
            </p>
          </motion.div>

          {/* Grid Layout: 4x2 desktop, 2x4 tablet, 1x8 mobile */}
          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
