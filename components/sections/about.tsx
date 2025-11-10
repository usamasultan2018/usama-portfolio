'use client';

import { easeOut, motion } from 'framer-motion';
import { Code, Cpu, Smartphone, Zap } from 'lucide-react';

const About = () => {
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

  const features = [
    {
      icon: Smartphone,
      title: 'Cross-Platform Excellence',
      description: 'Expert in Flutter development for iOS, Android, and Web platforms.',
    },
    {
      icon: Cpu,
      title: 'AI Integration',
      description: 'Specialized in integrating OpenAI APIs, and building intelligent applications.',
    },
    {
      icon: Code,
      title: 'Clean Architecture',
      description: 'Advocate for clean code principles, SOLID design patterns, and scalable application architecture.',
    },
    {
      icon: Zap,
      title: 'Team Leadership',
      description: 'Experienced in leading development teams and mentoring junior developers in best practices.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
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
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              I am a passionate Flutter developer with over 2 years of experience building intuitive, high-performance mobile applications. With a strong foundation in both front-end and back-end development, I specialize in creating responsive, user-focused solutions that align with client goals and exceed expectations. I’m committed to continuous learning and staying current with emerging technologies, enabling me to bring innovation, efficiency, and quality to every project I work on.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Story */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                My Journey in Software Engineering
              </h3>
              
              <div className="prose prose-lg text-gray-600 dark:text-gray-300">
                <p>
                  With over 2 years of experience in mobile application development, I’ve had the opportunity to work on a variety of projects that combine performance, design, and functionality. My journey began with a deep interest in building seamless, user-centric mobile experiences, which led me to specialize in Flutter. Since then, I’ve contributed to scalable mobile apps across different industries, constantly pushing to refine my skills and embrace new technologies. I take pride in developing clean, maintainable code and delivering high-quality solutions that make a real impact.

                </p>
                
                <p>
                  At Metasens Technologies, I led the end-to-end development of the LeaseMate mobile application, taking full ownership of the project from architecture to deployment. In addition to managing the development process and coordinating tasks as team lead, I integrated OpenAI's APIs to power intelligent features within the app. This role allowed me to apply clean architecture principles, deliver a scalable and responsive Flutter solution, and incorporate cutting-edge AI to enhance user experience — all within a fast-paced, one-month timeline.
                </p>
                
                <p>
                  Currently deepening my expertise in AI integration within mobile applications, I'm passionate about the intersection of intelligent systems and user-centric design. With a strong foundation in Flutter and full-stack development, I'm driven to explore how emerging technologies like OpenAI can transform everyday apps into smarter, more adaptive solutions — always aiming to push the boundaries of what's possible in mobile development.
                </p>
              </div>
            </motion.div>

            {/* Right Column - Features */}
            <motion.div variants={itemVariants} className="space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                        <feature.icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        {feature.title}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
