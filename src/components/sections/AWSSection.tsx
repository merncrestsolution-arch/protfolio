import { motion } from 'framer-motion';
import { AWSDiagram } from '../3d/AWSDiagram';
import { staggerContainer, fadeInUp, fadeInLeft, fadeInRight } from '../../animations/variants';
import { Shield, Zap, Server, Globe } from 'lucide-react';

const AWS_STATS = [
  { icon: Server, label: 'Deployments', value: '25+' },
  { icon: Zap, label: 'Uptime', value: '99.9%' },
  { icon: Shield, label: 'Encryption', value: 'AES-256' },
  { icon: Globe, label: 'Auto-Scale', value: 'Ready' },
];

const AWS_SERVICES = [
  { name: 'Route53', description: 'DNS management and domain routing with latency-based routing & health checks.' },
  { name: 'CloudFront', description: 'Global Content Delivery Network caching static assets at low latency edge nodes.' },
  { name: 'EC2', description: 'Scalable cloud compute servers configured with Auto-Scaling Groups and Load Balancers.' },
  { name: 'S3', description: 'Secure, highly durable object storage for user media assets, database dumps, and logs.' },
  { name: 'RDS', description: 'Managed relational Database (PostgreSQL) with automated replication, backups, and failovers.' },
  { name: 'Lambda', description: 'Serverless micro-functions executing background event tasks on demand with zero administration.' },
];

export function AWSSection() {
  return (
    <section id="aws" className="relative py-20 md:py-32 overflow-hidden bg-surface/10">
      {/* Parallax Background */}
      <div className="parallax-bg absolute inset-0 pointer-events-none z-0">
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
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
              AWS Cloud <span className="text-primary text-glow">Infrastructure</span>
            </h2>
            <div className="h-1 w-20 bg-primary mx-auto rounded-full mb-4" />
            <p className="text-muted max-w-2xl mx-auto text-base">
              Enterprise-grade, high-availability setups configured with multi-tier architectures.
            </p>
          </motion.div>

          {/* Stats Ribbon (Row) */}
          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          >
            {AWS_STATS.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <motion.div 
                  key={idx} 
                  variants={fadeInUp}
                  whileHover={{ scale: 1.03 }}
                  className="glass p-6 text-center hover:border-primary/40 hover:shadow-glow-primary transition-all duration-300"
                >
                  <Icon className="w-8 h-8 text-primary mx-auto mb-3" />
                  <p className="font-display text-2xl font-black text-primary mb-1">{stat.value}</p>
                  <p className="text-muted text-xs uppercase tracking-wider font-mono">{stat.label}</p>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Main Layout Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* 3D Diagram (Left Column, hidden on mobile/tablet) */}
            <motion.div
              variants={fadeInLeft}
              className="h-[500px] md:h-[600px] hidden lg:block"
            >
              <div className="glass p-6 rounded-2xl h-full flex flex-col justify-between">
                <div className="flex items-center justify-between border-b border-white/5 pb-4">
                  <span className="font-display text-sm font-bold text-white uppercase tracking-wider font-mono">Live Architecture Graph</span>
                  <span className="h-2.5 w-2.5 rounded-full bg-accent animate-ping" />
                </div>
                <div className="flex-1 min-h-0">
                  <AWSDiagram />
                </div>
                <p className="text-xs text-muted text-center pt-2">
                  Hover nodes to inspect roles • Scroll/drag to rotate layout
                </p>
              </div>
            </motion.div>

            {/* Services List (Right Column, stacked on mobile) */}
            <motion.div variants={fadeInRight} className="space-y-4">
              <h3 className="font-display text-xl font-bold text-white mb-6 border-l-4 border-primary pl-3">
                Cloud Service Deployment Nodes
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
                {AWS_SERVICES.map((service) => (
                  <motion.div
                    key={service.name}
                    variants={fadeInUp}
                    whileHover={{ scale: 1.01 }}
                    className="glass p-4 border border-white/5 hover:border-primary/40 transition-all duration-300"
                  >
                    <h4 className="font-display font-bold text-base text-primary mb-1">
                      {service.name}
                    </h4>
                    <p className="text-muted text-xs leading-relaxed">{service.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
