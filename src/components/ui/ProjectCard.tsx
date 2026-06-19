import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { useCardTilt } from '../../hooks/useCardTilt';
import { ImagePlaceholder } from './ImagePlaceholder';
import { Project } from '../../data/projects';
import { scaleIn } from '../../animations/variants';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const { ref, onMouseMove, onMouseLeave } = useCardTilt(15);

  return (
    <motion.div
      ref={ref}
      variants={scaleIn}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className="glass overflow-hidden h-full flex flex-col tilt-card"
    >
      <div className="relative aspect-video overflow-hidden">
        <ImagePlaceholder
          src={`/images/project-screenshots/project-${project.id}.png`}
          alt={project.title}
          className="w-full h-full object-cover"
          placeholderLabel={`project-${project.id}.png`}
          shape="square"
        />
      </div>

      <div className="p-6 flex-1 flex flex-col">
        <h3 className="font-display text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-muted text-sm mb-4 flex-1">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs font-mono border border-primary/30 text-primary/80 bg-primary/5 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-3 pt-3 border-t border-white/5">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-primary hover:text-accent transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Live Demo</span>
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-primary hover:text-accent transition-colors"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
