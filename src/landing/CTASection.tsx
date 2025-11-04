import { FC } from 'react';

interface CTASectionProps {
  scrollToFeatures: () => void;
}

const CTASection: FC<CTASectionProps> = ({ scrollToFeatures }) => {
  return (
    <div className="py-20 bg-surface text-white text-center">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-4">Ready to share your story?</h2>
        <p className="text-lg mb-8">Join thousands of students across India who are making their voices heard.</p>
        <button
          className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:scale-105 transition-transform"
          onClick={scrollToFeatures}
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default CTASection;
