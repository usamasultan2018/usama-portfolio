'use client';

import { easeOut, motion } from 'framer-motion';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import emailjs from '@emailjs/browser';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

const Contact = () => {
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
      const res = await emailjs.send(
        process.env.NEXT_PUBLIC_SERVICE_ID!, // Your EmailJS Service ID
        process.env.NEXT_PUBLIC_TEMPLATE_ID!, // Your EmailJS Template ID
        {
          name: data.name,
          email: data.email,
          subject: data.subject,
          message: data.message,
        },
        process.env.NEXT_PUBLIC_PUBLIC_KEY! // Your EmailJS Public Key
      );

      if (res.status === 200) {
        toast.success("Message sent successfully!");
        setIsSubmitted(true);
        reset();
      } else {
        toast.error("Something went wrong while sending the message.");
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to send the message.");
    } finally {
      setIsSubmitting(false);
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

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'iabdulwahab.edu@gmail.com',
      href: 'mailto:iabdulwahab.edu@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+923009016446',
      href: 'tel:+923009016446',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Dubai, United Arab Emirates',
      href: 'https://maps.google.com/?q=Dubai,United Arab Emirates',
    },
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://www.linkedin.com/in/i-abdulwahab7/",
      color: "hover:text-blue-600",
    },
    {
      name: "GitHub",
      icon: Github,
      href: "https://github.com/iabdulwahab7",
      color: "hover:text-gray-900 dark:hover:text-white",
    },
    {
      name: "Twitter",
      icon: Twitter,
      href: "https://x.com/i_abdulwahab7",
      color: "hover:text-blue-400",
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
              I'm always open to discussing new opportunities, interesting projects, 
              or just having a conversation about technology and innovation.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div variants={itemVariants} className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Contact Information
                </h3>
                <div className="space-y-6">
                  {contactInfo.map((info) => (
                    <motion.a
                      key={info.label}
                      href={info.href}
                      target={info.href.startsWith('http') ? '_blank' : undefined}
                      rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
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

            <motion.div variants={itemVariants}>
              <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Send Me a Message
                </h3>

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
                      <Input id="name" {...register('name')} placeholder="Your name" />
                      {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                    </div>
                    
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" {...register('email')} placeholder="your.email@example.com" />
                      {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" {...register('subject')} placeholder="What's this about?" />
                    {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>}
                  </div>

                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" {...register('message')} rows={5} placeholder="Tell me about your project or just say hello..." />
                    {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
                  </div>

                  <Button type="submit" disabled={isSubmitting} className="w-full group">
                    {isSubmitting ? (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
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
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;