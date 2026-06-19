import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import Lottie from 'lottie-react';
import { useCardTilt } from '../../hooks/useCardTilt';
import { Service } from '../../data/services';
import { scaleIn } from '../../animations/variants';

interface ServiceCardProps {
  service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
  const { ref, onMouseMove, onMouseLeave } = useCardTilt(12);
  const [animationData, setAnimationData] = useState<any>(null);

  useEffect(() => {
    if (service.lottieUrl) {
      fetch(service.lottieUrl)
        .then((res) => {
          if (!res.ok) throw new Error('Network response was not ok');
          return res.json();
        })
        .then((data) => setAnimationData(data))
        .catch((err) => console.log('Lottie load error, falling back to icon:', err));
    }
  }, [service.lottieUrl]);
  
  // Resolve Lucide Icon dynamically
  const IconComponent = (LucideIcons as any)[service.icon] || LucideIcons.Box;

  return (
    <motion.div
      ref={ref}
      variants={scaleIn}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className="group glass p-6 h-full flex flex-col tilt-card hover:border-primary/40 hover:shadow-glow-primary transition-all duration-300 border border-white/8"
      style={{ transformStyle: 'preserve-3d' }}
    >
      <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:bg-primary/20">
        {service.lottieUrl && animationData ? (
          <Lottie animationData={animationData} loop={true} style={{ width: '80%', height: '80%' }} />
        ) : service.imageUrl ? (
          <img src={service.imageUrl} alt={service.title} className="w-10 h-10 object-contain" />
        ) : (
          <IconComponent className="w-10 h-10 text-primary transition-transform duration-300 group-hover:-translate-y-1 group-hover:animate-pulse" />
        )}
      </div>

      <h3 className="font-display text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
        {service.title}
      </h3>
      
      <p className="text-muted text-sm leading-relaxed flex-1">
        {service.description}
      </p>
    </motion.div>
  );
}
