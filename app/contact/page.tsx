"use client";

import { easeOut, motion } from "framer-motion";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  Twitter,
  ExternalLink,
  MessageCircle,
  Clock,
  Globe,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { formateDate, sendEmail } from "@/utils/sendEmail";
import { toast } from "sonner";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const ContactPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);

    try {
      const res = await sendEmail({
        data: {
          name: data.name,
          email: data.email,
          time: formateDate(new Date()),
          subject: data.subject,
          message: data.message,
        },
        templateId: "template_9q4m5of",
      });

      if (res) {
        toast("Message sent successfully!");
      } else {
        toast("Something went wrong.");
      }
    } catch (error) {
      toast("Something went wrong.");
    } finally {
      setIsSubmitting(false);
      reset();
    }
  };

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

  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      description: "Send me an email anytime",
      value: "iabdulwahab.edu@gmail.com",
      href: "mailto:iabdulwahab.edu@gmail.com",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Phone,
      title: "Phone",
      description: "Call me for urgent matters",
      value: "+923009016446",
      href: "tel:+923009016446",
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

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://www.linkedin.com/in/i-abdulwahab7/",
      color: "hover:text-blue-600",
      description: "Professional network",
    },
    {
      name: "GitHub",
      icon: Github,
      href: "https://github.com/iabdulwahab7",
      color: "hover:text-gray-900 dark:hover:text-white",
      description: "Code repositories",
    },
    {
      name: "Twitter",
      icon: Twitter,
      href: "https://twitter.com/iabdulwahab7",
      color: "hover:text-blue-400",
      description: "Latest updates",
    },
  ];

  const availability = [
    {
      icon: Clock,
      title: "Response Time",
      description: "24/7 Available",
    },
    {
      icon: Globe,
      title: "Timezone",
      description: "CET (UTC+5)",
    },
    {
      icon: MessageCircle,
      title: "Preferred Contact",
      description: "Email or LinkedIn",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Get In Touch
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              I'm always excited to discuss new opportunities, collaborate on
              interesting projects, or simply have a conversation about
              technology and innovation. Let's connect!
            </p>
          </motion.div>

          {/* Contact Methods */}
          <motion.div
            variants={itemVariants}
            className="grid md:grid-cols-3 gap-8 mb-16"
          >
            {contactMethods.map((method) => (
              <motion.a
                key={method.title}
                href={method.href}
                target={method.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  method.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
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

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Send Me a Message
                </h2>

                {isSubmitted && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 p-4 bg-green-100 dark:bg-green-900/30 border border-green-200 dark:border-green-700 rounded-lg"
                  >
                    <p className="text-green-800 dark:text-green-300 font-medium">
                      Thank you for your message! I'll get back to you soon.
                    </p>
                  </motion.div>
                )}

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        {...register("name")}
                        className="mt-1"
                        placeholder="Your name"
                      />
                      {errors.name && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.name.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        {...register("email")}
                        className="mt-1"
                        placeholder="your.email@example.com"
                      />
                      {errors.email && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.email.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      {...register("subject")}
                      className="mt-1"
                      placeholder="What's this about?"
                    />
                    {errors.subject && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.subject.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      {...register("message")}
                      rows={6}
                      className="mt-1"
                      placeholder="Tell me about your project, ask a question, or just say hello..."
                    />
                    {errors.message && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.message.message}
                      </p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full group"
                    size="lg"
                  >
                    {isSubmitting ? (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                      />
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </motion.div>

            {/* Additional Information */}
            <motion.div variants={itemVariants} className="space-y-8">
              {/* Availability */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                  Availability & Response
                </h3>
                <div className="space-y-4">
                  {availability.map((item) => (
                    <div
                      key={item.title}
                      className="flex items-center space-x-4"
                    >
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                        <item.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {item.title}
                        </p>
                        <p className="text-gray-900 dark:text-white font-medium">
                          {item.description}
                        </p>
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
                        <p className="text-gray-900 dark:text-white font-medium">
                          {social.name}
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {social.description}
                        </p>
                      </div>
                      <ExternalLink className="w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Quick Contact */}
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 rounded-2xl p-8 border border-blue-200 dark:border-blue-800">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  Let's Build Something Amazing Together
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Whether you have a project in mind, need technical
                  consultation, or just want to discuss the latest in AI and
                  software development, I'd love to hear from you.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Button asChild>
                    <a href="mailto:iabdulwahab.edu@gmail.com">
                      <Mail className="w-4 h-4 mr-2" />
                      Quick Email
                    </a>
                  </Button>
                  <Button variant="outline" asChild>
                    <a
                      href={"https://www.linkedin.com/in/i-abdulwahab7/"}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="w-4 h-4 mr-2" />
                      LinkedIn
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactPage;
