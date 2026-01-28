import { useState } from "react";
import { motion } from "framer-motion";
import { FaBars, FaXmark } from "react-icons/fa6";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <motion.nav
      className="fixed w-full z-50 bg-dark-100/90 backdrop-blur-sm py-4 px-8 shadow-lg"
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Top bar */}
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="text-3xl font-bold text-white">
          Prakash<span className="text-purple">Adavi</span>
          <div className="w-4 h-1 bg-purple rounded-full mt-1"></div>
        </a>

        {/* Desktop menu */}
        <div className="hidden md:flex space-x-10">
          {["Home", "About", "Skills", "Projects", "Experience", "Contact"].map(
            (item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="relative text-white/80 hover:text-purple transition group"
              >
                {item}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-purple transition-all group-hover:w-full"></span>
              </a>
            )
          )}
        </div>

        {/* Mobile button */}
        <div className="md:hidden text-white">
          {showMenu ? (
            <FaXmark
              onClick={() => setShowMenu(false)}
              className="text-2xl cursor-pointer"
            />
          ) : (
            <FaBars
              onClick={() => setShowMenu(true)}
              className="text-2xl cursor-pointer"
            />
          )}
        </div>
      </div>

      {/* Mobile menu */}
      {showMenu && (
        <motion.div
          className="md:hidden mt-4 bg-dark-300 rounded-lg p-6 flex flex-col space-y-6 text-center"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {["Home", "About", "Skills", "Projects", "Experience", "Contact"].map(
            (item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setShowMenu(false)}
                className="text-white/80 hover:text-purple text-lg"
              >
                {item}
              </a>
            )
          )}
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
