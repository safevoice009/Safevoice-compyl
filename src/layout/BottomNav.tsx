import { FC } from 'react';
import { Home, MessageSquare, Bell, User } from 'lucide-react';

const BottomNav: FC = () => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 md:hidden bg-background/80 glass z-50">
      <div className="container mx-auto flex justify-around p-2">
        <a href="/feed" className="flex flex-col items-center text-white">
          <Home />
          <span className="text-xs">Feed</span>
        </a>
        <a href="/communities" className="flex flex-col items-center text-white">
          <MessageSquare />
          <span className="text-xs">Communities</span>
        </a>
        <a href="/helplines" className="flex flex-col items-center text-white">
          <Bell />
          <span className="text-xs">Helplines</span>
        </a>
        <a href="/profile" className="flex flex-col items-center text-white">
          <User />
          <span className="text-xs">Profile</span>
        </a>
      </div>
    </nav>
  );
};

export default BottomNav;
