import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface NeonButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  className?: string;
  target?: string;
}

export function NeonButton({ 
  children, 
  href, 
  onClick, 
  variant = 'primary',
  className = '',
  target,
}: NeonButtonProps) {
  const baseClasses = `
    relative px-8 py-3 font-display font-bold text-sm uppercase tracking-wider
    rounded-lg overflow-hidden group transition-all duration-300
    ${variant === 'primary' ? 'bg-primary text-bg neon-border' : 'bg-transparent text-primary border border-primary/40'}
  `;

  const content = (
    <>
      <span className="relative z-10">{children}</span>
      <span className={`absolute inset-0 bg-gradient-to-r ${
        variant === 'primary' ? 'from-primary to-accent' : 'from-primary/20 to-accent/20'
      } opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        target={target}
        className={`${baseClasses} ${className} inline-block`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      className={`${baseClasses} ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {content}
    </motion.button>
  );
}
