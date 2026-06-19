import { motion } from 'framer-motion';
import { AnimatedCounter } from '../ui/AnimatedCounter';
import { staggerContainer, fadeInUp } from '../../animations/variants';
import { Trophy, Clock, Users, Monitor } from 'lucide-react';

const ACHIEVEMENTS = [
  { icon: Trophy, value: 25, suffix: '+', label: 'Projects Completed' },
  { icon: Clock, value: 5, suffix: '+', label: 'Years Experience' },
  { icon: Users, value: 20, suffix: '+', label: 'Happy Clients' },
  { icon: Monitor, value: 50, suffix: '+', label: 'Deployments' },
];

export function AchievementsSection() {
  return (
    <section id="achievements" className="relative py-20 md:py-32 overflow-hidden bg-surface/5">
      {/* Parallax Background */}
      <div className="parallax-bg absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 right-1/3 w-96 h-96 rounded-full bg-accent/5 blur-3xl" />
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
              Career <span className="text-primary text-glow">Achievements</span>
            </h2>
            <div className="h-1 w-20 bg-primary mx-auto rounded-full mb-4" />
            <p className="text-muted max-w-2xl mx-auto text-base">
              Performance metrics confirming a track record of engineering success.
            </p>
          </motion.div>

          {/* 2x2 Grid Layout for Counters */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {ACHIEVEMENTS.map((achievement) => (
              <motion.div
                key={achievement.label}
                variants={fadeInUp}
                whileHover={{ scale: 1.03 }}
                className="glass p-8 text-center relative overflow-hidden group hover:border-primary/40 transition-all duration-300"
              >
                {/* Large faded backdrop number for 3D depth */}
                <div className="absolute -right-6 -bottom-10 text-[10rem] md:text-[12rem] font-black text-primary/5 select-none pointer-events-none font-display">
                  {achievement.value}
                </div>
                
                <achievement.icon className="w-12 h-12 text-primary mx-auto mb-4 relative z-10" />
                
                <div className="relative z-10 flex flex-col items-center">
                  <AnimatedCounter end={achievement.value} suffix={achievement.suffix} />
                </div>
                
                <p className="text-muted text-sm md:text-base mt-2 relative z-10 font-mono uppercase tracking-wider">
                  {achievement.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
