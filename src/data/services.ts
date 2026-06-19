export interface Service {
  id: number;
  icon: string;
  title: string;
  description: string;
  lottieUrl?: string;
  imageUrl?: string;
}

export const services: Service[] = [
  {
    id: 1,
    icon: 'Code2',
    title: 'Full-Stack Development',
    description: 'End-to-end web application development using modern MERN stack technologies.',
    lottieUrl: 'https://assets2.lottiefiles.com/packages/lf20_q5pk6p1k.json', // Placeholder for code animation
  },
  {
    id: 2,
    icon: 'Cloud',
    title: 'Cloud Infrastructure',
    description: 'AWS cloud architecture, deployment, and infrastructure management solutions.',
    lottieUrl: 'https://assets5.lottiefiles.com/packages/lf20_puciaact.json', // Placeholder for cloud animation
  },
  {
    id: 3,
    icon: 'Database',
    title: 'Database Design',
    description: 'Scalable database architecture with MongoDB, PostgreSQL, and Redis optimization.',
    lottieUrl: 'https://assets1.lottiefiles.com/packages/lf20_bq485nmk.json', // Placeholder for database
  },
  {
    id: 4,
    icon: 'Smartphone',
    title: 'Mobile Development',
    description: 'Cross-platform mobile apps using React Native and Expo framework.',
    lottieUrl: 'https://assets4.lottiefiles.com/packages/lf20_vnikrcia.json', // Placeholder for mobile
  },
  {
    id: 5,
    icon: 'Rocket',
    title: 'DevOps & Deployment',
    description: 'CI/CD pipelines, Docker containerization, and automated deployment workflows.',
    lottieUrl: 'https://assets9.lottiefiles.com/packages/lf20_n2m0isqh.json', // Placeholder for rocket
  },
  {
    id: 6,
    icon: 'Bot',
    title: 'AI Integration',
    description: 'ChatGPT, Claude, and custom AI model integration into web applications.',
    lottieUrl: 'https://assets7.lottiefiles.com/packages/lf20_1m1r0u2j.json', // Placeholder for robot
  },
  {
    id: 7,
    icon: 'ShieldCheck',
    title: 'Security & Authentication',
    description: 'JWT, OAuth, role-based access control, and security best practices implementation.',
    lottieUrl: 'https://assets3.lottiefiles.com/packages/lf20_jcikmaco.json', // Placeholder for shield
  },
  {
    id: 8,
    icon: 'Zap',
    title: 'Performance Optimization',
    description: 'Website speed optimization, caching strategies, and load balancing solutions.',
    lottieUrl: 'https://assets10.lottiefiles.com/packages/lf20_v1yudjqi.json', // Placeholder for speed
  },
];
