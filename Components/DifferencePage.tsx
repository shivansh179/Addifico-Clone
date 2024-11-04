// pages/DifferencePage.tsx
import { motion } from "framer-motion";
import React from "react";

const DifferencePage: React.FC = () => {
  return (
    <main className="min-h-screen p-8 bg-white text-gray-800 overflow-hidden">
      
      {/* "Make a Difference" Section with Animated Entrance */}
      <section className="min-h-screen flex flex-col justify-center items-center bg-gray-400 rounded-md text-white relative">
        <motion.h1
          className="text-6xl font-bold mb-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Make a Difference
        </motion.h1>
        <motion.p
          className="text-lg max-w-xl text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          Every action, no matter how small, contributes to a brighter, more sustainable future. 
          Join us in our mission to inspire positive change in the world, one step at a time.
        </motion.p>
        
        {/* Floating animation for background effect */}
        <motion.div
          className="absolute top-0 left-0 w-64 h-64 bg-blue-600 opacity-20 rounded-full"
          animate={{ x: [0, 50, 0], y: [0, -50, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </section>

      {/* Our Vision Section with Fade-In and Scale Animation */}
      <section className="min-h-screen bg-gray-100 p-10">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <motion.h2
            className="text-5xl font-semibold text-gray-800 mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            Our Vision
          </motion.h2>
          <motion.p
            className="text-lg leading-relaxed text-gray-700"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            At our core, we believe in empowering individuals and communities to bring about meaningful transformation. 
            Through innovative solutions, dedicated partnerships, and a commitment to sustainability, we aim to create 
            a positive ripple effect that reaches far and wide. Our vision is a world where every person feels empowered 
            to contribute to a cause greater than themselves.
          </motion.p>
        </div>
      </section>

      {/* Our Mission Section with Staggered List Animation */}
      <section className="min-h-screen bg-white p-10">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <motion.h2
            className="text-5xl font-semibold text-gray-800 mb-6"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            Our Mission
          </motion.h2>
          <motion.p
            className="text-lg leading-relaxed text-gray-700"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            To foster creativity, inspire action, and deliver impactful results. We strive to be at the forefront of 
            innovation, bridging the gap between passion and purpose. Whether it’s through education, environmental 
            initiatives, or community support, our mission is to make the world a better place for future generations.
          </motion.p>
        </div>
      </section>

      {/* Our Values Section with Bouncing List Animation */}
      <section className="min-h-screen bg-gray-100 p-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            className="text-5xl font-semibold text-gray-800 mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            Our Values
          </motion.h2>
          <motion.ul
            className="list-disc list-inside text-lg leading-relaxed text-gray-700 space-y-4 text-left mx-auto max-w-lg"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.2 }}
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 50 },
            }}
          >
            {[
              "Integrity: We are committed to transparency, honesty, and ethical practices.",
              "Innovation: We embrace creativity and forward-thinking to solve challenges.",
              "Inclusivity: We build communities where every individual has a voice.",
              "Empowerment: We provide resources and opportunities to make a difference.",
              "Collaboration: We recognize the power of working together for shared goals.",
            ].map((value, index) => (
              <motion.li
                key={index}
                className="my-4"
                variants={{
                  visible: { opacity: 1, y: 0 },
                  hidden: { opacity: 0, y: 50 },
                }}
              >
                {value}
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </section>

      {/* Call to Action Section with Pulse Effect */}
      <section className="min-h-screen bg-blue-50 p-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="text-5xl font-semibold text-gray-800 mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            Join Us in Making a Difference
          </motion.h2>
          <motion.p
            className="text-lg leading-relaxed text-gray-700 mb-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Are you ready to take the next step? Together, we can transform aspirations into reality. 
            Become a part of our journey and help us shape a sustainable future for everyone.
          </motion.p>
          <motion.button
            className="mt-4 px-6 py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Involved
          </motion.button>
        </div>
      </section>
    </main>
  );
};

export default DifferencePage;
