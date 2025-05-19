import React from 'react';
import SectionHeading from './common/SectionHeading';
import { Github, Globe, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubLink?: string;
  demoLink?: string;
}

const ProjectCard = ({ 
  title, 
  description, 
  image, 
  technologies, 
  githubLink, 
  demoLink 
}: ProjectCardProps) => {
  return (
    <motion.div 
      className="bg-secondary-800 rounded-lg overflow-hidden border border-gray-700 hover:border-primary-500 transition-all duration-300 group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
    >
      <div className="relative h-48 overflow-hidden">
        <motion.img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary-900 via-transparent to-transparent opacity-80"></div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-white group-hover:text-primary-400 transition-colors">{title}</h3>
        <p className="text-gray-300 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-secondary-700 rounded-md text-xs text-gray-300"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex space-x-3">
          {githubLink && (
            <motion.a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-sm text-gray-300 hover:text-primary-400 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github size={16} className="mr-1" />
              <span>Source Code</span>
            </motion.a>
          )}
          {demoLink && (
            <motion.a
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-sm text-gray-300 hover:text-primary-400 transition-colors ml-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Live Demo</span>
              <ArrowUpRight size={16} className="ml-1" />
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "Food Delivery Chatbot",
      description: "Built a chatbot for a food delivery system using Dialogflow, Python, and FastAPI, with a backend supporting real-time order tracking and seamless integration.",
      image: "https://images.pexels.com/photos/1146760/pexels-photo-1146760.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      technologies: ["Python", "Dialogflow", "FastAPI", "MongoDB"],
      githubLink: "https://github.com/Tanujashree27/MIRA-foodchatbot"
    },
    {
      title: "Cold Storage Control System",
      description: "Developed a web app for cold storage management using Node.js, Express, MongoDB, and implemented JWT authentication, dashboards, and AI chatbot support.",
      image: "https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      technologies: ["Node.js", "Express", "MongoDB", "JWT"],
      githubLink: "https://github.com/Tanujashree27/Cold-Storage-Mangement-"
    },
    {
      title: "Lie Detection System",
      description: "Created a deep learning model with MobileNetV2 to detect lies by analyzing micro-expressions, using TensorFlow and Keras for training and evaluation.",
      image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      technologies: ["Python", "TensorFlow", "Keras", "OpenCV"],
      githubLink: "https://github.com/Tanujashree27/Lie-Detection-System"
    }
  ];

  return (
    <section id="projects" className="py-20 relative z-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="My Projects" 
          subtitle="Some of my recent work and personal projects"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              {...project}
            />
          ))}
        </div>

        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.a 
            href="https://github.com/Tanujashree27" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 text-base font-medium rounded-md border border-primary-400 text-primary-400 hover:bg-primary-500/10 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github size={20} className="mr-2" />
            View More Projects on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;