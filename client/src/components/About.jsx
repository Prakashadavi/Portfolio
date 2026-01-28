import React from "react";
import { motion } from "framer-motion";
import { aboutInfo, assets } from "../assets/assets";

const About = () => {
  return (
    <section
      id="about"
      className="py-24 bg-dark-200 relative overflow-hidden"
    >
      {/* Decorative blur */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-purple/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-extrabold text-center mb-4 text-white"
        >
          About <span className="text-purple">Me</span>
        </motion.h2>

        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-20">
          A glimpse into my journey, mindset, and passion for building on the web
        </p>

        <div className="flex flex-col md:flex-row items-center gap-16">

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative md:w-1/2"
          >
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-purple/40 to-pink-500/20 blur-xl" />
            <img
              src={assets.profileImg}
              alt="Profile"
              className="relative rounded-3xl w-full object-cover ring-2 ring-purple/30"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="md:w-1/2"
          >
            <h3 className="text-2xl font-semibold text-white mb-6">
              My Journey
            </h3>

            <p className="text-gray-300 mb-6 leading-relaxed">
              I’m a passionate full-stack developer and an ECE graduate with a
              strong foundation in modern web development. I started with HTML,
              CSS, and JavaScript and gradually evolved into building full-stack
              applications.
            </p>

            <p className="text-gray-300 mb-12 leading-relaxed">
              I love solving real-world problems through code and continuously
              improving my skills by building projects and exploring new
              technologies.
            </p>

            {/* Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {aboutInfo.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={index}
                    whileHover={{ y: -8 }}
                    className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 hover:border-purple/40 transition-all"
                  >
                    <div className="text-purple text-4xl mb-4">
                      <Icon />
                    </div>

                    <h4 className="text-lg font-semibold text-white mb-2">
                      {item.title}
                    </h4>

                    <p className="text-gray-400 text-sm">
                      {item.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
