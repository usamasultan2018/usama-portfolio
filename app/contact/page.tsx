"use client";

import { easeOut, motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Github,
  Linkedin,
  MessageCircle,
  Clock,
  Globe,
} from "lucide-react";

const ContactPage = () => {
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

  // === Your primary contact methods ===
  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      description: "Send me an email anytime",
      value: "usama.khan2018@gmail.com",
      href: "mailto:usama.khan2018@gmail.com",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Phone,
      title: "Phone",
      description: "Call me for urgent matters",
      value: "+92-334-9158650",
      href: "tel:+92-334-9158650",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: MapPin,
      title: "Location",
      description: "Currently based in",
      value: "Peshawar, Pakistan",
      href: "https://maps.google.com/?q=Peshawar,Pakistan",
      color: "from-purple-500 to-pink-500",
    },
  ];

  // === Social links (Twitter removed, Email added) ===
  const socialLinks = [
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://www.linkedin.com/in/usama-sultan-b67972105",
      color: "hover:text-blue-600",
      description: "Professional network",
    },
    {
      name: "GitHub",
      icon: Github,
      href: "https://github.com/usamasultan2018",
      color: "hover:text-gray-900 dark:hover:text-white",
      description: "Code repositories",
    },
    {
      name: "Email",
      icon: Mail,
      href: "mailto:usama.khan2018@gmail.com",
      color: "hover:text-blue-500",
      description: "Direct email",
    },
  ];

  const availability = [
    { icon: Clock, title: "Response Time", description: "24/7 Available" },
    { icon: Globe, title: "Timezone", description: "PKT (UTC+5)" },
    { icon: MessageCircle, title: "Preferred Contact", description: "Email or LinkedIn" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div variants={containerVariants} initial="hidden" animate="visible">
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Get In Touch
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8" />
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              I'm always excited to discuss new opportunities, collaborate on interesting projects,
              or simply have a conversation about technology and innovation. Let's connect!
            </p>
          </motion.div>

          {/* Contact Methods */}
          <motion.div variants={itemVariants} className="grid md:grid-cols-3 gap-8 mb-16">
            {contactMethods.map((method) => (
              <motion.a
                key={method.title}
                href={method.href}
                target={method.href.startsWith("http") ? "_blank" : undefined}
                rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
                whileHover={{ y: -4 }}
                className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 group border border-gray-200 dark:border-gray-700"
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${method.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                >
                  <method.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {method.title}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm mb-3">
                  {method.description}
                </p>
                <p className="text-gray-900 dark:text-white font-medium group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {method.value}
                </p>
                <ExternalLink className="w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity mt-2" />
              </motion.a>
            ))}
          </motion.div>

          {/* Right column content only (Availability + Social) */}
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Availability */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                  Availability & Response
                </h3>
                <div className="space-y-4">
                  {availability.map((item) => (
                    <div key={item.title} className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                        <item.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{item.title}</p>
                        <p className="text-gray-900 dark:text-white font-medium">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                  Connect on Social Media
                </h3>
                <div className="space-y-4">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ x: 4 }}
                      className="flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors group"
                    >
                      <div className="w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                        <social.icon
                          className={`w-5 h-5 text-gray-600 dark:text-gray-400 transition-colors ${social.color}`}
                        />
                      </div>
                      <div className="flex-1">
                        <p className="text-gray-900 dark:text-white font-medium">{social.name}</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{social.description}</p>
                      </div>
                      <ExternalLink className="w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Empty right column to keep layout balanced after removing the form */}
            <motion.div variants={itemVariants} className="hidden lg:block" />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactPage;
