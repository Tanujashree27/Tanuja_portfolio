import React from 'react';
import SectionHeading from './common/SectionHeading';
import { Gamepad2, Palette, Plane, Code, BookOpen, Music, Camera, Mountain as Mountains } from 'lucide-react';

interface HobbyCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const HobbyCard = ({ icon, title, description }: HobbyCardProps) => {
  return (
    <div className="bg-secondary-800 rounded-lg p-6 border border-gray-700 hover:border-primary-500 transition-all duration-300 group">
      <div className="text-primary-500 mb-4 transform group-hover:scale-110 transition-transform duration-300">{icon}</div>
      <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
};

const Hobbies = () => {
  const hobbies = [
    {
  icon: <Camera size={32} />,
  title: "Watching Movies",
  description: "Unwinding with a good film, especially thrillers and sci-fi, to relax and recharge."
},
    {
      icon: <BookOpen size={32} />,
      title: "Reading",
      description: "Science fiction, technology books, and articles about emerging tech trends."
    },
    // {
    //   icon: <Plane size={32} />,
    //   title: "Traveling",
    //   description: "Exploring new cultures, trying local cuisines, and visiting tech hubs around the world."
    // },
    {
      icon: <Music size={32} />,
      title: "Music",
      description: "Playing guitar and piano, creating digital music using DAW software."
    },
    {
      icon: <Mountains size={32} />,
      title: "Hiking",
      description: "Enjoying nature and outdoor adventures whenever I get time away from the screen."
    },
  
  ];

  return (
    <section id="hobbies" className="py-20 relative z-10 bg-secondary-900/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Hobbies & Interests" 
          subtitle="Things I enjoy when I'm not coding"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-12">
          {hobbies.map((hobby, index) => (
            <HobbyCard
              key={index}
              icon={hobby.icon}
              title={hobby.title}
              description={hobby.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hobbies;