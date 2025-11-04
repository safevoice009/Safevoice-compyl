import React, { forwardRef } from 'react';
import { motion } from 'framer-motion';
import { Shield, LifeBuoy, Users, Award } from 'lucide-react';

const features = [
  {
    icon: <Shield />,
    title: '100% Anonymous',
    description: 'No login, no tracking. Your identity is always protected.',
  },
  {
    icon: <LifeBuoy />,
    title: '24/7 Crisis Support',
    description: 'Access to verified helplines and resources anytime you need them.',
  },
  {
    icon: <Users />,
    title: 'Community Spaces',
    description: 'Connect with other students in safe, anonymous community spaces.',
  },
  {
    icon: <Award />,
    title: 'Safe Whistleblowing',
    description: 'Expose corruption and wrongdoing without fear of retaliation.',
  },
];

const Features = forwardRef<HTMLDivElement>((_props, ref) => {
  return (
    <div ref={ref} className="py-20 bg-background text-white">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="glass p-8 text-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.05 }}
            >
              <div className="inline-block p-4 bg-primary rounded-full mb-4">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold mb-2">{feature.title}</h3>
              <p>{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
});

export default Features;
