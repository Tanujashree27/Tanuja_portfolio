import React from 'react';
import SectionHeading from './common/SectionHeading';
import { 
  Code2, Database, Globe, Server, Laptop, Terminal, 
  Monitor, Cpu
} from 'lucide-react';
import { motion } from 'framer-motion';

interface TechCardProps {
  icon: React.ReactNode;
  category: string;
  technologies: string[];
}

const TechCard = ({ icon, category, technologies }: TechCardProps) => {
  return (
    <motion.div 
      className="bg-secondary-800 rounded-lg p-6 transition-all duration-300 border border-gray-700 hover:border-primary-500 hover:shadow-lg hover:shadow-primary-500/10 group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
    >
      <motion.div 
        className="text-primary-500 mb-4"
        whileHover={{ scale: 1.1 }}
      >
        {icon}
      </motion.div>
      <h3 className="text-xl font-bold mb-4 text-white">{category}</h3>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech, index) => (
          <motion.span
            key={index}
            className="px-3 py-1 bg-secondary-700 rounded-full text-sm text-gray-300"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
          >
            {tech}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
};

const TechStack = () => {
  const techStacks = [
    {
      icon: <Code2 size={32} />,
      category: 'Languages',
      technologies: ['C', 'C++', 'Python', 'JavaScript', 'HTML', 'CSS']
    },
    {
      icon: <Monitor size={32} />,
      category: 'Operating Systems',
      technologies: ['Windows', 'Linux']
    },
    {
      icon: <Globe size={32} />,
      category: 'Frontend Development',
      technologies: ['React.js', 'Bootstrap']
    },
    {
      icon: <Server size={32} />,
      category: 'Backend Development',
      technologies: ['Node.js', 'Express.js']
    },
    {
      icon: <Database size={32} />,
      category: 'Databases',
      technologies: ['Oracle', 'SQL']
    },
    {
      icon: <Cpu size={32} />,
      category: 'Embedded Systems / IoT',
      technologies: ['Arduino Uno', 'STM32']
    },
    {
      icon: <Laptop size={32} />,
      category: '3D Design & CAD',
      technologies: ['Fusion 360']
    },
    {
      icon: <Terminal size={32} />,
      category: 'Development Tools',
      technologies: ['Git', 'VS Code', 'Jupyter']
    }
  ];

  return (
    <section id="tech-stack" className="py-20 relative z-10 bg-secondary-900/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="My Tech Stack" 
          subtitle="Technologies and tools I work with"
        />

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {techStacks.map((stack, index) => (
            <TechCard
              key={index}
              icon={stack.icon}
              category={stack.category}
              technologies={stack.technologies}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;