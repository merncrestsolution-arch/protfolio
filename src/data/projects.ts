export interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  year: string;
  category: 'fullstack' | 'cloud' | 'ai' | 'frontend';
  liveUrl?: string;
  githubUrl?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Enterprise SaaS Platform',
    description: 'Full-featured multi-tenant SaaS with subscription management, real-time analytics, and role-based access control.',
    tech: ['React', 'Node.js', 'PostgreSQL', 'AWS', 'Stripe'],
    year: '2024',
    category: 'fullstack',
    liveUrl: 'https://example.com',
  },
  {
    id: 2,
    title: 'AI-Powered Chat Application',
    description: 'Real-time messaging platform with AI-driven content moderation, smart replies, and multilingual support.',
    tech: ['Next.js', 'Socket.io', 'MongoDB', 'OpenAI', 'Redis'],
    year: '2024',
    category: 'ai',
  },
  {
    id: 3,
    title: 'Cloud Infrastructure Automation',
    description: 'Automated deployment pipeline with AWS CDK, auto-scaling, monitoring, and disaster recovery.',
    tech: ['AWS', 'Lambda', 'CloudFront', 'S3', 'Route53'],
    year: '2023',
    category: 'cloud',
  },
  {
    id: 4,
    title: 'E-Commerce Mobile App',
    description: 'Cross-platform shopping app with payment integration, order tracking, and push notifications.',
    tech: ['React Native', 'Expo', 'Node.js', 'MongoDB', 'Stripe'],
    year: '2023',
    category: 'fullstack',
  },
  {
    id: 5,
    title: 'Real-Time Analytics Dashboard',
    description: 'Interactive business intelligence dashboard with live data visualization and custom reporting.',
    tech: ['React', 'TypeScript', 'D3.js', 'GraphQL', 'PostgreSQL'],
    year: '2023',
    category: 'frontend',
  },
  {
    id: 6,
    title: 'DevOps Monitoring System',
    description: 'Comprehensive monitoring solution with alerting, log aggregation, and performance metrics.',
    tech: ['AWS', 'Docker', 'Nginx', 'PM2', 'Grafana'],
    year: '2024',
    category: 'cloud',
  },
  {
    id: 7,
    title: 'Content Management System',
    description: 'Headless CMS with API-first architecture, media management, and multi-language content support.',
    tech: ['Next.js', 'Prisma', 'PostgreSQL', 'S3', 'GraphQL'],
    year: '2023',
    category: 'fullstack',
  },
  {
    id: 8,
    title: 'AI Document Processor',
    description: 'Automated document extraction and classification using machine learning and OCR technology.',
    tech: ['Python', 'TensorFlow', 'Node.js', 'AWS', 'MongoDB'],
    year: '2024',
    category: 'ai',
  },
];
