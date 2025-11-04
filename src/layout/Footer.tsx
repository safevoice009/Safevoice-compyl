import { FC } from 'react';
import { Github, Twitter, Linkedin } from 'lucide-react';

const Footer: FC = () => {
  return (
    <footer className="bg-surface text-white py-8">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} SafeVoice Foundation. All Rights Reserved.</p>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="#" className="hover:text-primary transition-colors">
            <Github />
          </a>
          <a href="#" className="hover:text-primary transition-colors">
            <Twitter />
          </a>
          <a href="#" className="hover:text-primary transition-colors">
            <Linkedin />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
