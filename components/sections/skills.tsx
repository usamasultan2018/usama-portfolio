'use client';

import { easeOut, motion } from 'framer-motion';
import { skills } from '@/lib/data/projects';
import { Code, Smartphone, Settings, Database, Brain, Wrench, Palette, Users } from 'lucide-react';

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: easeOut,
      },
    },
  };

  const skillCategories = [
    {
      title: 'Languages',
      icon: Code,
      skills: skills.languages,
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Mobile Development',
      icon: Smartphone,
      skills: skills.mobile,
      color: 'from-green-500 to-emerald-500',
    },
    {
      title: 'Architecture',
      icon: Settings,
      skills: skills.architecture,
      color: 'from-purple-500 to-violet-500',
    },
    {
      title: 'State Management',
      icon: Database,
      skills: skills.stateManagement,
      color: 'from-orange-500 to-red-500',
    },
    {
      title: 'AI & Services',
      icon: Brain,
      skills: [...skills.services, ...skills.ai],
      color: 'from-pink-500 to-rose-500',
    },
    {
      title: 'Tools & Design',
      icon: Wrench,
      skills: [...skills.tools, ...skills.design],
      color: 'from-indigo-500 to-blue-500',
    },
  ];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
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
              Skills & Expertise
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              A comprehensive toolkit built through years of hands-on experience in 
              cross-platform development, AI integration, and scalable architecture design.
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                variants={itemVariants}
                whileHover={{ y: -4 }}
                className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300"
              >
                {/* Category Header */}
                <div className="mb-6">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-4`}>
                    <category.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {category.title}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: skillIndex * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center space-x-3 group"
                    >
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${category.color} group-hover:scale-125 transition-transform`}></div>
                      <span className="text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                        {skill}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Management Skills */}
          <motion.div
            variants={itemVariants}
            className="mt-12 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 rounded-2xl p-8 border border-blue-200 dark:border-blue-800"
          >
            <div className="flex items-center mb-6">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center mr-4">
                <Users className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Project Management & Leadership
              </h3>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {skills.management.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white dark:bg-gray-800 px-4 py-3 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow"
                >
                  <span className="text-gray-700 dark:text-gray-300 font-medium">{skill}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
