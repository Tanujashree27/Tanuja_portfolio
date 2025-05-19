import React from 'react';
import SectionHeading from './common/SectionHeading';
import { Award, ExternalLink } from 'lucide-react';

interface CertificationCardProps {
  title: string;
  issuer: string;
  date: string;
  description: string;
  image: string;
  link?: string;
}

const CertificationCard = ({ 
  title, 
  issuer, 
  date, 
  description, 
  image, 
  link 
}: CertificationCardProps) => {
  return (
    <div className="bg-secondary-800 rounded-lg p-6 border border-gray-700 flex flex-col md:flex-row gap-6 hover:border-primary-500 transition-all duration-300">
      <div className="w-full md:w-1/4 flex items-center justify-center md:justify-start">
        <img
          src={image}
          alt={issuer}
          className="h-16 object-contain"
        />
      </div>
      <div className="w-full md:w-3/4">
        <h3 className="text-xl font-bold mb-1 text-white">{title}</h3>
        <div className="flex items-center justify-between mb-2">
          <p className="text-primary-400">{issuer}</p>
          <p className="text-gray-400 text-sm">{date}</p>
        </div>
        <p className="text-gray-300 mb-3">{description}</p>
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-primary-400 hover:text-primary-300 transition-colors text-sm"
          >
            View Certificate <ExternalLink size={14} className="ml-1" />
          </a>
        )}
      </div>
    </div>
  );
};

const Certifications = () => {
  const certifications = [
    {
      title: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "March 2025",
      description: "Validated expertise in designing distributed systems on AWS, including deployment, security, and scalability considerations.",
      image: "https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      link: "https://drive.google.com/drive/folders/1Txlcnw7AjMvoElEMF0-znQteUC0tTwFw?usp=sharing"
    },
    {
       "title": "Introduction to AI",
  "issuer": "Infosys Springboard",
  "date": "February 2025",
  "description": "Foundational course introducing core concepts of Artificial Intelligence, including machine learning, neural networks, and Natural Language Processing (NLP). Covered real-world AI applications in areas like language understanding, data analysis, and automation.",
  "image": "https://images.pexels.com/photos/11035386/pexels-photo-11035386.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "link": "https://drive.google.com/drive/folders/17AFaOnVyJAxFnWSkJU85bmfltmCMwxFo?usp=sharing"
    },

    {
      title: "Google UI/UX Design Professional Certificate",
      issuer: "Cousera",
      date: "November 2024",
      description: "Training in user experience design principles, user research, wireframing, prototyping, and usability testing.",
      image: "https://images.pexels.com/photos/13196616/pexels-photo-13196616.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      link: "https://drive.google.com/drive/folders/1YZnilJGmTdG5RPAsGvqAdxRXvlQ7y-xz?usp=sharing"
    },
      {
      title: "Others",
      issuer: "IBM SkillsBuild, TATA Forage, and Simplilearn",
      date: "2024-2025",
      description: "Completed a series of foundational and hands-on programs in Artificial Intelligence, Data Visualization, Conversational AI, and C programming. Gained practical experience in building AI chatbots, applying NLP concepts, creating impactful business visuals, and writing efficient C code covering data structures, algorithms, and file handling. Certifications span platforms such as IBM SkillsBuild, TATA Forage, and Simplilearn, reflecting a strong multidisciplinary foundation in both software development and AI technologies.",
      image: "https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      link: "#"
    }
  ];

  return (
    <section id="certifications" className="py-20 relative z-10 bg-secondary-900/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Certifications" 
          subtitle="Professional certifications and courses I've completed"
        />

        <div className="space-y-6 mt-12">
          {certifications.map((certification, index) => (
            <CertificationCard
              key={index}
              title={certification.title}
              issuer={certification.issuer}
              date={certification.date}
              description={certification.description}
              image={certification.image}
              link={certification.link}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-secondary-800 rounded-lg border border-gray-700">
            <Award size={20} className="text-primary-400" />
            <span className="text-gray-300">Always learning and adding new skills to my toolkit!</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;