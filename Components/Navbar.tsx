// /components/Navbar.js

"use client";

import React, { useEffect, useState } from "react";
import { motion, useScroll } from "framer-motion";

const Navbar = () => {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    return scrollY.onChange((latest) => {
      setHidden(latest > 100); // Hide navbar on scroll down after 100px
    });
  }, [scrollY]);

  return (
    <motion.div
      className={`p-5 fixed top-0 left-0 right-0 transition-all duration-500 z-50 ${
        hidden ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="flex justify-between items-center">
        <div className="text-2xl font-bold text-white">Addifico</div>
        <div className="flex items-center gap-4">
          <motion.div
            className="h-12 w-12 text-center bg-gray-600 rounded-full text-white flex items-center justify-center"
            animate={{ x: hidden ? -50 : 0 }}
          >
            {hidden ? (
              <motion.span
                initial={{ rotate: 0 }}
                animate={{ rotate: 90 }}
                transition={{ duration: 0.3 }}
                className="block"
              >
                ➔
              </motion.span>
            ) : (
              "||"
            )}
          </motion.div>

          <motion.div
            className="flex items-center gap-2 rounded-3xl text-black px-8 py-3 bg-green-400"
            animate={{ x: hidden ? 50 : 0 }}
          >
            Get in Touch
            {hidden ? (
              <motion.div
                className="rounded-full h-4 w-4 bg-black"
                initial={{ rotate: 0 }}
                animate={{ rotate: 90 }}
                transition={{ duration: 0.3 }}
              />
            ) : (
              <motion.div className="rounded-full h-4 w-4 bg-black" />
            )}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Navbar;
