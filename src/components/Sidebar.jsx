import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { UserGroupIcon, ChartBarIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <>
      <button
        className="md:hidden bg-white text-center h-8 w-9 rounded-sm fixed top-4 left-4 z-20 p-2"
        onClick={toggleSidebar}
      >
        {isOpen ? (
          <XMarkIcon className="h-5 w-5" />
        ) : (
          <Bars3Icon className="h-5 w-5 " />
        )}
      </button>

      <div className={`fixed top-0 left-0 h-full bg-gray-800 text-white w-64 transform transition-transform duration-200 ease-in-out ${
        isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
      }`}>
        <div className="p-5">
          <h2 className="text-2xl mt-10 md:mt-0 font-bold mb-5">Dashboard</h2>
          <nav>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `flex items-center p-3 mb-4 space-x-2 rounded transition-colors ${
                  isActive ? 'bg-blue-600' : 'hover:bg-gray-700'
                }`
              }
              onClick={() => setIsOpen(false)}
            >
              <UserGroupIcon className="h-6 w-6" />
              <span className='text-sm'>Customer Management</span>
            </NavLink>
            <NavLink
              to="/stats"
              className={({ isActive }) =>
                `flex items-center p-3 mb-4 space-x-2 rounded transition-colors ${
                  isActive ? 'bg-blue-600' : 'hover:bg-gray-700'
                }`
              }
              onClick={() => setIsOpen(false)}
            >
              <ChartBarIcon className="h-6 w-6" />
              <span className="text-sm">Customer Stats</span>
            </NavLink>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Sidebar;