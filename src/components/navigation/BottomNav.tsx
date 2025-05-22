import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  UserGroupIcon,
  FilmIcon,
  FireIcon,
  TrophyIcon,
  PlusIcon,
  BellIcon,
  ArrowUpTrayIcon,
} from '@heroicons/react/24/outline';

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  onClick?: () => void;
}

const NavItem = ({ icon, label, active, onClick }: NavItemProps) => (
  <button onClick={onClick} className={`nav-item ${active ? 'active' : ''}`}>
    <div className="w-6 h-6">{icon}</div>
    <span className="mt-1">{label}</span>
  </button>
);

const BottomNav = () => {
  const [showFloatingMenu, setShowFloatingMenu] = useState(false);

  const toggleFloatingMenu = () => setShowFloatingMenu(!showFloatingMenu);

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-gray-900 border-t border-gray-800 px-4 py-2">
      <div className="max-w-screen-xl mx-auto relative">
        <div className="flex items-center justify-around">
          <NavItem icon={<UserGroupIcon />} label="Community" />
          <NavItem icon={<FilmIcon />} label="Reels" />
          
          {/* Floating Action Button */}
          <div className="relative">
            <button
              onClick={toggleFloatingMenu}
              className="floating-button -mt-8"
            >
              <PlusIcon className="w-6 h-6" />
            </button>

            <AnimatePresence>
              {showFloatingMenu && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2"
                >
                  <div className="bg-gray-900 rounded-xl shadow-lg border border-gray-800 p-2 flex flex-col gap-2">
                    <button className="flex items-center gap-2 px-4 py-2 hover:bg-gray-800 rounded-lg text-accent">
                      <BellIcon className="w-5 h-5" />
                      <span>Notification</span>
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 hover:bg-gray-800 rounded-lg text-accent">
                      <ArrowUpTrayIcon className="w-5 h-5" />
                      <span>Upload</span>
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <NavItem icon={<FireIcon />} label="Streaks" />
          <NavItem icon={<TrophyIcon />} label="Achievements" />
        </div>
      </div>
    </nav>
  );
};

export default BottomNav;
