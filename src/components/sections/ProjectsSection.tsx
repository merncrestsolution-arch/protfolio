import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ProjectCard } from '../ui/ProjectCard';
import { staggerContainer, fadeInUp } from '../../animations/variants';
import { projects } from '../../data/projects';

const CATEGORIES = [
  { id: 'all', label: 'All Projects' },
  { id: 'fullstack', label: 'Full Stack' },
  { id: 'cloud', label: 'Cloud' },
  { id: 'ai', label: 'AI' },
  { id: 'frontend', label: 'Frontend' },
];

export function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="relative py-20 md:py-32 overflow-hidden">
      {/* Parallax Background */}
      <div className="parallax-bg absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
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
              Featured <span className="text-primary text-glow">Projects</span>
            </h2>
            <div className="h-1 w-20 bg-primary mx-auto rounded-full mb-4" />
            <p className="text-muted max-w-2xl mx-auto text-base">
              Showcase of enterprise applications, SaaS systems, and cloud deployments.
            </p>
          </motion.div>

          {/* Filtering Tabs */}
          <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-3 mb-12">
            {CATEGORIES.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`px-5 py-2.5 rounded-xl font-medium transition-all duration-300 text-sm ${
                  activeFilter === category.id
                    ? 'bg-primary text-bg font-bold shadow-glow-primary'
                    : 'glass text-muted hover:text-white hover:border-primary/40 border border-white/5'
                }`}
              >
                {category.label}
              </button>
            ))}
          </motion.div>

          {/* Responsive grid mapping projects */}
          <motion.div
            layout
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="h-full"
                >
                  <ProjectCard project={project} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
