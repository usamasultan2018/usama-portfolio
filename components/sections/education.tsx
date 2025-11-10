'use client';

import { motion, easeOut } from 'framer-motion';
import { GraduationCap, Calendar, Award, MapPin } from 'lucide-react';

const Education = () => {
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

  const education = [
    {
      degree: 'Bachelors of Science (Software Engineering)',
      institution: 'City University of Science & Information Technology',
      location: 'Peshawar, Pakistan',
      period: '2019 - 2023',
      status: 'Completed',
      grade: 'CGPA: 2.70 / 4.00',
      description:
        'Comprehensive Software Engineering program covering software development, system design, and engineering fundamentals.',
      highlights: [
        'Software Engineering Principles',
        'System Design & Architecture',
        'Database Management Systems',
        'Web & Mobile Development',
      ],
    },
  ];

  return (
    <section id="education" className="py-20 bg-white dark:bg-gray-900">
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
              Education
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Continuous learning and academic excellence in software engineering and artificial intelligence.
            </p>
          </motion.div>

          {/* Education Cards */}
          <div className="grid lg:grid-cols-2 gap-8">
            {education.map((edu) => (
              <motion.div
                key={edu.degree}
                variants={itemVariants}
                whileHover={{ y: -4 }}
                className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300"
              >
                {/* Header */}
                <div className="mb-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                      <GraduationCap className="w-7 h-7 text-white" />
                    </div>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${edu.status === 'In Progress'
                        ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300'
                        : 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300'
                        }`}
                    >
                      {edu.status}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {edu.degree}
                  </h3>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-gray-600 dark:text-gray-300">
                      <GraduationCap className="w-4 h-4 mr-2" />
                      <span className="font-medium">{edu.institution}</span>
                    </div>

                    <div className="flex items-center text-gray-500 dark:text-gray-400">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span>{edu.location}</span>
                    </div>

                    <div className="flex items-center text-gray-500 dark:text-gray-400">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{edu.period}</span>
                    </div>

                    {edu.grade && (
                      <div className="flex items-center text-green-600 dark:text-green-400">
                        <Award className="w-4 h-4 mr-2" />
                        <span className="font-medium">{edu.grade}</span>
                      </div>
                    )}
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {edu.description}
                  </p>
                </div>

                {/* Highlights */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    Key Areas of Study
                  </h4>
                  <div className="grid grid-cols-1 gap-2">
                    {edu.highlights.map((highlight, highlightIndex) => (
                      <motion.div
                        key={highlight}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: highlightIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-center space-x-3 group"
                      >
                        <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full group-hover:scale-125 transition-transform"></div>
                        <span className="text-gray-600 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                          {highlight}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
