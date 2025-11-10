"use client";

import React from "react";
import { easeOut, motion } from "framer-motion";
import {
  Download,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Award,
  Briefcase,
  GraduationCap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { projects, skills, experience } from "@/lib/data/projects";

const ResumePage = () => {
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
        duration: 0.6,
        ease: easeOut,
      },
    },
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Resume
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
            <Button asChild className="group">
              <a href="/UsamaSultanCv.pdf" download>
                <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                Download PDF
              </a>
            </Button>

          </motion.div>

          {/* Resume Content */}
          <motion.div
            variants={itemVariants}
            className="bg-white dark:bg-gray-800 shadow-2xl rounded-2xl p-8 lg:p-12 border border-gray-200 dark:border-gray-700"
          >
            {/* Personal Info */}
            <div className="mb-12">
              <div className="text-center mb-8">
                <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
                  Usama Sultan
                </h1>
                <h2 className="text-xl text-blue-600 dark:text-blue-400 font-medium mb-6">
                  Software Engineer | Flutter Developer
                </h2>

                <div className="flex flex-wrap justify-center gap-6 text-gray-600 dark:text-gray-300">
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    <span>usama.khan2018@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    <span>+92-334-9158650</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>Peshawar, Pakistan</span>
                  </div>
                </div>
              </div>

              {/* Summary */}
              <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6 mb-8">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  Professional Summary
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Flutter Developer with 2+ years of experience building
                  production-ready cross-platform mobile applications for iOS,
                  Android, and Web. Specialized in state management, Firebase
                  integration, and full-stack development with Node.js.
                  Proven track record of delivering scalable applications with
                  clean architecture and optimized performance.
                </p>
              </div>
            </div>

            {/* Experience */}
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <Briefcase className="w-6 h-6 text-blue-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Professional Experience
                </h2>
              </div>

              <div className="space-y-8">
                {experience.map((exp) => (
                  <div
                    key={exp.id}
                    className="border-l-2 border-blue-200 dark:border-blue-800 pl-6 relative"
                  >
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-600 rounded-full"></div>

                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        {exp.position}
                      </h3>
                      <h4 className="text-lg font-semibold text-blue-600 dark:text-blue-400">
                        {exp.company}
                      </h4>
                      <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm mt-1">
                        <Calendar className="w-4 h-4 mr-2" />
                        {exp.period}
                        <span className="mx-2">•</span>
                        <MapPin className="w-4 h-4 mr-2" />
                        {exp.location}
                      </div>
                    </div>

                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {exp.description}
                    </p>

                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, index) => (
                        <li
                          key={index}
                          className="flex items-start text-gray-600 dark:text-gray-300"
                        >
                          <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <GraduationCap className="w-6 h-6 text-blue-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Education
                </h2>
              </div>
              <div className="space-y-6">
                {/* Bachelor Degree ONLY (CGPA 2.7 / 4.0) */}
                <div className="border-l-2 border-blue-200 dark:border-blue-800 pl-6 relative">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-600 rounded-full"></div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                    Bachelors of Science (Software Engineering)
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium">
                    City University of Science and Information Technology, Peshawar, Pakistan
                  </p>
                  <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
                    <span>2019 - 2023</span>
                    <span className="mx-2">•</span>
                    <Award className="w-4 h-4 mr-1" />
                    <span>CGPA: 2.7 / 4.0</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Skills */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Technical Skills
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    Languages & Frameworks
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {[...skills.languages, ...skills.mobile.slice(0, 2)].map(
                      (skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm"
                        >
                          {skill}
                        </span>
                      )
                    )}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    Technologies & Tools
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {[...skills.services.slice(0, 3), ...skills.tools.slice(0, 3)].map(
                      (skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded-full text-sm"
                        >
                          {skill}
                        </span>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Key Projects */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Key Projects
              </h2>

              <div className="space-y-4">
                {projects
                  .filter((p) => p.featured)
                  .map((project) => (
                    <div
                      key={project.id}
                      className="border border-gray-200 dark:border-gray-700 rounded-lg p-4"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                          {project.title}
                        </h3>
                        <span className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                          {project.role}
                        </span>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-1">
                        {project.technologies.slice(0, 4).map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded text-xs"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ResumePage;
