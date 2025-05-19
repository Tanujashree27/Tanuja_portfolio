import React from 'react';
import SectionHeading from './common/SectionHeading';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

interface TimelineItemProps {
  title: string;
  institution: string;
  location: string;
  period: string;
  description: string;
  isLast?: boolean;
}

const TimelineItem = ({ 
  title, 
  institution, 
  location, 
  period, 
  description, 
  isLast = false 
}: TimelineItemProps) => {
  return (
    <motion.div 
      className="relative flex items-start group"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
    >
      <div className="flex flex-col items-center mr-4">
        <motion.div 
          className="w-10 h-10 rounded-full bg-primary-600 flex items-center justify-center z-10 group-hover:bg-primary-400 transition-colors duration-300"
          whileHover={{ scale: 1.1 }}
        >
          <GraduationCap size={20} className="text-white" />
        </motion.div>
        {!isLast && (
          <div className="w-px h-full bg-gray-700 group-hover:bg-primary-500 transition-colors duration-300"></div>
        )}
      </div>
      <motion.div 
        className="bg-secondary-800 rounded-lg p-6 mb-10 border border-gray-700 hover:border-primary-500 transition-all duration-300 w-full"
        whileHover={{ y: -5 }}
      >
        <h3 className="text-xl font-bold mb-1 text-white">{title}</h3>
        <h4 className="text-primary-400 font-medium mb-2">{institution}</h4>
        
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-4 text-sm text-gray-400">
          <div className="flex items-center">
            <MapPin size={14} className="mr-1" />
            {location}
          </div>
          <div className="flex items-center">
            <Calendar size={14} className="mr-1" />
            {period}
          </div>
        </div>
        
        <p className="text-gray-300">{description}</p>
      </motion.div>
    </motion.div>
  );
};

const Education = () => {
  const educationItems = [
    {
      title: "B.Tech in CSE (AI & ML)",
      institution: "C.V.Raman Global University",
      location: "Bhubaneswar, Odisha",
      period: "2022 - Present",
      description: "Currently pursuing Bachelor's in Computer Science with specialization in AI & ML. Focusing on machine learning, deep learning, and AI applications."
    },
    {
      title: "Higher Secondary (Science)",
      institution: "ST.XAVIER HIGHER SECONDARY SCHOOL",
      location: "Cuttack, Odisha",
      period: "2020 - 2022",
      description: "Completed higher secondary education with focus on Physics, Chemistry, Mathematics, and Computer Science. CBSE Board."
    },
    {
      title: "Secondary School",
      institution: "D.A.V Public School",
      location: "Cuttack, Odisha",
      period: "2008 - 2020",
      description: "Completed secondary education with excellent academic performance. CBSE Board."
    }
  ];

  return (
    <section id="education" className="py-20 relative z-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Education" 
          subtitle="My academic background and qualifications"
        />

        <div className="mt-12 max-w-3xl mx-auto">
          {educationItems.map((item, index) => (
            <TimelineItem
              key={index}
              title={item.title}
              institution={item.institution}
              location={item.location}
              period={item.period}
              description={item.description}
              isLast={index === educationItems.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;