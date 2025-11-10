'use client';

import React from 'react';
import { easeOut, motion } from 'framer-motion';
import { ArrowRight, Download, Mail, MapPin, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: easeOut,
      },
    },
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-950 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          {/* Availability */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full text-blue-600 dark:text-blue-400 text-sm font-medium mb-6"
          >
            <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse" />
            Available for new opportunities
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6"
          >
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Usama Sultan
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.h2
            variants={itemVariants}
            className="text-xl sm:text-2xl lg:text-3xl text-gray-600 dark:text-gray-300 mb-8 max-w-4xl mx-auto"
          >
            <span className="text-blue-600 dark:text-blue-400 font-semibold">Flutter Developer</span>
            {' '}with 2+ years building production-ready cross‑platform apps for iOS, Android & Web.
          </motion.h2>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Specialized in state management, Firebase integration, and full‑stack development with Node.js. I deliver
            scalable applications with Clean Architecture, optimized performance, and elegant user experiences.
          </motion.p>

          {/* Location & Contact Info */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12 text-gray-600 dark:text-gray-300"
          >
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-blue-600" />
              <span>Peshawar, Pakistan</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-blue-600" />
              <a
                href="mailto:usama.khan2018@gmail.com"
                className="underline decoration-transparent hover:decoration-inherit hover:text-blue-700 dark:hover:text-blue-300"
              >
                usama.khan2018@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Github className="w-5 h-5 text-blue-600" />
              <Link
                href="https://github.com/usamasultan2018"
                target="_blank"
                rel="noreferrer noopener"
                className="underline decoration-transparent hover:decoration-inherit hover:text-blue-700 dark:hover:text-blue-300"
              >
                github.com/usamasultan2018
              </Link>
            </div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/projects">
                <Button className="group px-8 py-3 text-lg">
                  View My Work
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/resume">
                <Button className="px-8 py-3 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800">
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </Button>
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="https://github.com/usamasultan2018" target="_blank" rel="noreferrer noopener">
                <Button variant="secondary" className="px-8 py-3">
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-20 max-w-2xl mx-auto"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">15+</div>
              <div className="text-gray-600 dark:text-gray-300 mt-1">Mobile Apps</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">2+</div>
              <div className="text-gray-600 dark:text-gray-300 mt-1">Web Apps</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 dark:text-green-400">2+</div>
              <div className="text-gray-600 dark:text-gray-300 mt-1">Years Experience</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
