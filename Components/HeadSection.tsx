// /components/HeadSection.js
import React from "react";
import { motion } from "framer-motion";

const HeadSection = () => {
  return (
    <motion.div
      className="min-h-screen border-2 rounded-3xl flex flex-col justify-center items-center bg-gradient-to-r from-gray-900 to-gray-800 text-white text-center"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Subtitle Animation */}
      <motion.p
        className="text-sm font-light tracking-wide mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        Competitive Edge through Creativity & Technology
      </motion.p>

      {/* Main Title with Icon Animation */}
      <motion.h1
        className="text-6xl font-bold mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
      >
        Market Insights{" "}
        <motion.span
          className="text-5xl"
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
        >
          ✱
        </motion.span>
      </motion.h1>

      {/* Secondary Title Animation */}
      <motion.h2
        className="text-4xl text-green-400 font-bold"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
      >
        that Make a Difference
      </motion.h2>

      {/* Animated Floating Background Element */}
      <motion.div
        className="absolute top-20 left-20 w-32 h-32 bg-green-500 opacity-30 rounded-full"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 0.3, scale: 1 }}
        transition={{ duration: 2, delay: 0.5 }}
      />

      <motion.div
        className="absolute bottom-20 right-20 w-40 h-40 bg-blue-500 opacity-20 rounded-full"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 0.2, scale: 1 }}
        transition={{ duration: 2, delay: 1 }}
      />
    </motion.div>
  );
};

export default HeadSection;
