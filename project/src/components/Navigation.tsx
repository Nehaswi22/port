import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavigationProps {
  isOpen: boolean;
  onNavigate: (sectionId: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ isOpen, onNavigate }) => {
  const menuItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  const menuVariants = {
    closed: {
      x: '-100%',
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 40,
      },
    },
    open: {
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 40,
      },
    },
  };

  return (
    <>
      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed top-0 left-0 h-full w-64 glass-morphism z-40 md:hidden"
          >
            <div className="p-8 mt-16">
              <h2 className="text-xl font-bold mb-6">Sayari Nehaswi</h2>
              <ul className="flex flex-col gap-4">
                {menuItems.map((item) => (
                  <motion.li
                    key={item.id}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <button
                      onClick={() => onNavigate(item.id)}
                      className="w-full text-left py-2 px-4 rounded-lg hover:glass-morphism transition-all duration-300"
                    >
                      {item.label}
                    </button>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* Desktop Navigation */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className="fixed top-0 left-0 right-0 z-40 hidden md:block"
      >
        <div className="glass-morphism mx-auto mt-4 rounded-full py-2 px-6 max-w-3xl flex items-center justify-between">
          <motion.h1 
            className="text-lg font-bold px-4"
            whileHover={{ scale: 1.05 }}
          >
            Sayari Nehaswi
          </motion.h1>
          <ul className="flex justify-center gap-8">
            {menuItems.map((item) => (
              <motion.li
                key={item.id}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <button
                  onClick={() => onNavigate(item.id)}
                  className="py-2 px-4 rounded-full hover:glass-morphism transition-all duration-300"
                >
                  {item.label}
                </button>
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.nav>
    </>
  );
};

export default Navigation;