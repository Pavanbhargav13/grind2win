import { useState } from 'react';
import { Menu } from '@headlessui/react';
import {
  MagnifyingGlassIcon,
  UserCircleIcon,
  CogIcon,
  UserIcon,
  AdjustmentsHorizontalIcon,
  CurrencyDollarIcon,
} from '@heroicons/react/24/outline';

const TopNav = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <nav className="fixed top-0 left-0 right-0 bg-gray-900 border-b border-gray-800 px-4 py-2 z-50">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <h1 className="text-2xl font-orbitron font-bold text-accent">G2W</h1>
        </div>

        {/* Search Bar */}
        <div className="flex-1 max-w-xl mx-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="input w-full pl-10"
            />
            <MagnifyingGlassIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          </div>
        </div>

        {/* Profile & Gritcoins */}
        <div className="flex items-center gap-4">
          {/* Gritcoins */}
          <div className="flex items-center gap-1 text-accent">
            <CurrencyDollarIcon className="w-5 h-5" />
            <span className="font-semibold">1,234</span>
          </div>

          {/* Profile Menu */}
          <Menu as="div" className="relative">
            <Menu.Button className="flex items-center gap-2 hover:text-accent transition-colors">
              <UserCircleIcon className="w-8 h-8" />
            </Menu.Button>

            <Menu.Items className="absolute right-0 mt-2 w-48 bg-gray-900 rounded-xl shadow-lg border border-gray-800 py-1">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-gray-800' : ''
                    } flex items-center gap-2 w-full px-4 py-2 text-sm`}
                  >
                    <UserIcon className="w-5 h-5" />
                    Edit Profile
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-gray-800' : ''
                    } flex items-center gap-2 w-full px-4 py-2 text-sm`}
                  >
                    <CogIcon className="w-5 h-5" />
                    Account Settings
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-gray-800' : ''
                    } flex items-center gap-2 w-full px-4 py-2 text-sm`}
                  >
                    <AdjustmentsHorizontalIcon className="w-5 h-5" />
                    Preferences
                  </button>
                )}
              </Menu.Item>
            </Menu.Items>
          </Menu>
        </div>
      </div>
    </nav>
  );
};

export default TopNav;
