import { ReactNode } from 'react';

interface GlassmorphicCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export function GlassmorphicCard({ children, className = '', hover = true }: GlassmorphicCardProps) {
  return (
    <div
      className={`glass p-6 ${hover ? 'hover:shadow-glow-primary transition-all duration-300' : ''} ${className}`}
    >
      {children}
    </div>
  );
}
