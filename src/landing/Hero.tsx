import { FC } from 'react';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';

const Hero: FC = () => {
  const handleShare = () => {
    toast.success('Coming Soon!');
  };

  const handleHelp = () => {
    toast.error('24/7 Helpline Ready');
  };

  return (
    <div className="relative h-screen flex items-center justify-center text-center bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white overflow-hidden">
      {/* Particle Animation */}
      <div className="absolute inset-0 z-0">
        {/* Canvas for particle animation will go here */}
      </div>

      <div className="z-10">
        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Your Anonymous Voice Matters
        </motion.h1>
        <motion.p
          className="text-lg md:text-2xl mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          India's first decentralized student platform
        </motion.p>
        <motion.div
          className="flex justify-center space-x-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <button
            className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:scale-105 transition-transform"
            onClick={handleShare}
          >
            Share Anonymously
          </button>
          <button
            className="bg-red-500 text-white px-8 py-3 rounded-lg font-semibold hover:scale-105 transition-transform"
            onClick={handleHelp}
          >
            Get Crisis Help
          </button>
        </motion.div>
      </div>

      {/* Smooth Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
