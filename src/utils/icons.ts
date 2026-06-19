import {
  Bot,
  Briefcase,
  Building2,
  Cloud,
  Code2,
  Database,
  Globe,
  Layers,
  LayoutDashboard,
  MessageSquare,
  Network,
  Server,
  type LucideIcon,
} from 'lucide-react';

/**
 * Maps the icon name strings used in data files to their Lucide components.
 */
export const iconMap: Record<string, LucideIcon> = {
  Code2,
  Briefcase,
  Layers,
  Building2,
  Database,
  Cloud,
  Bot,
  Globe,
  LayoutDashboard,
  Server,
  Network,
  MessageSquare,
};

export const getIcon = (name: string): LucideIcon => iconMap[name] ?? Code2;
