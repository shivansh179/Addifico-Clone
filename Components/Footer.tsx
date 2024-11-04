import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.div
      className="p-8 rounded-s-3xl bg-gray-900"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      {/* Top Row - Links */}
      <div className="flex justify-between">
        <motion.div
          className="text-white text-lg"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          whileHover={{ scale: 1.05, color: "#6EE7B7" }}
        >
          Services / Resources / About / Get in touch
        </motion.div>
        
        <motion.div
          className="text-white text-lg"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          whileHover={{ scale: 1.05, color: "#6EE7B7" }}
        >
          Twitter / Instagram / Facebook
        </motion.div>
      </div>

      {/* Divider Line */}
      <motion.div
        className="my-8"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <hr className="border-gray-700" />
      </motion.div>

      {/* Bottom Row - Credits and Rights */}
      <div className="flex justify-between">
        <motion.div
          className="text-white text-lg"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1, delay: 0.3

            
           }}
          whileHover={{ scale: 1.05, color: "#6EE7B7" }}
        >
          Design and development by Valeri Karageorgiev
        </motion.div>
        
        <motion.div
          className="text-white text-lg"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          whileHover={{ scale: 1.05, color: "#6EE7B7" }}
        >
          ©2023 All Rights Reserved |
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Footer;
