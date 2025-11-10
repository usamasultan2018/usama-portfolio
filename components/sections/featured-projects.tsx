'use client';

import { easeOut, motion } from 'framer-motion';
import { ArrowRight, ExternalLink, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { projects } from '@/lib/data/projects';
import Link from 'next/link';
import Image from 'next/image';

const FeaturedProjects = () => {
  const featuredProjects = projects.filter(project => project.featured);

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

  const getCategoryColor = (category: string) => {
    const colors = {
      AI: 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300',
      Health: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300',
      TV: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300',
      Web: 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300',
      Travel: 'bg-teal-100 text-teal-800 dark:bg-teal-900/30 dark:text-teal-300',
      Education: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-300',
    };
    return colors[category as keyof typeof colors] || colors.Web;
  };

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
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
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              A showcase of my most impactful projects, from AI-powered applications to 
              cross-platform solutions serving millions of users worldwide.
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
              >
                {/* Project Image */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(project.category)}`}>
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-8">
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-sm text-blue-600 dark:text-blue-400 font-medium mb-3">
                      {project.role}
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm">
                        +{project.technologies.length - 4} more
                      </span>
                    )}
                  </div>

                  {/* Links */}
                  <div className="flex flex-wrap gap-3">
                    {project.links.playStore && (
                      <Button asChild className="px-3 py-2 text-sm border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-md">
                        <a href={project.links.playStore} target="_blank" rel="noopener noreferrer">
                          <Play className="w-4 h-4 mr-2" />
                          Play Store
                        </a>
                      </Button>
                    )}
                    {project.links.ios && (
                      <Button asChild className="px-3 py-2 text-sm border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-md">
                        <a href={project.links.ios} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          App Store
                        </a>
                      </Button>
                    )}
                    {project.links.website && (
                      <Button asChild className="px-3 py-2 text-sm border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-md">
                        <a href={project.links.website} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Website
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* View All Projects Button */}
          <motion.div variants={itemVariants} className="text-center">
            <Link href="/projects">
              <Button className="group px-8 py-3 text-lg">
                View All Projects
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
