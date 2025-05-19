import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, MotionProps } from 'framer-motion';
import SectionHeading from './common/SectionHeading';

// Import images from src/assets
import profile1 from '../assets/tanuja_1.png';
import profile2 from '../assets/tanuja2.png';
import profile3 from '../assets/cllg.png';

// Define the type for motion.img by extending HTMLImageElement props with MotionProps
type MotionImageProps = React.ImgHTMLAttributes<HTMLImageElement> & MotionProps;

const About = () => {
  const images = [profile1, profile2, profile3];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" className="py-20 relative z-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="About Me" subtitle="Get to know me better" />
        
        <div className="flex flex-col md:flex-row gap-10 mt-12 items-center">
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-lg text-gray-300 mb-6">
              Hi! I'm Tanuja Shree, a Computer Science student deeply passionate about Artificial Intelligence and Machine Learning. I love exploring how intelligent systems work and applying AI/ML techniques to solve real-world problems.
            </p>
            <p className="text-lg text-gray-300 mb-6">
              From predictive models to smart applications, I find excitement in building solutions that learn, adapt, and make an impact. With strong problem-solving skills and a fast learning curve, I thrive in dynamic and data-driven environments.
            </p>
            <p className="text-lg text-gray-300">
              My adaptability and precision help me approach every challenge with confidence and a mindset for innovation. I'm continuously working to expand my expertise in machine learning, deep learning, and applied AI — with the long-term goal of becoming a full-stack AI developer building scalable, intelligent technologies for the future.
            </p>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2 flex justify-center"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="w-96 h-96 sm:w-[450px] sm:h-[450px] rounded-full bg-gradient-to-br from-primary-400/20 to-primary-700/20 p-1.5">
              <div className="w-full h-full rounded-full overflow-hidden bg-secondary-800 flex items-center justify-center border-2 border-primary-600/30 relative">
                <AnimatePresence mode="wait">
                  <motion.img 
                    key={currentImageIndex}
                    src={images[currentImageIndex]} 
                    alt={`Profile ${currentImageIndex + 1}`} 
                    className="w-full h-full object-cover"
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ 
                      duration: 0.5,
                      ease: "easeInOut"
                    }}
                  />
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;