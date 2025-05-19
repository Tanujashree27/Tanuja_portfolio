// import React from 'react';
// import { ArrowDown } from 'lucide-react';
// import { motion } from 'framer-motion';

// // Import images from src/assets
// import tanuja1 from '../assets/cllg.png';


// const Hero = () => {
//   return (
//     <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//         <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
//           <motion.div 
//             className="lg:w-1/2 text-center lg:text-left"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//           >
//             <motion.h1 
//               className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-heading"
//               initial={{ opacity: 0, x: -20 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ delay: 0.2, duration: 0.6 }}
//             >
//               <span className="text-gray-200">Welcome to my </span>
//               <span className="text-primary-400 italic">Digital Space</span>
//               <span className="text-gray-200">!</span>
//             </motion.h1>
//             <motion.h2 
//               className="text-3xl md:text-4xl font-bold mb-8 font-heading text-white"
//               initial={{ opacity: 0, x: -20 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ delay: 0.4, duration: 0.6 }}
//             >
//               I'm Tanuja Shree!
//             </motion.h2>
//             <motion.p 
//               className="text-xl text-gray-300 mb-10 max-w-lg mx-auto lg:mx-0"
//               initial={{ opacity: 0, x: -20 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ delay: 0.6, duration: 0.6 }}
//             >
//               I'm an AI/ML developer, web enthusiast, and passionate tech explorer. Here, I share my evolving journey through code, creativity, and curiosity.
//             </motion.p>
//             <motion.div 
//               className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center lg:justify-start"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.8, duration: 0.6 }}
//             >
//               <motion.a
//                 href="#projects"
//                 className="px-8 py-3 text-base font-medium rounded-md bg-primary-600 hover:bg-primary-700 transition-all transform hover:-translate-y-1"
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 View Projects
//               </motion.a>
//               <motion.a
//                 href="#contact"
//                 className="px-8 py-3 text-base font-medium rounded-md border border-primary-400 text-primary-400 hover:bg-primary-500/10 transition-all transform hover:-translate-y-1"
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 Get in Touch
//               </motion.a>
//             </motion.div>
//           </motion.div>
//           <motion.div 
//             className="lg:w-1/2 flex flex-col sm:flex-row justify-center items-center gap-6"
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ delay: 0.4, duration: 0.6 }}
//           >
//             <div className="w-56 h-56 sm:w-64 sm:h-64 rounded-full bg-gradient-to-br from-primary-400/20 to-primary-700/20 p-1.5 animate-pulse-slow">
//               <div className="w-full h-full rounded-full overflow-hidden bg-secondary-800 flex items-center justify-center border-2 border-primary-600/ Народный контроль30">
//                 <img 
//                   src={tanuja1}
//                   alt="Tanuja Shree 1" 
//                   className="w-full h-full object-cover object-center"
//                 />
//               </div>
//             </div>
//           </motion.div>
//         </div>
//         <motion.div 
//           className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 1, duration: 0.6, repeat: Infinity, repeatType: "reverse" }}
//         >
//           <a href="#about" className="text-white/60 hover:text-white">
//             <ArrowDown size={32} />
//           </a>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Hero;

import React from 'react';
import { ArrowDown } from 'lucide-react';
import { motion } from 'framer-motion';

// Import images from src/assets
import tanuja1 from '../assets/cllg.png';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <motion.div 
            className="lg:w-1/2 text-center lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-heading"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <span className="text-gray-200">Welcome to my </span>
              <span className="text-primary-400 italic">Digital Space</span>
              <span className="text-gray-200">!</span>
            </motion.h1>
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-8 font-heading text-white"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              I'm Tanuja Shree!
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-300 mb-10 max-w-lg mx-auto lg:mx-0"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              I'm an AI/ML developer, web enthusiast, and passionate tech explorer. Here, I share my evolving journey through code, creativity, and curiosity.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <motion.a
                href="#projects"
                className="px-8 py-3 text-base font-medium rounded-md bg-primary-600 hover:bg-primary-700 transition-all transform hover:-translate-y-1"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Projects
              </motion.a>
              <motion.a
                href="#contact"
                className="px-8 py-3 text-base font-medium rounded-md border border-primary-400 text-primary-400 hover:bg-primary-500/10 transition-all transform hover:-translate-y-1"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get in Touch
              </motion.a>
            </motion.div>
          </motion.div>
          <motion.div 
            className="lg:w-1/2 flex flex-col sm:flex-row justify-center items-center gap-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <div className="w-30 h-30 rounded-md bg-gradient-to-br from-primary-400/20 to-primary-700/20 p-1.5 animate-pulse-slow">
  <div className="w-full h-full rounded-md overflow-hidden bg-secondary-800 flex items-center justify-center border-2 border-primary-600/30">
    <img 
      src={tanuja1}
      alt="Tanuja Shree 1" 
      className="w-[80%] h-[80%] object-contain"
    />
  </div>
</div>
          </motion.div>
        </div>
        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6, repeat: Infinity, repeatType: "reverse" }}
        >
          <a href="#about" className="text-white/60 hover:text-white">
            <ArrowDown size={32} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;