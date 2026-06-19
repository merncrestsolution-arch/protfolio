export interface Skill {
  name: string;
  proficiency: number;
  category: 'frontend' | 'backend' | 'database' | 'cloud' | 'devops' | 'tools';
}

export type SkillCategory = Skill['category'];

export const skills: Skill[] = [
  // Frontend
  { name: 'React',       proficiency: 95, category: 'frontend' },
  { name: 'TypeScript',  proficiency: 90, category: 'frontend' },
  { name: 'Next.js',     proficiency: 92, category: 'frontend' },
  { name: 'JavaScript',  proficiency: 95, category: 'frontend' },
  { name: 'Tailwind',    proficiency: 88, category: 'frontend' },
  { name: 'HTML5',       proficiency: 98, category: 'frontend' },
  { name: 'CSS3',        proficiency: 95, category: 'frontend' },
  // Backend
  { name: 'Node.js',     proficiency: 93, category: 'backend' },
  { name: 'Express',     proficiency: 90, category: 'backend' },
  { name: 'GraphQL',     proficiency: 85, category: 'backend' },
  { name: 'REST API',    proficiency: 95, category: 'backend' },
  // Database
  { name: 'MongoDB',     proficiency: 92, category: 'database' },
  { name: 'PostgreSQL',  proficiency: 88, category: 'database' },
  { name: 'MySQL',       proficiency: 85, category: 'database' },
  { name: 'Prisma',      proficiency: 90, category: 'database' },
  { name: 'Redis',       proficiency: 82, category: 'database' },
  // Cloud
  { name: 'AWS EC2',     proficiency: 92, category: 'cloud' },
  { name: 'AWS S3',      proficiency: 95, category: 'cloud' },
  { name: 'CloudFront',  proficiency: 88, category: 'cloud' },
  { name: 'Route53',     proficiency: 85, category: 'cloud' },
  { name: 'Lambda',      proficiency: 87, category: 'cloud' },
  { name: 'Lightsail',   proficiency: 92, category: 'cloud' },
  // DevOps
  { name: 'Docker',      proficiency: 88, category: 'devops' },
  { name: 'PM2',         proficiency: 90, category: 'devops' },
  { name: 'Nginx',       proficiency: 85, category: 'devops' },
  { name: 'GitHub',      proficiency: 93, category: 'devops' },
  // Tools & AI
  { name: 'Expo',        proficiency: 87, category: 'tools' },
  { name: 'Postman',     proficiency: 92, category: 'tools' },
];
