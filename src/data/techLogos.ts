export interface TechLogo {
  name: string;
  symbol: string;
  color: string;
  bg: string;
  category: 'frontend' | 'backend' | 'database' | 'cloud' | 'devops' | 'tools';
  iconUrl: string;
}

export const techLogos: TechLogo[] = [
  // Frontend
  { name: 'React',       symbol: 'Re',  color: '#61DAFB', bg: '#20232A', category: 'frontend', iconUrl: 'https://cdn.simpleicons.org/react' },
  { name: 'TypeScript',  symbol: 'TS',  color: '#FFFFFF', bg: '#3178C6', category: 'frontend', iconUrl: 'https://cdn.simpleicons.org/typescript' },
  { name: 'Next.js',     symbol: 'Nx',  color: '#FFFFFF', bg: '#000000', category: 'frontend', iconUrl: 'https://cdn.simpleicons.org/nextdotjs/white' },
  { name: 'JavaScript',  symbol: 'JS',  color: '#000000', bg: '#F7DF1E', category: 'frontend', iconUrl: 'https://cdn.simpleicons.org/javascript' },
  { name: 'Tailwind',    symbol: 'Tw',  color: '#FFFFFF', bg: '#38B2AC', category: 'frontend', iconUrl: 'https://cdn.simpleicons.org/tailwindcss' },
  { name: 'HTML5',       symbol: 'H5',  color: '#FFFFFF', bg: '#E34F26', category: 'frontend', iconUrl: 'https://cdn.simpleicons.org/html5' },
  { name: 'CSS3',        symbol: 'C3',  color: '#FFFFFF', bg: '#1572B6', category: 'frontend', iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg' },
  // Backend
  { name: 'Node.js',     symbol: 'No',  color: '#FFFFFF', bg: '#339933', category: 'backend',  iconUrl: 'https://cdn.simpleicons.org/nodedotjs' },
  { name: 'Express',     symbol: 'Ex',  color: '#FFFFFF', bg: '#404040', category: 'backend',  iconUrl: 'https://cdn.simpleicons.org/express/white' },
  { name: 'GraphQL',     symbol: 'GQ',  color: '#FFFFFF', bg: '#E10098', category: 'backend',  iconUrl: 'https://cdn.simpleicons.org/graphql' },
  { name: 'REST API',    symbol: 'Re',  color: '#FFFFFF', bg: '#0096D6', category: 'backend',  iconUrl: 'https://cdn.simpleicons.org/openapiinitiative' },
  // Database
  { name: 'MongoDB',     symbol: 'Mg',  color: '#FFFFFF', bg: '#47A248', category: 'database', iconUrl: 'https://cdn.simpleicons.org/mongodb' },
  { name: 'PostgreSQL',  symbol: 'Pg',  color: '#FFFFFF', bg: '#336791', category: 'database', iconUrl: 'https://cdn.simpleicons.org/postgresql' },
  { name: 'MySQL',       symbol: 'My',  color: '#FFFFFF', bg: '#4479A1', category: 'database', iconUrl: 'https://cdn.simpleicons.org/mysql' },
  { name: 'Prisma',      symbol: 'Pr',  color: '#FFFFFF', bg: '#2D3748', category: 'database', iconUrl: 'https://cdn.simpleicons.org/prisma/white' },
  { name: 'Redis',       symbol: 'Rd',  color: '#FFFFFF', bg: '#DC382D', category: 'database', iconUrl: 'https://cdn.simpleicons.org/redis' },
  // Cloud / AWS
  { name: 'AWS EC2',     symbol: 'EC2', color: '#FFFFFF', bg: '#FF9900', category: 'cloud',    iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg' },
  { name: 'AWS S3',      symbol: 'S3',  color: '#FFFFFF', bg: '#569A31', category: 'cloud',    iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg' },
  { name: 'CloudFront',  symbol: 'CF',  color: '#FFFFFF', bg: '#8C4FFF', category: 'cloud',    iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg' },
  { name: 'Route53',     symbol: 'R53', color: '#FFFFFF', bg: '#E7157B', category: 'cloud',    iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg' },
  { name: 'Lambda',      symbol: 'λ',   color: '#FFFFFF', bg: '#FF9900', category: 'cloud',    iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg' },
  { name: 'Lightsail',   symbol: 'LS',  color: '#FFFFFF', bg: '#FF9900', category: 'cloud',    iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg' },
  // DevOps
  { name: 'Docker',      symbol: 'Dk',  color: '#FFFFFF', bg: '#2496ED', category: 'devops',   iconUrl: 'https://cdn.simpleicons.org/docker' },
  { name: 'PM2',         symbol: 'P2',  color: '#FFFFFF', bg: '#2B037A', category: 'devops',   iconUrl: 'https://cdn.simpleicons.org/pm2/white' },
  { name: 'Nginx',       symbol: 'Nx',  color: '#FFFFFF', bg: '#009639', category: 'devops',   iconUrl: 'https://cdn.simpleicons.org/nginx' },
  { name: 'GitHub',      symbol: 'GH',  color: '#FFFFFF', bg: '#181717', category: 'devops',   iconUrl: 'https://cdn.simpleicons.org/github/white' },
  // Tools & AI
  { name: 'Expo',        symbol: 'Ex',  color: '#FFFFFF', bg: '#000020', category: 'tools',    iconUrl: 'https://cdn.simpleicons.org/expo/white' },
  { name: 'Postman',     symbol: 'Po',  color: '#FFFFFF', bg: '#FF6C37', category: 'tools',    iconUrl: 'https://cdn.simpleicons.org/postman' },
];
