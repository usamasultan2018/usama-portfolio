'use client';

import { easeOut, motion } from 'framer-motion';
import { experience } from '@/lib/data/projects';
import { MapPin, Calendar, CheckCircle2 } from 'lucide-react';

const Experience = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: easeOut
      },
    },
  };

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Professional Experience
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              My journey through various roles, each contributing to my growth as a 
              software engineer and technical leader.
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500 hidden md:block"></div>

            {/* Experience Items */}
            <div className="space-y-12">
              {experience.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  variants={itemVariants}
                  className="relative"
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-6 w-4 h-4 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full border-4 border-white dark:border-gray-800 shadow-lg hidden md:block"></div>

                  {/* Content Card */}
                  <motion.div
                    whileHover={{ y: -4 }}
                    className="md:ml-20 bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
                  >
                    {/* Header */}
                    <div className="mb-6">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                          {exp.position}
                        </h3>
                        <div className="flex items-center text-blue-600 dark:text-blue-400 font-medium">
                          <Calendar className="w-4 h-4 mr-2" />
                          {exp.period}
                        </div>
                      </div>
                      
                      <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4">
                        <h4 className="text-xl font-semibold text-gray-700 dark:text-gray-300">
                          {exp.company}
                        </h4>
                        <div className="flex items-center text-gray-500 dark:text-gray-400">
                          <MapPin className="w-4 h-4 mr-2" />
                          {exp.location}
                        </div>
                      </div>
                      
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {exp.description}
                      </p>
                    </div>

                    {/* Achievements */}
                    <div>
                      <h5 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                        Key Achievements
                      </h5>
                      <div className="grid gap-3">
                        {exp.achievements.map((achievement, achievementIndex) => (
                          <motion.div
                            key={achievementIndex}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: achievementIndex * 0.1 }}
                            viewport={{ once: true }}
                            className="flex items-start space-x-3 group"
                          >
                            <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                            <span className="text-gray-600 dark:text-gray-300 leading-relaxed">
                              {achievement}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
