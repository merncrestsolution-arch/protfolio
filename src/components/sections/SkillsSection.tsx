import { useState } from 'react';
import { motion } from 'framer-motion';
import { TechLogoSphere } from '../3d/TechLogoSphere';
import { staggerContainer, fadeInUp, scaleIn } from '../../animations/variants';
import { skills } from '../../data/skills';
import { techLogos } from '../../data/techLogos';
import { CheckCircle, Code2, Database, Cloud, Zap, Box } from 'lucide-react';

const CATEGORIES = [
  { id: 'all', label: 'All Skills', icon: Box, color: '#00E5FF' },
  { id: 'frontend', label: 'Frontend', icon: Code2, color: '#61DAFB' },
  { id: 'backend', label: 'Backend', icon: Zap, color: '#339933' },
  { id: 'database', label: 'Database', icon: Database, color: '#47A248' },
  { id: 'cloud', label: 'Cloud & AWS', icon: Cloud, color: '#FF9900' },
  { id: 'devops', label: 'DevOps', icon: CheckCircle, color: '#2496ED' },
  { id: 'tools', label: 'Tools & AI', icon: Box, color: '#FF6C37' },
];

export function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredSkills = activeCategory === 'all'
    ? skills
    : skills.filter(skill => skill.category === activeCategory);

  const getCategoryStats = (category: string) => {
    const categorySkills = category === 'all' 
      ? skills 
      : skills.filter(s => s.category === category);
    const avgProficiency = Math.round(
      categorySkills.reduce((sum, skill) => sum + skill.proficiency, 0) / categorySkills.length
    );
    return { count: categorySkills.length, avg: avgProficiency };
  };

  return (
    <section id="skills" className="relative py-20 md:py-32 overflow-hidden bg-surface/30">
      {/* Parallax Background */}
      <div className="parallax-bg absolute inset-0 pointer-events-none z-0">
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 rounded-full bg-accent/5 blur-3xl" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
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
            <motion.div 
              className="inline-block mb-4"
              whileHover={{ scale: 1.05 }}
            >
              <span className="px-4 py-2 rounded-full bg-primary/10 text-primary font-mono text-sm border border-primary/20">
                {skills.length} Technologies Mastered
              </span>
            </motion.div>
            <h2 className="font-display text-4xl md:text-6xl font-black mb-6">
              Technical <span className="text-primary text-glow">Excellence</span>
            </h2>
            <div className="h-1 w-20 bg-primary mx-auto rounded-full mb-4" />
            <p className="text-muted max-w-2xl mx-auto text-base">
              Comprehensive expertise across the modern full-stack development landscape.
            </p>
          </motion.div>

          {/* Category Tabs */}
          <motion.div 
            variants={staggerContainer}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {CATEGORIES.map((category) => {
              const stats = getCategoryStats(category.id);
              const Icon = category.icon;
              const isActive = activeCategory === category.id;
              
              return (
                <motion.button
                  key={category.id}
                  variants={scaleIn}
                  onClick={() => setActiveCategory(category.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`relative px-6 py-3 rounded-full flex items-center gap-3 transition-all duration-300 overflow-hidden ${
                    isActive
                      ? 'bg-white/10 border border-white/20 shadow-[0_0_20px_rgba(255,255,255,0.1)]'
                      : 'bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/10'
                  }`}
                >
                  {/* Active Highlight Sweep */}
                  {isActive && (
                    <motion.div 
                      layoutId="activeCategoryIndicator"
                      className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 z-0"
                    />
                  )}
                  <Icon 
                    className="w-5 h-5 relative z-10" 
                    style={{ color: isActive ? category.color : '#A0AEC0' }}
                  />
                  <span className={`font-medium text-sm relative z-10 ${isActive ? 'text-white' : 'text-muted'}`}>
                    {category.label}
                  </span>
                  <span className={`text-xs font-mono px-2 py-0.5 rounded-full relative z-10 ${isActive ? 'bg-black/30 text-white' : 'bg-black/20 text-muted'}`}>
                    {stats.count}
                  </span>
                </motion.button>
              );
            })}
          </motion.div>

          {/* Main Layout Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            
            {/* Left Column: Glowing Skill Cards */}
            <motion.div variants={fadeInUp} className="space-y-6">
              <div className="glass p-6 md:p-8 rounded-3xl border border-white/10 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
                
                <h3 className="font-display text-2xl font-bold mb-8 flex items-center gap-3 relative z-10">
                  <span className="text-primary">
                    {CATEGORIES.find(c => c.id === activeCategory)?.label || 'All Skills'}
                  </span>
                  <span className="text-sm text-muted font-normal font-mono px-3 py-1 bg-white/5 rounded-full border border-white/10">
                    {filteredSkills.length} Technologies
                  </span>
                </h3>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 relative z-10">
                  {filteredSkills.map((skill, i) => {
                    const logoUrl = techLogos.find(l => l.name === skill.name)?.iconUrl;
                    
                    return (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.05 }}
                        whileHover={{ y: -5 }}
                        className="group cursor-pointer"
                      >
                        <div className="glass p-4 rounded-2xl border border-white/5 hover:border-primary/40 hover:bg-white/[0.02] hover:shadow-[0_0_20px_rgba(0,229,255,0.1)] transition-all duration-300 relative overflow-hidden flex flex-col items-center text-center gap-4 h-full">
                          
                          {/* Circular Progress Ring with Logo */}
                          <div className="relative w-20 h-20 flex items-center justify-center">
                            {/* SVG Background Ring */}
                            <svg className="absolute inset-0 w-full h-full -rotate-90">
                              <circle 
                                cx="40" cy="40" r="36" 
                                fill="none" 
                                className="stroke-white/5" 
                                strokeWidth="4" 
                              />
                              <motion.circle 
                                cx="40" cy="40" r="36" 
                                fill="none" 
                                className="stroke-primary drop-shadow-[0_0_8px_rgba(0,229,255,0.5)]" 
                                strokeWidth="4"
                                strokeDasharray="226"
                                initial={{ strokeDashoffset: 226 }}
                                whileInView={{ strokeDashoffset: 226 - (226 * skill.proficiency) / 100 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1.5, delay: i * 0.05, ease: "easeOut" }}
                                strokeLinecap="round"
                              />
                            </svg>
                            
                            {/* Inner Logo */}
                            {logoUrl ? (
                              <img src={logoUrl} alt={skill.name} className="w-10 h-10 object-contain relative z-10 drop-shadow-[0_0_8px_rgba(255,255,255,0.4)] group-hover:scale-110 transition-transform duration-300" />
                            ) : (
                              <span className="text-sm font-bold text-muted relative z-10">{skill.name.slice(0, 2).toUpperCase()}</span>
                            )}
                          </div>

                          {/* Text Info */}
                          <div>
                            <h4 className="font-bold text-sm text-white group-hover:text-primary transition-colors">{skill.name}</h4>
                            <div className="flex items-center justify-center gap-1 mt-1">
                              <div className="w-1.5 h-1.5 rounded-full bg-primary shadow-glow-primary animate-pulse" />
                              <p className="text-xs text-muted font-mono">{skill.proficiency}%</p>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </motion.div>

            {/* Right Column: 3D Fibonacci Sphere */}
            <motion.div
              variants={fadeInUp}
              className="h-[420px] sm:h-[500px] md:h-[600px] lg:h-[700px] lg:sticky lg:top-24"
            >
              <div className="glass p-6 rounded-2xl h-full flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-display text-lg font-bold">
                    Interactive 3D Skill Sphere
                  </h3>
                  <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-mono">
                    360° Drag & Track
                  </span>
                </div>
                <div className="flex-1 min-h-0">
                  <TechLogoSphere activeCategory={activeCategory} />
                </div>
                <p className="text-xs text-muted text-center mt-4">
                  Sphere spins dynamically — drag on touch or move your mouse
                </p>
              </div>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
