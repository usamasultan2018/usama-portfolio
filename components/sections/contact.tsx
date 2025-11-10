'use client';

import { easeOut, motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink } from 'lucide-react';

const Contact = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: easeOut },
    },
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'usama.khan2018@gmail.com',
      href: 'mailto:usama.khan2018@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+92-334-9158650',
      href: 'tel:+923349158650',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Peshawar, Pakistan',
      href: 'https://maps.google.com/?q=Peshawar,Pakistan',
    },
  ];

  const socialLinks = [
    {
      name: "Email",
      icon: Mail,
      href: "mailto:usama.khan2018@gmail.com",
      color: "hover:text-red-600",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://www.linkedin.com/in/usama-sultan-b67972105/",
      color: "hover:text-blue-600",
    },
    {
      name: "GitHub",
      icon: Github,
      href: "https://github.com/usamasultan2018",
      color: "hover:text-gray-900 dark:hover:text-white",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Get In Touch
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              You can reach out to me directly through email or connect via LinkedIn or GitHub.
            </p>
          </motion.div>

          {/* Only Left Column (Contact Info + Social Links) */}
          <motion.div variants={itemVariants} className="space-y-12 max-w-xl mx-auto">

            {/* Contact Info */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Contact Information
              </h3>
              <div className="space-y-6">
                {contactInfo.map((info) => (
                  <motion.a
                    key={info.label}
                    href={info.href}
                    whileHover={{ x: 4 }}
                    className="flex items-center space-x-4 p-4 bg-white dark:bg-gray-900 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{info.label}</p>
                      <p className="text-gray-900 dark:text-white font-medium group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {info.value}
                      </p>
                    </div>
                    <ExternalLink className="w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity ml-auto" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                Connect With Me
              </h3>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-12 h-12 bg-white dark:bg-gray-900 rounded-lg shadow-sm hover:shadow-md flex items-center justify-center text-gray-600 dark:text-gray-400 transition-all duration-300 ${social.color}`}
                  >
                    <social.icon className="w-6 h-6" />
                  </motion.a>
                ))}
              </div>
            </div>

          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
